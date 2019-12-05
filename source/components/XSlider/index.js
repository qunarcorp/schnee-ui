import React from '@react';
import './index.scss';


// 目前快应用计算不出dom的宽高(2018-12-12), 写死
// const TOTAL_WIDTH = 240;
// 滑块的大小，取值范围为 12 - 28
// const MAX_BLOCK_SIZE = 28;
// const MIN_BLOCK_SIZE = 12;

class XSlider extends React.Component {
    constructor(props) {
        super(props);

        this.buttons = [{ }, { }];  // 存储两个滑块的信息
        this.progressBar = 0;
        this.moving = false;   // 控制滑块是否滑动
        this.state = {
            onChange: props.bindchange || Date,
            onChanging: props.bindchanging || Date,
            btnLeft:  0, // props.value[0],
            btnRight: 0,  // props.value[1]
            showValue: this.props.value
        };
        this.sliderWidth = this.props['block-size']; // 滑块的宽度
        this.singleActiveColor = this.props.isSingle ? this.props.activeColor : this.props.backgroundColor;
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            showValue: nextProps.value
        });
        this.getAunEnv();
    }

    getPercent(value){
        // console.log('第几个滑块',value);
        //将props.value转换成基于[min, max]区间的位置的百分比
        return  (value - this.props.min) / (this.props.max- this.props.min);
    }
    getSlideValue(percent){
        //将百分比转换为value
        return ~~(percent * (this.props.max- this.props.min) ) + this.props.min;
    }
    getEventPageX(e){
        // console.log('e:',e);
        var object = e.changedTouches || e.touches || [e];
        return object[0].pageX;
    }
   
    componentDidMount(){
        this.getAunEnv();
    }

    execAfterGetPogressBar(val){
        this.progressBar = val - this.sliderWidth;
        // console.log('总宽度=', val, '可以滑动的宽度', this.progressBar, '滑块宽度', this.sliderWidth, '显示value宽度', this.showValueWidth);
        var value = this.props.value;
        var valueOne = (Array.isArray(value) ? value[0]: value);  // 第一个滑块
        var valueTwo = value[1];    // // 第二个滑块
        var percentOne = this.getPercent(valueOne);
        var percentTow = this.getPercent(valueTwo);
        this.stepPercent = this.getPercent(this.props.step);
        //  console.log('valueTwo', valueOne, valueTwo);
        this.setState({
            btnLeft: ~~ (percentOne * this.progressBar),  // 左滑块位置
            btnRight: ~~ (percentTow * this.progressBar ) // 右滑块位置
        }, function() {
            this.buttons = [{
                value: valueOne //~~(this.state.btnLeft / this.maxRight * 100)
            }, {
                value:  valueTwo  //~~(this.state.btnRight / this.maxRight * 100)
            }];
        });
        // console.log("++++++",this)
    }

    getAunEnv(){
        var ANU_ENV = process.env.ANU_ENV;
        // console.log(' 当前所处于哪个平台', ANU_ENV);
        var ref = this.refs.trackDom;
        var that = this;
        if (ANU_ENV === 'wx') {     // wx中获取进度条的长度
            setTimeout(() => {
                const query = wx.createSelectorQuery().in(this.wx);
                query.select('.anu-slider-track').boundingClientRect(function(res){
                    // console.log('微信的res', res);
                    this.execAfterGetPogressBar.call(that,  res.width);
                });
                query.exec();
            }, 300);
        } else if (ANU_ENV === 'web'){   // h5中获取进度条的长度
            setTimeout(() => {
                this.execAfterGetPogressBar.call(this, ref.getBoundingClientRect().width );
            }, 300);
        } else if (ANU_ENV === '360'){  // 360中获取进度条的长度
            setTimeout(() => {
                this.execAfterGetPogressBar.call(this, ref.getBoundingClientRect().width );
            }, 300);
        } else if (ANU_ENV === 'ali'){  // 支付宝小程序中获取进度条的长度
            setTimeout(() => {
                const query = my.createSelectorQuery();
                query.select('.anu-slider-track').boundingClientRect().exec(ret => {
                    this.execAfterGetPogressBar.call(that, ret[0].width);
                });
            }, 300);
        } else if (ANU_ENV === 'bu'){  // 百度小程序中获取进度条的长度
            setTimeout(() => {
                const query = swan.createSelectorQuery().in(this.wx);
                query.select('.anu-slider-track').boundingClientRect(ret => {
                    this. execAfterGetPogressBar.call(that, ret.width);
                });
                query.exec();
            }, 300);
        } else if (ANU_ENV === 'quick'){
            console.log('快应用 还没有做兼容');
        } else if (ANU_ENV === 'tt'){
            console.log('头条 还没有做兼容');
        }
    }

    handleTouchStart(which, event){
        

        // event.preventDefault();   // 阻止事件默认行为
        // event.stopPropagation();  // 阻止事件冒泡和捕获
        if (this.props.disabled) {
            return;
        }
        var pageX  = this.getEventPageX(event);   //event.touches[0].pageX;
        this.moving = true;
        var index = 'btnLeft' ===  which ? 0: 1; // 判断是左滑块还是右滑块
        this.buttons[index].startX  = pageX;  // 开始位置
        this.buttons[index].zIndex  = 10;  //  当前的 z-index 调大一下
        this.buttons[index].left = this.state[which];  // 初始传入的滑块

        // console.log('....', this.buttons);
    }

    handleTouchMove(which, event){
        if (this.props.disabled) {
            return;
        }
        if (!this.moving ){
            return;
        }
        var pageX  =  this.getEventPageX(event);  // event.changedTouches[0].pageX;  // 滑块在页面中的x坐标。
        
        var index = 'btnLeft' ===  which ? 0: 1; // 判断是左滑块还是右滑块
        var button = this.buttons[index]; 
      
        var move = pageX - button.startX; // 移动距离
        var left = button.left + move;    // 当前滑块的css left
       
        var p = left / this.progressBar;  // 100%

        if (this.props.step != 1){
            var number =  p / this.stepPercent;
            var integer = Math.trunc(number);
            var decimal = number - integer;
            if (decimal > 0.5){
                integer ++;
            }
            p = this.stepPercent * integer;
        }

        if (p  < 0){   //0~1
            p = 0;
        }
        if (p > 1){
            p = 1;
        }
        this.setState({
            [which]: p  *  this.progressBar 
        });
        if (!event.detail){
            event.detail = {};
        }
        event.detail.value =  this.getSlideValue(p);
        this.setState({
            showValue: event.detail.value
        });

        // 判断两个滑块，滑动。左滑块不能超过右滑块，右滑块不能超过左滑块
        if (!this.props.isSingle){
            if (which === 'btnLeft'){
                if (p < 0){
                    p = 0;
                }
                if (p >= this.state.btnRight / this.progressBar ){
                    p = this.state.btnRight / this.progressBar;
                }
            } else if (which === 'btnRight'){
                if (p <= this.state.btnLeft / this.progressBar ){
                    p = this.state.btnLeft / this.progressBar;
                }
                if (p > 1){
                    p = 1;
                }
            }
            this.setState({
                [which]:  p *  this.progressBar 
            });
            button.value = this.getSlideValue(p);
            var btn1 = this.buttons[0].value;
            var btn2 = this.buttons[1].value;
            if (btn1 > btn2 ){
                btn2 = btn1;
            }
            event.detail.value = [btn1, btn2];
        
            this.setState({
                showValue: event.detail.value
            });
        }
        // console.log('组件的', event);
        this.state.onChanging(event);   // 拖动过程中触发的事件，event.detail = {value: value}
    }

    handleTouchEnd(which, event){
        this.handleTouchMove(which, event); 
        this.state.onChange(event);     // 完成一次拖动后触发的事件，event.detail = {value: value}
        this.moving = false;
    }

    /**
     * 计算滑块的宽高
     * size 正常大小 width=height
     * borderRadius 设置为圆形 数值为width的一半
     */
    // calcBlockHandler(size = 1) {
    //     let radius = this.props['block-size'];
    //     // 快应用上的px需要 *2
    //     // let coefficient = process.env.ANU_ENV === 'quick' ? 2 : 1;
    //     radius =
    //         radius < MIN_BLOCK_SIZE
    //             ? MIN_BLOCK_SIZE
    //             : radius > MAX_BLOCK_SIZE
    //                 ? MAX_BLOCK_SIZE
    //                 : radius;
    //     // return radius * size * coefficient;
    //     return radius * size;
    // }

    render() {
        return (
            <div className='anu-slider'>
                <div
                    className="anu-slider-track"
                    style={{
                        backgroundImage: `linear-gradient(to bottom, ${this.props.backgroundColor}, ${this.props.backgroundColor})`
                    }}
                    ref="trackDom"
                >
                    <stack
                        style={{
                            left: this.state.btnLeft+'PX'
                        }}
                        // ref={dom => this.btnLeft = dom}
                        onTouchStart={event => this.handleTouchStart('btnLeft', event)}
                        onTouchMove={event => this.handleTouchMove('btnLeft', event)}
                        onTouchEnd={event => this.handleTouchEnd('btnLeft', event)}
                        className="anu-slider-thumb-0"
                    >
                        <span 
                            className="anu-slider-progressBar"
                            style={{
                                backgroundColor: this.singleActiveColor
                            }}
                        />
                        <span 
                            className="anu-slider-sliderBlock"
                            style={{
                                width: `${this.props['block-size']}PX`,
                                height: `${this.props['block-size']}PX`,
                                top: `${(30-this.props['block-size'])/2}PX`,
                                backgroundColor: `${this.props['block-color']}`,
                                zIndex: this.buttons[0].zIndex || 1
                            }}
                        />
                    </stack>
                    {!this.props.isSingle && <stack 
                        style={{
                            left: this.state.btnRight +'PX',
                           
                        }}
                        // ref={dom => this.btnRight = dom}
                        onTouchStart={event => this.handleTouchStart('btnRight', event)}
                        onTouchMove={event => this.handleTouchMove('btnRight', event)}
                        onTouchEnd={event => this.handleTouchEnd('btnRight', event)}
                        className="anu-slider-thumb-1"
                    >
                        <span 
                            className="anu-slider-progressBar"
                            style={{
                                backgroundColor: this.props.activeColor
                            }}
                        />
                        <span 
                            className="anu-slider-sliderBlock"
                            style={{
                                width: `${this.props['block-size']}PX`,
                                height: `${this.props['block-size']}PX`,
                                top: `${(30-this.props['block-size'])/2}PX`,
                                backgroundColor: `${this.props['block-color']}`,
                                zIndex: this.buttons[1].zIndex || 0
                            }}
                        />
                    </stack>}                 
                </div>
                {this.props['show-value'] &&
                    <div className="anu-slider-showValue">
                        {this.props.isSingle ? 
                            this.state.showValue : 
                            `${this.state.showValue[0]},${this.state.showValue[1]}`
                        }
                    </div>
                }
            </div>
        );
    }
}

XSlider.defaultProps = {
    isSingle: true, // 默认表示单滑块。若为双滑块一定要传入false。
    min: 0,   // 滑块最左边表示的值。受控属性：滑块滑到最左边应该表示的值。
    max: 100, // 滑块最右边表示的值。受控属性：滑块滑到最右边应该表示的值。 注意：有传入step属性时，必须保证 (max - min) 能被 step 整除。
    step: 1,  // 步长，取值必须大于 0，并且可被(max - min)整除。
    disabled: false,  // 禁用滑块。 受控属性：禁止滑块滑动，阻止touch事件。
    value: 0, // 当前取值, 可以是数组
    activeColor: '#00bcd4', // 已选择的颜色
    backgroundColor: '#ccc', // 背景条的颜色
    'block-size': 28,   // 滑块的大小，取值范围为 12 - 28
    'block-color': '#fff',  // 滑块的颜色
    'show-value': false // 是否显示当前 value
};

export default XSlider;
