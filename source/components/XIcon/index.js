import React from '@react';
import './index.scss';

class XIcon extends React.Component {

    render() {
        return <text className={`iconfont ${this.props.className}`} style={{ color: this.props.color, 'font-size': this.props.size }}>
            {this.props.content}
        </text>;
    }
}

export default XIcon;
