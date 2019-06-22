import React from '@react';
import moment from 'moment';
import XCalendar from '@components/XCalendar/index';
import './index.scss';

class P extends React.Component {
    constructor() {
        super();
        this.state = {
            showComponents: true,
            selectionStart: moment().add(0, 'days').format('YYYY-MM-DD'), // 默认选择明天日期  2019 9 13 === 中秋节
        };
    }

    show() {
        this.setState({
            showComponents: false
        });
    }

    selectChange(obj) {
        console.log(';;;;;;页面', obj);
        this.setState({
            selectionStart: obj.selectionStart
        });
    }

    render() {
        return (
            <div>
                {
                    this.state.showComponents ? 
                        <div>
                            <div>
                                描述: <text className="describe"> 单选日期</text>
                                <ul className="introduction">
                                    <li>1. 默认显示未来90天的可选择日期范围</li>
                                    <li>2. 同时选中日期范围的起、始日期可为同一天</li>
                                    <li>3. selectionStart和selectionEnd属性控制起、始日期</li>
                                    <li>4. 这是一个受控组件，所以需要通过 onChange 回调来设置当前值。</li>
                                </ul>
                            </div>
                            <div>
                                组件调用的使用方式:
                            </div>
                            <button onClick={this.show.bind(this)}>
                                点击我去使用组件:选中日期为{this.state.selectionStart}
                            </button>
                        </div>
                        :
                        <XCalendar
                            onChange = {(obj) => this.selectChange.bind(this, obj)}
                            allowSingle={true}
                            selectionStart={this.state.selectionStart} />
                }
            </div>
        );
    }
}

export default P;


