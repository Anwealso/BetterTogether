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
    
      // });
  }

  render() {
    const yep = <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14163.32930707494!2d152.97944090000001!3d-27.4433358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b9156d130da8fcb%3A0x3bd766e2dfb13937!2sAshgrove%20Golf%20Course%2C%20The%20Gap%20QLD%204061!5e0!3m2!1sen!2sau!4v1665986810247!5m2!1sen!2sau" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    return (
      <div style={{width: "100%"}}>
        <Navbar />
        {HeroImage((this.state.event !== null) ? "url(" + this.state.event.image + ")": "", (this.state.event !== null) ? this.state.event.title: "")}
        {Map()}
        
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
