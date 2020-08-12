module.exports = {
  // productionSourceMap: false,
  devServer: {
    public: "10.0.0.119:8080",
    proxy: {
      // 匹配 api 前缀
      "/api": {
        target: "http://localhost:6003/",
        changeOrigin: true,
        ws: true,
        //logLevel: 'debug',
        // 把 api 前缀去掉
        // pathRewrite: {
        //   '^/api': ''
        // }
      },
      "/public": {
        target: "http://localhost:6003/",
        changeOrigin: true,
        ws: true,
      },
    },
    disableHostCheck: true,
    overlay: {
      warnings: false,
      errors: false,
    },
  },
  configureWebpack: {
    devtool: "source-map",
  },
  // chainWebpack: (config) => {
  //   // new Loader for ts
  //   config.module
  //     .rule("typescript")
  //     .test(/\.ts$/)
  //     .use("ts-loader")
  //     .loader("ts-loader")
  //     .end();
  // },
};
