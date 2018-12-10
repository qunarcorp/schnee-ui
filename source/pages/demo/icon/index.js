import React from '@react';
import './index.scss';
import XIcon from "@components/XIcon/index";

class P extends React.Component {
    render() {
        return <div class="anu-col demo-page">
            <span className="demo-header">普通</span>
            <div className="demo-content">
                <XIcon content="&#xf077;"></XIcon>
                <XIcon content="&#xf078;"></XIcon>
            </div>
            <span className="demo-header">自定义className</span>
            <div className="demo-content">
                <XIcon className="iconfont-another" content="&#xf078;"></XIcon>
            </div>
            <span className="demo-header">自定义颜色和大小</span>
            <div className="demo-content">
                <XIcon color="red" size="100px" content="&#xf078;"></XIcon>
            </div>
        </div>;
    }
}

export default P;