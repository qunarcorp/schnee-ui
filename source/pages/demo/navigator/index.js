import React from '@react';
import XNavigator from '@components/XNavigator/index';
import './index.scss';

class P extends React.Component {
    constructor() {
        super();
        this.state = {
            innerStyle: {
                borderRadius: 0,
                backgroundColor: '#fac450'
            },
            wrapperStyle: {
                borderRadius: 0
            }
        };
    }

    change(e) {
        // eslint-disable-next-line
        console.log('change value', e);
    }

    render() {
        return (
            <div className="anu-col demo-page">
                <span className="demo-header">基本用法</span>
                <div className="demo-content">
                    <XNavigator url="/pages/demo/button/index">Goto Button</XNavigator>
                </div>
            </div>
        );
    }
}

export default P;
