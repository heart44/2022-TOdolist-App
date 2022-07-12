const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/todo': {
        target: 'http://localhost' //192.168.0.57로 줘도 됨
      }
    }
  }
});