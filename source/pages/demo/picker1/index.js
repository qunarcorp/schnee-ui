import React from '@react';
import AnuPicker from '@components/AnuPicker/index';

import './index.scss';

class P extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      index: 0,
      list1: ['iphone', '华为', '小米', '三星', '魅族', '锤子', 'oppo']
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

  change() {
    
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
            visible={this.state.show}
            value={0}
            onCancel={this.close.bind(this)}
            onChange={this.change.bind(this)}
            range={this.state.list1}
          >
            <text>当前选择：{this.state.list1[this.state.index]}</text>
          </AnuPicker>
        </div>
      </div>
    );
  }
}

export default P;
