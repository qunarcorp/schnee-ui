import React from '@react';
import './index.scss';
import AnuRadio from '@components/AnuRadio/index';
import RadioGroup from '@components/RadioGroup/index';
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
          <RadioGroup class="radio-group" onChange={this.radioChange}>
              <radio checked={true} />
              <radio />
              <radio disabled />
              <AnuRadio />
              <AnuRadio value="USA" text="美国" />
              <AnuRadio value="USA" text="美国" checked={true} />
              <AnuRadio value="USA" text="美国" size="large" />
              <AnuRadio value="USA" text="美国" size="small" />
              <AnuRadio value="USA" text="美国" isRight={false} />
              <AnuRadio value="USA" text="美国" color="red" />
              <AnuRadio value="USA" text="美国" color="red" disabled={true} />
              <AnuRadio value="USA" text="美国" color="red" disabled={true} checked={true} />
          </RadioGroup>
      </div>
        );
    }
}

export default P;
