// eslint-disable-next-line
import React from '@react';
import './index.scss';

const supportWidgets = [
    'XCheckbox', 'XRadio',
    'XButton', 'XSwitch'
];

// 获得对应 id 的 fiber
function getFibersById(fiber, id) {
    let ret = [];
    fiberRecursive(fiber, fiber => {
        if (fiber.props.id === id && supportWidgets.indexOf(fiber.name) !== -1) {
            ret.push(fiber);
        }
    });
    return ret;
}

// 遍历 fiber 下所有节点
// handler 返回 true 的话，停止遍历，提高性能
function fiberRecursive(fiber, handler) {
    for (fiber = fiber.child; fiber; fiber = fiber.sibling) {
        if (handler(fiber)) {
            return;
        }
        if (fiber.child) {
            fiberRecursive(fiber, handler);
        }
    }
}

function getFirstWidget(fiber) {
    let ret = null;
    fiberRecursive(fiber, fiber => {
        if (supportWidgets.indexOf(fiber.name) !== -1) {
            ret = fiber;
            return true;
        }
    });
    return ret;
}

function getTopFiber(fiber) {
    while (fiber.return) {
        fiber = fiber.return;
    }
    return fiber || null;
}

class XLabel extends React.Component {
    constructor(props) {
        super(props);

        this.handleLabelClick = this.handleLabelClick.bind(this);
    }

    handleLabelClick(e) {
        const fiber = this._reactInternalFiber;
        let targetFiber = null;

        // 获得目标控件
        if (this.props.for !== undefined) {
            // for 方式
            const topFiber = getTopFiber(fiber);
            const targetFibers = getFibersById(topFiber, this.props.for);
            targetFiber = targetFibers.pop();
        } else {
            // 子元素方式，只取第一个符合要求的控件
            targetFiber = getFirstWidget(fiber);
        }
        // 目标控件存在的话执行对应的 handleClick 方法
        if (targetFiber) {
            const fn = targetFiber.stateNode.handleClick;
            fn && fn(e);
        }
    }

    componentDidMount() {
        // 如果子元素中有目标控件，设置 __InLabel=true
        const targetFiber = getFirstWidget(this._reactInternalFiber);
        if (targetFiber) {
            targetFiber.props.__InLabel = true;
        }
    }

    render() {
        return (
            <div
                className="col"
                onClick={this.handleLabelClick}
                style={this.props.style}
            >{this.props.children}</div>
        );
    }
}

XLabel.defaultProps = {
    style: {}
};

export default XLabel;
