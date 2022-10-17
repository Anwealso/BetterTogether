import React, { Component } from "react";
// import { Routes, Route, useParams } from 'react-router-dom';
// import { Grid, Button, Typography, Radio, FormControl, FormControlLabel, FormLabel, RadioGroup } from "@mui/material";
// import PosterImage from '../../static/images/ons_blanked.jpeg';
import { Grid, Avatar, Typography, Box } from "@material-ui/core";
// import React from "react";
// import Old from "../../static/images/old.jpg";

export default class Billboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      billboardId: parseInt(this.props.match.params.billboardId),
      questions: [],
    };

    // this.getBillboardDetails = this.getBillboardDetails.bind(this);
    // this.getBillboardDetails();
  }

  // componentDidMount() {
  //   this.timer = setInterval(() => this.getBillboardDetails(), 1000);
  // }

  // componentWillUnmount() {
  //   clearInterval(this.timer);
  //   this.timer = null;
  //   // Fix the fact that this is not unmounting when we go to another page
  // }

  // getBillboardDetails() {
  //   return fetch("/api/get-billboard" + "?id=" + this.state.billboardId)
  //     .then((response) => {
  //       console.log(response);
  //       if (!response.ok) {
  //         console.log("Response not okay");
  //         this.props.history.push("/");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log("Retrieved data from API");
  //       console.log(data);
  //       console.log(data.text); // program will probably crash here since we didnt send any text

  //       this.setState({
  //         name: data.name,
  //         text: data.text,
  //       });
  //     });
  // }

  render() {
    return (
      <div className="main" style={{ display: "flex", alignItems: "center", backgroundColor: "black", height: "100%", width: "100%", overflow:"hidden"}}>
        <img style={{width: "100%"}} src={"../../static/images/billboard_new_" + String(this.state.billboardId) + ".png"} alt=""/>
      </div>
    );
  }
}
