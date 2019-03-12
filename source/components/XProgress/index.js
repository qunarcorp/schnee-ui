// eslint-disable-next-line
import React from '@react';
import './index.scss';
class XProgress extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="anu-progress">
                <div class="anu-progress-cell">
                    <div
                        class="anu-progress-inner"
                        style={{
                            height: `${this.props.strokeHeight}rpx`,
                            borderRadius: `${this.props.borderRadius}rpx`
                        }}
                    >
                        <div
                            style={{
                                width: `${this.props.percent}%`,
                                'background-color': `${this.props.strokeColor}`,
                                height: `${this.props.strokeHeight}rpx`,
                                borderRadius: `${this.props.borderRadius}rpx`
                            }}
                        />
                    </div>
                    {this.props.showInfo && (
                        <div class="anu-progress-info">
                            <text>{this.props.percent}%</text>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

XProgress.defaultProps = {
    percent: 0,
    showInfo: true,
    strokeColor: '#1890ff',
    strokeHeight: 32,
    borderRadius: 20
};

export default XProgress;
