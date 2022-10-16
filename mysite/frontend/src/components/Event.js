import React, { Component } from "react";
import { Grid, Button, Typography, Radio, FormControl, FormControlLabel, FormLabel, RadioGroup, TextField } from "@material-ui/core";
import Navbar from "./Navbar";

export default class Event extends Component {
  constructor(props) {
    super(props);

    this.state = {
      eventId: parseInt(this.props.match.params.eventId),
      questions: [],
      currentQuestionIndex: 0,
    };

    this.submitButtonPressed = this.submitButtonPressed.bind(this);
    
    this.handleVoteChange = this.handleVoteChange.bind(this);
    this.renderSubmitButton = this.renderSubmitButton.bind(this);
    
    this.renderChoices = this.renderChoices.bind(this);

    this.renderNextButton = this.renderNextButton.bind(this);
    this.renderBackButton = this.renderBackButton.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  componentDidMount() {
    // Get all the survey details
    return fetch("/api/get-survey" + "?id=" + this.state.eventId)
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

  handleNext() {
    if (this.state.currentQuestionIndex < this.state.questions.length-1) {
      this.setState({
        currentQuestionIndex: this.state.currentQuestionIndex + 1
      });
    } 
  }

  handleBack() {
    if (this.state.currentQuestionIndex > 0) {
      this.setState({
        currentQuestionIndex: this.state.currentQuestionIndex - 1
      });
    } 
  }


  submitButtonPressed() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        surveyId: this.state.eventId,
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
    // Only show if we are on the last question of the survey
    if (this.state.currentQuestionIndex == this.state.questions.length-1) {
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
  }

  renderNextButton() {
    if (this.state.currentQuestionIndex < this.state.questions.length-1) {
      return (
        <Grid item xs={12} align="center">
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              this.handleNext()
            }}
          >
            &gt;
          </Button>
        </Grid>
      );
    }
  }

  renderBackButton() {
    if (this.state.currentQuestionIndex > 0) {
      return (
        <Grid item xs={12} align="center">
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              this.handleBack()
            }}
          >
            &lt;
          </Button>
        </Grid>
      );
    }
  }

  renderChoices() {
    console.log(this.state.questions[this.state.currentQuestionIndex])
    console.log("hello")

    var elems = []

    if (this.state.questions[this.state.currentQuestionIndex] && this.state.questions[this.state.currentQuestionIndex].choices) {
      console.log("running");
      {this.state.questions[this.state.currentQuestionIndex].choices.map((choice, index) => {
        // if (this.state.questions[this.state.currentQuestionIndex]) {
        // console.log(word)
        // console.log(this.state.questions[])
        //   console.log(this.state.questions[this.state.currentQuestionIndex])
        //   console.log(this.state.questions[this.state.currentQuestionIndex].choices)
        //   console.log(typeof(this.state.questions[this.state.currentQuestionIndex].choices))

          
        //   let choice = this.state.questions[this.state.currentQuestionIndex].choices[index]
        //   console.log(choice)
          
          // console.log(choice)

          console.log("showing")
          elems.push(<FormControlLabel key={choice} value={choice.option} control={<Radio />} label={choice.option} />)
      })}

      return elems
    }
  }

  render() {
    return (
      <div style={{width: "100%"}}>
        <Navbar />

        <FormControl style={{width: "100%"}}>
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

                <br/>

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
            </Grid>

            {this.renderSubmitButton()}

          </Grid>
        </FormControl>

      </div>
    );
  }
}
