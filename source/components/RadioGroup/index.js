// eslint-disable-next-line
import React from "@react";
import './index.scss'
class RadioGroup extends React.Component {
    constructor(props) {
        super(props);
    }

    emitEvent(value) {
        var fn = this.props.onChange || Number;
        fn({detail: {value}});
    }
    render() {
        return <div class="col">{this.props.children}</div>;
    }
}

export default RadioGroup;
