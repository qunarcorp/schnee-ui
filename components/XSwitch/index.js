import React from '@react';
import './index.scss';

const env = process.env.ANU_ENV;

function jsonEqual(objA, objB) {
    let flag = false;
    if (typeof objA !== 'object') {
        return objA !== objB;
    }

    for (let key in objA) {
        if (!objB.hasOwnProperty(key)) {
            flag = true;
            break;
        }

        flag = objA[key] !== objB[key];
    }

    return flag;
}

class XSwitch extends React.Component {
    constructor(props) {
        super(props);
        let { checked, innerStyle, wrapperStyle } = this.computeState(props, props.checked);
        this.state = {
            checked,
            innerStyle,
            wrapperStyle
        };

        this.onClick = this.onClick.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    computeState(props, checked) {
        const { innerStyle, wrapperStyle } = props;
        const backgroundColor = checked ? this.props.color : this.props.checkColor;
        const newWrapperStyle = Object.assign({}, XSwitch.defaultProps.wrapperStyle, wrapperStyle, { backgroundColor });
        let newInnerStyle = Object.assign({}, XSwitch.defaultProps.innerStyle, innerStyle);
        newInnerStyle.margin = ((parseFloat(newWrapperStyle.height) - parseFloat(newInnerStyle.height)) / 2) + 'rpx';
        newInnerStyle.transform = `translateX(${checked ?
            (parseFloat(newWrapperStyle.width) - parseFloat(newInnerStyle.width) - parseFloat(newWrapperStyle.height) + parseFloat(newInnerStyle.height)) + 'rpx' : '0'})`;
        return {
            checked,
            innerStyle: newInnerStyle,
            wrapperStyle: newWrapperStyle
        };
    }

    updateState(nextProps, checked) {
        let newState = this.computeState(nextProps, checked);
        let lastState = {};

        let oldState = this.state;
        let diff = false;
        for (let i in oldState) {
            if (jsonEqual(oldState[i], newState[i])) {
                diff = true;
                lastState[i] = newState[i];
            }
        }

        if (diff) {
            this.setState(lastState);
        }
    }

    onClick(e) {
        // 不在 XLabel 内部的时候，执行本身逻辑
        // 在快应用下不支持事件冒泡，直接执行本身逻辑
        if (process.env.ANU_ENV === 'quick' || !this.props.__InLabel) {
            this.handleClick(e);
        }
    }

    handleClick(e) {
        let fn = this.props.onChange;
        if (!this.props.disabled) {
            const params = {};
            params.event = e;
            params.detail = { value: !this.state.checked };
            params.target = params.detail;
            fn && fn.call(this, params);
            this.updateState(this.props, !this.state.checked);
        }
    }

    render() {
        return (
            <div class="anu-switch">
                <stack
                    className={
                        'anu-switch__checkbox ' + (this.props.disabled ? 'anu-switch__checkbox--disabled' : '')
                    }
                    style={this.state.wrapperStyle}
                    id="{{id}}"
                    onClick={this.onClick}
                >
                    <div
                        className={
                            'anu-switch__thumb ' +
                            (this.state.checked ? 'anu-switch__thumb--open' : ' anu-switch__thumb--close')
                        }
                        style={this.state.innerStyle}
                    />
                </stack>
            </div>
        );
    }
}

XSwitch.defaultProps = {
    disabled: false,
    checked: false,
    innerStyle: {
        width: env === 'web' ? '36px' : '68rpx',
        height: env === 'web' ? '36px' : '68rpx',
        borderRadius: env === 'web' ? '18px' : '34rpx',
        backgroundColor: '#fff'
    },
    wrapperStyle: {
        width: env === 'web' ? '74px' : '140rpx',
        height: env === 'web' ? '40px' : '76rpx',
        borderRadius: env === 'web' ? '20px' : '38rpx',
    },
    color: '#00bcd4',
    checkColor: '#c1c1c1',
    __InLabel: false
};

export default XSwitch;
