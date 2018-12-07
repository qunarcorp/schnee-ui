import React from '@react';
import Picker from '@components/Picker/index';
import cnCity from '../../../common/utils/cnCity';
import DatePicker from '@components/DatePicker/index';
class P extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      controlValue: 12,
      picker_show: false,
      multi_picker_show: false,
      isOpen: false,
      picker_value: '',
      time: new Date(),
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
    // selected.forEach((item, index) => {
    //   // console.log('s', s);
    //   // console.log('i', i);
    //   console.log(this.state.picker_group[item])
    //   // value = this.state.picker_group[i]['items'][s].label;
    // });
    this.setState({
      picker_value: value,
      picker_show: false,
      multi_picker_show: false,
      isOpen: false
    });
  }

  handelCanel(e) {
    this.setState({ picker_show: false, multi_picker_show: false, isOpen: false })
  }

  multiClick() {
    this.setState({ multi_picker_show: true })
  }

  timeClick() {
    this.setState({ isOpen: true})
  }

  render() {
    return (
      <div className="col">
        <button onClick={this.click.bind(this)}>点击</button>
        <button onClick={this.multiClick.bind(this)}>多列点击</button>
        <button onClick={this.timeClick.bind(this)}>时间点击</button>

        <Picker
          onChange={this.handleChange.bind(this)}
          range={this.state.picker_group}
          show={this.state.picker_show}
          onCancel={this.handelCanel.bind(this)}
        />
        <Picker
          type="multiSelector"
          onChange={this.handleChange.bind(this)}
          range={cnCity}
          show={this.state.multi_picker_show}
          onCancel={this.handelCanel.bind(this)}
        />
         <Picker
          type="date"
          value={this.state.time}
          onChange={this.handleChange.bind(this)}
          max={new Date()}
          min={new Date('2017-1-1')}
          show={this.state.isOpen}
          onCancel={this.handelCanel.bind(this)}
        />
      </div>
    );
  }
}

export default P;
