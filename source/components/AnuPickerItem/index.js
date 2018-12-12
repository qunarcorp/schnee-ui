import React from '@react';
import './index.scss';

class AnuPickerItem extends React.Component {
  constructor(props) {
    super(props);
    console.log('props', props);
    this.state = {
      touching: false,
      touchId: undefined,
      ogY: 0,
      ogTranslate: 0,
      translate: 0,
      totalHeight: 0,
      selected: 0
    };
  }

  handleTouchStart(e) {

    console.log('start',e.touches[0].identifier);


    this.setState({
      touching: true,
      touchId: e.touches[0].identifier
    }, () => {
      console.log('start=======',e.touches[0].identifier);
    });
  }

  handleTouchMove(e) {
    // eslint-disable-next-line no-console
    console.log('touch move e:::', this.state.touchId);
    // if (!this.state.touching || this.props.disabled) return;
    if (e.touches[0].identifier !== this.state.touchId) return;

    const pageX = e.touches[0].pageX;
    const diffX = pageX - this.state.ogX;
    console.log('diffX', diffX);

   
  }

  handleTouchEnd() {
    console.log('end')
    // if (!this.state.touching || this.props.disabled) return;

    // if (this.props.snapToValue) {
    //   this.updateValue(true);
    // }

    // this.setState({
    //   touching: false,
    //   ogX: 0,
    //   touchId: undefined,
    //   ogPercent: 0
    // });
  }

  render() {
    return (
      <div
      style={{width: '100%'}}
      >
        <div class="anu-picker_content" style={{
          transform: `translate(0, ${this.state.translate}px)`
        }}>
          {this.props.items.map(function(item, index) {
            return (
              <div
                key={index}
                class={'anu-picker__item ' + (item.disabled ? 'anu-picker__item_disabled' : '')}
              >
                {item[this.props.mapKeys.label] || item}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

AnuPickerItem.defaultProps = {
  itemHeight: 25 + 9, //content + padding
  indicatorTop: 102,
  indicatorHeight: 34,
  aniamtion: true,
  groupIndex: -1,
  defaultIndex: -1,
  mapKeys: {
    label: 'label'
  }
};

export default AnuPickerItem;
