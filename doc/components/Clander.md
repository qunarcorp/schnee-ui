# Clander

日历。

| 属性名    | 类型 | 必填 | 默认值 | 说明 | 微信 | 支付宝 | 百度 | 快应用 | 举例 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| eventType | String  | true |  | 回调事件名字，选择日期成功之后触发的事件，通过监听这个事件来得到响应 |  |  |  |  | hotel酒店：HOTEL。<br/>Ticket门票：TICKET_DATE_SELECT。<br/>Train火车票多选：OPTIONAL_DATE_SELECT。<br/>Train火车票单选：CALENDAR_DATE_CHANGE。<br/> |
| isDoubleSelect | Boolean | true | | 是否双选 |  |  |  |  | |
| sText  | String  | false	 | 入住 | 酒店入住文本文案 | |  |  |  | |
| eText     | String  | false | 离店 | 酒店离店文本文案 | |  |  |  | |
| calendarDays  | Number | false | 90 | 日历显示的天数 |  |  |  |  | |
| date | String | true | | 例如：'2019-02-01'。如果多选，则表示选择第一天的时间。如果单选则表示选中的日期。选中的日期 | |  |  | | 默认格式'YYYY-MM-dd' |
| eDate  | String | false | | 例如：'2019-02-01'。如果多选，则表示选择最后一天的时间。双选时的第二个日期 |  |  |  |  | 默认格式'YYYY-MM-dd' |
| url | String | false | | 请求数据，在日历中显示价钱列表，例如火车票和酒店 | |  |  |  | |
| reqData    | Object | false | | 请求日历数据的参数 |  |  |  |  | |
| bizType | String | true | | 对应业务线名称 |  |  |  |  | 例如：Train |
| isMultiSelect | Boolean | false | | 是否多选 | |
| dates | Array | false | | 已经选择的备选日期s |
| maxSelectDays | Number | false | | 最多备选多少个 | 




## 示例

基本使用：

```js
var params = {
    bizType: '业务线名称', // 业务线
    date: 'YYYY-MM-dd', // 主选日期
    eventType: '回调函数的名字',  // 选择日期成功之后触发的事件，通过监听这个事件来得到响应
    isMultiSelect: true, // 是否多选
    reqData: { },   // 请求日历数据的 参数
    dates: ['YYYY-MM-dd', 'YYYY-MM-dd'], // 已经选择的备选日期s
    maxSelectDays: 6, // 最多备选多少个
    dataUrlHost: '/api/***',
    url: '/api/***'
};
React.api.navigateTo({url: '***/calendar/index?data=' + JSON.stringify(params)});
```

