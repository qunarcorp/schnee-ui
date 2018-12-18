# ScrollView

图标。

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