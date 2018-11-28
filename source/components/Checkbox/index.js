// eslint-disable-next-line
import React from '@react';
import './index.scss'
class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    console.log('props',props);
    
  }
  render() {
    return (
      <input type="checkbox" checked={this.props.checked} disabled={this.props.disabled} value={this.props.value}>
      </input>
    );
  }
}

Checkbox.defaultProps = {
  disabled: false,
  checked: false,
  value: ''
};


export default Checkbox;
