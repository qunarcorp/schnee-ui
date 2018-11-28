import React from '@react';

import Progress from '@components/Progress/index';

  
class P extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div class="container col">
        <div class="progress-title">
          <text>默认样式：</text>
        </div>
        <Progress percent={10} class="progress-cell" />
        <div class="progress-title">
          <text>自定义进度条颜色：</text>
        </div>
        <Progress percent={20} class="progress-cell" strokeColor="#52c41a" />
        <div class="progress-title">
          <text>不显示提示信息：</text>
        </div>
        <Progress percent={40} class="progress-cell" showInfo={false} />
        <div class="progress-title">
          <text>自定义进度条高度：</text>
        </div>
        <Progress percent={60} class="progress-cell" strokeHeight={20} />
        <div class="progress-title">
          <text>自定义进度条圆角大小：</text>
        </div>
        <Progress percent={80} class="progress-cell" strokeHeight={20} borderRadius={6} />
      </div>
    );
  }
}

export default P;
