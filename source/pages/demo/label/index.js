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
            <div class="col">
                <div class="col">
                    <text>微信原生 label</text>
                    <div>
                        <label for="wx_radio">wx radio</label>
                        <radio id="wx_radio"></radio>
                    </div>
                    <div>
                        <label for="wx_checkbox">wx checkbox</label>
                        <checkbox id="wx_checkbox"></checkbox>
                    </div>
                    <div>
                        <label for="wx_button">wx button</label>
                        <button id="wx_button">wx_button</button>
                    </div>
                    <div>
                        <label for="wx_switch">wx switch</label>
                        <switch id="wx_switch"></switch>
                    </div>
                </div>
                <div class="col">
                    <text>for 方式</text>
                    <div>
                        <XLabel for="checkbox_label"><text>checkbox label</text></XLabel>
                        <XCheckbox id="checkbox_label" />
                    </div>
                    <div>
                        <XLabel for="radio_label"><text>radio label</text></XLabel>
                        <XRadio id="radio_label" />
                    </div>
                    <div>
                        <XLabel for="button_label"><text>button label</text></XLabel>
                        <XButton id="button_label">button test</XButton>
                    </div>
                    <div>
                        <XLabel for="switch_label"><text>switch label</text></XLabel>
                        <XSwitch id="switch_label" />
                    </div>
                </div>
                <div class="col">
                    <text>子元素方式</text>
                    <div>
                        <XLabel>
                            <text>checkbox label</text>
                            <XCheckbox />
                        </XLabel>
                    </div>
                    <div>
                        <XLabel>
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
                        <XLabel>
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
