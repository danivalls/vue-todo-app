module.exports = {
  css: {
    loaderOptions: {
      scss: {
        data: `
            @import "@/scss/variables.scss";
            @import "@/scss/mixins.scss";
            @import "@/scss/animations.scss";
            @import "@/scss/app.scss";
          `
      }
    }
  }
};
