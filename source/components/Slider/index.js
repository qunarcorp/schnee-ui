import React from '@react';
// import PropTypes from 'prop-types';
// import ReactDOM from 'react-dom';
import classNames from '../../common/utils/classnames';
import './index.scss';

/**
 *  A Slider is an element used to set a value, good choice when users think it as relative quantity rather than value
 *
 */
class Slider extends React.Component {
  static defaultProps = {
    max: 100,
    min: 0,
    step: 1,
    showValue: true,
    disabled: false,
    defaultValue: 0,
    snapToValue: false
  };

  constructor(props) {
    super(props);
    const {
      className,
      max,
      min,
      step,
      showValue,
      value,
      disabled,
      defaultValue,
      onChange,
      snapToValue,
      ...domProps
    } = props;
    console.log(domProps);
    let percent = this.props.value
      ? parseInt(((this.props.value-this.props.min) / (this.props.max - this.props.min)) * 100)
      : this.props.defaultValue
      ? parseInt(((this.props.defaultValue-this.props.min) / (this.props.max - this.props.min)) * 100)
      : 0;
    this.state = {
      value: this.props.value
        ? this.props.value
        : this.props.defaultValue
        ? this.props.defaultValue
        : 0,
      controlled: typeof this.props.value !== 'undefined',
      totalWidth: 0,

      touching: false,
      ogX: 0,
      touchID: undefined,
      percent,
      animating: false,
      domProps,
      cls: classNames('weui-slider-box', props.className),
      trackStyles: {
        width: `${percent}%`
      },

      handlerStyles: {
        transition: 'none'
      }
    };
    console.log((300 * percent) / 100);

    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
    this.updateValue = this.updateValue.bind(this);
  }

  componentDidMount() {
    if (this.state.value === 0) this.updateValue();
    console.log('ele', this.wx.$element);

    // setTimeout(() => {
    //   const query = React.api.createSelectorQuery();
    //   query.select('#drawID').boundingClientRect();
    //   // query.selectViewport().scrollOffset()
    //   query.exec(function(res) {
    //     console.log('res', res);
    //   });
    // }, 300);
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.controlled) {
      if (nextProps.value <= this.props.max && nextProps.value >= this.props.min) {
        let percent = parseInt(
          ((nextProps.value - this.props.min) / (this.props.max - this.props.min)) * 100
        );

        this.setState({
          value: nextProps.value,
          percent,
          trackStyles: {
            width: `${percent}%`
          },

          handlerStyles: {
            // left: `${percent}%`,
            // transform: `translateX(${(300 * percent) / 100}PX)`,
            transition: 'none'
          }
          // handlerStyles: `transform: translateX(${(300 * percent) / 100}px); transition: 'none'`
        });
      }
    }
  }

  updateValue(snap = false) {
    console.log('updateValue');
    let value = 0;
    const percent = this.state.percent,
      { min, max, step, onChange } = this.props,
      steps = parseInt((max - min) / step),
      perPercent = (100 / steps).toFixed(1);

    if (percent >= 100) {
      value = max;
    } else if (percent === 0) {
      value = min;
    } else {
      for (let i = 0; i < steps; i++) {
        //over 50 margin than next
        if (percent > i * perPercent && percent <= (i + 1) * perPercent) {
          value = percent - i * perPercent > perPercent / 2 ? (i + 1) * step + min : i * step + min;
        }
      }
    }

    if (value !== this.state.value) {
      this.setState({ value });
      if (onChange) onChange(value);
    }

    if (snap) {
      let percentVal =
        value === min ? 0 : value === max ? 100 : ((value - min) / step) * perPercent;

      this.setState(
        {
          percent: percentVal,
          animating: true,
          trackStyles: {
            width: `${percentVal}%`
          },

          handlerStyles: {
            // left: `${percentVal}%`,
            // transform: `translateX(${(300 * percentVal) / 100}PX)`,
            transition: 'transform .3s'
          }
          // handlerStyles: `transform: translateX(${(300 * percentVal) /
          //   100}px); transition: 'transform .3s'`
        },
        () =>
          this.setState({
            animating: false,
            handlerStyles: {
              // left: `${percentVal}%`,
              // transform: `translateX(${(300 * percentVal) / 100}PX)`,
              transition: 'none'
            }
            // handlerStyles: `transform: translateX(${(300 * percentVal) /
            //   100}px); transition: 'none'`
          })
      );
    }
  }

  handleTouchStart(e) {
    if (this.state.touching || this.props.disabled) return;
    console.log('start');
    // let barDOM = ReactDOM.findDOMNode(this.refs.bar);

    this.setState({
      touching: true,
      touchId: e.touches[0].identifier,
      totalWidth: 300,
      ogX: e.touches[0].pageX,
      ogPercent: this.state.percent
    });
  }

  handleTouchMove(e) {
    if (!this.state.touching || this.props.disabled) return;
    if (e.touches[0].identifier !== this.state.touchId) return;

    //prevent move background
    e.preventDefault();

    const pageX = e.touches[0].pageX;
    const diffX = pageX - this.state.ogX;

    let percent = parseInt((diffX / this.state.totalWidth) * 100) + this.state.ogPercent;
    percent = percent < 0 ? 0 : percent > 100 ? 100 : percent;

    this.setState(
      {
        percent,
        trackStyles: {
          width: `${percent}%`
        },

        handlerStyles: {
          // left: `${percent}%`,
          // transform: `translateX(${300*percent/100}px)`,
          transition: this.state.animating ? 'transform .3s' : 'none'
        }
      },
      () => this.updateValue()
    );
  }

  handleTouchEnd(e) {
    if (!this.state.touching || this.props.disabled) return;

    if (this.props.snapToValue) {
      this.updateValue(true);
    }

    this.setState({
      touching: false,
      ogX: 0,
      touchId: undefined,
      ogPercent: 0
    });
  }

  render() {
    return (
      <div class="anu-slider">
        <stack className="anu-bar-container">
          <div className="anu-slider-block " style={{ width: '300PX' }}>
            <div className="weui-slider__inner">
              {/* <div style={this.state.trackStyles} className="weui-slider__track" /> */}
            </div>
          </div>
          <div className="anu-slider-block slider-block" style={{ width: '300PX' }}>
            <div style={this.state.trackStyles} className="weui-slider__track" />
            <div
              style={this.state.handlerStyles}
              catchTouchStart={this.handleTouchStart}
              catchTouchMove={this.handleTouchMove}
              onTouchEnd={this.handleTouchEnd}
              className="weui-slider__handler"
            />
          </div>
        </stack>

        {this.props.showValue ? (
          <text className="weui-slider-box__value">{this.state.value}</text>
        ) : (
          false
        )}
      </div>
    );
  }
}

export default Slider;
