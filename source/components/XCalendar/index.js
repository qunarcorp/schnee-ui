import React from '@react';
import solar2lunar, { convert2digit } from '@common/utils/lunar.js';
import Holiday from '@common/utils/holiday.js';
import './index.scss';


class XCalendar extends React.Component {
    constructor(props) {
        super(props);
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth();
        const formatToday = JSON.stringify(now).replace(/T.+|"/g, '');
        const calendarDays = parseFloat(props.calendarDays) || 90;

        this.state = {
            heightStyle: {
                height: getWeekHeightStyle()
            },
            calendarArray: generateDates(currentYear, currentMonth, calendarDays),
            isDoubleSelect: props.isDoubleSelect,   // 是否双选,默认单选
            firstSelected:  props.firstSelected || formatToday,   // 选择第一个日期
            secondSelected: props.secondSelected,    // 选择第二个日期
        };
        this.updateCalendarData(this.state);  // 更新选择的日历页面状态

    }

    updateCalendarData(state, cb) {
        state.calendarArray.forEach(function(month) {
            month.daysArray.forEach(function(day){
                calculateDayClassName(day, state);
            });
        });
        this.setState(state, cb);
    }

    dateSelected(item) {
        var isDisabled = item.isDisabled;
        if (isDisabled) {
            return;
        }
        if (this.state.isDoubleSelect) {
            // 双选的情况
            this.dateSelectDouble(item);
        } else {
            // 单选的情况
            this.dateSelectDefault(item);
        }
    }

    // 单选的情况
    dateSelectDefault(item){
        //需要用户传入firstSelected
        var state = this.state;
        state.firstSelected = item.formateDate;
        this.updateCalendarData( state, function(){
            this.props.onChange({
                firstSelected: item.formateDate
            });
            this.gotoBack();
        });
    }

    // 多选的情况
    dateSelectDouble(item) {
        var firstSelected = this.state.firstSelected;
        var secondSelected = this.state.secondSelected;
        var selectedDate =  dateToNumber(item.formateDate);
        // console.log(';;;selectedDate;;;', selectedDate);
        // 当前入店日期
        var curFirst = dateToNumber(firstSelected);
        // 当前离店日期
        var curSecond = dateToNumber(secondSelected);
        if (this.state.confirmSecondDate){
            if (selectedDate === curFirst || selectedDate === curSecond ){
                this.state.confirmSecondDate = false;
                this.updateCalendarData( this.state, function() {
                    // console.log('选择第一个了');
                    
                    this.props.onChange({
                        firstSelected,
                        secondSelected: this.state.secondSelected
                    });
                    this.gotoBack();
                    // this.props.onChange(item);
                    // this.dateSelectedFinish({ eventType, storageType });
                });//跳转
            } else if (selectedDate < curFirst){
                this.state.firstSelected = item.formateDate;
                this.updateCalendarData( this.state); //不跳转
            } else if (selectedDate > curFirst){
                //由8月1日变成8月2日，说明用户只想改进店时间，离店时间不变
                this.state.secondSelected = item.formateDate;
                this.state.confirmSecondDate = false;
                this.updateCalendarData( this.state, function() {
                    // console.log('选择第二个了');

                    this.props.onChange({
                        firstSelected,
                        secondSelected: this.state.secondSelected
                    });
                    this.gotoBack();
                    // this.dateSelectedFinish({ eventType, storageType });
                });  //跳转
            }
        } else {
            //这里只有两种情况，改变一个日期，还是改变两个日期
            if (selectedDate < curFirst){
                this.state.firstSelected = item.formateDate;
                if ( !this.state.secondSelected){
                    this.state.secondSelected = this.state.secondSelected || this.getNextDay(item.formateDate);
                }
            } else if (selectedDate >= curFirst){
                this.state.firstSelected = item.formateDate;
                this.state.secondSelected = this.getNextDay(item.formateDate);
                this.state.confirmSecondDate = true;
            }
            this.state.confirmSecondDate = true;
            this.updateCalendarData(this.state);
        }
    }

    getNextDay(formateDate){
        var throwIt = false;
        try {
            this.state.calendarArray.forEach(function(month){
                month.daysArray.forEach(function(day){
                    if (day.formateDate === formateDate){
                        throwIt = true;
                    } else if (throwIt && day.formateDate){
                        throw day.formateDate;
                    }
                });
            });
        } catch (e){
            return e;
        }
    }

    gotoBack(){
        React.api.showToast({
            title: '日期选择成功',
            icon: 'success',
            duration: 500,
            success: function() {
                setTimeout(function() {
                    React.api.hideToast();
                    React.api.navigateBack();
                }, 100);
            }
        });
    }


    render() {
        return (
            <div className="calendar-content" style={this.state.heightStyle}>
                <view className="e-head">
                    {
                        this.props.dateTitle.map(function(item, idx){
                            return  <text className={ idx === 0 || idx === 6 ? 'w s': 'w'} key={item}>{item}</text>;
                        }, this)
                    }
                </view>
                <scroll-view
                    className="m-calendar  anu-col"
                    scroll-y="true"
                >
                    {this.state.calendarArray.map(function(month) {
                        return (
                            <list-item className="e-month anu-col" key={month.idMonth} >
                                <text className="b-header anu-flex-center">{month.title}</text>
                                <view className="b-row anu-row">
                                    {month.daysArray.map(function(item){
                                        if (item.isBlank){
                                            return <view class="item"  key={item.middleText} />;
                                        }
                                        return (
                                            <view
                                                onTap={this.dateSelected.bind(this, item)}
                                                className={
                                                    'anu-flex-center anu-col-flex item item-a' +
                                                    (item.isSelect ? ' select ': '') +
                                                    (item.isWeekend || item.holiday ? ' weekend ' : '') +
                                                    (item.isSelectSecond ? ' select-second ' : '')
                                                }
                                            >
                                                <text class={'base'}>{item.holiday}</text>
                                                <div class={'dayclass ' + item.className}>{item.middleText}</div>
                                            </view>
                                        );
                                    }, this)}
                                </view>
                            </list-item>
                        );
                    }, this)}
                </scroll-view>
            </div>
        );
    }
}


XCalendar.defaultProps = {
    dateTitle: ['日', '一', '二', '三', '四', '五', '六']
};

export default XCalendar;

// 获取星期的高度
function getWeekHeightStyle() {
    const ANU_ENV = process.env.ANU_ENV; // 获取当前的平台类型
    let windowHeight = '';
    if (ANU_ENV !== 'quick') {
        React.api.getSystemInfo({
            success: function(sysInfo) {
                if (sysInfo.windowWidth !== 320) {
                    windowHeight = `${sysInfo.windowHeight}PX`;
                }
            }
        });
    }
    return windowHeight;
}

/**
 * getHoliday 根据传入的参数，对应到holiday.js，返回节假日信息
 * @param str1 {string} 月-日 eg: '09-08'
 * @param str2 {string} solar | lunar
 * @returns {string} 节假日信息
 */
const getHoliday = (str1, str2 = 'solar') => Holiday[str2][str1] || '';

/**
 * isHoliday 判断是否是假期
 * @param year {number}
 * @param month {number}
 * @param day {number}
 * @returns {string} 节假日信息或者''
 */
const isHoliday = (year, month, day) => {
    let res = '';
    const tempMonth = convert2digit(month);
    const tempDay = convert2digit(day);
    const lunar = solar2lunar(year, tempMonth, tempDay);
    res += getHoliday(`${tempMonth}-${tempDay}`);
    res += ' '; // 防止两个节日相连
    if (lunar.Term) {
        // 清明节，不固定
        res += `${lunar.Term} `;
    }
    res += getHoliday(lunar.str, 'lunar');
    return res.trim();
};

// 生成日历表格
function generateDates(currentYear, currentMonth, calendarDays) {
    //月份是0到1
    var day = new Date(currentYear ,currentMonth, 1).getDay();   // 获取星期
    const monthLen = Math.floor(calendarDays/30);   // 显示的几个月
    const months = [];    //收集几个月的
    const formatToday = JSON.stringify(new Date()).replace(/T.+|"/g,'');   //今天的时间格式化 YYYY-MM-DD
    let useEnabledCount = false, enabledCount = 0;
    for (let i=0; i < monthLen; i++) {
        let month = [];
        let curMonth = currentMonth + i;
        if (curMonth > 11) {
            currentYear++;
            //月份从0开始， 0~11，大于11，年份加1，月份置0
            curMonth = 0;
        }
        // 例如：月为5，转化为05
        var formatMonth = curMonth+1 < 10 ?  '0' + (curMonth+1): (curMonth+1);
        //  日期列表数据的存储
        month = {
            idMonth: currentYear + '-' + formatMonth,   //  即: 2019-01
            title: currentYear + '月' + formatMonth + '日',  // 即: 2019年01月
            daysArray: []
        };
        //如果每个月的第一天不是星期日，那么需要补上空白的格子
        if (day !== 0) {
            for (let j = 0; j < day; j++){
                month.daysArray.push({
                    isBlank: true,
                    middleText: Math.random()
                });
            }
        }
        for (let j = 1; j <= 31; j++) {
            if (j > 27){    //28, 29, 30, 31 都需要特别处理,比如2月30日，4月31日
                if ((new Date(currentYear, curMonth, j)).getMonth() !== curMonth){
                    continue;
                }
            }
            //{ item: "2010-01-12", week: 0}
            const formateDate = currentYear + '-' + formatMonth + '-' + (j < 10 ? '0' + j : j);
            //计算是否能点击，只有从今天起到未来90天或calendarDays天之内才能选择中
            var isDisabled = null;  // void 0
            if (!useEnabledCount){
                isDisabled = formateDate !== formatToday;
                if (isDisabled === false ){
                    useEnabledCount = true;
                    enabledCount = 1;
                }
            } else {
                enabledCount++;
                isDisabled = enabledCount > calendarDays;
            }

            var dateItem = {
                date: currentYear+'/'+curMonth+'/'+j,
                formateDate: formateDate,
                day: day, //0-6,
                isBlank: false,
                topText: '',
                isWeekend: day === 0 || day === 6,
                middleText: formateDate == formatToday ? '今天': j,
                bottomText: '',
                isDisabled: isDisabled,
                text: '',
                holiday: isHoliday(currentYear, formatMonth, j),
                lunar: solar2lunar(currentYear, formatMonth, j).str,
            };

            day ++;
            if (day == 7){
                day = 0;
            }
            month.daysArray.push(dateItem);
        }
        months.push(month);
    }
    return months;
}

function calculateDayClassName(item, state) {

    // 处理选择或者取消或者是否周日的类名
    const classArray = [];
    item.isSelect = false;
    item.isSelectSecond = false;

    if (item.formateDate === state.firstSelected) {
        classArray.push('select');
        item.isSelect = true;
    } else if (item.formateDate === state.secondSelected) {
        classArray.push(state.confirmSecondDate ? 'select-second': 'select');
        if (state.confirmSecondDate) {
            item.isSelectSecond = true;
        } else {
            item.isSelect = true;
        }
    }

    if (item.isDisabled){
        classArray.push('disabled');
    } else if (item.isWeekend || item.holiday){
        classArray.push('weekend');
    }

    item.className = classArray.join(' ');

}

function dateToNumber(date){
    if (!date){
        return NaN;
    }
    return parseFloat(date.replace(/-/g, ''));
}



