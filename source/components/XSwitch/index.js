import React from '@react';
import './index.scss';


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
        let backgroundColor = checked ? this.props.color : this.props.checkColor;
        let newWrapperStyle = Object.assign({}, wrapperStyle, { backgroundColor });
        let newInnerStyle = Object.assign({}, innerStyle, {
            margin: ((parseFloat(wrapperStyle.height) - parseFloat(innerStyle.height)) / 2) + 'px',
            transform: `translateX(${checked ?
                (parseFloat(wrapperStyle.width) - parseFloat(innerStyle.width) - parseFloat(wrapperStyle.height) + parseFloat(innerStyle.height)) + 'px' : '0'})`
        });
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
            fn && fn.call(this, { ...e, value: !this.state.checked });
            this.updateState(this.props, !this.state.checked);
        }
    }

    componentWillReceiveProps(nextProps) {
        this.updateState(nextProps, nextProps.checked);
    }

    render() {
        return (
            <div class="anu-switch">
                <stack
                    class={
                        'anu-switch__checkbox ' + (this.props.disabled ? 'anu-switch__checkbox--disabled' : '')
                    }
                    style={this.state.wrapperStyle}
                    id="{{id}}"
                    onClick={this.onClick}
                >
                    <div
                        class={
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
        width: '68px',
        height: '68px',
        borderRadius: '34px',
        backgroundColor: '#ffffff'
    },
    wrapperStyle: {
        width: '140px',
        height: '76px',
        borderRadius: '38px',
        backgroundColor: '#C1C1C1'
    },
    color: '#2998F9',
    checkColor: '#C1C1C1',
    __InLabel: false
};

export default XSwitch;