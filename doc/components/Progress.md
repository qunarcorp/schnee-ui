# Progress

进度条

| 属性名 | 类型 | 必填 | 默认值 | 说明 | 微信 | 支付宝 | 百度 | 快应用 | H5 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| percent | Number | false | 0 | 百分比0~100 | true | true | true | true | true |
| showInfo | Boolean | false | true | 在进度条下方显示百分比 | true | true | true | true | true |
| strokeColor | String | false | '#1890ff' | 进度条颜色 | true | true | true | true | true |
| strokeHeight | Number | false | 32 | 进度条宽度 | true | true | true | true | true |
| borderRadius | Number | false | 20 | 圆角大小，单位 px | true | true | true | true | true |

## 示例
默认样式
```html
<XProgress percent={10} />
```

自定义进度条颜色
```html
<XProgress percent={20} strokeColor="#52c41a" />
```

不显示提示信息
```html
<XProgress percent={40} showInfo={false} />
```

自定义进度条高度
```html
<XProgress percent={60} strokeHeight={20} />
```

自定义进度条圆角大小
```html
<XProgress percent={80} borderRadius={2} />
```