import React, { Component } from "react";

class Counter extends Component {
  state = {
    counter: 0,
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm" onClick={this.increment}>
          Increment
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.counter === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { counter } = this.state;
    return counter === 0 ? "Zero" : counter;
  }
  increment = () => {
    console.log("clicked");
    this.setState({ counter: this.state.counter + 1 });
  };
}

export default Counter;
