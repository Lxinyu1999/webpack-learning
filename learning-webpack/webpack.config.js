const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // 需要使用的插件要导入
module.exports = {
  entry: "./src/index.js", //文件入口
  output: {
    filename: "bundle.js", // 输出的打包文件的名称
    path: path.resolve(__dirname, "dist"), // 输出到当前目录下的"dist"文件夹下
  },
  module: {
    // 在module：{rules:[]} 里面进行loader配置，每个loader是一个对象{}
    rules: [
      {
        // 每个loader分为两部分,test表示匹配所有loader的作用对象
        test: /\.css$/, // 正则表达式，匹配所有的 .css 文件
        use: [
          // 注意，loader的编译顺序是从下到上！
          "style-loader", // 将编译好的css导入到页面里面
          "css-loader", // 将css文件解析成commonjs模块编译到js里面
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],

  // 开发服务器配置
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"), // Webpack Dev Server 从哪个目录提供静态文件
    },
    compress: true, // 启用 gzip 压缩
    port: 9000, // 指定端口号，例如 9000
    open: true, // 自动打开浏览器
    hot: true, // 启用热更新 (HMR)
    historyApiFallback: true, // 当使用 HTML5 History API 时，任意的 404 响应都可能需要被替代为 index.html
  },
};
