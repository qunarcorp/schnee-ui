import React from '@react';
import './index.scss';
import * as TimeUtil from '../../common/utils/time.js';
/* eslint-disable */
const DATE_LENGTH = 14; // 日期的个数
const MIDDLE_INDEX = Math.floor(DATE_LENGTH / 2); // 日期数组中间值的索引
const DEFAULT_INEDX = 3; // 中间索引距离顶部的索引差

function calculate(value) {
  const ANU_ENV = process.env.ANU_ENV; //wx ali bu quick
  if (ANU_ENV === 'quick') {
    return value * 2;
  } else {
    return value;
  }
}

class XDatePickerItem extends React.Component {
  constructor(props) {
    super(props);

    const dates = this._iniDates(props);
    this.currentIndex = MIDDLE_INDEX; // 滑动中当前日期的索引
    this.moveDateCount = 0; // 一次滑动移动了多少个时间
    this.translateY = 0; // 容器偏移的距离
    this.touchY = 0; // 保存touchstart的pageY
    this.state = {
      touching: false,
      touchId: undefined,
      ogY: 0,
      ogTranslate: 0, // 移动之前的起始位置
      translateY: -MIDDLE_INDEX * calculate(props.itemHeight) + calculate(props.indicatorTop),
      totalHeight: 0,
      selected: 0,
      marginTop: 0,
      totalHeight: DATE_LENGTH * calculate(props.indicatorHeight),
      dates
    };
  }

  _iniDates(props) {
    const { type, value } = props;
    const dates = Array(...Array(DATE_LENGTH)).map((item, index) => {
      let date = TimeUtil[`next${type}`](value, (index - MIDDLE_INDEX) * this.props.step);
      let disabled = date < this.props.start || date > this.props.end;
      return { key: TimeUtil.convertDate(date, this.props.format), date, disabled };
    });

    return dates;
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.visible) {
      const dates = this._iniDates(nextProps);
      this.setState({
        dates
      })
    }
  }

  handleTouchStart(e) {
    if (this.state.touching) return;
    this.moveDateCount = 0;

    this.touchY = e.touches[0].pageY; // 移动开始的位置
    this.translateY = this.state.translateY;

    this.setState({
      touching: true,
      ogTranslate: this.state.translateY,
      touchId: e.touches[0].identifier,
      ogY: e.touches[0].pageY - this.state.translate,
      animating: false
    });
  }

  handleTouchMove(e) {
    if (!this.state.touching) return;
    if (e.touches[0].identifier !== this.state.touchId) return;

    const touchY = e.touches[0].pageY; // 当前的位置
    const dir = touchY - this.touchY; // 移动的位置差
    const translateY = this.translateY + dir; // 现在坐标应该在的位置
    this.setState({
      translateY
    });

    const direction = dir > 0 ? -1 : 1;
    // 这个地方需要加上如何进行视图更新的逻辑
    if (this._checkIsUpdateDates(direction, translateY)) {
      this._updateDates(direction);
    }
  }

  // 往上为正，往下为负
  _updateDates(direction) {
    const typeName = this.props.type;
    let { dates } = this.state;
    let itemHeight = calculate(this.props.itemHeight);
    if (direction === 1) {
      let value = TimeUtil[`next${typeName}`](dates[dates.length - 1].date, this.props.step);
      this.currentIndex++;
      let key = TimeUtil.convertDate(value, this.props.format);
      let disabled = value < this.props.start || value > this.props.end;

      this.setState({
        dates: [...dates.slice(1), { key, date: value, disabled }],
        marginTop: (this.currentIndex - MIDDLE_INDEX) * itemHeight
      });
    } else {
      this.currentIndex--;
      // 向下滑动机制
      let value = TimeUtil[`next${typeName}`](dates[0].date, -this.props.step);
      let key = TimeUtil.convertDate(value, this.props.format);
      let disabled = value < this.props.start || value > this.props.end;
      this.setState({
        dates: [{ key, date: value, disabled }, ...dates.slice(0, dates.length - 1)],
        marginTop: (this.currentIndex - MIDDLE_INDEX) * itemHeight
      });
    }
  }

  // // 是否更新
  _checkIsUpdateDates(direction, translateY) {
    let itemHeight = calculate(this.props.itemHeight);

    let isUpdate =
      direction === 1
        ? (this.currentIndex - DEFAULT_INEDX) * itemHeight + itemHeight / 2 < -translateY
        : (this.currentIndex - DEFAULT_INEDX) * itemHeight - itemHeight / 2 > -translateY;

    return isUpdate;
  }

  handleTouchEnd() {

    if (!this.state.touching) return;

    let itemHeight = calculate(this.props.itemHeight);

    let translate = this.state.translateY;
    

    if (Math.abs(translate - this.state.ogTranslate) < itemHeight * 0.51) {
      translate = this.state.ogTranslate;
    } else {
      
      translate = -(this.currentIndex - DEFAULT_INEDX) * itemHeight;
    }

    this.setState(
      {
        touching: false,
        ogY: 0,
        touchId: undefined,
        ogTranslate: 0,
        animating: true,
        translateY: translate
      },
      () => this.updateSelected()
    );
  }

  updateSelected() {

    this.props.onChange && this.props.onChange(this.state.dates[MIDDLE_INDEX]);
  }

  render() {
    return (
      <stack
        catchTouchStart={this.handleTouchStart.bind(this)}
        catchTouchMove={this.handleTouchMove.bind(this)}
        onTouchEnd={this.handleTouchEnd.bind(this)}
        style={{ width: '100%' }}
        class="anu-stack"
      >
        <div
          class="anu-picker_content"
          style={
            'transform: translateY(' +
            this.state.translateY +
            'px); height: ' +
            this.state.totalHeight +
            'px; margin-top:' +
            this.state.marginTop +
            'px'
          }
        >
          {this.state.dates.map(function(item, index) {
            return (
              <text
                class={'anu-picker__item ' + (item.disabled ? 'anu-picker__item_disabled' : '')}
              >
                {item.key}
              </text>
            );
          })}
        </div>

        <div class="anu-picker__mask">
          <div class="anu-picker__mask_top" />
          <div class="anu-picker__mask_center" />
          <div class="anu-picker__mask_bottom " />
        </div>
      </stack>
    );
  }
}

XDatePickerItem.defaultProps = {
  itemHeight: 25 + 9, //content + padding
  indicatorTop: 102, // 中心点距离pick顶部的高度
  indicatorHeight: 34,
  aniamtion: true,
  groupIndex: -1,
  defaultIndex: -1,
  mapKeys: {
    label: 'label'
  }
};

export default XDatePickerItem;
