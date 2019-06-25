import React from '@react';
import solar2lunar, { convert2digit } from '@common/utils/lunar.js';
import Holiday from '@common/utils/holiday.js';
import './index.scss';

class XCalendar2 extends React.Component {
    constructor(props) {
        super(props);
        this.checkInDate = null;
        this.beginDate = null; // 开始日期
        this.endDate = null; // 结束日期
        this.allowSingle = false; // 是否允许选择单日情况
        this.state = {
            heightStyle: {
                height: getWeekHeightStyle()
            },
            calendarArray: generateDates()
        };
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
                <scroll-view>
                    2组建
                </scroll-view>
            </div>
        );
    }
}


XCalendar2.defaultProps = {
    dateTitle: ['日', '一', '二', '三', '四', '五', '六']
};

export default XCalendar2;

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


// 生成日历表格
function generateDates() {
    
}





