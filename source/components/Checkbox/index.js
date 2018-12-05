// eslint-disable-next-line
import React from '@react';
import './index.scss';

const styleConfig = {
    width: 36,
    fontSize: 30,
    gap: 4
};

function getSizeStyle(size) {
    let { width, fontSize, gap } = styleConfig;
    switch (size) {
        case 'large':
            width += gap;
            fontSize += gap;
            break;
        case 'small':
            width -= gap;
            fontSize -= gap;
            break;
    }
    return {
        width: `${width}px`,
        fontSize: `${fontSize}px`
    };
}

// 颜色应该在组件库里统一设置
const BACKGROUND_COLOR = '#ffffff'; // 正常背景色
const DISABLED_COLOR = '#e1e1e1'; // disabled 背景色
const DISABLED_ENHANCE_COLOR = '#b3b3b3'; // disabled 强调色
const DEFAULT_CHECKED_COLOR = '#1aad16';

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    const { width, fontSize } = getSizeStyle(props.size);
    this.state = {
        checked: props.checked,
        width,
        fontSize
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
      if (this.props.disabled) {
          return;
      }

      let fiber = this._reactInternalFiber;
      let parentInstance = null;
      while (fiber.return) {
          fiber = fiber.return;
          if (fiber.name === 'CheckboxGroup') {
              parentInstance = fiber.stateNode;
          }
      }

      this.setState({ checked: !this.state.checked });

      parentInstance && parentInstance.emitEvent(this.props.value);
  }

  componentWillReceiveProps(nextProps) {
      const updateProps = {};
      let shouldUpdate = false;
      ['checked', 'size'].forEach(key => {
          if (nextProps[key] !== this.props[key]) {
              shouldUpdate = true;
              if (key === 'size') {
                  const { width, fontSize } = getSizeStyle(nextProps.size);
                  updateProps.width = width;
                  updateProps.fontSize = fontSize;
              } else {
                  updateProps[key] = nextProps[key];
              }
          }
      });
      if (shouldUpdate) {
          this.setState(updateProps);
      }
  }

  render() {
    return (
        <div class="checkbox-container">
            {!this.props.isRight && <text>{this.props.text}</text>}
            <div
                class="checkbox"
                onClick={this.handleClick}
                style={{
                    backgroundColor: this.props.disabled ? DISABLED_COLOR : BACKGROUND_COLOR,
                    marginLeft: this.props.isRight ? '0px' : '10px',
                    marginRight: this.props.isRight ? '10px' : '0px',
                    minWidth: this.state.width,
                    minHeight: this.state.width,
                    width: this.state.width,
                    height: this.state.width
                }}
            >
                {
                    this.state.checked ?
                    <span
                        class="checkbox__check"
                        style={{
                            color: this.props.disabled ? DISABLED_ENHANCE_COLOR : this.props.color,
                            fontSize: this.state.fontSize
                        }}
                    ></span> :
                    null
                }
            </div>
            {this.props.isRight && <text>{this.props.text}</text>}
        </div>
    );
  }
}

Checkbox.defaultProps = {
  disabled: false,
  checked: true,
  value: '',
  text: '',
  isRight: true,
  color: DEFAULT_CHECKED_COLOR,
  size: 'default'
};


export default Checkbox;
