| 组件名          | 微信(模/真) | 支付宝(模/真) | 百度(模/真)  | 快应用 | 负责人 | deadline |
| -------------- | --- | --- | --- | --- | --- | --- |
| Button         |     |     |     | 可以正常使用，需要修改下样式 | @kitian616 | |
| Checkbox       | ✓/✓ (感觉没有原生的顺畅，有延迟感)| ✓   | ✓   | ✓/✓   | @codeArvin | |
| CheckboxGroup  | ✓/✓   | ✓   | ✓   | ✓/✓   | @codeArvin | |
| Icon           | ✓/✓ | ✓   | ✓   | ✓   | @kitian616 | |
| Label          | ✓/✓  | ✓   | ✓   | ✓/✓(快应用中不支持`<XLabel>apple</XLabel>`的写法，只能传入子元素`<XLabel><text>apple</text></XLabel>`，所以子元素方式的文本最好都用`text`包起来，不然快应用会有问题，暂时没有找到解决方案)   | @codeArvin | |
| Picker         |     |     |     |     | @gaoxiaomumu | |
| Progress       | 百分比换行了 | 同左 | 同左 | ✓   | @aweleey | |
| Radio          | ✓/✓ | ✓   | ✓   | ✓/✓   | @codeArvin | |
| RadioGroup     | ✓/✓ | ✓   | ✓   | ✓/✓   | @codeArvin | |
| Slider         |     |     |     | 快应用滚动距离有偏差 | @aweleey | |
| Swiper         |     |     |     | 快应用 translate 百分比有些问题，给官方提了 BUG，预计 1032 版修复 | @kitian616 | |
| Switch         | ✓/✓ | ✓   | ✓   | 没有过渡效果 | @kitian616 | |
