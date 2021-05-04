const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: './src/index.js',
    watch: true,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },

    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 8666,
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './template.html', // 模板文件
          filename: 'index.html', // 注入脚本后文件的名称
          inject: 'body' , // 将脚本注入到body的底部 (head, true, body, false)
        }),
    ],
};

