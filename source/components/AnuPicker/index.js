import React from '@react';
import './index.scss';
import AnuOverlay from '@components/AnuOverlay/index';
import AnuPickerItem from '@components/AnuPickerItem/index';
import AnuDatePickerItem from '@components/AnuDatePickerItem/index';
import { nextDate, timeStrToDate, getDate, nextMinute, getTime } from '../../common/utils/time';
import cnCity from '../../common/utils/cnCity';
/* eslint-disable */
function handleSelect(selected) {
  if (selected) {
    return Array.isArray(selected) ? selected : [selected];
  } else {
    return [];
  }
}

class AnuPicker extends React.Component {
  constructor(props) {
    super(props);
    this.selectedValue = props.value;
    const { range, dataMap, value, mode, start, end } = props;
    let rangeValue = mode === 'region' ? cnCity : range
    const { groups, newselected } = this.parseData(rangeValue, dataMap.items, value);
    console.log('groups', newselected);
    this.state = {
      animationClass: '',
      groups,
      selected: newselected,
      start: timeStrToDate(start, mode),
      end: timeStrToDate(end, mode)
    };
  }

  parseData(data, subKey, selected, group = [], newselected = []) {
    if (this.props.mode === 'date') {
      selected = selected ? new Date(selected) : new Date();
      let groups = [
        { format: 'YYYY', caption: '年', step: 1, type: 'Year' },
        { format: 'MM', caption: '月', step: 1, type: 'Month' },
        { format: 'DD', caption: '日', step: 1, type: 'Date' }
      ];

      let newselected = nextDate(selected);

      return { groups, newselected };
    }

    if (this.props.mode === 'time') {
      selected = selected ? timeStrToDate(selected, 'time') : new Date();

      // console.log('selected', selected);

      let groups = [
        { format: 'hh', caption: '时', step: 1, type: 'Hour' },
        { format: 'mm', caption: '分', step: 1, type: 'Minute' }
      ];
      let newselected = nextMinute(selected);

      return { groups, newselected };
    }



    selected = handleSelect(selected);
    let _selected = 0;

    if (Array.isArray(selected) && selected.length > 0) {
      let _selectedClone = selected.slice(0);
      _selected = _selectedClone.shift();
      selected = _selectedClone;
    }
    
    

    data.forEach((item,index)  => {
      if(item[this.props.dataMap.id] === _selected) {
        _selected = index
      }
    })

    // if (typeof data[_selected] === 'undefined') {
    //   _selected = 0;
    // }
   


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

  updateVisible(visible) {
    this.timeoutId && clearTimeout(this.timeoutId); //防止更改太快
    if (visible) {
      this.setState({
        show: true,
        animationClass: 'pickerenter'
      });
    } else {
      this.setState({
        animationClass: 'pickerleave'
      });

      this.timeoutId = setTimeout(() => {
        this.setState({
          show: false
        });
      }, 300);
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps>>>>>>', this.props.mode,  nextProps.mode)
    if(this.props.mode !== nextProps.mode || this.props.value !== nextProps.value) {
      
      const { range, dataMap, value, mode, start, end } = nextProps;
      let rangeValue = mode === 'region' ? cnCity : range;
      console.log('range', range)
      const { groups, newselected } = this.parseData(rangeValue, dataMap.items, value);
      this.state = {
        groups,
        selected: newselected,
        start: timeStrToDate(start, mode),
        end: timeStrToDate(end, mode)
      };
    }
  }

  cancelClick() {
    this.updateVisible(false);
  }

  confirmClick() {
    this.updateVisible(false);
    this.props.onChange && this.props.onChange({ value: this.selectedValue });
    // this.props.onChange && this.props.onChange({value: this.selectedDate});
  }

  click() {
    // console.log('anupickerClick');
    this.updateVisible(true);
  }

  //  动态更新用户选择
  updateDataBySelected(selected, cb) {
    const { range, dataMap, mode } = this.props;
    //validate if item exists
    let rangeValue = mode === 'region' ? cnCity : range;
    const { groups, newselected } = this.parseData(rangeValue, dataMap.items, selected);
    // console.log('updateDataBySelected', groups);
    let text = [];
    switch (mode) {
      case 'region':
      case 'multiSelector':
        groups.forEach((group, _i) => {
          text.push(group['items'][selected[_i]][this.props.dataMap.id]);
        });
        break;
      case 'selector':
        text = newselected[0];
        break;
    }
    // 单列类型

    this.setState({
      groups,
      selected: newselected
    });

    cb(text);
  }

  handleItemChange(selected, groupIndex) {
    let selectedArr = this.state.selected;
    selectedArr[groupIndex] = selected;
    // console.log('AnuPicker', selectedArr);
    this.updateDataBySelected(selectedArr, value => {
      this.selectedValue = value;
      // console.log('value', value);
    });
  }

  handleDateChange(date) {
    console.log('date', date, getDate(date.date));
    if (!date.disabled) {
      this.selectedValue = this.props.mode === 'date' ? getDate(date.date) : getTime(date.date);
      console.log(this.selectedValue);
    } else {
      this.selectedValue = this.props.value;
    }
  }

  render() {
    return (
      <div catchTap={this.click.bind(this)}>
        {this.props.children}
        <AnuOverlay visible={this.state.show} onClose={this.cancelClick.bind(this)} />
        {/* {this.state.show && ( */}
          <div class={'quist-picker  ' + this.state.animationClass} hidden={!this.state.show}>
            <div class="quist-picker-title">
              <text class="quist-picker-cancel" catchTap={this.cancelClick.bind(this)}>
                {this.props.cancelText}
              </text>
              <text
                class="quist-picker-confirm"
                style={{ color: this.props.okStyle }}
                catchTap={this.confirmClick.bind(this)}
              >
                {this.props.okText}
              </text>
            </div>
            <div class="quist-picker-content">
              {this.state.groups.map(function(group, index) {
                return (
                  <div class="anu-picker-item">
                    {this.props.mode === 'date' || this.props.mode === 'time' ? (
                      <AnuDatePickerItem
                        value={this.state.selected}
                        onChange={this.handleDateChange.bind(this)}
                        step={group.step}
                        type={group.type}
                        format={group.format}
                        start={this.state.start}
                        end={this.state.end}
                      />
                    ) : (
                      <AnuPickerItem
                        items={group.items}
                        mapKeys={group.mapKeys}
                        groupIndex={index}
                        onChange={this.handleItemChange.bind(this)}
                        defaultIndex={this.state.selected[index]}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        {/* )} */}
      </div>
    );
  }
}

AnuPicker.defaultProps = {
  cancelText: '取消',
  okText: '确定',
  mode: 'selector',
  dataMap: { id: 'name', items: 'sub' },
  okStyle: '#1AAD19'
};

export default AnuPicker;
