import React from '@react';
import './index.scss';


function createArrayByLength(length) {
    var arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(i);
    }
    return arr;
}

class XSwiper extends React.Component {
    static defaultProps = {
        style: false, // Swiper 样式
        indicatorDots: false, // 是否显示面板指示点
        indicatorColor: 'rgba(0, 0, 0, .3)', // 指示点颜色
        indicatorActiveColor: '#000', // 当前选中的指示点颜色
        autoplay: false, // 是否自动切换
        current: 0, // 当前所在滑块的 index
        cuurentItemId: '',
        interval: 5000, // 自动切换时间间隔
        duration: 500, // 滑动动画时长
        circular: false,
        vertical: false, // 滑动方向是否为纵向
        previousMargin: '0px',
        nextMargin: '0px',
        displayMultipleItems: 1,
        skipHiddenItemLayout: false,
        // onChange: () => {}, // current 改变时会触发 change 事件，event.detail = {current: current, source: source}
        // onAnimationfinish: () => {} // 动画结束时会触发 animationfinish 事件，event.detail 同上
    };

    constructor() {
        super();
        this.state = {
            translateX: 0,
            translateY: 0,
            wrapperTranslateX: 0,
            wrapperTranslateY: 0,
            touching: false,
            curIndex: this.props.current,
            arr: []
        };
        this.count = 0;
        this.pageX = 0;
        this.pageY = 0;
        this.arr = [];
        this.intervalId = null;
    }

    handleTouchStart(e) {
        const point = e.touches ? e.touches[0] : e;
        this.pageX = point.pageX;
        this.pageY = point.pageY;
        this.setState({
            touching: true
        });
    }

    handleTouchMove(e) {
        const point = e.touches ? e.touches[0] : e;
        const deltaX = point.pageX - this.pageX;
        const deltaY = point.pageY - this.pageY;
        if (this.props.vertical) {
            this.setState({
                translateY: this.state.translateY + deltaY
            });
        } else {
            this.setState({
                translateX: this.state.translateX + deltaX
            });
        }
        this.pageX = point.pageX;
        this.pageY = point.pageY;
    }

    handleTouchEnd() {
        const deltaLength = this.props.vertical ? this.state.translateY : this.state.translateX
        let nextIndex = this.state.curIndex;
        if (deltaLength < -30) {
            if (this.state.curIndex + 1 < this.count) {
                nextIndex++;
            }
        } else if (deltaLength > 30) {
            if (this.state.curIndex - 1 >= 0) {
                nextIndex--;
            }
        }
        this.setState({
            touching: false
        });
        this.goto(nextIndex);
    }

    autoPlay() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
        this.intervalId = setInterval(() => {
            this.state.touching || this.goto((this.state.curIndex + 1) % this.count );
        }, this.props.interval);
    }

    goto(index) {
        const { onChange, onAnimationfinish, duration } = this.props;
        let state = {
            curIndex: index,
            translateX: 0
        };
        this.props.vertical ?
            (state.translateY = 0, state.wrapperTranslateY = `-${100 * index}%`) :
            (state.translateX = 0, state.wrapperTranslateX = `-${100 * index}%`);
        this.setState(state);
        onChange && onChange({ detail: {
            current: index
        } });
        setTimeout(() => {
            onAnimationfinish && onAnimationfinish({ detail: {
                current: index
            } });
        }, duration);
    }

    calculateTransform(x, y) {
        const ANU_ENV = process.env.ANU_ENV;//wx ali bu quick
        if (ANU_ENV === 'quick') {
            typeof x === 'number' && (x = `${x}px`);
            typeof y === 'number' && (y = `${y}px`);
            return `{"translateX":"${x}","translateY":"${y}"}`;
        } else {
            typeof x === 'number' && (x = `${x}PX`);
            typeof y === 'number' && (y = `${y}PX`);
            return `translate(${x}, ${y})`;
        }
    }

    componentWillMount() {
        this.count = this.props.children && this.props.children.length;
        this.setState({
            arr: createArrayByLength(this.count)
        });
        this.props.autoPlay && this.autoPlay();
    }

    componentWillUpdate(nextProps) {
        nextProps.autoPlay ?
            this.autoPlay() :
            (this.intervalId && clearInterval(this.intervalId));
    }

    componentWillUnmount() {
        this.intervalId && clearInterval(this.intervalId);
    }

    render() {
        return (
            <div className={this.props.vertical ? 'anu-swiper anu-swiper--vertical' : 'anu-swiper'} style={this.props.style}>
                <div className="anu-swiper__wrapper"
                    style={{ transitionDuration: this.props.duration / 1000 + 's', transform: this.calculateTransform(this.state.wrapperTranslateX, this.state.wrapperTranslateY) }}
                >
                    <div className={this.state.touching ? 'anu-swiper__content' : 'anu-swiper__content anu-swiper__content--transition'}
                        style={{ transitionDuration: this.state.touching ? '0' : this.props.duration / 1000 + 's', transform: this.calculateTransform(this.state.translateX, this.state.translateY) }}
                        onTouchStart={this.handleTouchStart}
                        onTouchMove={this.handleTouchMove}
                        onTouchEnd={this.handleTouchEnd}
                        onTouchCancel={this.handleTouchEnd}
                    >
                        {this.props.children}
                    </div>
                </div>
                {this.props.indicatorDots ? <div className="anu-swiper__pagination">
                    {this.state.arr.map(function(item, index) {
                        return (index === this.state.curIndex ?
                            <div className="anu-swiper__pagination-bullet" style={{ backgroundColor: this.props.indicatorActiveColor }}></div> :
                            <div className="anu-swiper__pagination-bullet" style={{ backgroundColor: this.props.indicatorColor }}></div>);
                    })}
                </div> : null}
            </div>
        );
    }
}

export default XSwiper;
