# 小程序与快应用的兼容

1. 快应用 flex-direction 默认为 row; 小程序 flex-direction 默认为 column。所有 display: flex 的地方需要显式声明 flex-direction
2. 快应用 border-radius 不支持百分比形式，所以需要指定确定的大小。正常为 width/2，但是在百度/微信小程序中，border-radius 设置为 width 的一半的时候并不是圆形，需要设置更大一些，所以直接设置为 width 的大小来达到四个平台的统一

# 问题

## 快应用

1. `class='radio'` 的 `div` 有概率会被转换成 `input`