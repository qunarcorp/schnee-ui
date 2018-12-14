import React from '@react';
import './index.scss';
import XCheckbox from '@components/XCheckbox/index';
import XCheckboxGroup from '@components/XCheckboxGroup/index';
import { configs, getValue } from '../../../common/utils/config';

class P extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            checkedValues: 'apple',
            configs
        };

        this.checkboxChange = this.checkboxChange.bind(this);
    }

    checkboxChange(e) {
        console.log('XCheckbox 发生改变，触发 XCheckboxGroup onChange 事件，被选中的 XCheckbox 的 value 为: ', e.detail.value);
        this.setState({ checkedValues: e.detail.value.toString() });
    }

    render() {
        return (
            <div className="anu-col demo-page">
                {
                    this.state.configs.map(config => (
                        <div className="checkbox-col" key={config.type}>
                            <span className="demo-header">{config.type}</span>
                            <div className="demo-content checkbox-content">
                                {
                                    config.items.map((props, index) => (
                                        <div className="demo-nav__item" key={index}>
                                            <XCheckbox
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
                <span className="demo-header">XCheckboxGroup</span>
                <div className="demo-content checkbox-col">
                    <XCheckboxGroup onChange={this.checkboxChange}>
                        <div className="checkbox-content">
                            {
                                ['apple', 'house', 'cookie'].map(text => (
                                    <div key={text} className="demo-nav__item">
                                        <XCheckbox
                                            checked={text === 'apple' ? true : false}
                                            value={text}
                                            text={text}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </XCheckboxGroup>
                    <text>被选中的 checkbox 的 values: </text>
                    <text>{this.state.checkedValues}</text>
                </div>
            </div>
        );
    }
}

export default P;
