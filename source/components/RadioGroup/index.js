// eslint-disable-next-line
import React from "@react";
// import './index.scss'
class RadioGroup extends React.Component {
    constructor(props) {
        super(props);
        console.log("props", props);
    }

    emitEvent(value) {
        console.log("radio group:", value);
        var fn = this.props.onChange || Number;
        fn({value});
    }
    render() {
        return <div>{this.props.children}</div>;
    }
}

export default RadioGroup;