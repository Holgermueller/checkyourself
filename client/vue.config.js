const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: {
      "^/api/": {
        target: "http://localhost:8080",
        pathRewrite: { "^/api/": "/api/" },
        changeOrigin: true,
      },
    },
  },
});
