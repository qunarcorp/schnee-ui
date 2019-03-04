import React from '@react';
import classNames from '../../common/utils/classnames';
import './index.scss';

/**
 *  A Slider is an element used to set a value,
 *  good choice when users think it as relative quantity rather than value
 *  因目前style支持不完善, 导致目前滑块的css写法有些麻烦(2018-12-12)
 */

// 目前快应用计算不出dom的宽高(2018-12-12), 写死
const TOTAL_WIDTH = 240;
// 滑块的大小，取值范围为 12 - 28
const MAX_BLOCK_SIZE = 28;
const MIN_BLOCK_SIZE = 12;

class XSlider extends React.Component {
    static defaultProps = {
        max: 100,
        min: 0,
        step: 1,
        showValue: true,
        disabled: false,
        defaultValue: 0,
        snapToValue: false,
        backgroundColor: '#e9e9e9',
        activeColor: '#1aad19',
        'block-size': 28,
        'block-color': '#e9e9e9',
    };

    constructor(props) {
        super(props);
        this.checkProps(props);
        const {
            className,
            max,
            min,
            value,
            defaultValue,
            ...domProps
        } = props;
        let percent = value
            ? ~~(((value - min) / (max - min)) * 100)
            : defaultValue
                ? ~~(((defaultValue - min) / (max - min)) * 100)
                : 0;
        this.state = {
            value: value ? value : defaultValue ? defaultValue : 0,
            controlled: typeof value !== 'undefined',
            totalWidth: 0,
            touching: false,
            touchStartPageX: 0,
            touchID: undefined,
            percent,
            animating: false,
            domProps,
            cls: classNames('weui-slider-box', className),
            trackStyles: {
                width: `${percent}%`,
            },
            trackWidth: (TOTAL_WIDTH * percent) / 100,
            handlerStyles: {
                transition: 'none',
            },
        };

        this.handleTouchStart = this.handleTouchStart.bind(this);
        this.handleTouchMove = this.handleTouchMove.bind(this);
        this.handleTouchEnd = this.handleTouchEnd.bind(this);
        this.updateValue = this.updateValue.bind(this);
        this.calcBlockHandler = this.calcBlockHandler.bind(this);
    }

    componentDidMount() {
        if (this.state.value === 0) this.updateValue();
        // eslint-disable-next-line no-console
        console.log('componentDidMount -> this.props:::', this.props);
    }

    componentWillReceiveProps(nextProps) {
        const { min, max } = this.props;
        // eslint-disable-next-line no-console
        if (this.state.controlled) {
            if (nextProps.value <= max && nextProps.value >= min) {
                let percent = ~~(((nextProps.value - min) / (max - min)) * 100);
                this.setState({
                    value: nextProps.value,
                    percent,
                    trackStyles: {
                        width: `${percent}%`,
                    },
                    trackWidth: (TOTAL_WIDTH * percent) / 100,
                    handlerStyles: {
                        transition: 'none',
                    },
                });
            }
        }
    }

    checkProps(props){
        const { min, max, step } = props;
        if (step > 0 && (max - min) % step !== 0) {
            throw new Error('步长，取值必须大于 0，并且可被(max - min)整除');
        }
    }

    updateValue(snap = false) {
        // eslint-disable-next-line no-console
        // console.log('updateValue');
        let value = 0;
        const percent = this.state.percent,
            { min, max, step, onChange } = this.props,
            steps = ~~((max - min) / step),
            perPercent = (100 / steps).toFixed(1);

        if (percent >= 100) {
            value = max;
        } else if (percent === 0) {
            value = min;
        } else {
            for (let i = 0; i < steps; i++) {
                //over 50 margin than next
                if (
                    percent > i * perPercent &&
                    percent <= (i + 1) * perPercent
                ) {
                    value =
                        percent - i * perPercent > perPercent / 2
                            ? (i + 1) * step + min
                            : i * step + min;
                }
            }
        }

        if (value !== this.state.value) {
            this.setState({ value });
            onChange && onChange(value);
        }

        if (snap) {
            let percentVal =
                value === min
                    ? 0
                    : value === max
                        ? 100
                        : ((value - min) / step) * perPercent;

            this.setState(
                {
                    percent: percentVal,
                    animating: true,
                    trackStyles: {
                        width: `${percentVal}%`,
                    },
                    trackWidth: (TOTAL_WIDTH * percentVal) / 100,
                    handlerStyles: {
                        transition: 'transform .3s',
                    },
                },
                () =>
                    this.setState({
                        animating: false,
                        handlerStyles: {
                            transition: 'none',
                        },
                    })
            );
        }
    }

    handleTouchStart(e) {
        if (this.state.touching || this.props.disabled) return;
        // eslint-disable-next-line no-console
        console.log('start');
        // let barDOM = ReactDOM.findDOMNode(this.refs.bar);

        this.setState({
            touching: true,
            touchId: e.touches[0].identifier,
            totalWidth: TOTAL_WIDTH,
            touchStartPageX: e.touches[0].pageX,
            touchStartPercent: this.state.percent,
        });
    }

    handleTouchMove(e) {
        // eslint-disable-next-line no-console
        // console.log('touch move e:::', e.touches[0]);
        if (!this.state.touching || this.props.disabled) return;
        if (e.touches[0].identifier !== this.state.touchId) return;

        //prevent move background
        // e.preventDefault();

        const pageX = e.touches[0].pageX;
        const diffX = pageX - this.state.touchStartPageX;
        // eslint-disable-next-line no-console
        // console.log('\ndiffX:::', diffX);

        let percent =
            ~~((diffX / this.state.totalWidth) * 100) +
            this.state.touchStartPercent;
        percent = percent < 0 ? 0 : percent > 100 ? 100 : percent;
        // console.log('percent:::', percent);

        this.setState(
            {
                percent,
                handlerStyles: {
                    transition: this.state.animating ? 'transform .3s' : 'none',
                },
            },
            () => this.updateValue()
        );
    }

    handleTouchEnd() {
        if (!this.state.touching || this.props.disabled) return;

        if (this.props.snapToValue) {
            this.updateValue(true);
        }

        this.setState({
            touching: false,
            touchStartPageX: 0,
            touchId: undefined,
            touchStartPercent: 0,
        });
    }

    /**
     * 计算滑块的宽高
     * size 正常大小 width=height
     * borderRadius 设置为圆形 数值为width的一半
     */
    calcBlockHandler(size = 1) {
        let radius = this.props['block-size'];
        // 快应用上的px需要 *2
        let coefficient = process.env.ANU_ENV === 'quick' ? 2 : 1;
        radius =
            radius < MIN_BLOCK_SIZE
                ? MIN_BLOCK_SIZE
                : radius > MAX_BLOCK_SIZE
                    ? MAX_BLOCK_SIZE
                    : radius;
        return radius * size * coefficient;
    }

    render() {
        const { backgroundColor } = this.props;
        return (
            <div class="anu-slider">
                <stack className="anu-bar-container">
                    <div
                        className="anu-slider-block"
                        style={{
                            width: `${TOTAL_WIDTH + this.calcBlockHandler()}PX`,
                        }}
                    >
                        <div
                            className="weui-slider__inner"
                            style={{
                                paddingLeft: `${this.calcBlockHandler(0.5)}PX`,
                                paddingRight: `${this.calcBlockHandler(0.5)}PX`
                            }}
                        >
                            <div
                                className="weui-slider__inner"
                                style={{ backgroundColor }}
                            />
                        </div>
                    </div>
                    <div
                        className="anu-slider-block slider-block"
                        style={{width: `${TOTAL_WIDTH + this.calcBlockHandler()}PX`,}}
                    >
                        <div
                            className="weui-slider__track"
                            style={{width: `${this.state.trackWidth}PX`}}
                        >
                            <div
                                className="weui-slider__track-inner"
                                style={{
                                    width: `${this.state.trackWidth - this.calcBlockHandler(0.5)}PX`,
                                    backgroundColor: this.props.activeColor,
                                    marginLeft: `${this.calcBlockHandler(0.5)}PX`,
                                }}
                            />
                        </div>
                        <div
                            catchTouchStart={this.handleTouchStart}
                            catchTouchMove={this.handleTouchMove}
                            onTouchEnd={this.handleTouchEnd}
                            className="weui-slider__handler"
                            style={{
                                transition: this.state.handlerStyles.transition,
                                width: `${this.calcBlockHandler()}PX`,
                                height: `${this.calcBlockHandler()}PX`,
                                backgroundColor: this.props['block-color'],
                                borderRadius: `${this.calcBlockHandler(0.5)}PX`,
                                boxShadow: '0 0 4PX rgba(0, 0, 0, 0.2)',
                                marginTop: `-${this.calcBlockHandler(0.5)}PX`
                            }}
                        />
                    </div>
                </stack>

                {this.props.showValue && (
                    <text className="weui-slider-box__value">
                        {this.state.value}
                    </text>
                )}
            </div>
        );
    }
}

export default XSlider;
