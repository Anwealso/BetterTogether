import React, { Component } from "react";

import Survey from "./Survey";
import Submitted from "./Submitted";
import Billboard from "./Billboard";
import Navbar from "./Navbar";
// import GenericImage from '../../static/images/senior-volunters.jpg'

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

  renderHeroImage() {
    const hero_image = {
      marginTop: "-20vh",
      backgroundImage: "url(../../static/images/senior-volunters.jpg)",
      height: "50%",
      width: "100%",backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position: "relative"
    }

    const hero_text = {
      textAlign: "center",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      color: "white",
      fontSize: "3vh"
    }
    
    return (
      <div style = {hero_image}>
        <div style = {hero_text}>
          <Typography variant="h2">
            Get Involved
          </Typography>
          <Typography variant="h5">
            Join Your Community Today
          </Typography>
          <ButtonGroup disableElevation variant="contained" color="primary">

            <Button color="primary" to="/survey/1" component={Link}>
              Try the Survey
            </Button>
            
          </ButtonGroup>
        </div>
      </div>
    );
  }

  renderHomePage() {
    return (
      <Grid container spacing={3}>
        <Navbar />
        

        {this.renderHeroImage()}
        <Grid item xs={12} align="center">
          
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