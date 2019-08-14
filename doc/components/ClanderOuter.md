# Clander <span style="font-weight: bold">(外部组件)</span>

日历。

| 属性名    | 类型 | 必填 | 默认值 | 说明 | 微信 | 支付宝 | 百度 | 快应用 | 举例 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| isDoubleSelect | Boolean | | false | 是否双选,默认单选 |  |  |  |  | |
| calendarDays  | Number | false | 90 | 日历显示的天数 |  |  |  |  | |
| firstSelected | String | true | | 例如：'2019-02-01'。| |  |  | | 默认格式'YYYY-MM-dd' |
| secondSelected  | String | false | | 例如：'2019-02-01'。双选时的第二个日期 |  |  |  |  | 默认格式'YYYY-MM-dd' |
| onChange  | Function | true | | 选择日期的回调函数 |  |  |  |  |  |


## 示例

基本使用：

```js
// 单选
<XCalendar
    firstSelected = '2019-08-14'
    onChange = {this.selectDate.bind(this)}
/>
// 双选
<XCalendar
    isDoubleSelect={true}
    firstSelected = '2019-08-14'
    secondSelected = '2019-09-14'
    onChange = {this.selectDate.bind(this)}
/>
```

