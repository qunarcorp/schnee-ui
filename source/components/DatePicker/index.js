// eslint-disable-next-line
import React from '@react';
import { nextDate } from './time.js';
import { dateConfigMap } from './dataSource';
import './index.scss';
import classNames from '../../common/utils/classnames';
import Mask from '../Mask/index';
import DatePickerItem from '../DatePickerItem/index';
/**
 * 大写首字母
 * @param {String} 字符串
 */
const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join('');

/**
 * 判断数组
 * @param {any} val
 */
const isArray = val => Object.prototype.toString.apply(val) === '[object Array]';

class DatePicker extends React.Component {

  static defaultProps = {
    min: new Date(1970, 0, 1),
    max: new Date(2050, 0, 1),
    actions: [],
    groups: [],
    show: false,
    lang: { leftBtn: 'Cancel', rightBtn: 'Ok' }
  };



  constructor(props) {
    super(props);
    const dataConfigList = this.normalizeDateConfig(props.dateConfig);
    console.log('dataConfigList', dataConfigList)
    const {cls, maskCls} = this.handleClassName(props, false)
    this.state = {
      value: nextDate(this.props.value),
      dataConfigList,
      selected: 0,
      actions:
        this.props.actions.length > 0
          ? this.props.actions
          : [
              {
                label: this.props.lang.leftBtn,
                onClick: e =>
                  this.handleClose(() => {
                    if (this.props.onCancel) this.props.onCancel(e);
                  })
              },
              {
                label: this.props.lang.rightBtn,
                onClick: e => this.handleChanges()
              }
            ],
      closing: false,
      cls,
      maskCls
    };






    this.handleFinishBtnClick = this.handleFinishBtnClick.bind(this);
    this.handleDateSelect = this.handleDateSelect.bind(this);
    this.normalizeDateConfig = this.normalizeDateConfig.bind(this);
    this.handleClassName = this.handleClassName.bind(this);
  }

  handleClassName(props, closing) {
    const cls = classNames(
      'weui-picker',
      {
        'weui-animate-slide-up': props.show && !closing,
        'weui-animate-slide-down': closing
      },
      props.className
    );

    const maskCls = classNames({
      'weui-animate-fade-in': props.show && !closing,
      'weui-animate-fade-out': closing
    });

    return { cls, maskCls };
  }

  componentWillReceiveProps(nextProps) {
    // update value of state
    const date = nextDate(nextProps.value);
    if (date.getTime() !== this.state.value.getTime()) {
      this.setState({ value: date });
    }
  }

  /**
   * When you swipe two datepickeritems at the same time.
   * Prevent dates from going out.
   */
  componentDidUpdate() {
    const value = this.state.value;
    const { min, max } = this.props;
    if (value.getTime() > max.getTime()) {
      this.setState({ value: max });
    }

    if (value.getTime() < min.getTime()) {
      this.setState({ value: min });
    }
  }

  componentWillReceiveProps(nextProps) {
    // console.log(this.props.show, nextProps.show, this.state.closing);
    if (this.props.show !== nextProps.show) {
      let { cls, maskCls } = this.handleClassName(nextProps, this.state.closing);
      this.setState({
        cls,
        maskCls
      });
    }
  }

  /**
   * 点击完成按钮事件
   * @return {undefined}
   */
  handleFinishBtnClick() {
    this.props.onSelect(this.state.value);
  }

  /**
   * 选择下一个日期
   * @return {undefined}
   */
  handleDateSelect(value) {
    this.setState({ value });
  }

  /**
   * 格式化dateConfig
   * @param {*} dataConfig dateConfig属性
   */
  normalizeDateConfig(dataConfig) {
    const configList = [];
    if (isArray(dataConfig)) {
      for (let i = 0; i < dataConfig.length; i++) {
        const value = dataConfig[i];
        if (typeof value === 'string') {
          const lowerCaseKey = value.toLocaleLowerCase();
          configList.push({
            ...dateConfigMap[lowerCaseKey],
            type: capitalize(lowerCaseKey)
          });
        }
      }
    } else {
      for (const key in dataConfig) {
        if (dataConfig.hasOwnProperty(key)) {
          const lowerCaseKey = key.toLocaleLowerCase();
          if (dateConfigMap.hasOwnProperty(lowerCaseKey)) {
            configList.push({
              ...dateConfigMap[lowerCaseKey],
              ...dataConfig[key],
              type: capitalize(lowerCaseKey)
            });
          }
        }
      }
    }

    return configList;
  }

  handleCancel() {
    console.log('handleCancel')
  }

  /**
   * render函数
   * @return {Object} JSX对象
   */
  render() {
    return this.props.show ? (
      <div>
        <Mask className={this.state.maskCls} click={this.handleCancel.bind(this)} />
        <div class={this.state.cls}>
          <div class="weui-picker__hd">
            {this.state.actions.map(function(action, i) {
              return (
                <a
                  onClick={action.onClick}
                  key={i}
                  class={'weui-picker__action ' + 'weui-picker__action_' + i}
                >
                  {action.label}
                </a>
              );
            })}
          </div>
          <div className="weui-picker__bd">
            {this.state.dataConfigList.map(function(item, index) {
              return (
                <div style="display: flex; flex: 1; justify-content:center">
                  <DatePickerItem
                    key={index}
                    value={this.state.value}
                    min={this.props.min}
                    max={this.props.max}
                    step={item.step}
                    type={item.type}
                    format={item.format}
                  />

                </div>
              );
            })}
          </div>
        </div>
      </div>
    ) : null;
  }
}

export default DatePicker;
