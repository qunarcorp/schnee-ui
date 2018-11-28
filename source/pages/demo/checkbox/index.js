import React from '@react';
import './index.scss';
import Checkbox from '@components/Checkbox/index';
import Label from '@components/Label/index';
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

config = {
    navigationBarTextStyle: '#fff',
    navigationBarBackgroundColor: '#0088a4',
    navigationBarTitleText: 'checkbox demo',
    backgroundColor: '#eeeeee',
    backgroundTextStyle: 'light'
};

checkboxChange(e) { 
    // eslint-disable-next-line
    console.log('checkbox发生change事件，携带value值为：', e.target);
    // React.api.showModal({
    //     title: '提示',
    //     content: JSON.stringify(e.target.value)
    // });
}

   

    render() {
        return (
            <div>
               <checkbox-group onClick={this.checkboxChange} class="col">
                    {this.state.items.map(function(item) {
                        return ( 
                          <Label>
                            
                            <Checkbox checked={item.checked}  value={item.name}/>
                            <text>{item.value}</text>
                          
                          </Label>
                          
                        );
                    })}
                </checkbox-group>
            </div>
        );
    }
}

export default P;

// <div>
//   <label target={item.name}>{item.value}</label>
//       <input
//           type="checkbox"
//           value={item.name}
//           checked={item.checked}
//           id={item.name}
//       />
//       </div>
