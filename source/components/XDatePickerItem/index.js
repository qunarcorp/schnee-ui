import React from '@react';
// import PropTypes from 'prop-types';
import classNames from '../../common/utils/classnames';
import './index.scss';
import * as TimeUtil from '../XDatePicker/time';

const DATE_HEIGHT = 34;
const DATE_LENGTH = 7; // 日期的个数
const MIDDLE_INDEX = Math.floor(DATE_LENGTH / 2); // 日期数组中间值的索引
const MIDDLE_Y = -DATE_HEIGHT * MIDDLE_INDEX; // translate值

class XDatePickerItem extends React.Component {
  static defaultProps = {
    height: 238,
    itemHeight: 25 + 9, //content + padding
    indicatorTop: 102,
    indicatorHeight: 34,
    aniamtion: true,
    groupIndex: -1,
    defaultIndex: -1,
    mapKeys: {
      label: 'label'
    }
  };

  constructor(props) {
    super(props);
    const cls = classNames('weui-picker__group', props.className);
    this.state = {
      touching: false,
      ogY: 0,
      ogTranslate: 0,
      touchId: undefined,
      translate: 0,
      totalHeight: 0,
      selected: 0,
      animating: this.props.animation,
      cls,
      currentIndex: MIDDLE_INDEX // // 滑动中当前日期的索引
    };

    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
    this.updateSelected = this.updateSelected.bind(this);
    this._checkIsUpdateDates = this._checkIsUpdateDates.bind(this);
  }

  componentWillMount() {
    this._iniDates(this.props.value);
    // console.log('min', this.props.min);
    // console.log('max', this.props.max);
  }
  componentDidMount() {
    // this.adjustPosition(this.props);
  }

  _iniDates(date) {
    const typeName = this.props.type;
    console.log('typeName', typeName);
    const dates = Array(...Array(DATE_LENGTH)).map((item, index) => {
      let value = TimeUtil[`next${typeName}`](date, (index - MIDDLE_INDEX) * this.props.step);
      // return TimeUtil.convertDate(value, this.props.format);
      let disabled = value < this.props.start || value > this.props.end;

      return { key: TimeUtil.convertDate(value, this.props.format), value, disabled };
    });
    console.log('dates', dates);
    this.setState({ dates });
  }

  componentWillReceiveProps(nextProps) {
    // this.adjustPosition(nextProps);
    if (this.props.className !== nextProps.className) {
      const cls = classNames('weui-picker__group', nextProps.className);
      this.setState({
        cls
      });
    }
    // if (nextProps.value.getTime() !== this.props.value.getTime()) {
    //   this._iniDates(nextProps.value);
    //   this.setState({
    //     currentIndex: MIDDLE_INDEX,

    //   })
    // }
  }

  updateSelected(propagate = true) {
    const { itemHeight, indicatorHeight, onChange } = this.props;
    let selected = MIDDLE_INDEX;
    console.log('this.state.translate', this.state.translate);
    console.log('dates', this.state.dates);
    this.state.dates.forEach((item, i) => {
      if (
        itemHeight * i - Math.abs(this.state.translate) >= 0 &&
        itemHeight * i - Math.abs(this.state.translate) < indicatorHeight
      ) {
        console.log('i', i);
        let step = this.state.translate > 0 ? -1 : 1;
        selected = Math.abs(i + selected * step);
      }
    });

    console.log('selected', selected);
    if (onChange && propagate) {
      console.log('=======', selected);
      // let date = this.state.dates[selected]
      // if(date.disabled) {

      // }
      onChange(this.state.dates[selected], selected);
    }
  }

  _isMove(direction) {
    const date = this.state.dates[MIDDLE_INDEX];
    const { end, start } = this.props;
    // console.log(date.value.getTime() > max.getTime)

    if (direction === 1 && date.value.getTime() < start.getTime()) {
      return false;
    } else if (direction === -1 && date.value.getTime() > end.getTime()) {
      return false;
    }
    return true;
  }

  handleTouchStart(e) {
    // if (this.state.touching || this.props.items.length <= 1) return;
    console.log('start');
    this.setState({
      touching: true,
      ogTranslate: this.state.translate,
      touchId: e.touches[0].identifier,
      ogY:
        this.state.translate === 0 ? e.touches[0].pageY : e.touches[0].pageY - this.state.translate,
      animating: false
    });
  }

  handleTouchMove(e) {
    console.log('move');
    if (!this.state.touching) return;
    if (e.touches[0].identifier !== this.state.touchId) return;

    //prevent move background
    e.preventDefault();

    const pageY = e.touches[0].pageY;
    const diffY = pageY - this.state.ogY;
    console.log('diffy', diffY);
    const direction = diffY > 0 ? -1 : 1;

    this.setState({
      translate: diffY
    });

    // 更新数据视图
    if (this._checkIsUpdateDates(direction, diffY)) {
      console.log('updateDates');
      this._updateDates(direction);
    }
  }

  _checkIsUpdateDates(direction, translateY) {
    console.log('_checkIsUpdateDates',direction,  this.state.currentIndex, translateY);

    let isUpdate = direction === 1
      ? (this.state.currentIndex - MIDDLE_INDEX) * DATE_HEIGHT + DATE_HEIGHT / 2 < -translateY
      : (this.state.currentIndex - MIDDLE_INDEX) * DATE_HEIGHT - DATE_HEIGHT / 2 > -translateY;
    console.log('isUpdate', isUpdate);
    return isUpdate;
  }

  _updateDates(direction) {
    const typeName = this.props.type;
    let { dates } = this.state;

    if (direction === 1) {
      //
      //  let dateItem = TimeUtil.convertDate(dateItem, this.props.format);

      let value = TimeUtil[`next${typeName}`](dates[dates.length - 1].value, this.props.step);
      let key = TimeUtil.convertDate(value, this.props.format);
      let disabled = value < this.props.start || value > this.props.end;
      this.setState({
        dates: [...dates.slice(1), { key, value, disabled }],
        currentIndex: ++this.state.currentIndex
      });
    } else {
      let value = TimeUtil[`next${typeName}`](dates[0].value, -this.props.step);
      let key = TimeUtil.convertDate(value, this.props.format);
      // dateItem = TimeUtil.convertDate(dateItem, this.props.format);
      let disabled = value < this.props.start || value > this.props.end;
      this.setState({
        dates: [{ key, value, disabled }, ...dates.slice(0, dates.length - 1)],
        currentIndex: --this.state.currentIndex
      });
    }
  }

  handleTouchEnd(e) {
    console.log('end', e);
    if (!this.state.touching) return;

    const { itemHeight } = this.props;
    let translate = this.state.translate;
    console.log('translate', translate);
    if (Math.abs(translate - this.state.ogTranslate) < itemHeight * 0.51) {
      translate = this.state.ogTranslate;
    } else {
      let diff = (translate - this.state.ogTranslate) / itemHeight;

      let step = 0,
        adjust = 0;
      if (Math.abs(diff) < 1) {
        step = diff > 0 ? 1 : -1;
      } else {
        adjust = Math.abs((diff % 1) * 100) > 50 ? 1 : 0;
        step = diff > 0 ? Math.floor(diff) + adjust : Math.ceil(diff) - adjust;
      }

      translate = this.state.ogTranslate + step * itemHeight;
    }

    this.setState(
      {
        touching: false,
        ogY: 0,
        touchId: undefined,
        ogTranslate: 0,
        animating: true,
        translate,
        currentIndex: MIDDLE_INDEX
      },
      () => this.updateSelected()
    );
  }

  render() {
    return (
      <div
        className={this.state.cls}
        onTouchStart={this.handleTouchStart}
        catchTouchMove={this.handleTouchMove}
        onTouchEnd={this.handleTouchEnd}
      >
        <div className="weui-picker__mask" />
        <div className="weui-picker__indicator" />
        <div
          className="weui-picker__content"
          style={`transform: translate(0, ${this.state.translate}px); transition: ${
            this.state.animating ? 'transform .3s' : 'none'
          }`}
          ref="content"
        >
          {this.state.dates.map(function(item, j) {
            return (
              <div
                key={j}
                className={
                  'weui-picker__item ' + (item.disabled ? 'weui-picker__item_disabled' : '')
                }
              >
                {item.key}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default XDatePickerItem;
