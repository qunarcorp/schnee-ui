# Swiper

轮播图。

| 属性名 | 类型 | 必填 | 默认值 | 说明 | 微信 | 支付宝 | 百度 | 快应用 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| style | Object | false | Swiper 的样式 | true | true | true | true |
| indicatorDots | Boolean | false | false | 是否显示面板指示点 | true | true | true | true |
| indicatorColor | Color | false | rgba(0, 0, 0, .3) | 指示点颜色 | true | true | true | true |
| indicatorActiveColor | Color | false | #000000 | 当前选中的指示点颜色 | true | true | true | true |
| autoplay | Boolean | false | false | 是否自动切换 | true | true | true | true |
| current | Number | false | 0 | 当前所在滑块的 index | true | true | true | true |
| interval | Number | false | 5000 | 自动切换时间间隔 | true | true | true | true |
| duration | Number | false | 500 | 滑动动画时长 | true | true | true | true |
| circular | Boolean | false | false | 是否采用衔接滑动 | true | true | true | true |
| vertical | Boolean | false | false | 滑动方向是否为纵向 | true | true | true | true |
| onChange | EventHandle | false | | current 改变时会触发 change 事件，event.detail = {current: current, source: source} | true | true | true | true |
| onAnimationfinish | EventHandle | false | | 动画结束时会触发 animationfinish 事件，event.detail 同上 | true | true | true | true |