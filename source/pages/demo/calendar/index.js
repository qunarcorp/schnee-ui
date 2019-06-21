import React from '@react';
import moment from 'moment';
import XCalendar from '@components/XCalendar/index';
import './index.scss';

class P extends React.Component {
    constructor() {
        super();
        this.state = {
            selectionStart: moment().add(0, 'days').format('YYYY-MM-DD'), // 默认选择明天日期  2019 9 13 === 中秋节
        };
    }
    render() {
        return (
            <div>
                <XCalendar 
                    selectionStart={this.state.selectionStart} />
            </div>
        );
    }
}

export default P;


