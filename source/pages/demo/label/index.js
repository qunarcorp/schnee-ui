import React from '@react';
// import './index.scss';
import Label from '@components/Label/index';

class P extends React.Component {
  constructor() {
    super();
    this.state = {
      condition1: true,
      condition2: true
    };
  }

  toggleCondition2() {
    console.log('Condition2');
    this.setState({
      condition2: !this.state.condition2
    });
  }

  toggleCondition1() {
    console.log('Condition1');
    this.setState({
      condition1: !this.state.condition1
    });
  }

  render() {
    return (
      <div className="col">
        {this.state.condition2 ? (
          <Label onTap={this.toggleCondition2.bind(this)} class="btn">Inactive Condition2</Label>
        ) : (
          <Label onTap={this.toggleCondition2.bind(this)} class="btn">Active Condition2</Label>
        )}
      </div>
    );
    // if (this.state.condition1) {
    //   if (this.state.condition2) {
    //     return (
    //       <div class="anu-block">
    //         <button onTap={this.toggleCondition1.bind(this)}>Inactive Condition1</button>
    //         <button onTap={this.toggleCondition2.bind(this)}>Inactive Condition2</button>
    //       </div>
    //     );
    //   } else {
    //     return (
    //       <div class="anu-block">
    //         <button onTap={this.toggleCondition1.bind(this)}>Inactive Condition1</button>
    //         <button onTap={this.toggleCondition2.bind(this)}>Active Condition2</button>
    //       </div>
    //     );
    //   }
    // } else {
    //   return <div class="anu-block">124</div>;
    // }
  }
}

export default P;
