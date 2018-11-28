import React from '@react';
import './index.scss';
// import Button from '@components/Button/index';
import Button from '@components/Button/index';
class P extends React.Component {
  constructor() {
    super();
    this.state = {
      defaultSize: 'default',
      primarySize: 'default',
      warnSize: 'default',
      disabled: false,
      plain: false,
      loading: false
    };
  }

  setDisabled() {
    console.log('disabled');
    this.setState({
      disabled: !this.state.disabled
    });
  }

  setPlain() {
    this.setState({
      plain: !this.state.plain
    });
  }

  setLoading() {
    this.setState({
      loading: !this.state.loading
    });
  }

  onGotUserInfo(e) {
    // eslint-disable-next-line
    console.log(e);
  }

  click() {
    console.log(11111);
  }
  render() {
    return (
      <div class="container button-wrapper col">
        <div class="item">
          <Button
            class="item"
            type="default"
            loading={this.state.loading}
            disabled={this.state.disabled}
            plain={this.state.plain}
          >
            default
          </Button>
        </div>
        <div class="item">
          <Button
            class="item"
            type="primary"
            size="mini"
            loading={this.state.loading}
            disabled={this.state.disabled}
            plain={this.state.plain}
          >
            primary
          </Button>
        </div>
        <div class="item">
          <Button class="item" type="warn"
           disabled={this.state.disabled} 
           plain={this.state.plain}
           loading={this.state.loading}
           >
            warn
          </Button>
          <Button class="item" type="warn"
           disabled={this.state.disabled} 
           plain={this.state.plain}
           >
            warn1111
          </Button>
        </div>
        <div class="item">
          <Button click={this.setDisabled.bind(this)} >点击设置以上按钮disabled属性</Button>
        </div>
        <div class="item">
          <Button click={this.setPlain.bind(this)}>点击设置以上按钮plain属性</Button>
        </div>
        <div class="item">
          <Button click={this.setLoading.bind(this)}>点击设置以上按钮loading属性</Button>
        </div>
        <div class="item">
          <input value="xxxxx" color="rgba(1,0,0,1)" type="button"></input>
        </div>

        {/* <button
                    type="default"
                    size={this.state.defaultSize}
                    loading={this.state.loading}
                    plain={this.state.plain}
                    disabled={this.state.disabled}
                    bindtap="default"
                    hover-class="other-button-hover"
                >
                    {' '}
                    default{' '}
                </button>
                <button
                    type="primary"
                    size={this.state.primarySize}
                    loading={this.state.loading}
                    plain={this.state.plain}
                    disabled={this.state.disabled}
                    bindtap="primary"
                >
                    {' '}
                    primary{' '}
                </button>
                <button
                    type="warn"
                    size={this.state.warnSize}
                    loading={this.state.loading}
                    plain={this.state.plain}
                    disabled={this.state.disabled}
                    bindtap="warn"
                >
                    {' '}
                    warn{' '}
                </button>
                <button onTap={this.setDisabled}>
                    点击设置以上按钮disabled属性
                </button>
                <button onTap={this.setPlain}>点击设置以上按钮plain属性</button>
                <button onTap={this.setLoading}>
                    点击设置以上按钮loading属性
                </button>
                <button open-type="contact">进入客服会话</button>
                <button
                    open-type="getUserInfo"
                    lang="zh_CN"
                    onGetuserinfo={this.onGotUserInfo}
                >
                    获取用户信息
                </button>
                <button open-type="openSetting">打开授权设置页</button> */}
      </div>
    );
  }
}

export default P;
