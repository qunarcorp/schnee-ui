import React from '@react';
import './index.scss';
import XRadio from '@components/XRadio/index';
import XRadioGroup from '@components/XRadioGroup/index';
import { configs, getValue } from '../../../common/utils/config';


class P extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            checkedValue: 'apple',
            configs
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
                {
                    this.state.configs.map(config => (
                        <div className="radio-col" key={config.type}>
                            <span className="demo-header">{config.type}</span>
                            <div className="demo-content radio-content">
                                {
                                    config.items.map((props, index) => (
                                        <div className="demo-nav__item" key={index}>
                                            <XRadio
                                                checked={getValue(props.checked)}
                                                disabled={getValue(props.disabled)}
                                                value={getValue(props.value)}
                                                text={getValue(props.text)}
                                                isRight={getValue(props.isRight)}
                                                color={getValue(props.color)}
                                                size={getValue(props.size)}
                                            />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
                <span className="demo-header">XRadioGroup</span>
                <div className="demo-content radio-col">
                    <XRadioGroup onChange={this.handleRadioChange}>
                        <div className="radio-content">
                            {
                                ['apple', 'house', 'cookie'].map(text => (
                                    <div key={text} className="demo-nav__item">
                                        <XRadio
                                            checked={text === 'apple' ? true : false}
                                            value={text}
                                            text={text}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </XRadioGroup>
                    <text>被选中的 radio 的 value: {this.state.checkedValue}</text>
                </div>
            </div>
        );
    }
}

export default P;
