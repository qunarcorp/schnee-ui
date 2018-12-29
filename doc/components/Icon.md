# Icon

图标。

| 属性名 | 类型 | 必填 | 默认值 | 说明 | 微信 | 支付宝 | 百度 | 快应用 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| className | String | false | iconfont | *assets/style/iconfont.scss* 中定义的字体类，给改图标指定了字体 | true | true | true | true |
| size  | String | false |  | icon 的大小 | true | true | true | true |
| color | String | false |  | icon 的颜色 | true | true | true | true |

## 示例

```scss
// assets/style/iconfont.scss
@font-face {
  font-family: iconfont;
  src: url("https://ss.qunarzz.com/yo/font/1.0.3/yofont.ttf");
}

.iconfont {
  font-family: iconfont;
}

.iconfont-another {
  font-family: iconfont;
}
```

基本使用：

```js
import React from '@react';
import XButton from '@components/XButton/index';
class P extends React.Component {
  render() {
    return (
      <XIcon content="&#xf078;"></XIcon>
    );
  }
}
export default P;
```

自定义 className（该 class 需要写在 *assets/style/iconfont.scss* 文件中）：

```js
<XIcon className="iconfont-another" content="&#xf078;"></XIcon>
```

自定义 icon 颜色和大小：

```js
<XIcon color="red" size="100px" content="&#xf078;"></XIcon>
```