import React from '@react';
import './index.scss';
import XRadio from '@components/XRadio/index';
import XRadioGroup from '@components/XRadioGroup/index';

class P extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            checkedValue: 'apple'
        };

        this.handleRadioChange = this.handleRadioChange.bind(this);
    }

    handleRadioChange(e) {
        console.log('XRadio 发生改变，触发 XRadioGroup onChange 事件，被选中的 XRadio 的 value 为: ', e.detail.value);
        this.setState({ checkedValue: e.detail.value.toString() });
    }

    render() {
        return (
            <div className="anu-col demo-page">
                <span className="demo-header">checked</span>
                <div className="demo-content">
                    <XRadio checked={true} />
                    <XRadio checked={false} />
                </div>
                <span className="demo-header">disabled</span>
                <div className="demo-content">
                    <XRadio checked={true} disabled={true} />
                    <XRadio checked={false} disabled={true} />
                </div>
                <span className="demo-header">text</span>
                <div className="demo-content">
                    <XRadio text="apple" />
                </div>
                <span className="demo-header">isRight</span>
                <div className="demo-content">
                    <XRadio isRight={false} text="left" />
                    <XRadio isRight={true} text="right" />
                </div>
                <span className="demo-header">color</span>
                <div className="demo-content">
                    <XRadio checked={true} color="red" />
                    <XRadio checked={true} color="orange" />
                    <XRadio checked={true} color="blue" />
                </div>
                <span className="demo-header">size</span>
                <div className="demo-content">
                    <XRadio checked={true} size="small" />
                    <XRadio checked={true} size="default" />
                    <XRadio checked={true} size="large" />
                </div>
                <span className="demo-header">XRadioGroup</span>
                <div className="demo-content">
                    <XRadioGroup onChange={this.handleRadioChange}>
                        <XRadio checked={true} value="apple" text="apple" />
                        <XRadio checked={false} value="house" text="house" />
                        <XRadio checked={false} value="cookie" text="cookie" />
                    </XRadioGroup>
                    <text>被选中的 radio 的 value: {this.state.checkedValue}</text>
                </div>
            </div>
        );
    }
}

export default P;
