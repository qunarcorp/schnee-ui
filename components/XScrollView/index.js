import React from '@react';
import './index.scss';

class XScrollView extends React.Component {
    static defaultProps = {
        scrollX: false,
        scrollY: false,
        upperThreshold: 50,
        lowerThreshold: 50,
        scrollIntoView: false,
        scrollWithAnimation: false,
    };

    constructor(props) {
        super(props);
        this.scroll = null;
        this.scroller = null;
        this.lastScrollDistance = null;
        this.getScrollViewClasses = this.getScrollViewClasses.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.scrollTo = this.scrollTo.bind(this);
        this.renderContent = this.renderContent.bind(this);
    }

    getScrollViewClasses() {
        const { scrollX, scrollY } = this.props;
        let classes = 'anu-scroll-view';
        if (scrollX && scrollY) {
            classes += ' anu-scroll-view--overflow';
        } else if (scrollX) {
            classes += ' anu-scroll-view--overflow-x';
        } else if (scrollY) {
            classes += ' anu-scroll-view--overflow-y';
        }
        return classes;
    }

    handleScroll(e) {
        const { scrollX, scrollY, upperThreshold, lowerThreshold, onScrollToUpper, onScrollToLower, onScroll } = this.props;
        let scrollDistance, wrapperLength, contentLength;
        onScroll && onScroll(e);
        if (!scrollX && !scrollY) {
            return;
        }
        if (scrollX) {
            scrollDistance = e.target.scrollLeft;
            this.scroller && this.scroll &&
                (wrapperLength = this.scroller.clientWidth, contentLength = this.scroll.clientWidth);
        }
        if (scrollY) {
            scrollDistance = e.target.scrollTop;
            this.scroller && this.scroll &&
                (wrapperLength = this.scroller.clientHeight, contentLength = this.scroll.clientHeight);
        }
        if (onScrollToUpper) {
            if (this.lastScrollDistance > upperThreshold && scrollDistance <= upperThreshold) {
                onScrollToUpper();
            }
        }
        if (onScrollToLower) {
            if (this.lastScrollDistance < (contentLength - wrapperLength - lowerThreshold) && scrollDistance >= (contentLength - wrapperLength - lowerThreshold)) {
                onScrollToLower();
            }
        }
        this.lastScrollDistance = scrollDistance;
    }

    scrollTo() {
        const { scroll, scroller } = this;
        const { scrollX, scrollY, scrollWithAnimation, scrollIntoView } = this.props;
        let { scrollTop, scrollLeft } = this.props;

        if (typeof scrollIntoView === 'string') {
            const dom = document.getElementById(scrollIntoView);
            scrollX && dom && this.scroll && (scrollLeft = dom.getBoundingClientRect().left - this.scroll.getBoundingClientRect().left);
            scrollY && dom && this.scroll && (scrollTop = dom.getBoundingClientRect().top - this.scroll.getBoundingClientRect().top);
        }

        if (scrollWithAnimation && scroll && scroller) {
            let curTop, curLeft, deltaTop, stepX, stepY;
            // eslint-disable-next-line
            let deltaLeft;
            curTop  = scroll.scrollTop;
            curLeft = scroll.scrollLeft;
            curTop  !== undefined && scrollTop  !== undefined && (deltaTop  = scrollTop  - curTop);
            curLeft !== undefined && scrollLeft !== undefined && (deltaLeft = scrollLeft - curLeft);
            if (deltaTop < 0) {
                stepY = -30;
            } else if (deltaTop > 0) {
                stepY = 30;
            }
            if (scrollLeft < 0) {
                stepX = -30;
            } else if (scrollLeft > 0) {
                stepX = -30;
            }
            const animation = () => {
                setTimeout(function() {
                    if (stepY !== undefined) {
                        curTop += stepY;
                        if (Math.abs(scrollTop - curTop) < 30 ) {
                            curTop = scrollTop;
                            scroller.scrollTop = curTop;
                        } else {
                            scroller.scrollTop = curTop;
                            animation();
                        }
                    }
                    if (stepX !== undefined) {
                        curLeft += stepX;
                        if (Math.abs(scrollLeft - curLeft) < 30 ) {
                            curLeft = scrollLeft;
                            scroller.scrollLeft = curLeft;
                        } else {
                            scroller.scrollLeft = curLeft;
                            animation();
                        }
                    }
                }, 16);
            };
            animation();
        } else {
            scrollTop !== undefined && scroller && (scroller.scrollTop = scrollTop);
            scrollLeft !== undefined && scroller && (scroller.scrollLeft = scrollLeft);
        }
    }

    componentDidMount() {
        this.scrollTo();
    }

    componentWillUpdate() {
        this.scrollTo();
    }

    renderContent() {
        if (this.props.children.length) {
            return <div ref={(dom) => {
                dom && (this.scroll = dom);
            }}>
                {this.props.children}
            </div>;
        } else {
            return React.cloneElement(this.props.children, {
                ref: (dom) => {
                    dom && (this.scroll = dom);
                }
            });
        }
    }

    render() {
        return (
            <div style={this.props.style} className={this.getScrollViewClasses()}
                onScroll={this.handleScroll}
                ref={(dom) => {
                    dom && (this.scroller = dom);
                }}
            >
                {this.renderContent()}
            </div>
        );
    }
}

export default XScrollView;