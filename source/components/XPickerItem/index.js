import React from '@react';

import XPickerGroup from '../XPickerGroup/index';
import classNames from '../../common/utils/classnames';
import XMask from '../XMask/index';
import './index.scss';
import XDatePickerItem from '../XDatePickerItem/index.js';
/**
 *  Mobile select ui, currently only support Touch Events
 *
 */
class XPickerItem extends React.Component {
  // static propTypes = {
  //   /**
  //    * consists of array of object(max 2) with property `label` and others pass into element
  //    *
  //    */
  //   actions: PropTypes.array,
  //   /**
  //    * array objects consists of groups for each scroll group
  //    *
  //    */
  //   groups: PropTypes.array,
  //   /**
  //    * default group index thats selected, if not provide, automatic chose the best fiting item when mounted
  //    *
  //    */
  //   defaultSelect: PropTypes.array,
  //   /**
  //    * trigger when individual group change, pass property(`item`, `item index in group`, `group index in groups`, `selected`, `picker instance`)
  //    *
  //    */
  //   onGroupChange: PropTypes.func,
  //   /**
  //    * on selected change, pass property `selected` for array of slected index to `groups`
  //    *
  //    */
  //   onChange: PropTypes.func,
  //   /**
  //    * excute when the popup about to close
  //    *
  //    */
  //   onCancel: PropTypes.func,
  //   /**
  //    * display the component
  //    *
  //    */
  //   show: PropTypes.bool,
  //   /**
  //    * language object consists of `leftBtn` and `rightBtn`
  //    *
  //    */
  //   lang: PropTypes.object
  // };

  static defaultProps = {
    actions: [],
    groups: [],
    show: false,
    lang: { leftBtn: 'Cancel', rightBtn: 'Ok' }
  };

  constructor(props) {
    super(props);
    console.log('props', props);
    const { cls, maskCls } = this.handleClassName(props, false);

    this.state = {
      selected: this.props.defaultSelect
        ? this.props.defaultSelect
        : Array(this.props.groups.length).fill(-1),
      actions:
        this.props.actions.length > 0
          ? this.props.actions
          : [
              {
                label: this.props.lang.leftBtn,
                onClick: e =>
                  this.handleClose(() => {
                    if (this.props.onCancel) this.props.onCancel(e);
                  })
              },
              {
                label: this.props.lang.rightBtn,
                onClick: e => this.handleChanges()
              }
            ],
      closing: false,
      cls,
      maskCls
    };

    this.handleChanges = this.handleChanges.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleClassName = this.handleClassName.bind(this);
  }

  handleChanges() {
    console.log('change', this.state.selected);
    this.handleClose(() => {
      if (this.props.onChange) this.props.onChange(this.state.selected, this);
    });
  }

  handleChange(item, i, groupIndex) {
    console.log('handeChange', item);
    if (this.props.type === 'date') {

      this.setState({
        selected: item.value
      }, () => {
        if (this.props.onGroupChange)
        this.props.onGroupChange(item, i, groupIndex, this.state.selected, this);
      })



    } else {
      let selected = this.state.selected;
      selected[groupIndex] = i;
      this.setState({ selected }, () => {
        if (this.props.onGroupChange)
          this.props.onGroupChange(item, i, groupIndex, this.state.selected, this);
      });
    }
  }

  handleClassName(props, closing) {
    const cls = classNames(
      'weui-picker',
      {
        'weui-animate-slide-up': props.show && !closing,
        'weui-animate-slide-down': closing
      },
      props.className
    );

    const maskCls = classNames({
      'weui-animate-fade-in': props.show && !closing,
      'weui-animate-fade-out': closing
    });

    return { cls, maskCls };
  }

  handleClose(cb) {
    let { cls, maskCls } = this.handleClassName(this.props, true);
    this.setState(
      {
        closing: true,
        cls,
        maskCls
      },
      () =>
        setTimeout(() => {
          // let { cls, maskCls } = this.handleClassName(this.props, false);
          this.setState({ closing: false });
          console.log('closeing');
          cb();
        }, 300)
    );
  }

  // e=>this.handleClose( ()=> {if (this.props.onCancel) this.props.onCancel(e);} )
  handleCancel(e) {
    console.log('cancel');
    this.handleClose(() => {
      if (this.props.onCancel) {
        this.props.onCancel(e);
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props.show, nextProps.show, this.state.closing);
    if (this.props.show !== nextProps.show) {
      let { cls, maskCls } = this.handleClassName(nextProps, this.state.closing);
      this.setState({
        cls,
        maskCls
      });
    }
  }

  render() {
    return this.props.show ? (
      <div>
        <XMask className={this.state.maskCls} click={this.handleCancel.bind(this)} />
        <div class={this.state.cls}>
          <div class="weui-picker__hd">
            {this.state.actions.map(function(action, i) {
              return (
                <a
                  onClick={action.onClick}
                  key={i}
                  class={'weui-picker__action ' + 'weui-picker__action_' + i}
                >
                  {action.label}
                </a>
              );
            })}
          </div>
          <div className="weui-picker__bd">
            {this.props.groups.map(function(group, i) {
              return (
                <div style="display: flex; flex: 1; justify-content:center">
                  {this.props.type === 'date' ? (
                    <XDatePickerItem
                      key={i}
                      value={this.props.defaultSelect}
                      onChange={this.handleChange}
                      step={group.step}
                      type={group.type}
                      format={group.format}
                      start={this.props.start}
                      end={this.props.end}
                    />
                  ) : (
                    <XPickerGroup
                      key={i}
                      onChange={this.handleChange}
                      items={group.items}
                      mapKeys={group.mapKeys}
                      groupIndex={i}
                      defaultIndex={this.state.selected[i]}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    ) : null;
  }
}

export default XPickerItem;
