# Slider

滑动选择器，这是一个受控组件。

属性名 | 类型 | 默认值 | 说明 | 微信 | 支付宝 | 百度 | 快应用 |
--- | --- | --- | --- | --- | --- | --- | --- | --- |
min | Number | 0 | 最小值 |  - | - | - | √ |
max | Number | 100 | 最大值 |  - | - | - | √ |
step | Number | 1 | 步长，取值必须大于 0，并且可被(max - min)整除 |  - | - | - | √ |
disabled | Boolean | false | 是否禁用 |  - | - | - | √ |
value | Number | 0 | 当前取值 |  - | - | - | √ |
activeColor | Color | #1aad19 | 已选择的颜色 |  - | - | - | √ |
backgroundColor | Color | #e9e9e9 | 背景条的颜色 |  - | - | - | √ |
block-size | Number | 28 | 滑块的大小，取值范围为 12 - 28 | - | - | - | √ |
block-color | Color | #ffffff | 滑块的颜色 | - | - | - | √ |
show-value | Boolean | false | 是否显示当前 value |  - | - | - | √ |
bindchange | EventHandle |  | 完成一次拖动后触发的事件，event.detail = {value: value} |  - | - | - | - |
bindchanging | EventHandle |  | 拖动过程中触发的事件，event.detail = {value: value} | - | - | - | - |

<p><img style="max-height: 500px" src="../assets/images/components/slider.png" /></p>

## 示例

基本用法：

```js
import React from '@react';
import XSlider from '@components/XSlider/index';
class P extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(idx, value) {
    this.setState({
      value: value,
    });
  }
  render() {
    return (
      <XSlider
        onChange={this.handleChange}
        value={this.state.slider0}
      />
    );
  }
}
export default P;
```
自定义滑块大小：

```js
<XSlider
  onChange={this.handleChange}
  value={this.state.slider1}
  block-size={16}
/>
```

Disabled：


```js
<XSlider
  onChange={this.handleChange}
  value={this.state.slider2}
  step={20}
  disabled={true}
/>
```

不显示当前 value：

```js
<XSlider
  onChange={this.handleChange}
  value={this.state.slider3}
  show-value={true}
  showValue={false}
/>
```

步长：

```js
<XSlider
  onChange={this.handleChange}
  step={40}
  value={this.state.slider4}
/>
```

最大值和最小值：

```js
<XSlider
  onChange={this.handleChange}
  min={40}
  max={120}
  step={40}
  value={this.state.slider4}
/>
```

自定义样式：

```js
<XSlider
  onChange={this.handleChange}
  value={this.state.slider5}
  backgroundColor="#00BCD4"
  block-color="#f00"
  activeColor="#dadb1a"
/>
```