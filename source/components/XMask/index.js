

import React from '@react';
import classNames from '../../common/utils/classnames';
import './index.scss';

/**
 * screen mask, use in `Dialog`, `ActionSheet`, `Popup`.
 *
 */
class XMask extends React.Component {


  static defaultProps = {
    transparent: false
  };

  constructor(props) {
    super(props);
    const { transparent, className } = props;
    const clz = classNames(
      {
        'weui-mask': !transparent,
        'weui-mask_transparent': transparent
      },
      className
    );
    this.state = {
      clz
    };
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.className !== this.props.className ||
      nextProps.transparent !== this.props.transparent
    ) {
      const { transparent, className } = nextProps;
      const clz = classNames(
        {
          'weui-mask': !transparent,
          'weui-mask_transparent': transparent
        },
        className
      );

      this.setState({
        clz
      });
    }
  }

  onClick() {
    console.log('mask click', this.props);
    if(this.props.click) {
      console.log(11)
      this.props.click()
    }
  }

  render() {

    return <div className={this.state.clz}  onClick={this.onClick.bind(this)}/>;
  }
}

export default XMask;
