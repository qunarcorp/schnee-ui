import React from '@react';

class CheckboxGroup extends React.Component {
    constructor(props) {
        super(props);
    }

    emitEvent(value) {
        this.props.onChange && this.props.onChange({value});
    }

    render() {
        return <div>{this.props.children}</div>
    }
}

export default CheckboxGroup;
