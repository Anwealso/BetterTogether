import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { }; // ?
  }

  componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/posts?_limit=10') // placeholder api with sample json
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
         })
         .then((data) => this.setState({posts: data})) // Maybe this is wrong?
         .catch((err) => {
            console.log(err.message);
         });
  }

  render() {
<<<<<<< HEAD
    return <h1>Testing React Code
      1. Building up billboard app
      2. Write polls app
      3. Routing billboard and polls app</h1>;
=======
    // return <h1>Testing React Code</h1>;
    
    return (
      <HomePage />
    );
>>>>>>> eaa011af1157871171531c0b5720d180873847b4
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);