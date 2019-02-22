import React from  '@react';
import './index.scss';
const noop = function(){};

class XNavigator extends React.Component{
    constructor(props){
        super(props);
        if (typeof props.children !== 'string'){
            console.warn('<Navigator>组件的内容暂时只能传字符串，不能放标签'); //eslint-disable-line
        }
        this.state = {
            children: props.children
        };
    }
    static defaultProps = {
        target: 'self',
        url: '',
        openType: 'navigate',
        hoverClass: 'navigator-hover'
    }
    componentWillReceiveProps(props){
        if (this.state.children != props.children){
            this.setState({
                children: props.children
            });
        }
    }
    goPage(){
        var method = this.props.openType;
        var hook = methodMap[method] || 'navigateTo';
        React.api[hook]({
            url: this.props.url,
            success: this.props.bindsuccess || noop,
            fail:this.props.bindfail || noop,
            complete: this.props.bindcomplete || noop
        });
    }
    render(){
        return <div class={'anu-navigator '+this.props.class} onTap={this.goPage.bind(this)}>
            {this.state.children}
        </div>;
    }

}
const methodMap = {
    navigate: 'navigateTo',
    redirect: 'redirectTo',
    switchTab: 'switchTab',
    reLaunch: 'reLaunch',
    navigateBack: 'navigateBack'
};

export default XNavigator;