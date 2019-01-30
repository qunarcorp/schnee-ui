import React from '@react';
import './index.scss';

class XCheckboxGroup extends React.Component {
    constructor(props) {
        super(props);
    }

    emitEvent(value) {
        this.props.onChange && this.props.onChange({
            detail: {value},
            target: {value}
        });
    }

    render() {
        return (
            <div>{this.props.children}</div>
        );
    }
}

export default XCheckboxGroup;
