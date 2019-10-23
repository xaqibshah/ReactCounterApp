import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  constructor(props) {
    super(props);

    console.log(this.props.value);
  }
  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter key={counter.id} vaule={counter.value} selected={true} />
        ))}

        {/* <Counter /> */}
      </div>
    );
  }
}

export default Counters;
