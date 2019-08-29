import React from '@react';
import './index.scss';

class XPickerViewColumn extends React.Component {
    constructor(props) {
        super(props);
        this.animating = false;                 // 判断是否在transition过渡动画之中
        this.touchY = 0;                        // 保存touchstart的pageY
        this.translateY = 0;                    // 容器偏移的距离
        this.currentIndex = 0;                  // 滑动中当前滑块的索引
        this.moveItemCount = 0;                 // 一次滑动移动了多少个刻度
        this._moveToTimer = null;
        this.transition = '';
        this.parentInstance = null;
        this.index = 0;
        this._childrenCount = props.children.length;
        this._preCurrentIndex = 0;
        this.indicatorStyle = null;
        this.maskStyle = null;

        this.state = {
            translateY: 0,
        };    

        const childP = props.children[0].props;
        if (childP.style && childP.style.height) {
            this.ITEM_HEIGHT = parseInt(props.children[0].props.style.height);  
            if (Number.isNaN(this.ITEM_HEIGHT))  throw new Error('XPickerViewColumn 的子元素 height 属性有误。需为 40 / 40px 的格式！');
        } else {
            this.ITEM_HEIGHT = 40;  
        }
    }

    componentWillMount() {
        this.__init();        
    }

    componentWillUnmount() {
        clearTimeout(this._moveToTimer);
    }

    componentWillReceiveProps() {
        const { value } = this.parentInstance.props;

        if (value) {
            if (value[this.index] <= 0) {
                this._moveTo(0, null, false);
            } else if (value[this.index] >= this._childrenCount) {
                this._moveTo(this._childrenCount - 1, null, false);
            } else {
                this._moveTo(value[this.index], null, false);
            }
        }      
    }

    // 渲染组件前拿到XPickerView组件的props
    __init() {
        let fiber = this._reactInternalFiber;
        while (fiber.return) {
            fiber = fiber.return;
            if (fiber.name === 'XPickerView') {
                this.parentInstance = fiber.stateNode;
            }
        }
        this.index = this.parentInstance.columnIndex;
        this.parentInstance.columnIndex++;
        let props = this.parentInstance.props;
        const { value } = props;

        if (value) {
            if (value[this.index] <= 0) {
                this._moveTo(0, null, false);
                this.currentIndex = 0;
            } else if (value[this.index] >= this._childrenCount) {
                this._moveTo(this._childrenCount - 1, null, false);
                this.currentIndex = this._childrenCount - 1;
            } else {
                this._moveTo(value[this.index], null, false);
                this.currentIndex = value[this.index];
            }
        }    

        if (props['indicator-style'] && props['indicator-style'].height) {
            this.indicatorHeight = parseInt(props['indicator-style'].height);
            if (Number.isNaN(this.indicatorHeight))  throw new Error('XPickerView 组件的 indicator-style 样式对象的 height 属性有误。需为 40 / 40px 的格式！');
        } else {
            this.indicatorHeight = 40;
        }

        if (props['style'] && props['style'].height) {
            this.viewPortHeight = parseInt(props['style'].height);
            if (Number.isNaN(this.viewPortHeight))  throw new Error('XPickerView 组件的 style 样式对象的 height 属性有误。需为 40 / 40px 的格式！');
        } else {
            this.viewPortHeight = 200;
        }
        this.indicatorStyle = props['indicator-style'];
        this.maskStyle = props['mask-style'];        
    }

    handleTouchStart(e) {
        if (this.animating) return;
        this.touchY = e.touches[0].pageY;
        this.translateY = this.state.translateY;
        this.moveItemCount = 0;

        this.parentInstance && this.parentInstance.emitEvent({
            event: e,
            currentIndex: this.currentIndex,
            colIndex: this.index
        }, 'start');
    }

    handleTouchMove(e) {
        if (this.animating) return;
        const touchY = e.touches[0].pageY;

        const dir = touchY - this.touchY;
        const translateY = this.translateY + dir;
        const direction = dir > 0 ? -1 : 1;


        // 检测是否更新日期列表
        if (this._checkIsUpdateDates(direction, translateY)) {
            this.moveItemCount = direction > 0 ? this.moveItemCount + 1 : this.moveItemCount - 1;
            this._updateDates(direction);
        }

        this.setState({ translateY });
    }

    handleTouchEnd(e) {
        if (this.animating) return;
        this._moveToNext(e);
    }

    _checkIsUpdateDates(direction, translateY) {
        return direction === 1 ?
            this.currentIndex * this.ITEM_HEIGHT + this.ITEM_HEIGHT / 2 < -translateY :
            this.currentIndex * this.ITEM_HEIGHT - this.ITEM_HEIGHT / 2 > -translateY;
    }
    _updateDates(direction) {
        if (direction === 1) {
            this.currentIndex ++;
            this.setState({
                translateY: -this.currentIndex * this.ITEM_HEIGHT,
            });
        } else {
            this.currentIndex --;
            this.setState({
                translateY: this.currentIndex * this.ITEM_HEIGHT,
            });
        }
    }

    _moveToNext(event) {

        if (this.currentIndex >= this._childrenCount) {
            this.currentIndex = this._childrenCount -1;
        } else if (this.currentIndex <= 0) {
            this.currentIndex = 0;
        }
        this._moveTo(this.currentIndex, event);
    }

    _moveTo(currentIndex, event, trigerCb = true) {
        this.animating = true;
        // 触发改变事件
        this._preCurrentIndex !== currentIndex && trigerCb && this.parentInstance && this.parentInstance.emitEvent({
            event,
            currentIndex,
            colIndex: this.index
        }, 'change');

        // 触发结束事件
        trigerCb && this.parentInstance && this.parentInstance.emitEvent({
            event,
            currentIndex,
            colIndex: this.index
        }, 'end');
        
        this.transition = 'transform .2s ease-out';

        this.setState({
            translateY: -currentIndex * this.ITEM_HEIGHT,
        });
    
        this._moveToTimer = setTimeout(() => {
            this.animating = false;
            this.transition = '';
            this._preCurrentIndex = currentIndex;
        }, 200);
    }

    render() {
        return (
            <div 
                class="anu-picker-view-column"
                catchTouchStart={this.handleTouchStart.bind(this)}
                catchTouchMove={this.handleTouchMove.bind(this)}
                onTouchEnd={this.handleTouchEnd.bind(this)}
            >
                <stack class="anu-picker-view-column__viewport" style={{...this.maskStyle}}>
                    <div class="anu-picker-view-column__list" 
                        style={{ 
                            marginTop: `${this.viewPortHeight/2 - this.indicatorHeight/2}px`,
                            transition: this.transition,
                            height: this._childrenCount * this.ITEM_HEIGHT + 'PX',
                            transform: 'translateY('+this.state.translateY+'PX)'
                        }}>
                        {this.props.children}
                    </div>
                    <div class="anu-picker__mask">
                        <div class="anu-picker__mask_top" style={{
                            height: `${this.viewPortHeight/2 - this.indicatorHeight/2}px`
                        }}/>
                        <div class="anu-picker__mask_center" style={{
                            ...this.indicatorStyle,
                            height: `${this.indicatorHeight}px`
                        }}/>
                        <div class="anu-picker__mask_bottom " />
                    </div>
                </stack>
            </div>
        );
    }
}
XPickerViewColumn.defaultProps = {
};
export default XPickerViewColumn;
