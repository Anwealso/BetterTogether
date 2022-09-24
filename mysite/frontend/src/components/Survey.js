import React, { Component } from "react";
import { Routes, Route, useParams } from 'react-router-dom';
import { Grid, Button, Typography, Radio } from "@material-ui/core";

export default class Survey extends Component {
  constructor(props) {
    super(props);

    this.state = {
      surveyId: null,
      name: null,
      questions: [],
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

  getSurveyDetails() {
    return fetch("/api/get-survey" + "?id=" + this.surveyId)
      .then((response) => {
        if (!response.ok) {
          console.log("Response not okay")
          // this.props.leaveRoomCallback();
          this.props.history.push("/");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Retrieved data from API")
        console.log(data)
        console.log(data.questions[0].text)
        console.log(this.state.questions.concat(data.questions))
        console.log(this.state.questions.concat(data.questions)[0].text)
        console.log(this.state.questions.concat(data.questions)[0]['text'])
        console.log(Object.keys(this.state.questions.concat(data.questions)[0]))
        
        this.setState({
          name: data.name,
          questions: this.state.questions.concat(...data.questions)
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
            Survey ID: {this.surveyId}
            <br/>
            Survey Name: {this.state.name}
            <br/>
            Num Questions: {this.state.questions.length}

            <div>
              {JSON.stringify(this.state.questions)}
            </div>
            <br/>

            <div>
              <h2>Questions:</h2>
              {this.state.questions.map((question, index) => {
                return (
                  <div key={index} style={{backgroundColor: "cornflowerblue", margin: "10px"}}>
                    <h3>Q{index+1}.</h3>
                    <p>{question.text}</p>
                    
                    <div>
                      {question.choices.map((choice, index) => {
                        return (
                          <div key={index}>
                            <input type="radio" value="Male" name="gender" /> {choice.option}
                          </div>
                        );
                      })}
                    </div>

                    <hr />
                  </div>
                );
              })}
            </div>

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
