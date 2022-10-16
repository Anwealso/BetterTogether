import React, { Component } from "react";

import Survey from "./Survey";
import Submitted from "./Submitted";
import Billboard from "./Billboard";
import Events from "./Events";
import Navbar from "./Navbar";
import Event from "./Event";
import HeroImage from "./HeroImage";
// import GenericImage from '../../static/images/senior-volunters.jpg'

import { Grid, Button, ButtonGroup, Typography } from "@material-ui/core";
import PrivateRoute from "../utils/PrivateRoute";
import { AuthProvider } from "../context/AuthContext";
// import Home from "/homePage";
import Login from "./LoginPage";
import Logout from "./LogoutPage";
import Register from "./Register";
import ProtectedPage from "./ProtectedPage";

import { useContext } from "react";
import UserInfo from "../components/UserInfo";
import AuthContext from "../context/AuthContext";

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
        

        {HeroImage("url(../../static/images/senior-volunters.jpg)")}
        {/* <Grid item xs={12} align="center"> */}
          <div style={{ margin: "auto", marginTop:"-2vh", maxWidth: 600 }}>
          <Typography variant="h3" gutterBottom={true} display="block">
            Hey There!
          </Typography>
          <Typography variant="p" align="left" gutterBottom={true} display="block">
            We're excited to bring you Onigiri! a community wellness hub, designed to make sure you know what's going on in your community, and help you get involved.
          </Typography>
          <Typography variant="p" align="left" gutterBottom={true} display="block">
            We've got a few key features that we think you'll love! If you don't, we'd love to here about it! We're here to help you and your community, so if you feel we can do better, let us know!
          </Typography>

          <Typography variant="h4" gutterBottom={true} display="block">
            Billboards
          </Typography>
          <Typography variant="p" align="left" gutterBottom={true} display="block">
            You may have seen our billboards around! They're designed to keep your community up to date with your community. These statics are updated live by other people in your community!
          </Typography>
          <Typography variant="h5">
            Join Your Community Today
          </Typography>
          <Typography variant="h4" gutterBottom={true} display="block">
            Surveys
          </Typography>
          <Typography variant="p" align="left" gutterBottom={true} display="block">
            This is whaty feeds our billboards. It's our way of sharing how everyone is doing around you anonymously. Sometimes sharing can be hard, we get that. So we designed a platform so that you can easily share what you feel without being confronted.
          </Typography>

          <Typography variant="h4" gutterBottom={true} display="block">
            User Portal
          </Typography>
          <Typography variant="p" align="left" gutterBottom={true} display="block">
            This is where you can see what's going on in your community. Find events, groups, and more!
          </Typography>
          </div>
          
        {/* </Grid> */}
      </Grid>
    );
  }

  render() {
    return (
      <Router>
        <AuthProvider>
          <Switch>

            <PrivateRoute component={ProtectedPage} path="/protected" exact />
            <Route component={Login} path="/login" />
            <Route component={Logout} path="/logout" />
            <Route component={Register} path="/register" />
            {/* <Route component={Home} path="/" /> */}


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
              path="/event/:eventId"
              render={(props) => {
                return <Event {...props}/>
              }}
            />


          <Route
            path="/events"
            render={(props) => {
              return <Events {...props}/>
            }}
          />

            <Route
              path="/billboard/:billboardId"
              render={(props) => {
                return <Billboard {...props}/>
              }}
            />

          </Switch>
        </AuthProvider>
      </Router>
    );
  }
}
