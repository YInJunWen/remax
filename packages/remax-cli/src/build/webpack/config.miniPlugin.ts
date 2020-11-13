import * as path from 'path';
import * as webpack from 'webpack';
import Config from 'webpack-chain';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import WebpackBar from 'webpackbar';
import { Options } from '@remax/types';
import VirtualModulesPlugin from 'webpack-virtual-modules';
import { slash } from '@remax/shared';
import ejs from 'ejs';
import { moduleMatcher, targetExtensions } from '../../extensions';
import hostComponent from 'babel-plugin-remax-host-component';
import * as TurboRender from 'babel-plugin-remax-turbo-render';
import * as Lifecycle from 'babel-plugin-remax-lifecycle';
import fixRegeneratorRuntime from 'babel-plugin-remax-regenerator-runtime';
import Store from '@remax/build-store';
import { addCSSRule, cssConfig, RuleConfig } from './config/css';
import baseConfig from './baseConfig';
import fs from 'fs';
import CopyPlugin from 'copy-webpack-plugin';
import * as RemixPlugins from './plugins';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import Builder from '../Builder';
import NativeEntry from '../entries/NativeEntry';

function resolveBabelConfig(options: Options) {
  if (fs.existsSync(path.join(options.cwd, 'babel.config.js'))) {
    return path.join(options.cwd, 'babel.config.js');
  }
  return false;
}

export default function webpackConfig(builder: Builder): webpack.Configuration {
  const config = new Config();

  baseConfig(config, builder);

  const meta = builder.api.getMeta();

  const { entries, mainEntry } = builder.entryCollection;

  if (mainEntry) {
    config.entry(mainEntry.name).add(mainEntry.filename);
  }

  entries.forEach(e => {
    config.plugin('webpack-virtual-modules' + e.name).use(e.virtualModule);
    config.entry(e.name).add(e.virtualPath);
  });

  config.devtool(false);

  config.resolve.extensions.merge(targetExtensions(builder.target));

  config.output.filename('[name].js');
  config.output.globalObject(meta.global);
  config.output.publicPath('/');
  config.output.libraryTarget('commonjs2');
  config.optimization.runtimeChunk({ name: 'runtime' });
  config.optimization.splitChunks({
    cacheGroups: {
      remixVendors: {
        name: 'remix-vendors',
        test: moduleMatcher,
        chunks: 'initial',
        minChunks: 2,
        minSize: 0,
      },
    },
  });
  config.optimization.minimize(false);

  if (!builder.options.dynamicPages) {
    const options = {
      isHostComponentPackage: (pkg: string) => pkg.startsWith('@alipay/remix'),
    };
    // turbo pages
    config.module
      .rule('turbo-page')
      .pre()
      .test(moduleMatcher)
      .exclude.add(/react-reconciler/)
      .end()
      .use('turbo-page-render')
      .loader('babel')
      .options({
        usePlugins: [TurboRender.extractTemplate(options)],
        reactPreset: false,
      })
      .end()
      .use('turbo-page-preprocess')
      .loader('babel')
      .options({
        usePlugins: [TurboRender.preprocess(options)],
        reactPreset: false,
      });
  }

  config.module
    .rule('js')
    .test(moduleMatcher)
    .exclude.add(/react-reconciler/)
    .end()
    .use('babel')
    .loader('babel')
    .options({
      babelrc: false,
      configFile: resolveBabelConfig(builder.options),
      usePlugins: [
        Lifecycle.page({
          test: file => {
            const importer = slash(file);
            const root = builder.projectPath.srcDir();
            return importer.startsWith(root);
          },
        }),
        hostComponent({
          target: builder.target,
          hostComponents: Store.registeredHostComponents,
          skipHostComponents: Store.skipHostComponents,
          skipProps: [TurboRender.LEAF, TurboRender.ENTRY],
          includeProps: [TurboRender.TEMPLATE_ID],
        }),
        fixRegeneratorRuntime(),
      ],
      reactPreset: true,
      api: builder.api,
      compact: process.env.NODE_ENV === 'production',
    });

  config.module.rule('native-component').test(moduleMatcher).use('native-component').loader('nativeComponent').options({
    builder,
  });

  cssConfig(config, builder.options, false);

  config.module
    .rule('image')
    .test(/\.(png|jpe?g|gif|svg)$/i)
    .use('file')
    .loader(require.resolve('file-loader'));

  config.module
    .rule('font')
    .test(/\.(ttf|eot|woff|woff2)$/i)
    .use('file')
    .loader(require.resolve('file-loader'));

  const runtimeOptionsTemplate = fs.readFileSync(
    path.resolve(__dirname, '../../../template/app-runtime-options.js.ejs'),
    'utf-8'
  );
  const runtimeOptionsPath = slash('node_modules/@remix/apply-runtime-options.js');

  entries.forEach(entry => {
    if (!(entry instanceof NativeEntry)) {
      config.entry(entry.name).prepend('@remix/apply-runtime-options');
    }
  });

  const runtimeOptions = {
    pxToRpx: builder.options.pxToRpx,
    debug: !!process.env.remix_DEBUG,
    platform: builder.target,
    pluginFiles: builder.api.getRuntimePluginFiles(),
    hostComponents: '[]',
    pageEvents: '{}',
    appEvents: '[]',
  };

  const virtualModules = new VirtualModulesPlugin({
    [runtimeOptionsPath]: ejs.render(runtimeOptionsTemplate, runtimeOptions, { debug: false }),
  });
  config.plugin('webpack-virtual-modules').use(virtualModules);

  if (fs.existsSync(builder.projectPath.publicDir())) {
    config
      .plugin('webpack-copy-plugin')
      .use(CopyPlugin, [[{ from: builder.projectPath.publicDir(), to: builder.projectPath.outputDir() }]]);
  }

  config.externals([
    {
      '/__remix_runtime_options__': '/__remix_runtime_options__',
    },
  ]);

  config.plugin('webpackbar').use(WebpackBar);
  config.plugin('mini-css-extract-plugin').use(MiniCssExtractPlugin, [{ filename: `[name]${meta.style}` }]);
  config.plugin('remix-optimize-entries-plugin').use(RemixPlugins.OptimizeEntries, [meta]);
  config.plugin('remix-plugin-asset-plugin').use(RemixPlugins.PluginAsset, [builder]);
  config.plugin('remix-page-asset-plugin').use(RemixPlugins.PageAsset, [builder]);
  config.plugin('remix-runtime-options-plugin').use(RemixPlugins.RuntimeOptions, [builder]);
  config.plugin('remix-coverage-ignore-plugin').use(RemixPlugins.CoverageIgnore);
  config.plugin('remix-component-asset-plugin').use(RemixPlugins.ComponentAsset, [builder]);
  config.plugin('remix-native-asset-plugin').use(RemixPlugins.NativeAsset, [builder]);

  if (builder.options.analyze) {
    config.plugin('webpack-bundle-analyzer').use(BundleAnalyzerPlugin);
  }

  const context = {
    config,
    webpack,
    addCSSRule: (ruleConfig: RuleConfig) => {
      addCSSRule(config, builder.options, false, ruleConfig);
    },
  };

  if (typeof builder.options.configWebpack === 'function') {
    builder.options.configWebpack(context);
  }

  builder.api.configWebpack(context);

  return config.toConfig();
}