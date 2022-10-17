import React, { Component } from "react";
import { Grid, Button, Typography, Radio, FormControl, FormControlLabel, FormLabel, RadioGroup, TextField } from "@material-ui/core";
import Navbar from "./Navbar";
import HeroImage from "./HeroImage";

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
    
      // });
  }

  render() {
    return (
      <div style={{width: "100%"}}>
        <Navbar />
        {HeroImage((this.state.event !== null) ? "url(" + this.state.event.image + ")": "", (this.state.event !== null) ? this.state.event.title: "")}


        {/* <FormControl style={{width: "100%"}}>
          <Grid container spacing={1}>
            <Grid item xs={12} align="center">
                {/* Survey ID: {this.state.surveyId}
                <br/>
                Survey Name: {this.state.name}
                <br/>
                Num Questions: {this.state.questions.length}
                <div>
                  {JSON.stringify(this.state.questions)}
                </div>
                <div>
                  {this.state.questions.map((question) => {
                    return (
                      <div>"{question.id}: {question.selectedChoiceId}"</div>
                    );
                  })}
                </div> */}

                {/* <br/>

                <div>
                  <h2>Community Wellness Survey</h2>

                  <div key={this.state.currentQuestionIndex} style={{backgroundColor: "ghostwhite", borderRadius: "20px", margin: "10px", padding: "20px", width: "50%", height: "500px", overflow: "scroll"}}>
                    <FormLabel id="demo-radio-buttons-group-label">Q{this.state.currentQuestionIndex+1}. {[this.state.questions[this.state.currentQuestionIndex]].text}</FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue=""
                      name={"radio-buttons-group-" + this.state.currentQuestionIndex}
                      onChange={this.handleVoteChange}
                    >

                      {this.renderChoices()}

                    </RadioGroup>
                  </div>


                </div>
            </Grid>

            <Grid item xs={6}>
              {this.renderBackButton()}
            </Grid>

            <Grid item xs={6}>
              {this.renderNextButton()}
            </Grid> */}

            {/* {this.renderSubmitButton()} */}

          {/* </Grid> */}
        {/* </FormControl> */}

      </div>
    );
  }
}
