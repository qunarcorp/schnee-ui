import React from '@react';
import './index.scss';
import Swiper from '@components/Swiper/index';


class SwiperDemo extends React.Component {
    render() {
        return (
            <div className="col">
                <Swiper
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
                </Swiper>
                <Swiper indicatorDots={true} vertical={true} style={{ margin: '80px', height: '400px' }}>
                    {[0,1,2,3,4,5].map(function(item) {
                        return <div className="anu-swiper__item">
                            <div className="swiper-content">{item}</div>
                        </div>;
                    })}
                </Swiper>
            </div>
        );
    }
}

export default SwiperDemo;