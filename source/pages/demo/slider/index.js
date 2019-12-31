import React from '@react';
import './index.scss';
import XSlider from '@components/XSlider/index';
class P extends React.Component {
    constructor() {
        super();
        // this.bind();
        this.state = {
            slider0: 0,
            slider1: 40,
            slider2: 40,
            slider3: 0,
            slider4: 80,
            slider5: 0,
            start: 10,
            end:40
        };

        this.sliderChange = this.sliderChange.bind(this);
    }

    sliderChange(idx) {
        // eslint-disable-next-line no-console
        
        // console.log('event:', idx);

        let result = idx.detail.value;
        this.setState({
            start: result[0],
            end: result[1],
        });

    }

    clear(){
        this.setState({
            start: 0,
            end: 100
        });
    }

    render() {
        // console.log(this.state.start, 'slider', this.state.end);
        return (
            <div className="anu-col demo-page">

                <XSlider 
                    show-value={true}
                    isSingle={false}
                    min={0}
                    max={100}
                    // value={30}
                    value={[this.state.start, this.state.end]}
                    bindchange={e => this.sliderChange(e)}
                    // show-value={false}
                />

                <button onClick={this.clear.bind(this)}>按钮</button>

                {/* <span className="demo-header">目前快应用计算不出dom的宽高(2018-12-12), 写死270</span>
                <span className="demo-header">default</span>
                <div className="demo-content">
                    <div className="anu-col">
                        <XSlider
                            className="slider"
                            onChange={this.sliderChange.bind(this, 0)}
                            value={this.state.slider0}
                        />
                    </div>
                </div>
                <span className="demo-header">step(20)/block-size(16)/value(40)</span>
                <div className="demo-content">
                    <div className="anu-col">
                        <XSlider
                            className="slider"
                            onChange={this.sliderChange.bind(this, 1)}
                            value={this.state.slider1}
                            step={20}
                            block-size={16}
                        />
                    </div>
                </div>
                <span className="demo-header">disabled(true)</span>
                <div className="demo-content">
                    <div className="anu-col">
                        <XSlider
                            className="slider"
                            onChange={this.sliderChange.bind(this, 2)}
                            value={this.state.slider2}
                            step={20}
                            disabled={true}
                        />
                    </div>
                </div>
                <span className="demo-header">不显示当前value</span>
                <div className="demo-content">
                    <div className="anu-col">
                        <XSlider
                            className="slider"
                            onChange={this.sliderChange.bind(this, 3)}
                            value={this.state.slider3}
                            show-value={true}
                            block-size={24}
                            showValue={false}
                        />
                    </div>
                </div>
                <span className="demo-header">min(0)/max(120)/step(40)</span>
                <div className="demo-content">
                    <div className="anu-col">
                        <XSlider
                            onChange={this.sliderChange.bind(this, 4)}
                            max={120}
                            step={40}
                            value={this.state.slider4}
                        />
                    </div>
                </div>
                <div className="demo-header" style={{display: 'flex', justifyContent: 'space-between'}}>
                    <span style={{color: '#dadb1a'}}>activeColor</span>
                    <span style={{color: '#f00'}}>block-color</span>
                    <span style={{color: '#00BCD4'}}>backgroundColor</span>
                </div>
                <div className="demo-content">
                    <div className="anu-col">
                        <XSlider
                            onChange={this.sliderChange.bind(this, 5)}
                            value={this.state.slider5}
                            backgroundColor="#00BCD4"
                            block-color="#f00"
                            activeColor="#dadb1a"
                        />
                    </div>
                </div> */}
            </div>
        );
    }
}

export default P;
