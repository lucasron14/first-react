import React, { Component } from "react";

class Counter extends Component {

    componentDidUpdate(prevProps, prevState) {
        console.log("prevProps:", prevProps);
        console.log("prevState:", prevState);
    }

    componentWillUnmount() {
        console.log("Component - Unmount");
    }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  getBadgeClasses() {
    let classes = "badge badge-sm m-2 bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  render() {
    return (
      <>
        <div className="Items-full">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-outline-secondary btn-light px-2.95"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-outline-secondary btn-light m-2 px-3"
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger m-2"
          >
            Delete
          </button>
        </div>
      </>
    );
  }
}

export default Counter;
