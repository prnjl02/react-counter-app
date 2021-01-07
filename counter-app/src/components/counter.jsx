import React, { Component } from "react";

class Counter extends Component {
  state = {
    counter: 0,
    tags: ["tag1", "tag2", "tag3"],
    //  imageUrl: "https://picsum.photos/200",
  };
  styles = {
    fontweight: "bold",
    fontSize: 40,
  };

  render() {
    return (
      <div>
        {/* <img src={this.state.imageUrl} alt="" /> */}
        {/* <span style={this.styles} className="badge badge-primary m-2">
          {this.formatCount()}
        </span> */}
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
    let counter = this.state.counter;
    counter++;
    this.setState({ counter: counter });
  };
}

export default Counter;
