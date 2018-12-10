import React from '@react';
import './index.scss';
import XSwiper from '@components/XSwiper/index';


class SwiperDemo extends React.Component {
    render() {
        return (
            <div className="anu-col demo-page">
                <span className="demo-header">水平方向</span>
                <div className="demo-content">
                    <XSwiper
                        indicatorDots={true}
                        autoPlay={true}
                        interval={2500}
                        style={{ margin: '80px', height: '400px' }}
                    >
                        {[0,1,2,3,4,5].map(function(item) {
                            return <div className="anu-swiper__item">
                                <div className="swiper-content">{item}</div>
                            </div>;
                        })}
                    </XSwiper>
                </div>
                <span className="demo-header">垂直方向</span>
                <div className="demo-content">
                    <XSwiper indicatorDots={true} vertical={true} style={{ margin: '80px', height: '400px' }}>
                        {[0,1,2,3,4,5].map(function(item) {
                            return <div className="anu-swiper__item">
                                <div className="swiper-content">{item}</div>
                            </div>;
                        })}
                    </XSwiper>
                </div>
            </div>
        );
    }
}

export default SwiperDemo;