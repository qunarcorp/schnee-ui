import React from '@react';
import './index.scss';
import XCheckbox from '@components/XCheckbox/index';
import XCheckboxGroup from '@components/XCheckboxGroup/index';

class P extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            checkedValues: ''
        }

        this.checkboxChange = this.checkboxChange.bind(this);
    }

    checkboxChange(e) {
        console.log('XCheckbox 发生改变，触发 XCheckboxGroup onChange 事件，被选中的 XCheckbox 的 value 为: ', e.detail.value);
        this.setState({ checkedValues: e.detail.value.toString() });
    }

    render() {
        return (
            <div class="anu-col demo-page">
                <span class="demo-header">checked</span>
                <div class="demo-content">
                    <XCheckbox checked={true} />
                    <XCheckbox checked={false} />
                </div>
                <span class="demo-header">disabled</span>
                <div class="demo-content">
                    <XCheckbox checked={true} disabled={true} />
                    <XCheckbox checked={false} disabled={true} />
                </div>
                <span class="demo-header">text</span>
                <div class="demo-content">
                    <XCheckbox text="apple" />
                </div>
                <span class="demo-header">isRight</span>
                <div class="demo-content">
                    <XCheckbox isRight={false} text="left" />
                    <XCheckbox isRight={true} text="right" />
                </div>
                <span class="demo-header">color</span>
                <div class="demo-content">
                    <XCheckbox checked={true} color="red" />
                    <XCheckbox checked={true} color="orange" />
                    <XCheckbox checked={true} color="blue" />
                </div>
                <span class="demo-header">size</span>
                <div class="demo-content">
                    <XCheckbox checked={true} size="small" />
                    <XCheckbox checked={true} size="default" />
                    <XCheckbox checked={true} size="large" />
                </div>
                <span class="demo-header">XCheckboxGroup</span>
                <div class="demo-content">
                    <XCheckboxGroup onChange={this.checkboxChange}>
                        <XCheckbox checked={true} value="apple" text="apple" />
                        <XCheckbox checked={false} value="house" text="house" />
                        <XCheckbox checked={false} value="cookie" text="cookie" />
                    </XCheckboxGroup>
                    <text>被选中的 checkbox 的 value: \n{this.state.checkedValues}</text>
                </div>
            </div>
        );
    }
}

export default P;
