// https://umijs.org/config/
// import pageRoutes from './router.config';
// import config from 'umi_base_config';
import webpackPlugin from './plugin.config';
import theme from './theme.config';

const config = {
  // add for transfer to umi
  plugins: [
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: {
          hmr: true,
        },
        targets: {
          ie: 9,
        },
        dynamicImport: {
          loadingComponent: './components/PageLoading/index',
        },
        history: 'hash',
        dll: {
          include: ['dva', 'dva/router', 'dva/saga', 'dva/fetch'],
          exclude: ['@babel/runtime'],
        },
        hardSource: true,
      },
    ],
    
  ],
  
  proxy: {
    '/api/v1': {
      target: "http://127.0.0.1:7101",
      changeOrigin: true,
      pathRewrite: { "^/api/v1": "/api/v1" }
    },
  },
  define: {
    APP_TYPE: process.env.APP_TYPE || '',
  },
  
  
  ignoreMomentLocale: true,  // 忽略 moment 的 locale 文件，用于减少尺寸。
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  disableRedirectHoist: true,
  

  cssnano: {
    mergeRules: false,
  },

  // extra configuration for egg
  runtimePublicPath: true, // 值为 true 时使用 HTML 里指定的 window.publicPath。
  hash: true,
  outputPath: '../public',
  // 配置后会生成 manifest.json，option 传给 https://www.npmjs.com/package/webpack-manifest-plugin。 比如：
  manifest: {
    fileName: '../../config/manifest.json',
    publicPath: '',
  },
  extraBabelPlugins: [
    [
      "import", {
        libraryName: 'u_webant',
        libraryDirectory: 'lib',
        style: true,
        camel2DashComponentName: false,
      }
    ]
  ]
};

config.chainWebpack = webpackPlugin;
config.theme = theme;
config.proxy = {
  '/api/v1': {
    target: "http://127.0.0.1:7107",
    changeOrigin: true,
    pathRewrite: { "^/api/v1": "/api/v1" }
  },
};

console.log(`config: ${ JSON.stringify(config)}`);



export default config;