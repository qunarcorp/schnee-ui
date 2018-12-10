import React from '@react';
import './index.scss';
import XIcon from '@components/XIcon/index';

class P extends React.Component {
    render() {
        return <div>
            <XIcon content="&#xf077;"></XIcon>
            <div className="iconfont">&#xf077;</div>
        </div>;
    }
}

export default P;