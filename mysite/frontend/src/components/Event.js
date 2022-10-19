import React, { Component } from "react";
import { Grid, Button, Typography, Radio, FormControl, FormControlLabel, FormLabel, RadioGroup, TextField } from "@material-ui/core";
import Navbar from "./Navbar";
import HeroImage from "./HeroImage";
import Map from "./Map";

export default class Event extends Component {
  constructor(props) {
    super(props);

    this.state = {
      eventId: parseInt(this.props.match.params.eventId),
      event: null,
    };
  }

  componentDidMount() {
    // Get all the survey details
    return fetch("/api/events")
    .then((response) => {
      if (!response.ok) {
        console.log("Response not okay")
        this.props.history.push("/");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Retrieved data from API")
      console.log(data)
      for (const obj in data) {
        if (data[obj].id == this.state.eventId) {
          this.setState({
            event: data[obj]
          });
        }
      }
    });
  }

  render() {
    return (
      <div style={{width: "100%"}}>
        <Navbar />
        {HeroImage((this.state.event !== null) ? "url(" + this.state.event.image + ")": "", (this.state.event !== null) ? this.state.event.title: "")}
        {Map((this.state.event !== null) ? this.state.event.location: "")}
      </div>
    );
  }
}
