import React from '@react';
import './index.scss';

class XCheckboxGroup extends React.Component {
    constructor(props) {
        super(props);
    }

    emitEvent(value) {
        this.props.onChange && this.props.onChange({detail: {value}});
    }

    render() {
        return <div class="col">{this.props.children}</div>
    }
}

export default XCheckboxGroup;
