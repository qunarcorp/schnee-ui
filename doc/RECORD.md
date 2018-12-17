# 问题记录

## 快应用

1. 快应用 flex-direction 默认为 row; 小程序 flex-direction 默认为 column。所有 display: flex 的地方需要显式声明 flex-direction
2. 快应用 border-radius 不支持百分比形式，所以需要指定确定的大小。正常为 width/2，但是在百度/微信小程序中，border-radius 设置为 width 的一半的时候并不是圆形，需要设置更大一些，所以直接设置为 width 的大小来达到四个平台的统一
3. 不支持事件冒泡

## 微信小程序
1. `XRadio`、`XCheckbox` 在真机上大小和微信原生的差不多，但是在模拟器上看起来会大很多


## nanachi
1. 在快应用中，`class='radio'` 的 `div` 有概率会被转换成 `input`。(只在第一次编译的时候会有这个问题，之后代码保存更新后是正常的)
2. `export default class P extends Component` 会报错，需要写成 `class P extends Component ... export default P` 的形式
3. 对于 `@import`，第一次引入的时候，如果这样写 `@import <path>`，不带分号的话，不能成功引入；需要加上分号，`@import <path>;`，才能成功引入
4. pages、components 下的文件都会被编译，所以不能把数据单独放在里面的一个文件中。应该放在 common 下
5. 快应用中，在 `render` 中这样写会报错：`<text>{${this.state.value}}</text>`
