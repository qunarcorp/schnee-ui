import React from '@react';
import moment from 'moment';
import XCalendar from '@components/XCalendar/index';
import './index.scss';

class P extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectionStart: moment().add(0, 'days').format('YYYY-MM-DD') // 默认选择明天日期  2019 9 13 === 中秋节
        };
    }

    select(obj) {
        // eslint-disable-next-line
        console.log('选择的日期为:', obj);
        this.setState({
            selectionStart: obj.selectionStart
        });
        setTimeout(function() {
            React.api.navigateBack({
                url: '/pages/index/index'
            });
        }, 200);
    }

    render() {
        return (
            <div>  
                <XCalendar
                    onChange = {obj => this.select(obj)}
                    allowSingle={true}
                    selectionStart={this.state.selectionStart}
                />
            </div>
        );
    }
}

export default P;


