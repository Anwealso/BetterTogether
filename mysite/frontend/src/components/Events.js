import React, { Component } from "react";
import { Routes, Route, useParams } from 'react-router-dom';
import { Grid, Button, Typography, Radio, FormControl, FormControlLabel, FormLabel, RadioGroup } from "@material-ui/core";
// import PosterImage from '../../static/images/ons_blanked.jpeg';

export default class Events extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
    };

    this.getPosts = this.getPosts.bind(this);
    this.getPosts();
  }

  componentDidMount() {
    this.timer = setInterval(()=> this.getPosts(), 1000);
  }
  
  componentWillUnmount() {
    clearInterval(this.timer) 
    this.timer = null;
    // Fix the fact that this is not unmounting when we go to another page
  }

  // Feth from api and save to events array from state
  getPosts() {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response)
        if (!response.ok) {
          console.log("Response not okay")
          this.props.history.push("/");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Retrieved data from API")
        console.log(data)
        this.setState({
          events: data
        });
      });
  }


  // todo: add css and divs
  render() {
    return (
      <div className="posts-container">
        <h2> Event List</h2>
         {this.state.events.map((event) => {
            return (
               <div className="post-card" key={event.id}>
                  <h2 className="post-title">{event.title}</h2>
                  <p className="post-body">{event.body}</p>
               </div>
            );
         })}
      </div>
      );
  }
}
