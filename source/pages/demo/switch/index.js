import React from '@react';
import XSwitch from '@components/XSwitch/index';
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
                <span className="demo-header">选项</span>
                <div className="demo-content">
                    <XSwitch checked={false} onChange={this.change.bind(this)} />
                </div>
                <span className="demo-header">不可用</span>
                <div className="demo-content anu-row">
                    <div className="demo-nav__item"><XSwitch checked={false} disabled={true} onChange={this.change.bind(this)} /></div>
                    <div className="demo-nav__item"><XSwitch checked={true} disabled={true} onChange={this.change.bind(this)} /></div>
                </div>
                <span className="demo-header">自定义</span>
                <div className="demo-content">
                    <XSwitch checked={false} color="red" innerStyle={this.state.innerStyle} wrapperStyle={this.state.wrapperStyle} />
                </div>
            </div>
        );
    }
}

export default P;
