import React from '@react';
import './index.scss';
import XLabel from '@components/XLabel/index';
import XCheckbox from '@components/XCheckbox/index';
import XRadio from '@components/XRadio/index';
import XButton from '@components/XButton/index';
import XSwitch from '@components/XSwitch/index';

class P extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="anu-col demo-page">
                <span className="demo-header">for 方式</span>
                <div className="demo-content">
                    <div className="label-item">
                        <div className="label">
                            <label for="wx_checkbox_label">wx下 checkbox</label>
                        </div>
                        <checkbox id="wx_checkbox_label"></checkbox>
                    </div>
                    <div className="label-item">
                        <div className="label">
                            <XLabel for="checkbox_label">checkbox label</XLabel>
                        </div>
                        <XCheckbox id="checkbox_label" />
                    </div>
                    <div className="label-item">
                        <div className="label">
                            <XLabel for="radio_label">radio label</XLabel>
                        </div>
                        <XRadio id="radio_label" />
                    </div>
                    <div className="label-item">
                        <div className="label">
                            <XLabel for="button_label">button label</XLabel>
                        </div>
                        <XButton id="button_label"></XButton>
                    </div>
                    <div className="label-item">
                        <div className="label">
                            <XLabel for="switch_label">switch label</XLabel>
                        </div>
                        <XSwitch id="switch_label" />
                    </div>
                </div>
                <span className="demo-header">子元素方式</span>
                <div className="demo-content">
                    <label>
                        <div className="label-item">
                            <div className="label">wx下 checkbox</div>
                            <checkbox></checkbox>
                        </div>
                    </label>
                    <XLabel>
                        <div className="label-item">
                            <div className="label">checkbox label</div>
                            <XCheckbox/>
                        </div>
                    </XLabel>
                    <XLabel>
                        <div className="label-item">
                            <div className="label">radio label</div>
                            <XRadio />
                        </div>
                    </XLabel>
                    <XLabel>
                        <div className="label-item">
                            <div className="label">button label</div>
                            <XButton></XButton>
                        </div>
                    </XLabel>
                    <XLabel>
                        <div className="label-item">
                            <div className="label">switch label</div>
                            <XSwitch />
                        </div>
                    </XLabel>
                </div>
            </div>
        );
    }
}

export default P;
