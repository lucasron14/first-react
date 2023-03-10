import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement, onDecrement } = this.props;
    return (
      <>
        <button
          onClick={onReset}
          className="btn btn-primary btn-sm my-3 py-2 px-3"
        >
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter}
          />
        ))}
      </>
    );
  }
}

export default Counters;
