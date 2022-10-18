import React, { Component } from "react";
// import { Routes, Route, useParams } from 'react-router-dom';
// import { Grid, Button, Typography, Radio, FormControl, FormControlLabel, FormLabel, RadioGroup } from "@mui/material";
// import PosterImage from '../../static/images/ons_blanked.jpeg';
import { Grid, Avatar, Typography, Box, Card } from "@material-ui/core";
const imgArray = [
  "old_young_man_pub_1.jpeg",
  "grandma_cooking_1.jpeg",
  "grandma_cooking_2.jpeg",
  "grandma_cooking_3.jpeg",
];
export default class Billboard extends Component {
  timer = null;
  constructor(props) {
    super(props);

    this.state = {
      percentage: 20,
      billboardId: parseInt(this.props.match.params.billboardId),
      questions: [],
      image: "old_young_man_pub_1.jpeg",
    };

    this.getBillboardDetails = this.getBillboardDetails.bind(this);
    // this.getBillboardDetails();
  }

  componentDidMount() {
    // this.timer = setInterval(() => this.getBillboardDetails(), 5000);
    this.timer = setInterval(() => this.changeImage(), 10000);
  }

  changeImage() {
    const raand = Math.floor(Math.random() * imgArray.length - 1) + 1;
    console.log(raand);
    this.setState({ image: imgArray[raand] });
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = null;
    // Fix the fact that this is not unmounting when we go to another page
  }

  getBillboardDetails() {
    return fetch("/api/get-billboard" + "?id=" + this.state.billboardId)
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          console.log("Response not okay");
          // this.props.history.push("/");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Retrieved data from API");
        console.log(data);
        console.log(data.text); // program will probably crash here since we didnt send any text

        this.setState({
          name: data.name,
          text: data.text,
        });
      });
  }

  render() {
    console.log(this.state);
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
            color: "#FFFFFF",
          }}
        >
          <div
            style={{
              background: "rgb(2,0,36)",
              background:
                "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(6,71,162,1) 0%, rgba(0,212,255,0) 100%)",
              width: "100vw",
              height: "100%",
              position: "absolute",
            }}
          />
          <img
            src={`../../static/images/${this.state.image}`}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
          <Typography
            variant="h1"
            style={{
              marginBottom: "40px",
              top: "100px",
              position: "absolute",
              fontWeight: "800",
              left: "50px",
            }}
          >
            Life's
          </Typography>
          <Typography
            variant="h1"
            style={{
              marginBottom: "40px",
              top: "200px",
              position: "absolute",
              fontWeight: "800",
              left: "50px",
            }}
          >
            Better
          </Typography>
          <Typography
            variant="h1"
            style={{
              marginBottom: "40px",
              top: "300px",
              position: "absolute",
              fontWeight: "800",
              left: "50px",
            }}
          >
            Together
          </Typography>
          <Typography
            variant="h4"
            style={{
              marginBottom: "40px",
              top: "500px",
              position: "absolute",
              left: "50px",
            }}
          >
            {this.state.percentage}% of older Australians say they have
            experienced
          </Typography>
          <Typography
            variant="h4"
            style={{
              marginBottom: "40px",
              top: "550px",
              position: "absolute",
              left: "50px",
            }}
          >
            loneliness in the last 6 months
          </Typography>
          <Typography
            variant="h4"
            style={{
              top: "650px",
              position: "absolute",
              left: "50px",
            }}
          >
            Get involved as a friender today.
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
                padding: "18px",
                backgroundColor: "#DA0303",
                color: "#FFFFFF",
                fontWeight: "100",
              }}
            >
              <Typography variant="h4" style={{ marginBottom: "40px" }}>
                Make a new connection today.
              </Typography>
              <Typography variant="h4" style={{ marginBottom: "30px" }}>
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
              style={{
                fontWeight: "900",
                color: "#052B00",
                marginLeft: "170px",
              }}
            >
              Together Australia
            </Typography>
          </div>
        </div>
      </div>
    );
  }
}
