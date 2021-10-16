/*
 * @Descripttion: 
 * @Author: 林舒恒
 * @Date: 2021-10-10 14:04:45
 * @LastEditors: 林舒恒
 * @LastEditTime: 2021-10-16 14:45:24
 */
import React from 'react'
import Vue from 'vue'

function randomCoding(){
    //创建26个字母数组
    let arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let idvalue ='';
    const n = 16;//这个值可以改变的，对应的生成多少个字母，根据自己需求所改
    for(let i=0;i<n;i++){
       idvalue+=arr[Math.floor(Math.random()*26)];
    }
    return idvalue;
}

export function uvc(test) {
    return class VueComponent extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                uuid: randomCoding()
            }
        }
        componentDidMount() {
            new Vue({
                el: `.${this.state.uuid}`,
                render: h => h(test)
            })
        }
        render() {
            return React.createElement("div", {
                className: this.state.uuid
            });
        }
    };
}
export function uvi(component) {
    Vue.use(component)
}