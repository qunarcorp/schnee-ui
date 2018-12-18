| 组件名          | 微信(模/真) | 支付宝(模/真) | 百度(模/真)  | 快应用 | H5 |  负责人 | deadline |
| -------------- | --- | --- | --- | --- | --- | --- | --- |
| Button         | ✓   | 因为不支持的 input 类型，点击无效 | 同左 | ✓ | ✓ | @kitian616 | |
| Checkbox       | ✓/✓ (感觉没有原生的顺畅，有延迟感)| ✓   | ✓   | ✓   | ✓ | @codeArvin | |
| CheckboxGroup  | ✓/✓   | ✓   | ✓   | ✓   | js 问题 | @codeArvin | |
| Icon           | ✓/✓ | ✓   | ✓   | ✓   | ✓ | @kitian616 | |
| Label          | ✓/✓  | ✓   | ✓   | ✓ (快应用中不支持`<XLabel>apple</XLabel>`的写法，只能传入子元素`<XLabel><text>apple</text></XLabel>`，所以子元素方式的文本最好都用`text`包起来，不然快应用会有问题，暂时没有找到解决方案)   | js 问题 | @codeArvin | |
| Picker         |     |     |     |     | - | @gaoxiaomumu | |
| Progress       | 百分比换行了 | 同左 | 同左 | ✓   | ✓ | @aweleey | |
| Radio          | ✓/✓ | ✓   | ✓   | ✓   | ✓ | @codeArvin | |
| RadioGroup     | ✓/✓ | ✓   | ✓   | ✓   | js 问题 | @codeArvin | |
| ScorllView     | -   | -   | -   | -   | ✓ | @kitian616 | |
| Slider         |     |     |     | 快应用滚动距离有偏差 | - | @aweleey | |
| Swiper         | ✓   | ✓ 竖直方向滚动体验不佳 | ✓ | 快应用 translate 百分比有些问题，给官方提了 BUG，预计 1032 版修复 | Nanachi For 循环回调只能用 `funcion(){ ... }` 函数，在 H5 中会出现 this 绑定问题，暂没找到代码层面的解决方法 | @kitian616 | |
| Switch         | ✓/✓ | ✓   | ✓   | ✓ （快应用目前还没有支持过渡效果的计划，暂不考虑） | ✓ | @kitian616 | |
