import React, { Component } from "react";
import { render } from "react-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
         })
         .then((data) => this.setState({posts: data}))
         .catch((err) => {
            console.log(err.message);
         });
  }

  render() {
    return (
      <div className="posts-container">
        {posts.map((post) => {
          return (
            <div className="post-card" key={post.id}>
               <h2 className="post-title">{post.title}</h2>
            </div>
         );
      })}
    </div>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);