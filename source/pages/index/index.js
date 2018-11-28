import React from '@react';
import './index.scss';
/*eslint-disable*/

class P extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    title: 'Swiper',
                    url: '/pages/demo/native/swiper1/index'
                }
            ]
        };
    }

    goto(url) {
        if (url){
            React.api.navigateTo({ url });
        } else {
            React.api.showModal({
                title: '提示',
                content: '该部分仅展示，无具体功能!',
                showCancel: false
            });
        }
    }

    render() {
        console.log(this);
        return (
            <div class="page">
                <div class="anu-block">
                    {this.state.list.map(function(item) {
                        return (<div class="anu-item" onTap={this.goto.bind(this, item.url)}>
                            <text>{item.title}</text>
                        </div>);
                    })}
                </div>
            </div>
        );
    }
}

export default P;