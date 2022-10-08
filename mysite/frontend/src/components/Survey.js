import React, { Component } from "react";
import { Routes, Route, useParams } from 'react-router-dom';
import { Grid, Button, Typography, Radio, FormControl, FormControlLabel, FormLabel, RadioGroup, TextField } from "@material-ui/core";
import Navbar from "./Navbar";

export default class Survey extends Component {
  constructor(props) {
    super(props);

    this.state = {
      surveyId: parseInt(this.props.match.params.surveyId),
      questions: [],
    };

    this.submitButtonPressed = this.submitButtonPressed.bind(this);
    this.handleVoteChange = this.handleVoteChange.bind(this);
    this.renderSubmitButton = this.renderSubmitButton.bind(this);
    this.getSurveyDetails = this.getSurveyDetails.bind(this);
    this.getSurveyDetails();
  }

  getSurveyDetails() {
    return fetch("/api/get-survey" + "?id=" + this.state.surveyId)
      .then((response) => {
        console.log(response)
        if (!response.ok) {
          console.log("Response not okay")
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

  handleVoteChange(e) {
    let questions = [...this.state.questions];
    var questionIndex = e.target.name.split("-").at(-1)
    let question = questions[questionIndex];
 
    // 2. Replace the property you're intested in
    var selectedChoiceOption = e.target.value;

    question.choices.map((choice, index) => {
      if (choice.option === selectedChoiceOption) {
        question.selectedChoiceId = choice.id
      }
    })

    // 4. Set the state to our new copy
    this.setState({
      questions: questions
    });
  }


  submitButtonPressed() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        surveyId: this.state.surveyId,
        questions: this.state.questions,
        submitTime: new Date().toLocaleString() ,
      }),
    };
    fetch("/api/submit-survey", requestOptions)
      .then((response) => {
        console.log(response)

        if (response.ok) {
          this.props.history.push("/submitted");
        } else {
          this.setState({ error: "Survey not found." });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  renderSubmitButton() {
    return (
      <Grid item xs={12} align="center">
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            this.submitButtonPressed()
          }}
        >
          Submit
        </Button>
      </Grid>
    );
  }

  render() {
    return (
      <FormControl>
        <Grid container spacing={1}>
          <Navbar />

          <Grid item xs={12} align="center">
              Survey ID: {this.state.surveyId}
              <br/>
              Survey Name: {this.state.name}
              <br/>
              Num Questions: {this.state.questions.length}
              <div>
                {JSON.stringify(this.state.questions)}
              </div>
              <br/>

              <div>
                <h2>Community Wellness Survey</h2>
                {this.state.questions.map((question, index) => {
                  return (
                    <div key={index} style={{backgroundColor: "ghostwhite", borderRadius: "20px", margin: "10px", padding: "10px", width: "50%"}}>
                      <FormLabel id="demo-radio-buttons-group-label">Q{index+1}. {question.text}</FormLabel>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue=""
                        name={"radio-buttons-group-" + index}
                        onChange={this.handleVoteChange}
                      >

                        {question.choices.map((choice, index) => {
                          return (
                            <FormControlLabel key={index} value={choice.option} control={<Radio />} label={choice.option} />
                          );
                        })}

                      </RadioGroup>
                    </div>
                  );
                })}
              </div>


          </Grid>

          {this.renderSubmitButton()}

        </Grid>
      </FormControl>
    );
  }
}
