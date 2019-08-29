import React from '@react';
import './index.scss';

class XPickerView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: new Array(props.children.length).fill(0)
        };    
    }
    // 子组件回调函数
    emitEvent(item, type) {
        let value;
        if (this.props.value) {
            value = [...this.props.value];
        } else {
            value = this.state.value;
        }

        let {
            event,
            currentIndex,
            colIndex
        } = item;

        let evt = {
            detail: {},
            type: (event && event.type) || '',
            target: (event && event.target) || '',
            timeStamp: (event && event.timeStamp) || ''
        };

        if (type === 'start') {
            this.props.bindpickstart(evt);
        } else if (type === 'change') {
            value[colIndex] = currentIndex;
            evt.detail.value = value;
            this.props.bindchange(evt);
        } else {
            this.props.bindpickend(evt);
        }
    }
    render() {
        return (
            <div class="anu-picker-view" style={this.props.style}>
                {
                    this.props.children
                }
            </div>
        );
    }
}

XPickerView.defaultProps = {
    bindpickstart: () => {},
    bindchange: () => {},
    bindpickend: () => {}
};

export default XPickerView;
