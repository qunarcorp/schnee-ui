import React from '@react';
import './index.scss';

class P extends React.Component {

    constructor(props) {
        super(props);
        const ROOT_PATH = '/pages/demo';
        this.state = {
            list: 'button,checkbox,icon,label,picker1,progress,radio,slider,swiper,switch'
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
        var self = this;
        return (
            <div className="anu-col demo-page">
                <span className="demo-header">Demo</span>
                {this.state.list.map(function(item) {
                    return (<div className="demo-list__item" onClick={self.goto.bind(self, item.url)}>
                        <text>{item.name}</text>
                    </div>);
                })}
            </div>
        );
    }
}

export default P;
