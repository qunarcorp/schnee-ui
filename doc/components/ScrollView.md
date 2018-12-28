# ScrollView

仅支持 H5，可滚动视图区域。

| 属性名 | 类型 | 必填 | 默认值 | 说明 | 微信 | 支付宝 | 百度 | 快应用 | H5 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| scrollX | Boolean | false | false | 允许横向滚动 | false | false | false | false | true |
| scrollY | Boolean | false | false | 允许纵向滚动 | false | false | false | false | true |
| upperThreshold | Number | false | 50 | 距顶部/左边多远时，触发 onScrollToUpper 事件 | false | false | false | false | true |
| lowerThreshold | Number | false | 50 | 距底部/右边多远时，触发 onScrollToLower 事件 | false | false | false | false | true |
| scrollTop | Number | false |  | 设置竖向滚动条位置 | false | false | false | false | true |
| scrollLeft | Number | false |  | 设置横向滚动条位置 | false | false | false | false | true |
| scrollIntoView | String | false |  | 值应为某子元素id（id不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素 | false | false | false | false | true |
| scrollWithAnimation | Number | false | false | 在设置滚动条位置时使用动画过渡 | false | false | false | false | true |
| onScrollToUpper | Function | false |  | 滚动到顶部/左边，会触发 onScrollToUpper 事件 | false | false | false | false | true |
| onScrollToLower | Function | false |  | 滚动到底部/右边，会触发 onScrollToLower 事件 | false | false | false | false | true |
| onScroll | Function | false |  | 滚动时触发，event.detail = {scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY} | false | false | false | false | true |

## 示例

基本用法：

```js
import React from '@react';
import XScrollView from '@components/XScrollView/index';
class P extends React.Component {
  render() {
    return (
      <XScrollView scrollY={true} style={{ height: '300px' }} scrollTop={500}
        scrollIntoView="anchor-0"
        onScroll={(e) => console.log(e.target.scrollTop)}
        scrollWithAnimation={false}
        onScrollToUpper={() => console.log('onScrollToUpper')}
        onScrollToLower={() => console.log('onScrollToLower')}
      >
        <div>
          <h1>这是内容区域</h2>
          <p>示例段落</p>
          <p id="anchor-0">选中段落</p>
          <p>示例段落</p>
        </div>
      </XScrollView>
  );
  }
}

export default P;
```

横向：

```js
import React from '@react';
import XScrollView from '@components/XScrollView/index';

class P extends React.Component {
  render() {
    return (
      <div>
        <XScrollView scrollX={true} style={{ width: '500px' }} scrollTop={500}
          scrollIntoView="anchor-1"
          onScroll={(e) => console.dir(e.target.scrollTop)}
          scrollWithAnimation={false}
          onScrollToUpper={() => console.log('onScrollToUpper')}
          onScrollToLower={() => console.log('onScrollToLower')}
        >
          <div style={{ width: '1000px', height: '300px' }}>
            <p><span>示例段落</span><span id="anchor-1">选中段落</span><span>示例段落</span></p>
          </div>
        </XScrollView>
      </div>
    );
  }
}

export default P;
```