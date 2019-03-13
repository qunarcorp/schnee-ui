import React from '@react';
import './index.scss';
/* eslint-disable */
// 蒙层
class XOverlay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      className: ''
    };

    this.overlayClick = this.overlayClick.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);
  }

  componentDidMount() {
    this.updateVisible(this.props.visible);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.visible !== nextProps.visible) {
      this.updateVisible(nextProps.visible);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    // 只在必要属性变化的时候，才更新，防止快应用的闪烁问题
    if (
      nextProps.visible === this.props.visible &&
      nextState.show === this.state.show &&
      nextState.className === this.state.className
    ) {
      return false;
    }
    return true;
  }
  
  updateVisible(visible) {
    this.timeoutId && clearTimeout(this.timeoutId); //防止更改太快
    if (visible) {
      this.setState({
        show: true,
        className: 'quist-overlay-enter'
      });
    } else {
      this.setState({
        className: 'quist-overlay-leave'
      });

      this.timeoutId = setTimeout(() => {
        this.setState({
          show: false
        });
      }, 500);
    }
  }

  overlayClick() {
    this.setState({
      show: false
    });
    this.props.onClose && this.props.onClose();
  }

  // TODO: 支付宝小程序，阻止页面滚动
  handleTouchMove(e) {
    // 阻止滑动
    return false;
  }

  render() {
    return (
        <div
          className={'quist-overlay-mask  ' + this.state.className}
          style={{ backgroundColor: this.props.background, display:  this.state.show ? 'flex' : 'none'}}
          onClick={this.overlayClick}
          catchTouchMove={this.handleTouchMove}
        />
    );
  }
}

XOverlay.defaultProps = {
  maskClosable: false,
  visible: false,
  background: 'rgba(0, 0, 0, 0.6)'
};

export default XOverlay;
