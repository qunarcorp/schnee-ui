import React from '@react';
import moment from 'moment';
import XCalendar from '@components/XCalendar/index';
import './index.scss';

class P extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstSelected: moment().add(0, 'days').format('YYYY-MM-DD'), // 默认选择明天日期  2019 9 13 === 中秋节
            secondSelected: moment().add(1, 'days').format('YYYY-MM-DD')
        };
    }

    select(obj) {
        // eslint-disable-next-line
        console.log('选择的日期为:', obj);

        this.setState({
            firstSelected: obj.firstSelected,
            secondSelected: obj.secondSelected
        });
    }

    render() {
        return (
            <div>  
                <XCalendar
                    onChange = {obj => this.select(obj)}
                    isDoubleSelect={true}
                    // sDoubleSelect={false}
                    firstSelected={this.state.firstSelected}
                    secondSelected={this.state.secondSelected}
                    calendarDays={980}
                />
            </div>
        );
    }
}

export default P;


