

import React from '@react';
import XWebView from '@components/XWebView/index';


class Data extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: 'https://m.flight.qunar.com'
        };
    }

    render() {
        return (
            <XWebView src={this.state.url} ></XWebView>
        );
    }
}
export default Data;