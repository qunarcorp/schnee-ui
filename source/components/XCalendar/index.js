import React from '@react';
import solar2lunar, { convert2digit } from '@common/utils/lunar.js';
import Holiday from '@common/utils/holiday.js';
import './index.scss';

/**
 * getDateInfoArr 获取年、月、日、星期等信息
 * @param date {Date}
 * @returns {Array}
 */
const getDateInfoArr = (date = new Date()) => [
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate(),
    date.getDay()
];
/**
 * getHoliday 根据传入的参数，对应到holiday.js，返回节假日信息
 * @param str1 {string} 月-日 eg: '09-08'
 * @param str2 {string} solar | lunar
 * @returns {string} 节假日信息
 */
const getHoliday = (str1, str2 = 'solar') => {
    return Holiday[str2][str1] || '';
};

/**
 * getEndDate 获取间隔天数的最后一天日期
 * @param date {Date} 起始日期对象
 * @param offset {Number} 间隔天数
 * @returns {Date} 结束日期对象
 */
const getEndDate = (date, offset) => {
    const startTime = date.getTime();
    const endTime = startTime + offset * 24 * 3600 * 1000;
    return new Date(endTime);
};

/**
 * formatMonth 格式化某年某月月为指定格式， eg： 2016/08
 * @param year {String}
 * @param month {String}
 * @returns {string}
 */
const formatMonth = (year, month) => [year, convert2digit(month)].join('/');

/**
 * getFirstDayOfMonth 获取某年某月第一天
 * @param year {String} 年份
 * @param month {String} 月份
 * @returns {Date}
 */
const getFirstDayOfMonth = (year, month) => new Date(year, month, 1);

/**
 * getLastDayOfMonth 获取某年某月最后一天
 * @param year {String}
 * @param month {String}
 * @returns {Date}
 */
const getLastDayOfMonth = (year, month) => new Date(year, month, 0);

/**
 * isWeekend 确定某天是否周末
 * @param dayNum {Number} 日期号
 * @param firstDay {Number} 当月第一天的星期数
 * @return {Boolean}
 */
const isWeekend = (dayNum, firstDay) => {
    const num = (+dayNum + firstDay) % 7;
    // 0是周六、1是周日
    return num === 0 || num === 1;
};

/**
 * compareDate 对比两个日期的大小
 * @param date1 {Date}
 * @param date2 {Date}
 * @return {Number} [相差的天数]
 */
const compareDate = (date1, date2) => {
    return date1.getTime() - date2.getTime();
};


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
    if (lunar.Term) {   // !!lunar.Term
        // 清明节，不固定
        res += `${lunar.Term} `;
    }
    res += getHoliday(lunar.str, 'lunar');
    return res.trim();
};

/**
 * formatMonthChinese 中文格式： 2016年8月
 * @param year {String}
 * @param month {String}
 * @returns {string}
 */
const formatMonthChinese = (year, month) => `${year}年${month}月`;

/**
 * 处理IOS不兼容2016-10-01， 但不改变原有日期格式
 * @param str {string}
 * @return Date
 */
const getDate = str => new Date(str.replace(/-/g, '/'));

/**
 * getArrayByLength 获取日历的空格数
 * @param length {number}
 * @returns
 */
const getArrayByLength = (length) => {
    const ret = [];
    for (let i = 0; i < length; i++) {
        ret[i] = null;
    }
    return ret;
};


class XCalendar extends React.Component {
    constructor(props) {
        super(props);
        this.beginDate = null; // 开始日期
        this.endDate = null; // 结束日期
        this.prevBeginDate = null; // 前一次的开始日期
        this.allowSingle = false; // 是否尽允许选择单日情况
        const { selectionStart, allowSelectionBeforeToday } = props;
        this.state = {
            heightStyle: {
                height: getWeekHeightStyle()
            },
            calendarArray: this.getData({ selectionStart, allowSelectionBeforeToday }),
        };
    }

    /**
     * isToday 某年某月某天是否是今天
     * @param year {String}
     * @param month {String}
     * @param day {String}
     * @returns {Boolean}
     */
    isToday(year, month, day) {
        const [todayYear, todayMonth, todayDateNum] = getDateInfoArr();
        return todayYear === parseFloat(year) && todayMonth === parseFloat(month) && todayDateNum === parseFloat(day);
    }

    /**
     * getDate 获取日历列表
     * @param prevDuration { Number | Array } duration属性变化之前的起始时间日期
     * @param duration {Number | Array} 时间间隔或起始时间日期
     * @param selectionStart {String} 入店时间， eg: 2016-10-01
     * @param selectionEnd {String} 离店时间， eg: 2016-10-01
     * @param allowSingle {Boolean} 允许单选
     * @param allowSelectionBeforeToday {Boolean} 允许选择今天之前的日期
     * @returns {Array}
     */
    getData({duration = 90, allowSelectionBeforeToday = false, selectionStart = '' }) {
        // 获取当前的年月日
        const [todayYear, todayMonth, todayDateNum] = getDateInfoArr();
        const todayDate = new Date(todayYear, todayMonth - 1, todayDateNum);
        this.checkInDate = selectionStart ? getDate(selectionStart) : null;
        // 不能选中今天之前的日期时，入店日期为今天之前的情况， 则重置为今天
        if (!allowSelectionBeforeToday && selectionStart && compareDate(this.checkInDate, todayDate) < 0) {
            this.checkInDate = todayDate;
        }

        // 选择的开始时间和结束时间
        this.beginDate = todayDate;
        this.endDate = getEndDate(this.beginDate, duration);
        const compareBeginAndToday = compareDate(this.beginDate, todayDate);
        
        // 
        const [beginYear, beginMonth] = getDateInfoArr(this.beginDate);
        const [endYear, endMonth, endDateNum, endDay] = getDateInfoArr(this.endDate);
        const endMonthLastDate = getLastDayOfMonth(endYear, endMonth).getDate();
        let tempYear = beginYear;
        let tempMonth = beginMonth;
        let resArr = [];
        // 当月第一天的星期数
        let dayFirst = getFirstDayOfMonth(beginYear, beginMonth - 1).getDay();
        // baseIndex 基数值，用于补足日期显示范围最后一周的剩下几天
        // addNormalDateFlag 避免超过当前月的最大值，如32
        // disable 同上，最后一周补上额外的几天不可点击
        let hasToday = false;
        const addMapFn = (item, i, { baseIndex = 0, addNormalDateFlag = true, disable = false }) => {
            const day = baseIndex + i + 1;
            // 是否是今天
            let isToday = false;
            if (hasToday) {
                isToday = false;
            } else {
                isToday = hasToday = this.isToday(tempYear, tempMonth, day);
            }
            // 禁止选择的日期：（1）为了美观的，日期超出duration之后的 （2）今天之前的 （3）日期在duration之前的
            const disabled = disable || (!allowSelectionBeforeToday && compareBeginAndToday < 0 && !hasToday)
                || (compareDate(new Date(tempYear, tempMonth - 1, day), this.beginDate) < 0);
            if (addNormalDateFlag || day <= endMonthLastDate) {
                return {
                    day,
                    date: formatMonth(tempYear, tempMonth),
                    lunar: solar2lunar(tempYear, tempMonth, day).str,
                    today: isToday,
                    isCheckIn: false,
                    isCheck: false,
                    isCheckOut: false,
                    weekend: isWeekend(day, dayFirst),
                    holiday: isHoliday(tempYear, tempMonth, day),
                    disabled
                };
            }
            return { disabled: true };
        };
        while (tempYear < endYear || (tempYear === endYear && tempMonth <= endMonth)) {
            const isEnd = tempYear === endYear && tempMonth === endMonth;
            const tempDateObj = getLastDayOfMonth(tempYear, tempMonth);
            const dayLast = isEnd ? endDay : tempDateObj.getDay();
            const dayLength = isEnd ? endDateNum : tempDateObj.getDate();

            // 某月第一天之前的空格数
            const firstMonthArr = getArrayByLength(dayFirst).fill({ disabled: true });

            // 某月最后一天之后的空格数
            const lastMonthArr = getArrayByLength(6 - dayLast).fill({ disabled: true });

            // 某月具体每个天数的信息对象
            let tempMonthArr = getArrayByLength(dayLength).fill(0).map(addMapFn);

            // 补足显示日期范围最后一周的剩下几天情况, 为了美观
            if (isEnd) {
                const lastWeekArr = getArrayByLength(6 - endDay).fill(0).map((item, i) => {
                    return (
                        addMapFn(item, i, {
                            baseIndex: endDateNum,
                            addNormalDateFlag: false,
                            disable: true
                        })
                    );
                });
                tempMonthArr = tempMonthArr.concat(lastWeekArr);
            }
            const monthArr = firstMonthArr.concat(tempMonthArr, lastMonthArr);
            const groupKey = formatMonthChinese(tempYear, tempMonth);
            resArr = resArr.concat(this.getMonthArr(monthArr, groupKey));
            if (tempMonth === 12) {
                tempMonth = 1;
                tempYear++;
            } else {
                tempMonth++;
            }
            // 下月的第一天的星期为当前月最后一天的星期+1
            dayFirst = (dayLast + 1) % 7;
        }
        return resArr;
    }

    /**
     * getMonthArr 将一个月的天数格式化成按周分组，一周一个对象
     * @param monthArr {Array}
     * @param groupKey {String}
     * @returns {Array}
     */
    getMonthArr(monthArr, groupKey) {
        const resMonthArr = [];
        let tempWeekArr = [];
        monthArr.forEach((item, i) => {
            const itemDayObj = item;
            if (!itemDayObj.disabled && !!this.checkInDate) {
                const itemDate = getDate(`${itemDayObj.date}/${itemDayObj.day}`);
                const compareIn = compareDate(itemDate, this.checkInDate);
                const compareOut = !!this.checkOutDate && compareDate(itemDate, this.checkOutDate);
                if (!compareIn) {
                    this.checkInDate = itemDate;
                    itemDayObj.isCheckIn = true;
                }
                if ((compareIn > 0 && compareOut < 0) || ((!compareIn || compareOut === 0) && !this.allowSingle)) {
                    itemDayObj.isCheck = true;
                }
                if (compareOut === 0) {
                    this.checkOutDate = itemDate;
                    itemDayObj.isCheckOut = true;
                }
            }
           
            if (i % 7 === 6) {
                tempWeekArr.push(itemDayObj);
                resMonthArr.push({week: tempWeekArr, groupKey});
                tempWeekArr = [];
            } else {
                tempWeekArr.push(itemDayObj);
            }
        });
        return resMonthArr.map((item, i) => ({ ...item, key: item.groupKey + i, isRender: i === 0 }));
    }

    render() {
        // console.log('calendarArray.....', this.state.calendarArray);
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
                    className={'m-calendar anu-col '+(this.props.isMultiSelect ? 'multi' : '')}
                >
                    {
                        this.state.calendarArray && this.state.calendarArray.map(function(week){
                            return (
                                <list-item key={week.key} className="anu-row w-row" >
                                    {
                                        week.isRender === true && <div className="m-header">{week.groupKey}</div>
                                    }
                                    {
                                        week.week.map((item) => {
                                            return (
                                                <div key={item.lunar} className='anu-row anu-flex-center'>
                                                    <text className={
                                                        item.disabled === true ? 'disabledColor'
                                                            : 
                                                            (item.weekend === true || item.isCheck === true ? 'weekColor':'') +
                                                            (item.holiday !== '' ? 'holidayColor' : '')
                                                    }>
                                                        {
                                                            item.isCheck === true ? 
                                                                '今天'
                                                                :
                                                                item.holiday !== '' ? item.holiday : item.day
                                                        }
                                                    </text>
                                                </div>
                                            );
                                        })
                                    }
                                </list-item>
                            );
                        }, this)
                    }
                </scroll-view>
            </div>
        );
    }
}


XCalendar.defaultProps = {
    dateTitle: ['日', '一', '二', '三', '四', '五', '六'],
    selectionEnd: '',
    allowSingle: true,
    allowSelectionBeforeToday: false,
    duration: 90
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

// function generateDates() {  // 生成日历表格

// }

