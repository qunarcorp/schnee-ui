import React from '@react';
import './index.scss';
import Checkbox from '@components/Checkbox/index';
import CheckboxGroup from '@components/CheckboxGroup/index';
import Label from '@components/Label/index';
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
        console.log('checkbox发生change事件，携带value值为：', e.value);
        // React.api.showModal({
        //     title: '提示',
        //     content: JSON.stringify(e.target.value)
        // });
    }

    render() {
        return (<div>
            <CheckboxGroup onChange={this.checkboxChange}>
                <Checkbox />
                <Checkbox value="USA" text="美国" />
                <div><Checkbox value="USA" text="美国" checked={true} /></div>
                <div><Checkbox value="USA" text="美国" size="large" /></div>
                <div><Checkbox value="USA" text="美国" size="small" /></div>
                <div><Checkbox value="USA" text="美国" isRight={false} /></div>
                <div><Checkbox value="USA" text="美国" color="red" /></div>
                <div><Checkbox value="USA" text="美国" color="red" disabled={true} /></div>
            </CheckboxGroup>
        </div>);
    }
}

export default P;
