import React, { Component } from "react";

class Counter extends Component {
  state = {
    counter: 0,
    tags: ["tag1", "tag2", "tag3"],
  };
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <span style={{ fontSize: 30 }}>Hiii</span>
        <button className="btn btn-secondary btn-sm" onClick={this.increment}>
          Increment
        </button>
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
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
  };
}

export default Counter;
