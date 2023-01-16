import { Component } from "react";
import "./App.css";
import Counters from "./components/counters";
import ItemCount from "./components/itemCount";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  constructor() {
    super();
    console.log('App - Constructor');
  }

  // Second life-sycle hook.
  componentDidMount() {
    // Ajax calls
    console.log("App - Mounted");
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value === 0
      ? (counters[index].value = 0)
      : counters[index].value--;
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(
      (counter) => counter.id != counterId
    );
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = [...this.state.counters];
    counters.forEach((c) => (c.value = 0));
    this.setState({ counters });
  };

  // Third life-cycle hook.
  render() {
    console.log("App - Rendered");
    return (
      <div className="App">
        <div className="App-header">
          <ItemCount
            totalCounters={
              this.state.counters.filter((c) => c.value > 0).length
            }
          />
          <Counters
            counters={this.state.counters}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
          />
        </div>
      </div>
    );
  }
}

export default App;
