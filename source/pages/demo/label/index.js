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
                <div className="demo-content label-content">
                    <div className="label-item">
                        <div className="label">
                            <label for="wx_checkbox_label">wx下 checkbox</label>
                        </div>
                        <checkbox id="wx_checkbox_label"></checkbox>
                    </div>
                    <div className="label-item">
                        <div className="label">
                            <XLabel for="checkbox_label"><text>checkbox label</text></XLabel>
                        </div>
                        <XCheckbox id="checkbox_label" />
                    </div>
                    <div className="label-item">
                        <div className="label">
                            <XLabel for="radio_label"><text>radio label</text></XLabel>
                        </div>
                        <XRadio id="radio_label" />
                    </div>
                    <div className="label-item">
                        <div className="label">
                            <XLabel for="button_label"><text>button label</text></XLabel>
                        </div>
                        <div className="label-control"><XButton id="button_label">Label</XButton></div>
                    </div>
                    <div className="label-item">
                        <div className="label">
                            <XLabel for="switch_label"><text>switch label</text></XLabel>
                        </div>
                        <XSwitch id="switch_label" />
                    </div>
                </div>
                <span className="demo-header">子元素方式</span>
                <div className="demo-content label-content">
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
                            <div className="label-control"><XButton>Label</XButton></div>
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
