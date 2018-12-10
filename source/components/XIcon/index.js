import React from '@react';
// import PropTypes from 'prop-types';
import './index.scss';

class XIcon extends React.Component {

    render() {
        console.log(this.props);
        return <div className={this.props.className}>{this.props.content}</div>
    }
}

XIcon.defaultProps = {
    className: 'iconfont'
};

export default XIcon;