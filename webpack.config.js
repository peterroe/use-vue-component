/*
 * @Descripttion: 
 * @Author: 林舒恒
 * @Date: 2021-10-11 18:29:11
 * @LastEditors: 林舒恒
 * @LastEditTime: 2021-10-15 22:53:51
 */
const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    mode: 'production'
}