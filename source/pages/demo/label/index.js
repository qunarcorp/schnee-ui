import React from '@react';
import './index.scss';
import XLabel from '@components/XLabel/index';
import XCheckbox from '@components/XCheckbox/index';
import XRadio from '@components/XRadio/index';
import XButton from '@components/XButton/index';
import XSwitch from '@components/XSwitch/index';

const labelStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
};

class P extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="anu-col demo-page">
                <label for="wx_label">wx label for 方式</label>
                <checkbox id="wx_label"></checkbox>
                <label>
                    <text>wx label 子元素</text>
                    <checkbox></checkbox>
                </label>
                <span className="demo-header">for 方式</span>
                <div className="demo-content">
                    <div className="flex">
                        <XLabel for="checkbox_label">checkbox label</XLabel>
                        <XCheckbox id="checkbox_label" />
                    </div>
                    <div className="flex">
                        <XLabel for="radio_label">radio label</XLabel>
                        <XRadio id="radio_label" />
                    </div>
                    <div>
                        <XLabel for="button_label"><text>button label</text></XLabel>
                        <div>
                            <XButton id="button_label">button test</XButton>
                        </div>
                    </div>
                    <div className="flex red">
                        <XLabel for="switch_label"><text>switch label</text></XLabel>
                        <XSwitch id="switch_label" />
                    </div>
                </div>
                <span className="demo-header">子元素方式</span>
                <div className="demo-content">
                    <div>
                        <XLabel style={labelStyle}>
                            <text>checkbox label</text>
                            <XCheckbox />
                        </XLabel>
                    </div>
                    <div>
                        <XLabel style={labelStyle}>
                            <text>radio label</text>
                            <XRadio />
                        </XLabel>
                    </div>
                    <div>
                        <XLabel>
                            <text>button label</text>
                            <XButton>button test</XButton>
                        </XLabel>
                    </div>
                    <div>
                        <XLabel style={labelStyle}>
                            <text>switch label</text>
                            <XSwitch />
                        </XLabel>
                    </div>
                </div>
            </div>
        );
    }
}

export default P;
