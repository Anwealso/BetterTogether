import React, { Component } from "react";

import Survey from "./Survey";
import Submitted from "./Submitted";
import Billboard from "./Billboard";
import Navbar from "./Navbar";

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
    };
  }

  renderHomePage() {
    return (
      <Grid container spacing={3}>
        <Navbar />

        <Grid item xs={12} align="center">
          <Typography variant="h3" compact="h3">
            Eldery Wellness Data System
          </Typography>

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
            path="/submitted" 
            render={() => {
              return <Submitted />
            }}
          />
          
          {/* <Route
            path="/create" 
            render={() => {
              return <Join />
            }}
          /> */}
          
          <Route
            path="/survey/:surveyId"
            render={(props) => {
              return <Survey {...props}/>
            }}
          />

          <Route
            path="/billboard/:billboardId"
            render={(props) => {
              return <Billboard {...props}/>
            }}
          />

        </Switch>
      </Router>
    );
  }
}