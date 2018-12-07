import React from '@react';

import Switch from '@components/Switch/index';
// import '@common/style/common.css'
import './index.scss';

class P extends React.Component {
  constructor() {
    super();
    this.state = {
      innerStyle: {
        borderRadius: 0,
        backgroundColor: '#fac450'
      },
      wrapperStyle: {
        borderRadius: 0
      }
    };
  }

  change(e) {
    console.log('change value', e);
  }

  render() {
    return (
      <div className="col">
        <div class="item-box">
          <text class="item-txt">选项</text>
          <Switch checked={false} onChange={this.change.bind(this)} />
        </div>
        <div class="item-box">
          <text class="item-txt">不可用</text>
          <Switch checked={false} disabled={true} onChange={this.change.bind(this)} />
        </div>
        <div class="item-box">
          <text class="item-txt">不可用</text>
          <Switch checked={true} disabled={true} onChange={this.change.bind(this)} />
        </div>
        <div class="item-box">
          <text class="item-txt">自定义组件</text>
          <Switch checked={false} color="red" innerStyle={this.state.innerStyle} wrapperStyle={this.state.wrapperStyle}/>
        </div>
      </div>
    );
  }
}

export default P;
