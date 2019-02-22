# CitySelector <span style="font-weight: bold">(内部组件)</span>

| 属性名 | 类型 | 必填 | 默认值 | 说明 | 微信 | 支付宝 | 百度 | 快应用 | H5 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| type | Number | true |  | 0: 机票 1: 火车票 2: 汽车票 3: 酒店 4: 攻略 | | | | | |
| citySuggestService | String | false |  | 用于搜索框的接口路径 | | | | | |
| citySuggestHost | String | false |  | 用于搜索框的 host | | | | | |
| cityListHost | String | false |  | 用于获取热门/全部城市的 host | | | | | |
| cityListService | String | false |  | 用于获取热门/全部城市的接口路径 | | | | | |
| eventType | String | false |  | 事件类型，在点击城市后会调用名称为 eventType 的回调函数，参数为 {city, cityUrl, isDep, source} | | | | | |
| placeholder | String | false | '' | 搜索框的placeholder | | | | | |
| isDep | Boolean | false | 无 | 用于设置标题 true: 出发城市 false: 到达城市 | | | | | |

## 说明
点击城市后，会设置 `globalData[evnetType] = cityObj`，同时触发名称为 eventType 的回调函数，传入 `cityObj`

```javascript
cityObj = {
    city: 选择的城市
    cityUrl:
    isDep: 传入的 isDep
    source: 
}
```

## 示例

```javascript
const params = {
    type: 4,
    cityListHost: '***.com',
    citySuggestHost: '***.com',
    cityListService: '/***/***',
    citySuggestService: '/***/***',
    eventType: 'CITY_SELECT',
    placeholder: '请输入城市名称或首字母'
};
React.api.navigateTo({url: `${citySelect页面路径}?data=${JSON.stringify(params)}`});
```