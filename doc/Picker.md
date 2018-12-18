### Picker

#### 普通选择器 mode = selector  

| 属性     | 类型          | 默认值 | 说明                                             |
| -------- | ------------- | ------ |------------------------------------------------ |
| range     | Array / Object Array        |    []    | mode 为 selector 或 multiSelector 时 range 有效                            |
| dataMap    | Object |   { id: 'name', items: 'sub' }    |  当 range 是一个 Object Array 时，通过 dataMap 来指定 Object 中 key 的值作为选择器显示内容| 
|value  | Number     |   0     | selected 的值表示选择了 data 中的第几个（下标从 0 开始）                          |
| onChange     | function      |        | selected 改变时触发 change 事件                           |
| onCancel | function      |        | bindcancel	EventHandle		取消选择或点遮罩层收起 picker 时触发 |

#### 多列选择器 mode = multiSelector  

| 属性     | 类型          | 默认值 | 说明                                             |
| -------- | ------------- | ------ |------------------------------------------------ |
| range     | Array / Object Array        |    []    | mode 为 selector 或 multiSelector 时 range 有效                            |
| dataMap    | Object |   { id: 'name', items: 'sub' }    |  当 range 是一个 Object Array 时，通过 dataMap 来指定 Object 中 id 的值作为选择器显示内容, [{ name: '无脊柱动物', sub: [{name: '扁性动物',sub: [{name: '猪肉绦虫'},{name: '吸血虫'}]}]]| 
|value  | Array     |   []     | selected 的值表示选择了 data 中的第几个（下标从 0 开始）                          |
| onChange     | function      |        | selected 改变时触发 change 事件                           |
| onCancel | function      |        | bindcancel	EventHandle		取消选择或点遮罩层收起 picker 时触发 |


#### 日期选择器 | 时间选择器  type = date  | time

| 属性     | 类型          | 默认值 | 说明                                             |
| -------- | ------------- | ------ |------------------------------------------------ |
| value     | String        |    当前时间   |           time 格式： hh:mm ; date 格式： YYYY-MM-DD                  |
| start    | String |       | 开始  time 格式： hh:mm ; date 格式： YYYY-MM-DD| 
|end  | String     |      | 结束  time 格式： hh:mm ; date 格式： YYYY-MM-DD                        |
| onChange     | function      |        | selected 改变时触发 change 事件                           |
| onCancel | function      |        | bindcancel	EventHandle		取消选择或点遮罩层收起 picker 时触发 |

#### 省市区选择器  mode = region

| 属性     | 类型          | 默认值 | 说明                                             |
| -------- | ------------- | ------ |------------------------------------------------ |
| value     | Array        |    []   |           表示选中的省市区，默认选中每一列的第一个值                  |
| onChange     | function      |        | selected 改变时触发 change 事件                           |
| onCancel | function      |        | bindcancel	EventHandle		取消选择或点遮罩层收起 picker 时触发 |




示例代码

```javascript
import React from '@react';
import XPicker from '@components/XPicker/index';

class P extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      index: 0,
      multiIndex: ['无脊柱动物', '扁性动物', '猪肉绦虫'],
      date: '2016-09-01',
      time: '12:01',
      region: ['广东省', '广州市', '海珠区'],
      multiArray: [
        {
          name: '无脊柱动物',
          sub: [
            {
              name: '扁性动物',
              sub: [
                {
                  name: '猪肉绦虫'
                },
                {
                  name: '吸血虫'
                }
              ]
            },
            {
              name: '线形动物',
              sub: [
                {
                  name: '蛔虫'
                }
              ]
            }
          ]
        },
        {
          name: '脊柱动物',
          sub: [
            {
              name: '鱼',
              sub: [
                {
                  name: '鲫鱼'
                },
                {
                  name: '带鱼'
                }
              ]
            }
          ]
        }
      ],
      list1: [
        'iphone',
        '华为',
        '小米',
        '三星',
        '魅族',
        '锤子',
        'oppo',
        'vivo',
        'iphone',
        '华为',
        '小米',
        '三星',
        '魅族',
        '锤子',
        'oppo',
        'vivo'
      ]
    };
  }

  showPicker() {
    console.log('showPicker');
    this.setState({
      show: true
    });
  }

  close() {
    console.log('close');
    this.setState({
      show: false
    });
  }

  change(e) {
    console.log('...', e);
    this.setState({
      index: e.value
    });
  }

  bindMultiPickerChange(e) {
    this.setState({
      multiIndex: e.value
    });
  }

  bindDateChange(e) {
    console.log('...bindDateChange', e);
    this.setState({
      date: e.value
    });
  }

  bindTimeChange(e) {
    this.setState({
      time: e.value
    })
  }

  bindRegionChange(e) {
    this.setState({
      region: e.value
    })
  }

  render() {
    return (
      <div class="picker-demo">
        <div class="picker-title">
          <text class="title-text">基本</text>
        </div>
        <div class="item-li">
          <text class="item-li-detail">一列</text>
          <XPicker
            value={0}
            onCancel={this.close.bind(this)}
            onChange={this.change.bind(this)}
            range={this.state.list1}
          >
            <text>当前选择：{this.state.list1[this.state.index]}</text>
          </XPicker>
        </div>
        <div class="item-li">
          <text class="item-li-detail">多列</text>
          <XPicker
            mode="multiSelector"
            value={this.state.multiIndex}
            onCancel={this.close.bind(this)}
            onChange={this.bindMultiPickerChange.bind(this)}
            range={this.state.multiArray}
          >
            <text>
              当前选择：{this.state.multiIndex[0]}, {this.state.multiIndex[1]},{' '}
              {this.state.multiIndex[2]}
            </text>
          </XPicker>
        </div>
        <div class="item-li">
          <text class="item-li-detail">日期选择器</text>
          <XPicker
            mode="date"
            value={this.state.date}
            start="2015-09-01"
            end="2017-09-01"
            onCancel={this.close.bind(this)}
            onChange={this.bindDateChange.bind(this)}
          >
            <text>当前选择：{this.state.date}</text>
          </XPicker>
        </div>
        <div class="item-li">
          <text class="item-li-detail">时间选择器</text>
          <XPicker
            mode="time"
            value={this.state.time}
            start="09:01"
            end="21:01"
            onCancel={this.close.bind(this)}
            onChange={this.bindTimeChange.bind(this)}
          >
            <text>当前选择：{this.state.time}</text>
          </XPicker>
        </div>
        <div class="item-li">
          <text class="item-li-detail">省市区选择器</text>
          <XPicker
            mode="region"
            value={this.state.region}
            onCancel={this.close.bind(this)}
            onChange={this.bindRegionChange.bind(this)}
          >
            <text>当前选择：{this.state.region[0]}, {this.state.region[1]},{this.state.region[2]}</text>
          </XPicker>
        </div>
      </div>
    );
  }
}

export default P;


```