import React from '@react';
import './index.scss';
/* eslint-disable */
class AnuOverlay extends React.Component {
  constructor(props) {
    super(props);
    console.log('AnuOverlay');
    this.state = {
      show: false,
      className: ''
    };
  }

  componentDidMount() {
    this.updateVisible(this.props.visible);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.visible !== nextProps.visible) {
      console.log('overlay', 111, nextProps.visible);
      this.updateVisible(nextProps.visible);
    }
  }

  updateVisible(visible) {
    this.timeoutId && clearTimeout(this.timeoutId); //防止更改太快
    console.log('over>>>>>>', visible);
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

  render() {
    return (
      <div class="quist-overlay">
        <div
          class={'quist-overlay-mask  ' + this.state.className}
          style={{ backgroundColor: this.props.background }}
          hidden={!this.state.show}
          onClick={this.overlayClick.bind(this)}
        />
      </div>
    );
  }
}

AnuOverlay.defaultProps = {
  maskClosable: false,
  visible: false,
  background: 'rgba(0, 0, 0, 0.6)'
};

export default AnuOverlay;
