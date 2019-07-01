import React from '@react';
import './index.scss';

class P extends React.Component {

    constructor(props) {
        super(props);
        const ROOT_PATH = '/pages/demo';
        this.state = {
            list: 'button,checkbox,icon,label,navigator,picker,progress,radio,richText,scrollView,slider,swiper,switch,webView,dialog,calendar'
                .split(',')
                .map(function(name) {
                    return {
                        url: `${ROOT_PATH}/${name}/index`,
                        name
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
        return (
            <div className="anu-col demo-page">
                <span className="demo-header">Demo</span>
                {this.state.list.map(function(item, index) {
                    return (<div key={index} className="demo-list__item" onClick={this.goto.bind(this, item.url)}>
                        <text>{item.name}</text>
                    </div>);
                }, this)}
            </div>
        );
    }
}

export default P;
