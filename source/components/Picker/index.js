import React from '@react';
// import PropTypes from 'prop-types';
import PickerItem from '../PickerItem/index';
import { nextDate } from '../DatePicker/time';

/**
 *  Mobile select ui, currently only support Touch Events
 *
 */
class Picker extends React.Component {
  // static propTypes = {
  //   type: PropTypes.string,
  //   /**
  //    * consists of array of object(max 2) with property `label` and others pass into element
  //    *
  //    */
  //   actions: PropTypes.array,
  //   /**
  //    * array objects consists of groups for each scroll group
  //    *
  //    */
  //   data: PropTypes.array,
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
    type: 'selector',
    dataMap: { id: 'name', items: 'sub' },
    // selected: [],  // 不同的type selected 不一样
    actions: [],
    range: [],
    show: false,
    lang: { leftBtn: 'Cancel', rightBtn: 'Ok' }
  };

  constructor(props) {
    super(props);
    // 多列选择器
    const { range, dataMap, value } = props;
    const { groups, newselected } = this.parseData(range, dataMap.items, value);
    // const dataConfigList = this.normalizeDateConfig(props.dateConfig);
    this.state = {
      groups,
      // dataConfigList,
      selected: newselected
    };

    this.parseData = this.parseData.bind(this);
    this.updateDataBySelected = this.updateDataBySelected.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.type !== nextProps.type) {
      const { range, dataMap, value } = nextProps;
      const { groups, newselected } = this.parseData(range, dataMap.items, value);
      this.state = {
        groups,
        // dataConfigList,
        selected: newselected
      };
    }
  }

  parseData(data, subKey, selected = [], group = [], newselected = []) {
    console.log('selected', selected);
    if (this.props.type === 'date') {
      let groups = [
        { format: 'YYYY', caption: '年', step: 1, type: 'Year' },
        { format: 'MM', caption: '月', step: 1, type: 'Month' },
        { format: 'DD', caption: '日', step: 1, type: 'Date' }
      ];

      let newselected = nextDate(selected);

      return { groups, newselected };
    }

    let _selected = 0;

    if (Array.isArray(selected) && selected.length > 0) {
      let _selectedClone = selected.slice(0);
      _selected = _selectedClone.shift();
      selected = _selectedClone;
    }

    if (typeof data[_selected] === 'undefined') {
      _selected = 0;
    }

    newselected.push(_selected);

    let item = data[_selected];

    var _group = JSON.parse(JSON.stringify(data));
    _group.forEach(g => delete g[subKey]);
    group.push({ items: _group, mapKeys: { label: this.props.dataMap.id } });

    if (typeof item[subKey] !== 'undefined' && Array.isArray(item[subKey])) {
      return this.parseData(item[subKey], subKey, selected, group, newselected);
    } else {
      return { groups: group, newselected };
    }
  }

  updateDataBySelected(selected, cb) {
    const { range, dataMap } = this.props;
    //validate if item exists

    const { groups, newselected } = this.parseData(range, dataMap.items, selected);
    console.log('updateDataBySelected');

    let text = '';
    try {
      groups.forEach((group, _i) => {
        text += `${group['items'][selected[_i]][this.props.dataMap.id]} `;
      });
    } catch (err) {
      //wait
      text = this.state.text;
    }

    this.setState(
      {
        groups,
        text,
        selected: newselected
      },
      () => cb()
    );
  }

  handleChange(selected) {
    let fn = this.props.onChange;
    console.log('Picker', selected);
    if (this.props.type === 'date') {
      fn && fn(selected);
    } else {
      this.updateDataBySelected(selected, () => {
        fn && fn(this.state.text);
      });
    }
  }

  handleCancel(e) {
    let fn = this.props.onCancel;
    fn && fn.call(this, e);
  }

  updateGroup(item, i, groupIndex, selected, picker) {
    this.updateDataBySelected(selected, () => {
      //update picker
      picker.setState({
        selected: this.state.selected
      });
    });
  }

  render() {
    return (
      <PickerItem
        onChange={this.handleChange.bind(this)}
        onGroupChange={this.updateGroup.bind(this)}
        groups={this.state.groups}
        show={this.props.show}
        type={this.props.type}
        defaultSelect={this.state.selected}
        onCancel={this.handleCancel.bind(this)}
        start={this.props.start}
        end={this.props.end}
      />
    );
  }
}

export default Picker;
