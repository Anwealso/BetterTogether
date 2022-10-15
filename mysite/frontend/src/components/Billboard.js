import React, { Component } from "react";
import { Grid, Typography, Avatar, Box } from "@material-ui/core";
import Old from "../assets/old.jpg";

export default class Billboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      billboardId: parseInt(this.props.match.params.billboardId),
      questions: [],
    };

    this.getBillboardDetails = this.getBillboardDetails.bind(this);
    this.getBillboardDetails();
  }

  componentDidMount() {
    this.timer = setInterval(() => this.getBillboardDetails(), 1000);
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
          this.props.history.push("/");
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
    return <BillboardDisplay count={parseInt(this.state.text * 10000) / 100} />;
  }
  //   render() {
  //     return (
  //       <div>
  //         <div id="page-wrapper">
  //           <div id="overlay">
  //             <div id="major-text-section">
  //               {parseInt(this.state.text*10000)/100} %
  //             </div>

  //             <div id="minor-text-section">
  //               of people over 70 in QLD were 'chronically' lonely
  //             </div>
  //           </div>

  //           <img id="hero-image" src="../../static/images/ons_blanked.jpeg" alt="" />
  //           {/* <img id="hero-image" src={PosterImage} alt="" /> */}
  //         </div>

  //       </div>
  //     );
  //   }
  // }
}
const BillboardDisplay = ({ count }) => {
  // console.log(Old);
  return (
    <div
      className="main"
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#FFFAEF",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Grid
        container
        style={{
          justifyContent: "center",
          alignItems: "center",
          zIndex: "100",
        }}
        spacing={8}
      >
        <Grid item>
          <Avatar src={Old} style={{ width: "450px", height: "450px" }} />
        </Grid>
        <Grid item>
          <Typography variant="h5" style={{ color: "#052B00" }}>
            Our analysis of QLD data found that
          </Typography>
          <Typography
            variant="h1"
            fontWeight={900}
            style={{ color: "#7D1E5A" }}
          >
            {count} %
          </Typography>
          <Typography
            variant="h4"
            fontWeight={600}
            style={{
              padding: "4px",
              margin: "4px",
              backgroundColor: "#7D1E5A",
              color: "white",
              whiteSpace: "pre",
              width: "fit-content",
            }}
          >
            of people over 70 in QLD were
          </Typography>
          <Typography
            variant="h4"
            fontWeight={600}
            style={{
              padding: "4px",
              margin: "4px",
              backgroundColor: "#7D1E5A",
              color: "white",
              whiteSpace: "pre",
              width: "fit-content",
            }}
          >
            &apos;chronically&apos; lonely
          </Typography>
          <Typography
            variant="h5"
            style={{ color: "#052B00", whiteSpace: "pre" }}
          >
            (or felt lonely all or most of the time) {"\n"}
            between December 2021 and Feburary 2022.
          </Typography>
        </Grid>
      </Grid>
      <Box
        style={{
          width: 150,
          height: 150,
          borderRadius: "50%",
          position: "absolute",
          backgroundColor: "#F67AC8",
          bottom: "250px",
          right: "0px",
        }}
      />
      <Box
        style={{
          width: 150,
          height: 150,
          borderRadius: "50%",
          position: "absolute",
          backgroundColor: "#F67AC8",
          bottom: "550px",
          left: "700px",
        }}
      />
      <Box
        style={{
          width: 250,
          height: 250,
          borderRadius: "50%",
          position: "absolute",
          backgroundColor: "#7D1E5A",
          bottom: "60px",
          left: "400px",
        }}
      />
      <Box
        style={{
          width: 110,
          height: 110,
          borderRadius: "50%",
          position: "absolute",
          backgroundColor: "#7D1E5A",
          bottom: "500px",
          left: "320px",
        }}
      />
      <Box
        style={{
          width: 260,
          height: 260,
          borderRadius: "50%",
          position: "absolute",
          backgroundColor: "#F67AC8",
          bottom: "-150px",
        }}
      />
      <Box
        style={{
          width: 140,
          height: 140,
          borderRadius: "50%",
          position: "absolute",
          backgroundColor: "#7D1E5A",
          bottom: "100px",
          right: "350px",
        }}
      />
    </div>
  );
};
