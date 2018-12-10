### Picker

#### 普通选择器 type = selector  | multiSelector

| 属性     | 类型          | 默认值 | 说明                                             |
| -------- | ------------- | ------ |------------------------------------------------ |
| data     | Array / Object Array        |    []    | type 为 selector 或 multiSelector 时 data 有效                            |
| dataMap    | Object |   { id: 'name', items: 'sub' }    |  当 data 是一个 Object Array 时，通过 dataMap 来指定 Object 中 key 的值作为选择器显示内容| 
|seleced  | Array     |   [0 ]     | selected 的值表示选择了 data 中的第几个（下标从 0 开始）                          |
| onChange     | function      |        | selected 改变时触发 change 事件                           |
| onCancel | function      |        | bindcancel	EventHandle		取消选择或点遮罩层收起 picker 时触发 |


```javascript
import React from '@react';
import XPicker from '@components/XPicker/index';
import cnCity from '../../../common/utils/cnCity';
class P extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      controlValue: 12,
      picker_show: false,
      multi_picker_show: false,
      isOpen: false,
      picker_value: '',
      isTimeOpen: false,
      date: '2018-10-10',
      time: '09:09',
      picker_group: [
        {
          name: 'Item1'
        },
        {
          name: 'Item2 (Disabled)',
          disabled: true
        },
        {
          name: 'Item3'
        },
        {
          name: 'Item4'
        },
        {
          name: 'Item5'
        }
      ]
      ,
      multi_group: [
          {
            name: '北京',
            sub: [
              {
                name: '北京市',
                sub:[{
                  name: '东城区'
                },{
                  name: '西城区'
                }]
              }
            ]
          },
          {
            name: '天津',
            sub: [
              {
                name: '天津市',
                sub:[{
                  name: '东城区1'
                },{
                  name: '西城区1'
                }]
              }
            ]
          }
      ]


    };
  }

  click(){
    this.setState({
      picker_show: true
    });
  };

  handleChange(selected) {
    let value = '';
    console.log('==================',selected)
   
    this.setState({
      picker_value: value,
      picker_show: false,
      multi_picker_show: false,
      isOpen: false,
      isTimeOpen: false
    });
  }

  handelCanel(e) {
    this.setState({ picker_show: false, multi_picker_show: false, isOpen: false })
  }

  multiClick() {
    this.setState({ multi_picker_show: true })
  }

  dateClick() {
    this.setState({ isOpen: true})
  }

  timeClick() {
    this.setState({ isTimeOpen: true})
  }

  render() {
    return (
      <div className="anu-col">
        <button onClick={this.click.bind(this)}>点击</button>
        <button onClick={this.multiClick.bind(this)}>多列点击</button>
        <button onClick={this.dateClick.bind(this)}>日期点击</button>
        <button onClick={this.timeClick.bind(this)}>时间点击</button>
        <XPicker
          onChange={this.handleChange.bind(this)}
          range={this.state.picker_group}
          show={this.state.picker_show}
          onCancel={this.handelCanel.bind(this)}
        />
        <XPicker
          type="multiSelector"
          onChange={this.handleChange.bind(this)}
          range={cnCity}
          show={this.state.multi_picker_show}
          onCancel={this.handelCanel.bind(this)}
        />
         <XPicker
          type="date"
          value={this.state.date}
          onChange={this.handleChange.bind(this)}
          start='2017-1-1'
          show={this.state.isOpen}
          onCancel={this.handelCanel.bind(this)}
        />
         <XPicker
          type="time"
          value={this.state.time}
          onChange={this.handleChange.bind(this)}
          show={this.state.isTimeOpen}
          onCancel={this.handelCanel.bind(this)}
        />
      </div>
    );
  }
}

export default P;




```

#### 普通选择器 type = date  | time

| 属性     | 类型          | 默认值 | 说明                                             |
| -------- | ------------- | ------ |------------------------------------------------ |
| value     | String        |    当前时间   |           time 格式： hh:mm ; date 格式： YYYY-MM-DD                  |
| start    | String |       | 开始| 
|end  | String     |      | 结束                         |
| onChange     | function      |        | selected 改变时触发 change 事件                           |
| onCancel | function      |        | bindcancel	EventHandle		取消选择或点遮罩层收起 picker 时触发 |

### Switch

| 属性     | 类型          | 默认值 | 说明                                             |
| -------- | ------------- | ------ |------------------------------------------------ |
| checked     | Boolean        |    false    | 是否选中                 |
| disabled    | Boolean        |    false    | 是否禁用                 |
| onChange    |EventHandle        |       | checked 改变时触发 change 事件，event.detail={ value:checked}              |
| color   |Color       |  #2998F9     | switch 的颜色，同 css 的 color            |
| checkColor   |Color       |  #C1C1C1     | 未选中时的背景颜色            |
| wrapperStyle|Object       |  {}    | 外层样式覆盖入口           |
| innerStyle|Object       |  {}    | 内层样式覆盖入口          |


### Slider


| 属性     | 类型          | 默认值 | 说明                                             |
| -------- | ------------- | ------ |------------------------------------------------ |
| min     | Number        |    0    | 最小值                 |
| max     | Number        |    100    | 最大值                 |
| step     | Number        |    1    | 步长，取值必须大于 0，并且可被(max - min)整除                 |
| disabled    | Boolean        |    false    | 是否禁用                 |
| value    | Number       |  0    | 当前取值                |

