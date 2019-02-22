import React from '@react';


class XWebView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            src: '', 
            show: false
        };
        React.webview.instance = this;
        React.webview.cb = this.onMsgFunc;
    }
    componentDidMount() {
        this.setState({
            src:  this.props.src
        });
    }
    onMsgFunc() {
        // console.log(1222, e)
    }

    render() {
        return (
            <div>
                {this.state.src ? <web-view src={this.state.src} onMessage={this.onMsgFunc.bind(this)}  /> : null}
            </div>
        );
    }
}
export default XWebView;
