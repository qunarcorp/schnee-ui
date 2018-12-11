import React from '@react';
import './index.scss';
import XCheckbox from '@components/XCheckbox/index';
import XCheckboxGroup from '@components/XCheckboxGroup/index';
class P extends React.Component {
    constructor() {
        super();
        this.state = {
            items: [
                {
                    name: 'USA',
                    value: '美国'
                }, {
                    name: 'CHN',
                    value: '中国',
                    checked: 'true'
                }, {
                    name: 'BRA',
                    value: '巴西'
                }, {
                    name: 'JPN',
                    value: '日本'
                }, {
                    name: 'ENG',
                    value: '英国'
                }, {
                    name: 'TUR',
                    value: '法国'
                }
            ]
        };
    }

    config = {
        navigationBarTextStyle: '#fff',
        navigationBarBackgroundColor: '#0088a4',
        navigationBarTitleText: 'checkbox demo',
        backgroundColor: '#eeeeee',
        backgroundTextStyle: 'light'
    };

    checkboxChange(e) {
        // eslint-disable-next-line
        console.log('checkbox发生change事件，携带value值为：', e.detail.value);
        // React.api.showModal({
        //     title: '提示',
        //     content: JSON.stringify(e.target.value)
        // });
    }

    render() {
        return (<div>
            <XCheckboxGroup onChange={this.checkboxChange}>
                <checkbox />
                <XCheckbox />
                <XCheckbox value="USA" text="美国" />
                <div><XCheckbox value="USA" text="美国" checked={true} /></div>
                <div><XCheckbox value="USA" text="美国" size="large" /></div>
                <div><XCheckbox value="USA" text="美国" size="small" /></div>
                <div><XCheckbox value="USA" text="美国" isRight={false} /></div>
                <div><XCheckbox value="USA" text="美国" color="red" /></div>
                <div><XCheckbox value="USA" text="美国" color="red" disabled={true} /></div>
                <XCheckbox value="USA" text="美国" color="red" disabled={true} checked={true} />
            </XCheckboxGroup>
        </div>);
    }
}

export default P;
