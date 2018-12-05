import React from '@react';
import './index.scss';
/*eslint-disable*/

class P extends React.Component {

    constructor(props) {
        super(props);
        const ROOT_PATH = '/pages/demo';
        this.state = {
            list: 'button,checkbox,label,picker,progress,radio,slider,swiper,switch'
                .split(',')
                .map(function(name) {
                    return {
                        url: `${ROOT_PATH}/${name}/index`,
                        name: name
                    };
                })
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
                            <text>{item.name}</text>
                        </div>);
                    })}
                </div>
            </div>
        );
    }
}

export default P;
