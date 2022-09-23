import React, { Component } from "react";
import { Routes, Route, useParams } from 'react-router-dom';
import { Grid, Button, Typography } from "@material-ui/core";

export default class Survey extends Component {
  constructor(props) {
    super(props);

    this.state = {
      surveyId: null
    };

    // let params = useParams();
    // console.log(params)

    this.surveyId = this.props.match.params.surveyId;
    
    // this.leaveButtonPressed = this.leaveButtonPressed.bind(this);
    // this.updateShowSettings = this.updateShowSettings.bind(this);
    // this.renderSsettingsButton = this.renderSettingsButton.bind(this);
    // this.renderSettings = this.renderSettings.bind(this);
    this.getSurveyDetails = this.getSurveyDetails.bind(this);
    this.getSurveyDetails();
  }

  render() {
    // console.log("Testing...")

    return (<div>Hello, ""</div>);
  }


  getSurveyDetails() {
    return fetch("/api/get-survey" + "?id=" + this.surveyId)
      .then((response) => {
        if (!response.ok) {
          console.log("Respone not okayyyyy")
          // this.props.leaveRoomCallback();
          // this.props.history.push("/");
        }
        return response.json();
      })
      .then((data) => {
        this.setState({
          name: data.name,
          // guestCanPause: data.guest_can_pause,
          // isHost: data.is_host,
        });
      });
  }

  // leaveButtonPressed() {
  //   const requestOptions = {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //   };
  //   fetch("/api/leave-room", requestOptions).then((_response) => {
  //     this.props.leaveRoomCallback();
  //     this.props.history.push("/");
  //   });
  // }

  // updateShowSettings(value) {
  //   this.setState({
  //     showSettings: value,
  //   });
  // }

  // renderSettings() {
  //   return (
  //     <Grid container spacing={1}>
  //       <Grid item xs={12} align="center">
  //         <Button
  //           variant="contained"
  //           color="secondary"
  //           onClick={() => this.updateShowSettings(false)}
  //         >
  //           Close
  //         </Button>
  //       </Grid>
  //     </Grid>
  //   );
  // }

  renderSettingsButton() {
    return (
      <Grid item xs={12} align="center">
        <Button
          variant="contained"
          color="primary"
          // onClick={() => this.updateShowSettings(true)}
        >
          Settings
        </Button>
      </Grid>
    );
  }

  render() {
    // if (this.state.showSettings) {
    //   return this.renderSettings();
    // }
    return (
      <Grid container spacing={1}>

        <Grid item xs={12} align="center">
          <Typography variant="h4" component="h4">
            Survey ID: {this.surveyId}
          </Typography>
        </Grid>

        {/* <Grid item xs={12} align="center">
          <Typography variant="h6" component="h6">
            Votes: {this.state.votesToSkip}
          </Typography>
        </Grid> */}

        {/* <Grid item xs={12} align="center">
          <Typography variant="h6" component="h6">
            Guest Can Pause: {this.state.guestCanPause.toString()}
          </Typography>
        </Grid> */}

        {/* <Grid item xs={12} align="center">
          <Typography variant="h6" component="h6">
            Host: {this.state.isHost.toString()}
          </Typography>
        </Grid> */}

        {/* {this.state.isHost ? this.renderSettingsButton() : null} */}
        {this.renderSettingsButton()}

        {/* <Grid item xs={12} align="center">
          <Button variant="contained" color="secondary" onClick={this.leaveButtonPressed}>
            Leave Room
          </Button>
        </Grid> */}

      </Grid>
    );
  }
}
