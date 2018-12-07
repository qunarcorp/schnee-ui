import React from '@react';
import './index.scss';
import XRadio from '@components/XRadio/index';
import XRadioGroup from '@components/XRadioGroup/index';
class P extends React.Component {
    constructor() {
        super();
        this.state = {
            items: [
                { name: 'USA', value: '美国' },
                { name: 'CHN', value: '中国', checked: 'true' },
                { name: 'BRA', value: '巴西' },
                { name: 'JPN', value: '日本' },
                { name: 'ENG', value: '英国' },
                { name: 'TUR', value: '法国' }
            ]
        };
    }

    radioChange(e) {
        // eslint-disable-next-line
        console.log('radio发生change事件，携带value值为：', e.detail.value);
    }

    render() {
        return (
          <div class="container">
          <XRadioGroup class="radio-group" onChange={this.radioChange}>
              <radio checked={true} />
              <radio />
              <radio disabled />
              <XRadio />
              <XRadio value="USA" text="美国" />
              <XRadio value="USA" text="美国" checked={true} />
              <XRadio value="USA" text="美国" size="large" />
              <XRadio value="USA" text="美国" size="small" />
              <XRadio value="USA" text="美国" isRight={false} />
              <XRadio value="USA" text="美国" color="red" />
              <XRadio value="USA" text="美国" color="red" disabled={true} />
              <XRadio value="USA" text="美国" color="red" disabled={true} checked={true} />
          </XRadioGroup>
      </div>
        );
    }
}

export default P;
