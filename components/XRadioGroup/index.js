// eslint-disable-next-line
import React from "@react";
import './index.scss';

class XRadioGroup extends React.Component {
    constructor(props) {
        super(props);
    }

    emitEvent(value) {
        var fn = this.props.onChange || Number;
        fn({detail: {value}, target: {value}});
    }
    render() {
        return <div className="col">{this.props.children}</div>;
    }
}

export default XRadioGroup;
