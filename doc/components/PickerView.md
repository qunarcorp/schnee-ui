## PickerView

嵌入页面的滚动选择器。其中只可放置 PickerViewColumn组件，其它节点无效。

| 属性名 | 类型 | 必填 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| value | Array | 否 | [0, 0, 0]  | 数组中的数字依次表示 PickerView 内的 PickerViewColumn 选择的第几项（下标从 0 开始），数字大于 PickerViewColumn 可选项长度时，选择最后一项。 |
| indicator-style | Object | 否 |   | 设置选择器中间选中框的样式 |
| mask-style | Object | 否 |   | 设置蒙层的样式 |
| style | Object | 否 |   | 设置滚动区域样式 |
| bindchange | function | 否 |   | 滚动选择时触发change事件 |
| bindpickstart | function | 否 |   | 当滚动选择开始时候触发事件 |
| bindpickend | function | 否 |   | 当滚动选择结束时候触发事件 |

## 说明

PickerView 是参照微信小程序的 picker-view 组件实现的 但是因为快应用平台下样式是局部起作用，所以 indicator-class 和 mask-class 接口无法实现。

## 示例代码

```html
import React from '@react';
import XPickerView from '@components/XPickerView/index';
import XPickerViewColumn from '@components/XPickerViewColumn/index';

import './index.scss';

const date = new Date()
const years = []
const months = []
const days = []

for (let i = 1990; i <= date.getFullYear(); i++) {
  years.push(i)
}

for (let i = 1 ; i <= 12; i++) {
  months.push(i)
}

for (let i = 1 ; i <= 31; i++) {
  days.push(i)
}


class P extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      years: years,
      year: date.getFullYear(),
      months: months,
      month: 2,
      days: days,
      day: 2,
      value: [1, 2, 3],
    };
  }

  changeValue() {
    console.log('changeValue');
    this.setState({
      value: [6, 5, 9]
    });
  }

  render() {
    return (
      <div >
        <div class="picker-wrapper">
          <XPickerView
            indicator-style={{
              height: '60px'
            }}
            style={{
              height: '445px'
            }}
            mask-style={{
              backgroundColor: 'yellow',
              border: '1px solid red'
            }}
            value={this.state.value}
            bindpickstart={(item) => {
              console.log('bindpickstart', item);
            }}
            bindchange={(item) => {
              console.log('bindchange', item);
            }}
            bindpickend={(item) => {
              console.log('bindpickend', item);
            }}
          >
            <XPickerViewColumn >
              {
                this.state.years.map((item, idx) => {
                  return <text key={idx}
                  style={{height: '60px'}}
                  >{item}年</text>
                })
              }
            </XPickerViewColumn>
            <XPickerViewColumn >
              {
                this.state.months.map((item, idx) => {
                  return <text key={idx}
                  style={{height: '60px'}}
                  >{item}月</text>
                })
              }
            </XPickerViewColumn>
            <XPickerViewColumn >
              {
                this.state.days.map((item, idx) => {
                  return <text key={idx}
                  style={{height: '60px'}}
                   >{item}日</text>
                })
              }
            </XPickerViewColumn>
          </XPickerView>

          <div onClick={() => {
            this.changeValue()
          }}>changeValue</div>

        </div>

      </div>
    );
  }
}

export default P;

```