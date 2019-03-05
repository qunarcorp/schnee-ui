import React from '@react';
import './index.scss';

import XDialog from '@components/XDialog/index';

class P extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
            show: false
        };
    }

    config = {
        backgroundColor: '#efeff4',
        navigationBarBackgroundColor: '#00bcd4',
        navigationBarTextStyle: 'white',
        navigationBarTitleText: '弹层'
        // enablePullDownRefresh: true
    };

    
    close() {
        
        this.setState({
            show: false
        });

    }

    

    click() {
        this.setState({
            show: !this.state.show
        });
    }

    
    render() {
        return <div class="item-container">
            <div onClick={this.click.bind(this)} class="click-button">点击</div>
            <XDialog onHiden={this.close.bind(this)} show={this.state.show}>
                <div class="item-container">
                    <div>123eeerer3344</div>
                    <div>34555q4r3434344</div>
                </div>
            </XDialog>
        </div>;
    }
}

export default P;