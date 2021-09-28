import React, { Component } from "react";
import ContextSumer from "./ContextSumer";
export default class extends Component {
  constructor() {
    super();
    this.state = {
      number: 5
    };
    this.updateNumber = this.updateNumber.bind(this);
  }
  updateNumber() {
    this.setState({
      number: Math.random()
    });
  }
  render() {
    return (
      <ContextSumer.Provider
        value={{
          number: this.state.number,
          updateNumber: this.updateNumber.bind(this)
        }}
      >
        {this.props.children}
      </ContextSumer.Provider>
    );
  }
}
