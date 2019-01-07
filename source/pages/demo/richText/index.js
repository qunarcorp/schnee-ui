import React from '@react';
import XRichText from '@components/XRichText/index';
import './index.scss';

class P extends React.Component {
    render() {
        return (
            <div className="anu-col demo-page">
                <XRichText nodes={
                    '<span>去哪儿网</span><img src="https://source.qunarzz.com/common/hf/logo.png"/>'
                }></XRichText>
            </div>
        );
    }
}
export default P;