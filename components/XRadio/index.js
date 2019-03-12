import React from '@react';
import './index.scss';

function collectRadioInstances(p, ret, instance) {
    for (p = p.child; p; p = p.sibling) {
        if (p.name == 'XRadio') {
            // 不是当前节点
            if (p.stateNode !== instance) {
                ret.push(p.stateNode);
            }
        } else if (p.child) {
            collectRadioInstances(p, ret, instance);
        }
    }
}

const styleConfig = {
    check_width: 40,
    thumb_width: 30,
    gap: 6
};

function getSizeWidth(type, size) {
    const default_width = styleConfig[`${type}_width`];

    const { gap } = styleConfig;
    let width = default_width;
    switch (size) {
        case 'large':
            width += gap;
            break;
        case 'small':
            width -= gap;
            break;
    }
    return `${width}rpx`;
}

const BACKGROUND_COLOR = '#ffffff'; // 正常背景色
const DISABLED_COLOR = '#e1e1e1'; // disabled 背景色
const DISABLED_ENHANCE_COLOR = '#b3b3b3'; // disabled 强调色
const UNCHECKED_COLOR = '#CCCCCC';
const DEFAULT_CHECKED_COLOR = '#1aad16';

class XRadio extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: props.checked,
            check_width: getSizeWidth('check', props.size),
            thumb_width: getSizeWidth('thumb', props.size),
            checkedValue: ''
        };

        this.handleClick = this.handleClick.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    switchState(checked) {
        if (!this.props.disabled) {
            this.setState({
                checked
            });
        }
    }

    onClick(e) {
        // 不在 XLabel 内部的时候，执行本身逻辑
        // 在快应用下不支持事件冒泡，直接执行本身逻辑
        if (process.env.ANU_ENV === 'quick' || !this.props.__InLabel) {
            this.handleClick(e);
        }
    }

    handleClick() {
        if (this.props.disabled) {
            return;
        }
        if (this.state.checked) {
            return;
        }

        // 找到fiber;
        var fiber = this._reactInternalFiber;

        //  var target = e.nativeEvent.currentTarget;
        //  var dataset = target.dataset || {};
        //  var eventUid = dataset[e.type + 'Uid'];

        //  var fiber = this.$$eventCached[eventUid + 'Fiber'];
        var radioInstances = [];
        var parentInstance = null;
        while (fiber.return) {
            fiber = fiber.return;
            if (fiber.name === 'XRadioGroup') {
                parentInstance = fiber.stateNode;
                collectRadioInstances(fiber, radioInstances, this);
                break;
            }
        }
        var checked = this.state.checked;
        this.switchState(!checked);
        radioInstances.forEach(function(instance){
            instance.switchState(checked);
        });
        parentInstance && parentInstance.emitEvent(this.props.value);

    }

    componentWillReceiveProps(nextProps) {
        const updateProps = {};
        let shouldUpdate = false;
        ['checked', 'size'].forEach(key => {
            if (nextProps[key] !== this.props[key]) {
                shouldUpdate = true;
                if (key === 'size') {
                    updateProps['check_width'] = getSizeWidth('check', nextProps.size);
                    updateProps['thumb_width'] = getSizeWidth('thumb', nextProps.size);
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
            <div className='anu-radio-container'>
                {!this.props.isRight && <text>{this.props.text}</text>}
                <div
                    className='anu-radio'
                    onClick={this.onClick}
                    style={{
                        backgroundColor: this.props.disabled ? DISABLED_COLOR : BACKGROUND_COLOR,
                        borderColor: this.props.disabled ? DISABLED_ENHANCE_COLOR : (this.state.checked ? this.props.color : UNCHECKED_COLOR),
                        borderRadius: this.state.check_width, // 快应用不支持百分比形式
                        width: this.state.check_width,
                        height: this.state.check_width,
                        marginLeft: this.props.isRight ? '0rpx' : '10rpx',
                        marginRight: this.props.isRight ? '10rpx' : '0rpx'
                    }}
                >
                    {
                        this.state.checked &&
                            <text
                                className='anu-radio__check'
                                style={{
                                    backgroundColor: this.props.disabled ? DISABLED_ENHANCE_COLOR : this.props.color,
                                    width: this.state.thumb_width,
                                    height: this.state.thumb_width,
                                    // 快应用不支持百分比形式
                                    // 但在百度/微信小程序中，width: 20px border-radius: 10px 的时候
                                    // 并不是圆形(快应用中是圆形)，border-radius 需要再大点，所以索性直接填 width 的值
                                    borderRadius: this.state.thumb_width,
                                }}
                            ></text>
                    }
                </div>
                {this.props.isRight && <text>{this.props.text}</text>}
            </div>
        );
    }
}

XRadio.defaultProps = {
    size: 'default',
    color: DEFAULT_CHECKED_COLOR,
    disabled: false,
    checked: false,
    value: '',
    text: '',
    isRight: true,
    __InLabel: false
};

export default XRadio;
