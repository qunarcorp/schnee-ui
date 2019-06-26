import React from '@react';
import moment from 'moment';
import XCalendar from '@components/XCalendar/index';
import './index.scss';

class P extends React.Component {
    constructor() {
        super();
        this.state = {
            selectionStart: moment().add(0, 'days').format('YYYY-MM-DD'), // 默认选择明天日期  2019 9 13 === 中秋节
            selectionEnd: moment().add(60, 'days').format('YYYY-MM-DD'), 
        };
    }
    select(obj) {
        // eslint-disable-next-line
        console.log('选择的日期为:', obj);
        if (obj.selectionStart && obj.selectionEnd){
            setTimeout(function() {
                React.api.navigateBack({
                    url: '/pages/index/index'
                });
            }, 200);
        }

    }
    render() {
        return (
            <div>
                <XCalendar
                    onChange = {obj => this.select(obj)}
                    allowSingle={false}
                    // selectionStart={this.state.selectionStart}
                />
            </div>
        );
    }
}

export default P;


