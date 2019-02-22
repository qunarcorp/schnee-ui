import React from '@react';
import XProgress from '@components/XProgress/index';

import './index.scss';

class P extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="anu-col demo-page">
                <span className="demo-header">默认样式</span>
                <div className="demo-content">
                    <XProgress percent={10} />
                </div>
                <span className="demo-header">自定义进度条颜色</span>
                <div className="demo-content">
                    <XProgress percent={20} strokeColor="#52c41a" />
                </div>
                <span className="demo-header">不显示提示信息</span>
                <div className="demo-content">
                    <XProgress percent={40} showInfo={false} />
                </div>
                <span className="demo-header">自定义进度条高度</span>
                <div className="demo-content">
                    <XProgress percent={60} strokeHeight={20} />
                </div>
                <span className="demo-header">自定义进度条圆角大小</span>
                <div className="demo-content">
                    <XProgress percent={80} borderRadius={2} />
                </div>
            </div>
        );
    }
}

export default P;
