import React from '@react';
import './index.scss';
import XSwiper from '@components/XSwiper/index';


class SwiperDemo extends React.Component {
    render() {
        return (
            <div className="anu-col demo-page">
                <span className="demo-header">水平方向</span>
                <div className="demo-content">
                    <div className="anu-col">
                        <div className="demo-nav__item--vertical">
                            <XSwiper
                                style={{ height: '300px' }}
                                current={3}
                            >
                                {[0,1,2,3,4,5].map(function(item) {
                                    return <div className="anu-swiper__item">
                                        <div className="swiper-content">{item}</div>
                                    </div>;
                                })}
                            </XSwiper>
                        </div>
                        <div className="demo-nav__item--vertical">
                            <XSwiper
                                indicatorDots={true}
                                style={{ height: '300px' }}
                                current={3}
                            >
                                {[0,1,2,3,4,5].map(function(item) {
                                    return <div className="anu-swiper__item">
                                        <div className="swiper-content">{item}</div>
                                    </div>;
                                })}
                            </XSwiper>
                        </div>
                    </div>
                </div>
                <span className="demo-header">垂直方向</span>
                <div className="demo-content">
                    <div className="anu-col">
                        <div className="demo-nav__item--vertical">
                            <XSwiper
                                vertical={true}
                                style={{ height: '300px' }}
                            >
                                {[0,1,2,3,4,5].map(function(item) {
                                    return <div className="anu-swiper__item">
                                        <div className="swiper-content">{item}</div>
                                    </div>;
                                })}
                            </XSwiper>
                        </div>
                        <div className="demo-nav__item--vertical">
                            <XSwiper
                                indicatorDots={true}
                                vertical={true}
                                style={{ height: '300px' }}
                            >
                                {[0,1,2,3,4,5].map(function(item) {
                                    return <div className="anu-swiper__item">
                                        <div className="swiper-content">{item}</div>
                                    </div>;
                                })}
                            </XSwiper>
                        </div>
                    </div>
                </div>
                <span className="demo-header">循环滚动</span>
                <div className="demo-content">
                    <XSwiper
                        indicatorDots={true}
                        circular={true}
                        style={{ height: '300px' }}
                    >
                        {[5,0,1,2,3,4,5,0].map(function(item) {
                            return <div className="anu-swiper__item">
                                <div className="swiper-content">{item}</div>
                            </div>;
                        })}
                    </XSwiper>
                </div>
                <span className="demo-header">autoPlay</span>
                <div className="demo-content">
                    <div className="anu-col">
                        <div className="demo-nav__item--vertical">
                            <XSwiper
                                indicatorDots={true}
                                autoPlay={true}
                                interval={1000}
                                style={{ height: '300px' }}
                            >
                                {[0,1,2,3,4,5].map(function(item) {
                                    return <div className="anu-swiper__item">
                                        <div className="swiper-content">{item}</div>
                                    </div>;
                                })}
                            </XSwiper>
                        </div>
                        <div className="demo-nav__item--vertical">
                            <XSwiper
                                indicatorDots={true}
                                circular={true}
                                autoPlay={true}
                                interval={1000}
                                style={{ height: '300px' }}
                            >
                                {[5,0,1,2,3,4,5,0].map(function(item) {
                                    return <div className="anu-swiper__item">
                                        <div className="swiper-content">{item}</div>
                                    </div>;
                                })}
                            </XSwiper>
                        </div>
                    </div>
                </div>
                <span className="demo-header">测试</span>
                <div className="anu-col">
                    <div className="aaa"></div>
                    <div style={{ width: '160px', height: '90px', backgroundColor: 'green', transform: '{"translateX":"100%","translateY":"180%"}' }}></div>
                </div>
            </div>
        );
    }
}

export default SwiperDemo;