// eslint-disable-next-line
import React from '@react';
import './index.scss';
import XIcon from '../XIcon/index';

function collectCheckboxInstances(fiber, ret, instance) {
    for (fiber = fiber.child; fiber; fiber = fiber.sibling) {
        if (fiber.name === 'XCheckbox') {
            ret.push(fiber.stateNode);
        } else if (fiber.child) {
            collectCheckboxInstances(fiber, ret, instance);
        }
    }
}

const styleConfig = {
    width: 40,
    fontSize: 34,
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

class XCheckbox extends React.Component {
  constructor(props) {
    super(props);
    const { width, fontSize } = getSizeStyle(props.size);
    this.state = {
        checked: props.checked,
        width,
        fontSize
    };

    this.onClick = this.onClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  onClick() {
      console.log('checkbox click');
      // 不在 XLabel 里响应本身 click 事件
      if (!this.props.__InLabel) {
          console.log('out label')
          this.handleClick();
      }
  }

  handleClick() {
      if (this.props.disabled) {
          return;
      }

      let fiber = this._reactInternalFiber;
      console.log('fiber: ',fiber);
      const checkboxInstances = [];
      let parentInstance = null;
      while (fiber.return) {
          fiber = fiber.return;
          if (fiber.name === 'XCheckboxGroup') {
              parentInstance = fiber.stateNode;
              collectCheckboxInstances(fiber, checkboxInstances, this);
          }
      }

      this.setState(
          { checked: !this.state.checked },
          () => {
              const checkedCheckboxes = checkboxInstances.filter(checkboxInstance => checkboxInstance.state.checked)
                                                         .map(checkboxInstance => checkboxInstance.props.value);

              parentInstance && parentInstance.emitEvent(checkedCheckboxes);
          }
      );

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
                onClick={this.onClick}
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
                    <XIcon
                        content="&#xf078;"
                        color={this.props.disabled ? DISABLED_ENHANCE_COLOR : this.props.color}
                        size={this.state.fontSize}
                    /> :
                    null
                }
            </div>
            {this.props.isRight && <text>{this.props.text}</text>}
        </div>
    );
  }
}

XCheckbox.defaultProps = {
  disabled: false,
  checked: false,
  value: '',
  text: '',
  isRight: true,
  color: DEFAULT_CHECKED_COLOR,
  size: 'default',
  __InLabel: false
};


export default XCheckbox;
