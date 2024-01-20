const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.ts", // 指定入口文件
  output: {
    filename: "bundle.js", // 打包后的文件名，一般叫bundle
    path: path.resolve(__dirname, "dist"), // resolve用于拼接字符串，dirname是nodejs的全局变量表示当前绝对路径
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // 规则生效的文件，正则表达式
        use: "ts-loader", // 要使用的loader
        exclude: /node_modules/, // 要排除的文件：node_modules下的其他依赖包
      },
    ],
  },
  // 使用的插件
  plugins: [
    new CleanWebpackPlugin(), // 每次npm run build都会清除之前dist的旧文件
    new HtmlWebpackPlugin({
      // 设置HTML根模板
      title: "ts测试",
      template: "./public/index.html",
    }),
  ],
  // 指定尝试解析模块时，Webpack 应该尝试哪些文件扩展名。（因为你会有导入ts，js的情况）
  resolve: { extensions: [".js", ".ts"] },

  // 设置npm start的服务器配置
  devServer: {
    port: 6324,
    hot: true, // 热更新其实是默认开启的
  },
};
