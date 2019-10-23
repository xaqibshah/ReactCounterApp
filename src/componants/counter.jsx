import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
  };
  //   constructor() {
  //     super();
  //     this.handlerIncrement = this.handlerIncrement.bind(this);
  //   }

  handlerIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  //   renderTags() {
  //     if (this.state.tags.length === 0) return <p> Create New Tags! </p>;

  //     return (
  //       <ul>
  //         {" "}
  //         {this.state.tags.map(tag => (
  //           <li key={tag}>{tag}</li>
  //         ))}{" "}
  //       </ul>
  //     );
  //   }

  render() {
    console.log("props", this.props.value);
    return (
      <div>
        {/* {this.state.tags.length === 0 && "Plsear Add new tags"}
        {this.renderTags()} */}

        <span className={this.getBadgeClasses()}>{this.fomartCount()}</span>
        <button
          onClick={this.handlerIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  fomartCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
