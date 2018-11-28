import React from "@react";
import "./index.scss";

function collectRadioInstances(p, ret, instance) {
    console.log('p', p)
    for (p = p.child; p; p = p.sibling) {
        if (p.name == "Radio") {
            // 不是当前节点
            console.log('Radio', p)
            if (p.stateNode !== instance) {
                ret.push(p.stateNode);
            }
        } else if (p.child) {
            collectRadioInstances(p, ret, instance);
        }
    }
}
class Radio extends React.Component {
    constructor(props) {
        super(props);
        console.log("props", props);
        this.state = {
            checked: props.checked,
            checkedValue: ""
        };
    }
    switchState(checked) {
        if (!this.props.disabled) {
            this.setState({
                checked
            });
        }
    }
    click() {
        if (this.props.disabled) {
            return;
        }
        if(this.state.checked) {
          return
        }
      
        // 找到fiber;
        var fiber = this._reactInternalFiber;
        
        //  var target = e.nativeEvent.currentTarget;
        //  var dataset = target.dataset || {};
        //  var eventUid = dataset[e.type + "Uid"];

        //  var fiber = this.$$eventCached[eventUid + "Fiber"];
        var radioInstances = [];
        var parentInstance = null;
        while (fiber.return) {
            fiber = fiber.return;
            if (fiber.name === "RadioGroup") {
                parentInstance = fiber.stateNode;
                collectRadioInstances(fiber, radioInstances, this);
                break;
            }
        }
        console.log(radioInstances,'!!!')
        var checked = this.state.checked;
        this.switchState(!checked)
        radioInstances.forEach(function(instance){
          instance.switchState(checked);
        });
        parentInstance.emitEvent(this.props.value)
        
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.checked !== this.props.checked) {
            this.setState({
                checked: nextProps.checked
            });
        }
    }

    render() {
        return (
            <div class="anu-radio">
                {!this.props.isRight && <text>{this.props.value}</text>}
                <stack
                    class="anu-radio__check anu-stack"
                    style={{
                        borderColor: this.state.checked ? "#2998F9" : "#CCCCCC"
                    }}
                    onClick={this.click.bind(this, this.props.value)}
                >
                    <div
                        class={
                            "anu-radio__thumb " +
                            (this.state.checked
                                ? "anu-radio__thumb--open"
                                : "anu-radio__thumb--close")
                        }
                        style={{
                            backgroundColor: this.state.checked
                                ? "#2998F9"
                                : "#ffffff"
                        }}
                    />
                </stack>
                {this.props.isRight && <text>{this.props.value}</text>}
            </div>
        );
    }
}

Radio.defaultProps = {
    disabled: false,
    checked: false,
    value: "",
    isRight: true
};

export default Radio;