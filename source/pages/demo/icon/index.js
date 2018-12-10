import React from '@react';
import './index.scss';
import XIcon from "@components/XIcon/index";

class P extends React.Component {
    render() {
        return <div class="anu-col">
            <span className="anu-header">普通</span>
            <XIcon content="&#xf077;"></XIcon>
            <XIcon content="&#xf078;"></XIcon>
            <span className="anu-header">自定义className</span>
            <XIcon className="iconfont-another" content="&#xf078;"></XIcon>
            <span className="anu-header">自定义颜色和大小</span>
            <XIcon color="red" size="100px" content="&#xf078;"></XIcon>
        </div>;
    }
}

export default P;