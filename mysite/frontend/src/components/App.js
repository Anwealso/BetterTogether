import React, { Component } from "react";
import { render } from "react-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1>Testing React Code
      1. Building up billboard app
      2. Write polls app
      3. Routing billboard and polls app</h1>;
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);