import React, { Component } from "react";
import { Routes, Route, useParams } from 'react-router-dom';
import { Grid, Button, Typography, Radio, FormControl, FormControlLabel, FormLabel, RadioGroup } from "@material-ui/core";

export default class Survey extends Component {
  constructor(props) {
    super(props);

    this.state = {
      surveyId: parseInt(this.props.match.params.surveyId),
      questions: [],
    };

    // this.leaveButtonPressed = this.leaveButtonPressed.bind(this);

    // this.updateShowSettings = this.updateShowSettings.bind(this);
    this.submitButtonPressed = this.submitButtonPressed.bind(this);
    this.handleVoteChange = this.handleVoteChange.bind(this);

    this.renderSubmitButton = this.renderSubmitButton.bind(this);

    // this.renderSettings = this.renderSettings.bind(this);

    this.getSurveyDetails = this.getSurveyDetails.bind(this);
    this.getSurveyDetails();
  }

  getSurveyDetails() {
    return fetch("/api/get-survey" + "?id=" + this.state.surveyId)
      .then((response) => {
        console.log(response)
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

  handleVoteChange(e) {
    let questions = [...this.state.questions];
    var questionIndex = e.target.name.split("-").at(-1)
    let question = questions[questionIndex];
 
    // 2. Replace the property you're intested in
    var selectedChoiceOption = e.target.value; // TODO: repklace this wil pulling the real choice id out of the form in DOM
    // console.log(selectedChoiceOption)

    question.choices.map((choice, index) => {
      if (choice.option === selectedChoiceOption) {
        question.selectedChoiceId = choice.id
      }
    })
    // console.log(questions)

    // 4. Set the state to our new copy
    this.setState({
      questions: questions
    });
  }

  submitButtonPressed() {
    // Need some way to prevent the defgault behaviour of the sumbit (i.e. stop it reloading the page)

    // TODO: Fix this so that submitting without seleecting an option frst doesnt break everything
    // let questions = [...this.state.questions];
    // questions.map((question, index) => {
    //   // Log the selected choice
    //   // 2. Replace the property you're intested in
    //   question.selectedChoiceId = 1; // TODO: repklace this wil pulling the real choice id out of the form in DOM
    //   // 3. Put it back into our array. N.B. we *are* mutating the array here, 
    //   //    but that's why we made a copy first
    //   questions[index] = question;
    //   // 4. Set the state to our new copy
    //   this.setState({
    //     questions: questions
    //   });
    // });
    // console.log(JSON.stringify(this.state.questions))

    // TODO: Ideally want to associate this set of answers with a user/session id somehow so we can relate all the question responses to the same user

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

  // submitButtonPressed() {
  //   // Need some way to prevent the defgault behaviour of the sumbit (i.e. stop it reloading the page)

  //   // console.log(JSON.stringify(this.state.questions))

  //   const requestOptions = {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     // body: {surveyId: this.state.surveyId, questions: this.state.questions, submitTime: new Date()},
  //     body: {title: 'React POST Request Example'},
  //   };
  //   fetch("/api/submit-survey", requestOptions).then((response) => {
  //     // TODO: Need to add some more error and response processing to infor the user if thery are messing up
  //     console.log(response)

  //     // this.props.leaveRoomCallback();
  //     // this.props.history.push("/");
  //   });
  // }

  // updateShowSettings(value) {
  //   this.setState({
  //     surveyId: value,
  //   });
  //   console.log(this.state.surveyId)
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

  renderSubmitButton() {
    return (
      <Grid item xs={12} align="center">
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            // this.updateShowSettings(this.state.surveyId+1)
            this.submitButtonPressed()
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
                <h2>Questions:</h2>

                {this.state.questions.map((question, index) => {
                  return (
                    <div key={index} style={{backgroundColor: "ghostwhite", borderRadius: "20px", margin: "10px", padding: "10px", width: "50%"}}>
                      <FormLabel id="demo-radio-buttons-group-label">Q{index+1}. {question.text}</FormLabel>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue=""

                        name={"radio-buttons-group-" + index}
                        onChange={this.handleVoteChange}

                        // inputExtraProps={{
                        //   name: "radio-buttons-group-" + index,
                        //   onChange: handleVoteChange,
                        // }}
                      >

{/* handleOnChange(value) {
  this.setState({ phone: value.target.value, }); 
} 

<ReactPhoneInput 
  inputExtraProps={{ name: 'phone', onChange: this.handleOnChange }} 
  value={this.state.phone} 
  countryCodeEditable={false} 
/> */}


                        {question.choices.map((choice, index) => {
                          return (
                            <FormControlLabel key={index} value={choice.option} control={<Radio />} label={choice.option} />
                          );
                        })}

                      </RadioGroup>
                      {/* <hr /> */}
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
