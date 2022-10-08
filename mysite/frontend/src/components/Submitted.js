import React, { Component } from "react";
import { Grid, Button, ButtonGroup, Typography } from "@material-ui/core";
import Navbar from "./Navbar";

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
    };
  }

  render() {
    return (
      <Grid container spacing={3}>
        <Navbar />

        <Grid item xs={12} align="center">
          <Typography variant="h3" compact="h3">
            Success!
          </Typography>

          <Typography variant="h5" compact="h5">
            Your responses have been submitted. Thank you for your feedback.
          </Typography>

          <ButtonGroup disableElevation variant="contained" color="primary">

            <Link color="primary" to="/">
              Take the survey again
            </Link>
            
          </ButtonGroup>
        </Grid>
      </Grid>
    );  }

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