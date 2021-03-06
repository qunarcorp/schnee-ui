# Label

表单标签。

| 属性名 | 类型 | 必填 | 默认值 | 说明 | 微信 | 支付宝 | 百度 | 快应用 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| for | String | false | | 绑定控件的 id | true | true | true | true |

<p><img style="max-height: 500px" src="../assets/images/components/label.png" /></p>

用来改进表单组件的可用性，有两种使用方式：
1. 使用 `for` 属性找到对应的 `id`
2. 将控件放在该标签下，当点击时，就会触发对应的控件

`for` 优先级高于内部控件，内部有多个控件的时候默认触发第一个控件

目前可以绑定的控件有：`XButton`、`XCheckbox`、`XRadio`、`XSwitch`

1. 在快应用中，`XLabel`不支持这样的写法：`<XLabel>apple</XLabel>`，对于文本，需要用 `text` 包起来，也就是：`<XLabel><text>apple</text></XLabel>`。所以采用子元素的写法的时候，文本最好都用 `text` 包起来，不然快应用会有问题，暂时没找到解决方案
2. 由于 for 的使用方式会在每次点击的时候遍历页面所有元素来寻找对应 id 的控件、子元素的方式只会遍历 XLabel 标签内部的所有元素。所以为了效率，推荐尽量使用子元素的使用方式
