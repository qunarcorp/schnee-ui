import React from '@react';
// import './index.scss';
import Radio from '@components/Radio/index';
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
        console.log('radio发生change事件，携带value值为：', e.value);
    }

    render() {
        return (
          <div class="container">
          <RadioGroup class="radio-group" onChange={this.radioChange}>
              {this.state.items.map(function(item) {
                  return (
                    <div style={{marginBottom: '18px'}}>
                        {/* <label class="radio">
                          {item.value}
                      </label> */}
                      <Radio
                       value={item.value}
                       checked={item.checked}
                      />
                    </div>
                  );
              })}
          </RadioGroup>
      </div>
        );
    }
}

export default P;
