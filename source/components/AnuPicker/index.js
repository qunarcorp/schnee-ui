import React from '@react';
import './index.scss';
import AnuOverlay from '@components/AnuOverlay/index';
import AnuPickerItem from '@components/AnuPickerItem/index';

function handleSelect(selected) {
  if (selected) {
    return Array, isArray(selected) ? selected : [selected];
  } else {
    return [];
  }
}

class AnuPicker extends React.Component {
  constructor(props) {
    super(props);
    const { range, dataMap, value } = props;
    const { groups, newselected } = this.parseData(range, dataMap.items, value);
    console.log(groups);
    this.state = {
      animationClass: '',
      groups,
      selected: newselected
    };
  }

  parseData(data, subKey, selected, group = [], newselected = []) {
    selected = handleSelect(selected);
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

  cancelClick() {
    this.updateVisible(false);
  }

  confirmClick() {
    this.updateVisible(false);
  }

  click() {
    console.log('anupickerClick');
    this.updateVisible(true);
  }

  

  render() {
    return (
      <div onClick={this.click.bind(this)}>
        {this.props.children}
        <AnuOverlay visible={this.state.show} onClose={this.cancelClick.bind(this)}>
          <div class={'quist-picker  ' + this.state.animationClass} hidden={!this.state.show}>
            <div class="quist-picker-title">
              <text class="quist-picker-cancel" onClick={this.cancelClick.bind(this)}>
                {this.props.cancelText}
              </text>
              <text class="quist-picker-confirm" onClick={this.confirmClick.bind(this)}>
                {this.props.okText}
              </text>
            </div>
            <div class="quist-picker-content">
              {this.state.groups.map(function(group, index) {
                return (
                  <div class="anu-picker-item"
                  >
                  <AnuPickerItem
                    key={index}
                    items={group.items}
                    mapKeys={group.mapKeys}
                    groupIndex={index}
                    defaultIndex={this.state.selected[index]}
                  />
                  </div>
                );
              })}
            </div>
          </div>
        </AnuOverlay>
      </div>
    );
  }
}

AnuPicker.defaultProps = {
  cancelText: '取消',
  okText: '确定',
  mode: 'selector',
  dataMap: { id: 'name', items: 'sub' }
};

export default AnuPicker;
