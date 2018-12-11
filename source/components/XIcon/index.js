import React from '@react';
// import PropTypes from 'prop-types';
import './index.scss';

class XIcon extends React.Component {

    render() {
        return <span className={`iconfont ${this.props.className}`} style={{ color: this.props.color, 'font-size': this.props.size }}>
            {this.props.content}
        </span>;
    }
}

export default XIcon;
