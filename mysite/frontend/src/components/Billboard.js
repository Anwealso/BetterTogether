import React, { Component } from "react";
// import { Routes, Route, useParams } from 'react-router-dom';
// import { Grid, Button, Typography, Radio, FormControl, FormControlLabel, FormLabel, RadioGroup } from "@mui/material";
// import PosterImage from '../../static/images/ons_blanked.jpeg';
import { Grid, Avatar, Typography, Box, Card } from "@material-ui/core";
// import React from "react";
import Old from "../../static/images/old_young_man_pub_1.jpeg";

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
      <div
        className="main"
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "black",
          height: "100%",
          width: "100%",
          overflow: "hidden",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            height: "90%",
            width: "100%",
          }}
        >
          <img
            src="../../static/images/old_young_man_pub_1.jpeg"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
          <Typography
            variant="h1"
            style={{
              marginBottom: "40px",
              top: "200px",
              colour: "#052B00",
              position: "absolute",
              fontWeight: "1200",
            }}
          >
            Life's Better Together
          </Typography>
          <Typography
            variant="h4"
            style={{
              colour: "#052B00",
              top: "300px",
              position: "absolute",
            }}
          >
            20% of older Australians say they have experienced loneliness in the
            last 6 months
          </Typography>
        </div>
        <div
          style={{
            position: "relative",
            height: "10%",
            width: "100%",
            backgroundColor: "white",
          }}
        >
          {" "}
          <div
            style={{
              position: "absolute",
              height: "350px",
              width: "550px",
              right: "100px",
              top: "-350px",
            }}
          >
            <Card
              style={{
                width: "100%",
                height: "100%",
                padding: "24px",
                backgroundColor: "#DA0303",
                color: "#FFFFFF",
                fontWeight: "100",
              }}
            >
              <Typography variant="h4" style={{ marginBottom: "40px" }}>
                Make a new connection today.
              </Typography>
              <Typography variant="h4" style={{ marginBottom: "40px" }}>
                Sign up and explore hundreds groups and events on the Together
                Australia website:
              </Typography>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h4" style={{ fontWeight: "900" }}>
                  www.endloneliness.org.au
                </Typography>
                <img
                  src="../../static/images/qr_code_white.png"
                  style={{
                    height: "120px",
                    width: "120px",
                  }}
                />
              </div>
            </Card>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "16px",
            }}
          >
            <img
              src="../../static/images/favicon.ico"
              style={{
                position: "absolute",
                height: "120px",
                width: "140px",
                left: "35px",
                top: "-45px",
              }}
            />
            <Typography
              variant="h3"
              style={{ fontWeight: "900", colour: "#052B00" }}
            >
              Together Australia
            </Typography>
          </div>
        </div>
      </div>
    );
  }
}
