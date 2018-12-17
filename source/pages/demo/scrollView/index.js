import React from '@react';
import './index.scss';
import XScrollView from '@components/XScrollView/index';

class P extends React.Component {
    render() {
        return (
            <div className="anu-col demo-page">
                <span className="demo-header">Only for H5</span>
                <div className="demo-content">
                    <XScrollView scrollY={true} style={{ height: '300px' }} scrollTop={500}
                        scrollIntoView="anchor-0"
                        onScroll={(e) => console.log(e.target.scrollTop)}
                        scrollWithAnimation={false}
                        onScrollToUpper={() => console.log('onScrollToUpper')}
                        onScrollToLower={() => console.log('onScrollToLower')}
                    >
                        <div>
                            <p>line line line</p>
                            <p>line line line</p>
                            <p>line line line</p>
                            <p>line line line</p>
                            <p>line line line</p>
                            <p>line line line</p>
                            <p>line line line</p>
                            <p>line line line</p>
                            <p>line line line</p>
                            <p>line line line</p>
                            <p>line line line</p>
                            <p>line line line</p>
                            <p>line line line</p>
                            <p>line line line</p>
                            <p>line line line</p>
                            <p>line line line</p>
                            <p>line line line</p>
                            <p className="red" id="anchor-0">line line line</p>
                            <p>line line line</p>
                            <p>line line line</p>
                            <p>line line line</p>
                            <p>line line line</p>
                            <p>line line line</p>
                            <p>line line line</p>
                            <p>line line line</p>
                            <p>line line line</p>
                            <p>line line line</p>
                            <p>line line line</p>
                            <p>line line line</p>
                            <p>line line line</p>
                            <p>line line line</p>
                            <p>line line line</p>
                            <p>line line line</p>
                            <p>line line line</p>
                            <p>line line line</p>
                        </div>
                    </XScrollView>
                </div>
                <div className="demo-content">
                    <XScrollView scrollX={true} style={{ width: '500px' }} scrollTop={500}
                        scrollIntoView="anchor-1"
                        onScroll={(e) => console.dir(e.target.scrollTop)}
                        scrollWithAnimation={false}
                        onScrollToUpper={() => console.log('onScrollToUpper')}
                        onScrollToLower={() => console.log('onScrollToLower')}
                    >
                        <div style={{ width: '1000px', height: '300px' }}>
                            <p><span>word word</span><span>word word</span><span>word word</span><span className="red" id="anchor-1">word word</span><span>word word</span></p>
                        </div>
                    </XScrollView>
                </div>
                <div className="demo-content">
                    <XScrollView scrollY={true} style={{ height: '300px' }} scrollTop={500}
                        scrollIntoView="anchor-2"
                        onScroll={(e) => console.dir(e.target.scrollTop)}
                        scrollWithAnimation={false}
                        onScrollToUpper={() => console.log('onScrollToUpper')}
                        onScrollToLower={() => console.log('onScrollToLower')}
                    >
                        {[
                            <p>line line line</p>,
                            <p>line line line</p>,
                            <p>line line line</p>,
                            <p>line line line</p>,
                            <p>line line line</p>,
                            <p>line line line</p>,
                            <p>line line line</p>,
                            <p>line line line</p>,
                            <p>line line line</p>,
                            <p>line line line</p>,
                            <p>line line line</p>,
                            <p>line line line</p>,
                            <p>line line line</p>,
                            <p>line line line</p>,
                            <p>line line line</p>,
                            <p>line line line</p>,
                            <p>line line line</p>,
                            <p className="red" id="anchor-2">line line line</p>,
                            <p>line line line</p>,
                            <p>line line line</p>,
                            <p>line line line</p>,
                            <p>line line line</p>,
                            <p>line line line</p>,
                            <p>line line line</p>,
                            <p>line line line</p>,
                            <p>line line line</p>,
                            <p>line line line</p>,
                            <p>line line line</p>,
                            <p>line line line</p>,
                            <p>line line line</p>,
                            <p>line line line</p>,
                            <p>line line line</p>,
                            <p>line line line</p>,
                            <p>line line line</p>,
                            <p>line line line</p>
                        ]}
                    </XScrollView>
                </div>
            </div>
        );
    }
}

export default P;