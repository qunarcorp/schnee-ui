import React from '@react';
import './index.scss';
import Swiper from '@components/Swiper/index';


class SwiperDemo extends React.Component {
    render() {
        return (
            <Swiper>
                {[0,1,2,3,4,5].map(function(item) {
                    return <div className="anu-swiper__item">
                        <div className="swiper-content">{item}</div>
                    </div>;
                })}
            </Swiper>
        );
    }
}

export default SwiperDemo;