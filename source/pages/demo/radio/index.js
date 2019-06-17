import React from '@react';
import './index.scss';
import XRadio from '@components/XRadio/index';
// import XRadioGroup from '@components/XRadioGroup/index';
import { configs, getValue } from '../../../common/utils/config';


class P extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            checkedValue: 'apple',
            configs,
            env: process.env.ANU_ENV
        };

        this.handleRadioChange = this.handleRadioChange.bind(this);
    }

    handleRadioChange(e) {
        // eslint-disable-next-line
        console.log('XRadio 发生改变，触发 XRadioGroup onChange 事件，被选中的 XRadio 的 value 为: ', e.detail.value);
        this.setState({ checkedValue: e.detail.value.toString() });
    }

    // handleChangeCardType(e) {
    //     console.log('wiwiwiwi',e.detail.value);
    // }

    render() {
        return (
            <div className="anu-col demo-page">
                {
                    this.state.env === 'wx' ?
                        <div className="radio-col">
                            <span className="demo-header">与微信原生对比</span>
                            <div className="demo-content radio-content">
                                <XRadio />
                                <radio />
                            </div>
                        </div> :
                        null
                }
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
                    <radio-group onChange={this.handleRadioChange}>
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
                    </radio-group>
                    <text>被选中的 radio 的 value: {this.state.checkedValue}</text>
                </div>

                <div className="demo-content radio-col">
                    <radio-group class="mpw-dock-content" onChange={this.handleChangeCardType.bind(this)} >
                        { ['apple', 'house', 'cookie'].map(function(item) {
                            return (
                                <div class="mp-spec-item">
                                    <div class="mp-spec-text">
                                        <label for={'passenger_' + item}>
                                            <text class="txt">{item}</text>
                                        </label>
                                    </div>
                                    <radio class="mp-spec-radio" id={'passenger_' +item} value={item}  />
                                </div>
                            );
                        })}
                    </radio-group>
                </div>
            </div>
        );
    }
}

export default P;
