const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = (env, argv) => {
    return {
        devServer: {
            contentBase: './dist',
            open: true,
            hot: true
        },
        entry: {
            main: path.resolve(__dirname, './src/index.ts'),
        },
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: argv.mode === "production"
                ? '[name].[contenthash].bundle.js'
                : '[name].bundle.js',
        },
        resolve: {
            extensions: ['.tsx','.ts', '.js'],
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.css$/,
                    use: ["style-loader", "css-loader"]
                },
                {
                    test: /\.svg$/,
                    type: 'asset/inline',
                },
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'webpack Boilerplate',
                template: path.resolve(__dirname, './src/template.html'), // шаблон
                filename: 'index.html', // название выходного файла
            }),
            new CleanWebpackPlugin(),
        ],
    }
}