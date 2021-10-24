import React from 'react'
import Vue from 'vue'

function randomCoding(){
    let arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    const len = 16

    return new Array(len).fill().map(_ => arr[Math.floor(Math.random() * 26)]).join()
}

export function uvc(component) {
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
                render: h => h(component)
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