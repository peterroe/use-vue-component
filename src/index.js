/*
 * @Descripttion: 
 * @Author: 林舒恒
 * @Date: 2021-10-10 14:04:45
 * @LastEditors: 林舒恒
 * @LastEditTime: 2021-10-13 23:08:18
 */
import React from 'react'
import Vue from 'vue'
export default function(test) {
    return class Highlight extends React.Component {
        constructor(props) {
            super(props)
        }
        componentDidMount() {
            new Vue({
                el: `.uid`,
                render: h => h(test)
            })
        }
        render() {
            return React.createElement("span", {
                    className: "ap"
                }, React.createElement("span", {
                    className: "uid"
                }));
        }
    };
}
export function installv(component) {
    Vue.use(component)
}