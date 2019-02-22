## Navigator

页面链接

| 属性名 | 类型 | 必填 | 默认值 | 说明 | 微信 | 支付宝 | 百度 | 快应用 | H5 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| target | String | false | 'self' | 在哪个目标上发生跳转，目前只支持 self | true | true | true | true | true |
| url | String | true | '' | 跳转链接 | true | true | true | true | true |
| openType | String | false | navigate | 跳转方式，支持 navigate、redirect、switchTab、reLaunch、navigateBack | true | true | true | true | true |
| bindsuccess | Function | false | ()=>{} | 成功回调 | true | true | true | true | true |
| bindfail | Function | false | ()=>{} | 失败回调 | true | true | true | true | true |
| bindcomplete | Function | false | ()=>{} | 失败/成功都会调用 | true | true | true | true | true |

## 说明

组件内容暂时只能传字符串，不能放标签

## 示例

```html
<XNavigator url="/pages/demo/button/index">Goto Button</XNavigator>
```