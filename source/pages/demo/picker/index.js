import React from '@react';
import XPicker from '@components/XPicker/index';
import cnCity from '../../../common/utils/cnCity';
class P extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      controlValue: 12,
      picker_show: false,
      multi_picker_show: false,
      isOpen: false,
      picker_value: '',
      isTimeOpen: false,
      date: '2018-10-10',
      time: '09:09',
      picker_group: [
        {
          name: 'Item1'
        },
        {
          name: 'Item2 (Disabled)',
          disabled: true
        },
        {
          name: 'Item3'
        },
        {
          name: 'Item4'
        },
        {
          name: 'Item5'
        }
      ]
      ,
      multi_group: [
          {
            name: '北京',
            sub: [
              {
                name: '北京市',
                sub:[{
                  name: '东城区'
                },{
                  name: '西城区'
                }]
              }
            ]
          },
          {
            name: '天津',
            sub: [
              {
                name: '天津市',
                sub:[{
                  name: '东城区1'
                },{
                  name: '西城区1'
                }]
              }
            ]
          }
      ]


    };
  }

  click(){
    this.setState({
      picker_show: true
    });
  };

  handleChange(selected) {
    let value = '';
    console.log('==================',selected)
   
    this.setState({
      picker_value: value,
      picker_show: false,
      multi_picker_show: false,
      isOpen: false,
      isTimeOpen: false
    });
  }

  handelCanel(e) {
    this.setState({ picker_show: false, multi_picker_show: false, isOpen: false })
  }

  multiClick() {
    this.setState({ multi_picker_show: true })
  }

  dateClick() {
    this.setState({ isOpen: true})
  }

  timeClick() {
    this.setState({ isTimeOpen: true})
  }

  render() {
    return (
      <div className="anu-col">
        <button onClick={this.click.bind(this)}>点击</button>
        <button onClick={this.multiClick.bind(this)}>多列点击</button>
        <button onClick={this.dateClick.bind(this)}>日期点击</button>
        <button onClick={this.timeClick.bind(this)}>时间点击</button>
        <XPicker
          onChange={this.handleChange.bind(this)}
          range={this.state.picker_group}
          show={this.state.picker_show}
          onCancel={this.handelCanel.bind(this)}
        />
        <XPicker
          type="multiSelector"
          onChange={this.handleChange.bind(this)}
          range={cnCity}
          show={this.state.multi_picker_show}
          onCancel={this.handelCanel.bind(this)}
        />
         <XPicker
          type="date"
          value={this.state.date}
          onChange={this.handleChange.bind(this)}
          start='2017-1-1'
          show={this.state.isOpen}
          onCancel={this.handelCanel.bind(this)}
        />
         <XPicker
          type="time"
          value={this.state.time}
          onChange={this.handleChange.bind(this)}
          show={this.state.isTimeOpen}
          onCancel={this.handelCanel.bind(this)}
        />
      </div>
    );
  }
}

export default P;
