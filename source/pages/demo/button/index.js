import React from '@react';
import './index.scss';
// import Button from '@components/Button/index';
import XButton from '@components/XButton/index';
class P extends React.Component {
    constructor() {
        super();
        this.state = {
            defaultSize: 'default',
            primarySize: 'default',
            warnSize: 'default',
            disabled: false,
            plain: false,
            loading: false
        };
    }

    setDisabled() {
        // eslint-disable-next-line
        console.log('disabled');
        this.setState({
            disabled: !this.state.disabled
        });
    }

    setPlain() {
        this.setState({
            plain: !this.state.plain
        });
    }

    setLoading() {
        this.setState({
            loading: !this.state.loading
        });
    }

    render() {
        return (
            <div className="anu-col demo-page">
                <span className="demo-header">Type</span>
                <div>
                    <div className="anu-col demo-content">
                        <div className="demo-nav__item--vertical">
                            <XButton
                                type="default"
                                loading={this.state.loading}
                                disabled={this.state.disabled}
                                plain={this.state.plain}
                            >
                                Default
                            </XButton>
                        </div>
                        <div className="demo-nav__item--vertical">
                            <XButton
                                type="primary"
                                loading={this.state.loading}
                                disabled={this.state.disabled}
                                plain={this.state.plain}
                            >
                                Primary
                            </XButton>
                        </div>
                        <div className="demo-nav__item--vertical">
                            <XButton
                                type="warn"
                                loading={this.state.loading}
                                disabled={this.state.disabled}
                                plain={this.state.plain}
                            >
                                Warn
                            </XButton>
                        </div>
                    </div>
                </div>
                <span className="demo-header">Size</span>
                <div className="demo-content">
                    <XButton
                        type="primary"
                        size="default"
                        loading={this.state.loading}
                        disabled={this.state.disabled}
                        plain={this.state.plain}
                    >
                        Default
                    </XButton>
                    <XButton
                        type="primary"
                        size="mini"
                        loading={this.state.loading}
                        disabled={this.state.disabled}
                        plain={this.state.plain}
                    >
                        Mini
                    </XButton>
                </div>
                <span className="demo-header">Loading</span>
                <div className="demo-content">
                    <XButton
                        type="warn"
                        disabled={this.state.disabled}
                        plain={this.state.plain}
                        loading={true}
                    >
                        Loading
                    </XButton>
                </div>
                <div className="demo-content">
                    <XButton onClick={this.setDisabled.bind(this)} >点击设置以上按钮disabled属性</XButton>
                    <XButton onClick={this.setPlain.bind(this)}>点击设置以上按钮plain属性</XButton>
                    <XButton onClick={this.setLoading.bind(this)}>点击设置以上按钮loading属性</XButton>
                </div>
            </div>
        );
    }
}

export default P;
