const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  devServer: {
    hot: true,
  },
    // Disable TypeScript during development
  transpileDependencies: [
    'vue',
    // Add other dependencies you want to transpile
  ],
};
