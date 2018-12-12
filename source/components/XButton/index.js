import React from '@react';
import './index.scss';

class XButton extends React.Component {
    constructor(props) {
        super(props);
        let newState = this.computeState(props, false);
        this.state = newState;

        this.handleClick = this.handleClick.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    computeState(props, active) {
        let buttonArray = [props.size];
        let textAray = [props.type];
        if (props.disabled) {
            textAray.push('disabled');
        } else {
            if (active) {
                buttonArray.push(props.type + '-active');
            }
        }
        if (props.plain) {
            textAray.push('plain');
        }
        var textStyle = colorStyleMap[textAray.join('-')];
        var buttonStyle = buttonArray.concat(textAray.join('-')).join(' ');
        let fontStyle = fontStyleMap[props.size];
        return {
            value: props.children,
            textStyle,
            buttonStyle,
            fontStyle
        };
    }
    updateState(nextProps, active) {
        let newState = this.computeState(nextProps, active);
        let oldState = this.state;
        let lastState = {};
        let diff = false;
        for (var i in oldState) {
            if (oldState[i] !== newState[i]) {
                diff = true;
                lastState[i] = newState[i];
            }
        }
        if (diff) {
            this.setState(lastState);
        }
    }
    componentWillReceiveProps(nextProps) {
        this.updateState(nextProps, false);
    }
    onClick(e) {
        // 不在 XLabel 内部的时候，执行本身逻辑
        // 在快应用下不支持事件冒泡，直接执行本身逻辑
        if (process.env.ANU_ENV === 'quick' || !this.props.__InLabel) {
            this.handleClick(e);
        }
    }
    handleClick(e) {
        var props = this.props;
        Array('onTap', 'catchTap', 'onClick', 'catchClick').forEach(function(
            name
        ) {
            var fn = props[name];
            if (fn) {
                fn(e);
                if (name == 'catchTap' || name == 'catchClick') {
                    e.stopPropagation();
                }
            }
        });
        if (props.disabled) {
            return;
        }
        this.updateState(this.props, true);

        setTimeout(() => {
            this.updateState(this.props, false);
        }, 150);
    }
    render() {
        return (
            <stack
                class={'anu-col anu-center anu-middle button ' + this.state.buttonStyle}
                disabled={this.props.disabled}
                plain={this.props.plain}
                type={this.props.type}
                size={this.props.size}
            >
                <div>
                    <image
                        hidden={!this.props.loading}
                        class="loading-style"
                        src="https://s.qunarzz.com/flight_qzz/loading.gif"
                    />

                    <text
                        style={{
                            color: this.state.textStyle,
                            fontSize: this.state.fontStyle
                        }}
                    >
                        {this.state.value}
                    </text>
                </div>
                <input class="mask" type='button' onClick={this.onClick} />
            </stack>
        );
    }
}

XButton.defaultProps = {
    type: 'default',
    disabled: false,
    plain: false,
    size: 'default',
    loading: false,
    __InLabel: false
};

const colorStyleMap = {
    default: '#000000',
    primary: '#ffffff',
    warn: '#ffffff',
    'default-disabled': 'rgba(0, 0, 0, 0.3)',
    'primary-disabled': 'rgba(255, 255, 255, 0.6)',
    'warn-disabled': 'rgba(255, 255, 255, 0.6)',
    'default-disabled-plain': 'rgba(0, 0, 0, 0.2)',
    'primary-disabled-plain': 'rgba(0, 0, 0, 0.2)',
    'warn-disabled-plain': 'rgba(0, 0, 0, 0.2)',
    'default-plain': '#353535',
    'primary-plain': '#1aad19',
    'warn-plain': '#e64340'
};

const fontStyleMap = {
    default: '26px',
    mini: '20px'
};

export default XButton;
