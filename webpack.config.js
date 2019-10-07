const path = require('path');
const fs = require('fs');

const dirs = fs
    .readdirSync(path.resolve(__dirname, 'src/pages'));

const files = [];
dirs.forEach(dir => fs.readdirSync(path.resolve(__dirname, `src/pages/${dir}`))
    .filter(file => file.match(/.*\.scss/) || file.match(/.*\.pug/))
    .map(file => files.push(path.resolve(__dirname, `src/pages/${dir}/${file}`)))
);

module.exports = {
    output: {
        path: path.resolve(__dirname, 'dist')
    },
    entry: files,
    module: {
        rules: [
            {
                test: /\.(s*)css$/,
                use: [
                    {loader: "file-loader", options: {name: "pages/[name]/[name].css"}},
                    {loader: "extract-loader"},
                    {loader: "css-loader"},
                    {loader: "postcss-loader"},
                    {loader: "sass-loader"}
                ]
            },
            {
                test: /\.pug$/,
                use: [
                    {loader: "file-loader", options: {name: "pages/[name]/[name].html"}},
                    {loader: "extract-loader"},
                    {loader: "html-loader"},
                    {loader: "pug-html-loader"},
                ]
            },
            {
                test: /\.(png|jp(e*)g|svg|js)$/,
                use: [
                    {
                        loader: 'url-loader',
                    },
                ]
            }
        ]
    },
}
