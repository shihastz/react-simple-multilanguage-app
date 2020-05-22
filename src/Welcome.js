import React, { Component } from "react";

class Welcome extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h2>Welcome Page - {this.props.title}</h2>;
  }
}

export default Welcome;
