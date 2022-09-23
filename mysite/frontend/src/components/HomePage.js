import React, { Component } from "react";

// import RoomJoinPage from "./RoomJoinPage";
// import CreateRoomPage from "./CreateRoomPage";
import Survey from "./Survey";
import Join from "./Join";

import { Grid, Button, ButtonGroup, Typography } from "@material-ui/core";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // surveyId: null,
    };
    // this.clearSurveyId = this.clearSurveyId.bind(this);
  }

  // async componentDidMount() {
  //   fetch("/api/user-in-room")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       this.setState({
  //         roomCode: data.code,
  //       });
  //     });
  // }

  renderHomePage() {
    // return <h1>HomePage</h1>;

    return (
      <Grid container spacing={3}>
        <Grid item xs={12} align="center">
          <Typography variant="h3" compact="h3">
            Eldery Wellness Data System
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <ButtonGroup disableElevation variant="contained" color="primary">

            <Button color="primary" to="/survey/1" component={Link}>
              Try the Survey
            </Button>
            
          </ButtonGroup>
        </Grid>
      </Grid>
    );
  }


  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return this.renderHomePage()
            }}
          />
          
          <Route
            path="/join" 
            render={() => {
              return <Join />
            }}
          />
          
          <Route
            path="/create" 
            render={() => {
              return <Join />
            }}
          />
          
          <Route
            path="/survey/:surveyId"
            render={(props) => {
              return <Survey {...props}/>
            }}
          />
        </Switch>
      </Router>
    );
  }

  // render() {
  //   return (
  //     <Router>
  //       <Switch>
  //         <Route
  //           exact
  //           path="/"
  //           render={() => {
  //             return this.state.roomCode ? (
  //               <Redirect to={`/room/${this.state.roomCode}`} />
  //             ) : (
  //               this.renderHomePage()
  //             );
  //           }}
  //         />
  //         <Route path="/join" component={RoomJoinPage} />
  //         <Route path="/create" component={CreateRoomPage} />
  //         <Route
  //           path="/room/:roomCode"
  //           render={(props) => {
  //             return <Room {...props} leaveRoomCallback={this.clearRoomCode} />;
  //           }}
  //         />
  //       </Switch>
  //     </Router>
  //   );
  // }

}