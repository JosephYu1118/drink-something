module.exports = {
  publicPath: '',
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "@/assets/variables.scss";',
      },
    },
  },
};
