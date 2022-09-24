import React, { Component } from "react";
import { Routes, Route, useParams } from 'react-router-dom';
import { Grid, Button, Typography, Radio, FormControl, FormControlLabel, FormLabel, RadioGroup } from "@material-ui/core";

export default class Survey extends Component {
  constructor(props) {
    super(props);

    this.state = {
      surveyId: null,
      name: null,
      questions: [],
      ligma: 0,
    };

    // let params = useParams();
    // console.log(params)

    this.surveyId = parseInt(this.props.match.params.surveyId);
    
    // this.leaveButtonPressed = this.leaveButtonPressed.bind(this);

    this.updateShowSettings = this.updateShowSettings.bind(this);
    this.renderSettingsButton = this.renderSettingsButton.bind(this);
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

  updateShowSettings(value) {
    this.setState({
      surveyId: value,
    }, () => {console.log(this.state.surveyId)});
  }

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
          onClick={() => {
            this.updateShowSettings(this.state.surveyId+1)
          }}
        >
          Submit
        </Button>
      </Grid>
    );
  }

  render() {
    // if (this.state.showSettings) {
    //   return this.renderSettings();
    // }
    return (
      <FormControl>
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
                    <div key={index} style={{backgroundColor: "ghostwhite", borderRadius: "20px", margin: "10px", padding: "10px", width: "50%"}}>
                      <FormLabel id="demo-radio-buttons-group-label">Q{index+1}. {question.text}</FormLabel>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                      >

                        {question.choices.map((choice, index) => {
                          return (
                            <FormControlLabel key={index} value={choice.option} control={<Radio />} label={choice.option} />
                          );
                        })}

                      </RadioGroup>
                      <hr />
                    </div>
                  );
                })}
              </div>
          </Grid>

          {this.renderSettingsButton()}

        </Grid>
      </FormControl>
    );
  }
}
