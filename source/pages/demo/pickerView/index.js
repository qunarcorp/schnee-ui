import React from '@react';
import XPickerView from '@components/XPickerView/index';
import XPickerViewColumn from '@components/XPickerViewColumn/index';

/* eslint-disable */
import './index.scss';

const date = new Date()
const years = []
const months = []
const days = []

for (let i = 1990; i <= date.getFullYear(); i++) {
  years.push(i)
}

for (let i = 1 ; i <= 12; i++) {
  months.push(i)
}

for (let i = 1 ; i <= 31; i++) {
  days.push(i)
}


class P extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      years: years,
      year: date.getFullYear(),
      months: months,
      month: 2,
      days: days,
      day: 2,
      value: [1, 2, 3],
    };
  }

  changeValue() {
    console.log('changeValue');
    this.setState({
      value: [6, 5, 9]
    });
  }

  render() {
    return (
      <div >
        <div class="picker-wrapper">
          <XPickerView 
            indicator-style={{
              height: '60px'
            }}
            style={{
              height: '445px'
            }}
            mask-style={{
              // backgroundColor: 'yellow',
              // border: '1px solid red'
            }}
            value={this.state.value}
            bindpickstart={(item) => {
              console.log('bindpickstart', item);
            }}
            bindchange={(item) => {
              console.log('bindchange', item);
            }}
            bindpickend={(item) => {
              console.log('bindpickend', item);
            }}
          >
            <XPickerViewColumn index={0} >
              {
                this.state.years.map((item, idx) => {
                  return <text key={idx} 
                  style={{height: '60px'}}
                  >{item}年</text>
                })
              }
            </XPickerViewColumn>
            <XPickerViewColumn index={1}>
              {
                this.state.months.map((item, idx) => {
                  return <text key={idx} 
                  style={{height: '60px'}}  
                  >{item}月</text>
                })
              }
            </XPickerViewColumn>
            <XPickerViewColumn index={2}>
              {
                this.state.days.map((item, idx) => {
                  return <text key={idx} 
                  style={{height: '60px'}}
                   >{item}日</text>
                })
              }
            </XPickerViewColumn>
          </XPickerView>

          <div onClick={() => {
            this.changeValue()
          }}>changeValue</div>

        </div>

        
        {/* <div class="row">
          <div class="col">
            <div class="viewport">
              <div class="list" style={{ width: '100%' }}>
                <text class="item">hello1</text>
                <text class="item">hello2</text>
                <text class="item">hello3</text>
                <text class="item">hello4</text>
                <text class="item">hello5</text>
                <text class="item">hello6</text>
                <text class="item">hello7</text>
                <text class="item">hello8</text>
                <text class="item">hello9</text>
                <text class="item">hello10</text>
              </div>
              <div class="anu-picker__mask">
                <div class="anu-picker__mask_top" />
                <div class="anu-picker__mask_center" />
                <div class="anu-picker__mask_bottom " />
              </div>
            </div>
          </div>
          <div class="col">
            <text class="item">hello</text>
            <text class="item">hello</text>
            <text class="item">hello</text>
            <text class="item">hello</text>
            <text class="item">hello</text>
          </div>
        </div> */}

      </div>
    );
  }
}

export default P;
