import React from '@react';
import AnuPicker from '@components/AnuPicker/index';
import cnCity from '../../../common/utils/cnCity';
/* eslint-disable */
import './index.scss';

class P extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      index: 0,
      multiIndex: ['无脊柱动物', '扁性动物', '猪肉绦虫'],
      date: '2016-09-01',
      time: '12:01',
      region: ['广东省', '广州市', '海珠区'],
      multiArray: [
        {
          name: '无脊柱动物',
          sub: [
            {
              name: '扁性动物',
              sub: [
                {
                  name: '猪肉绦虫'
                },
                {
                  name: '吸血虫'
                }
              ]
            },
            {
              name: '线形动物',
              sub: [
                {
                  name: '蛔虫'
                }
              ]
            }
          ]
        },
        {
          name: '脊柱动物',
          sub: [
            {
              name: '鱼',
              sub: [
                {
                  name: '鲫鱼'
                },
                {
                  name: '带鱼'
                }
              ]
            }
          ]
        }
      ],
      list1: [
        'iphone',
        '华为',
        '小米',
        '三星',
        '魅族',
        '锤子',
        'oppo',
        'vivo',
        'iphone',
        '华为',
        '小米',
        '三星',
        '魅族',
        '锤子',
        'oppo',
        'vivo'
      ]
    };
  }

  showPicker() {
    console.log('showPicker');
    this.setState({
      show: true
    });
  }

  close() {
    console.log('close');
    this.setState({
      show: false
    });
  }

  change(e) {
    console.log('...', e);
    this.setState({
      index: e.value
    });
  }

  bindMultiPickerChange(e) {
    this.setState({
      multiIndex: e.value
    });
  }

  bindDateChange(e) {
    console.log('...bindDateChange', e);
    this.setState({
      date: e.value
    });
  }

  bindTimeChange(e) {
    this.setState({
      time: e.value
    })
  }

  bindRegionChange(e) {
    this.setState({
      region: e.value
    })
  }

  render() {
    return (
      <div class="picker-demo">
        <div class="picker-title">
          <text class="title-text">基本</text>
        </div>
        <div class="item-li">
          <text class="item-li-detail">一列</text>
          <AnuPicker
            value={0}
            onCancel={this.close.bind(this)}
            onChange={this.change.bind(this)}
            range={this.state.list1}
          >
            <text>当前选择：{this.state.list1[this.state.index]}</text>
          </AnuPicker>
        </div>
        <div class="item-li">
          <text class="item-li-detail">多列</text>
          <AnuPicker
            mode="multiSelector"
            value={this.state.multiIndex}
            onCancel={this.close.bind(this)}
            onChange={this.bindMultiPickerChange.bind(this)}
            range={this.state.multiArray}
          >
            <text>
              当前选择：{this.state.multiIndex[0]}, {this.state.multiIndex[1]},{' '}
              {this.state.multiIndex[2]}
            </text>
          </AnuPicker>
        </div>
        <div class="item-li">
          <text class="item-li-detail">日期选择器</text>
          <AnuPicker
            mode="date"
            value={this.state.date}
            start="2015-09-01"
            end="2017-09-01"
            onCancel={this.close.bind(this)}
            onChange={this.bindDateChange.bind(this)}
          >
            <text>当前选择：{this.state.date}</text>
          </AnuPicker>
        </div>
        <div class="item-li">
          <text class="item-li-detail">时间选择器</text>
          <AnuPicker
            mode="time"
            value={this.state.time}
            start="09:01"
            end="21:01"
            onCancel={this.close.bind(this)}
            onChange={this.bindTimeChange.bind(this)}
          >
            <text>当前选择：{this.state.time}</text>
          </AnuPicker>
        </div>
        <div class="item-li">
          <text class="item-li-detail">省市区选择器</text>
          <AnuPicker
            mode="region"
            value={this.state.region}
            onCancel={this.close.bind(this)}
            onChange={this.bindRegionChange.bind(this)}
          >
            <text>当前选择：{this.state.region[0]}, {this.state.region[1]},{this.state.region[2]}</text>
          </AnuPicker>
        </div>
      </div>
    );
  }
}

export default P;
