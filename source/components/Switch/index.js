import React from '@react';
import './index.scss';

const baseInnerStyle = {
  width: '68px',
  height: '68px',
  borderRadius: '34px',
  backgroundColor: '#ffffff'
};

const baseWrapperStyle = {
  width: '156px',
  height: '76px',
  borderRadius: '38px',
  backgroundColor: '#C1C1C1'
};

function jsonEqual(objA, objB) {
  let flag = false;
  if (typeof objA !== 'object') {
    return objA !== objB;
  }

  for (let key in objA) {
    if (!objB.hasOwnProperty(key)) {
      flag = true;
      break;
    }

    flag = objA[key] !== objB[key];
  }

  return flag;
}

class Switch extends React.Component {
  constructor(props) {
    super(props);
    console.log('props', props);
    let { checked, innerStyle, wrapperStyle } = this.computeState(props, props.checked);
    this.state = {
      checked,
      innerStyle,
      wrapperStyle
    };
  }

  computeState(props, checked) {
    const { innerStyle, wrapperStyle } = props;
    let backgroundColor = checked ? this.props.color : this.props.checkColor;
    let newWrapperStyle = Object.assign({}, baseWrapperStyle, wrapperStyle, { backgroundColor });
    let newInnerStyle = Object.assign({}, baseInnerStyle, innerStyle);
    console.log('newWrapper', newWrapperStyle);
    return {
      checked,
      innerStyle: newInnerStyle,
      wrapperStyle: newWrapperStyle
    };
  }

  updateState(nextProps, checked) {
    let newState = this.computeState(nextProps, checked);
    let lastState = {};

    let oldState = this.state;
    let diff = false;
    for (let i in oldState) {
      if (jsonEqual(oldState[i], newState[i])) {
        diff = true;
        lastState[i] = newState[i];
      }
    }

    if (diff) {
      this.setState(lastState);
    }
  }

  onClick(e) {
    let fn = this.props.onChange;

    if (!this.props.disabled) {
      fn && fn.call(this, { ...e, value: !this.state.checked });
      this.updateState(this.props, !this.state.checked);
    }
  }
  componentWillReceiveProps(nextProps) {
    console.log('nextProps', nextProps);
    this.updateState(nextProps, nextProps.checked);
  }

  render() {
    return (
      <div class="anu-switch">
        <stack
          class={
            'anu-switch__checkbox ' + (this.props.disabled ? 'anu-switch__checkbox--disabled' : '')
          }
          style={this.state.wrapperStyle}
          id="{{id}}"
          onClick={this.onClick.bind(this)}
        >
          <div
            class={
              'anu-switch__thumb ' +
              (this.state.checked ? 'anu-switch__thumb--open' : ' anu-switch__thumb--close')
            }
            style={this.state.innerStyle}
          />
        </stack>
      </div>
    );
  }
}

Switch.defaultProps = {
  disabled: false,
  checked: false,
  innerStyle: {
    width: '68px',
    height: '68px',
    borderRadius: '34px',
    backgroundColor: '#ffffff'
  },
  wrapperStyle: {
    width: '156px',
    height: '76px',
    borderRadius: '38px',
    backgroundColor: '#C1C1C1'
  },
  color: '#2998F9',
  checkColor: '#C1C1C1'
};

export default Switch;
