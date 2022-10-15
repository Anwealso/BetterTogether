import React, { Component } from "react";

import Survey from "./Survey";
import Submitted from "./Submitted";
import Billboard from "./Billboard";
import Navbar from "./Navbar";
// import GenericImage from '../../static/images/senior-volunters.jpg'

import { Grid, Button, ButtonGroup, Typography } from "@mui/material";
import PrivateRoute from "../utils/PrivateRoute";
import { AuthProvider } from "../context/AuthContext";
// import Home from "/homePage";
import Login from "./LoginPage";
import Register from "./Register";
import ProtectedPage from "./ProtectedPage";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderHeroImage() {
    const hero_image = {
      marginTop: "-12vh",
      backgroundImage: "url(../../static/images/senior-volunters.jpg)",
      height: "50%",
      width: "100%",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position: "relative",
    };

    const hero_text = {
      textAlign: "center",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      color: "white",
      fontSize: "3vh",
    };

    return (
      <div style={hero_image}>
        <div style={hero_text}>
          <Typography variant="h2">Get Involved</Typography>
          <Typography variant="h5">Join Your Community Today</Typography>
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
        {/* <Grid item xs={12} align="center"> */}
        <div style={{ margin: "auto", marginTop: "-2vh", maxWidth: 600 }}>
          <Typography variant="h3" gutterBottom={true} display="block">
            Hey There!
          </Typography>
          <Typography
            variant="p"
            align="left"
            gutterBottom={true}
            display="block"
          >
            We're excited to bring you Onigiri! a community wellness hub,
            designed to make sure you know what's going on in your community,
            and help you get involved.
          </Typography>
          <Typography
            variant="p"
            align="left"
            gutterBottom={true}
            display="block"
          >
            We've got a few key features that we think you'll love! If you
            don't, we'd love to here about it! We're here to help you and your
            community, so if you feel we can do better, let us know!
          </Typography>

          <Typography variant="h4" gutterBottom={true} display="block">
            Billboards
          </Typography>
          <Typography
            variant="p"
            align="left"
            gutterBottom={true}
            display="block"
          >
            You may have seen our billboards around! They're designed to keep
            your community up to date with your community. These statics are
            updated live by other people in your community!
          </Typography>
          <Typography variant="h5">Join Your Community Today</Typography>
          <Typography variant="h4" gutterBottom={true} display="block">
            Surveys
          </Typography>
          <Typography
            variant="p"
            align="left"
            gutterBottom={true}
            display="block"
          >
            This is whaty feeds our billboards. It's our way of sharing how
            everyone is doing around you anonymously. Sometimes sharing can be
            hard, we get that. So we designed a platform so that you can easily
            share what you feel without being confronted.
          </Typography>

          <Typography variant="h4" gutterBottom={true} display="block">
            User Portal
          </Typography>
          <Typography
            variant="p"
            align="left"
            gutterBottom={true}
            display="block"
          >
            This is where you can see what's going on in your community. Find
            events, groups, and more!
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
          <Routes>
            {/* <PrivateRoute component={ProtectedPage} path="/protected" exact /> */}
            <Route
              path="/protected"
              element={
                <PrivateRoute>
                  <ProtectedPage />
                </PrivateRoute>
              }
            />
            <Route element={<Login />} path="/login" />
            <Route element={<Register />} path="/register" />
            {/* <Route component={Home} path="/" /> */}

            <Route exact path="/" element={this.renderHomePage()} />

            <Route path="/submitted" element={<Submitted />} />

            {/* <Route
              path="/create" 
              render={() => {
                return <Join />
              }}
            /> */}

            <Route path="/survey/:surveyId" element={<Survey/>} />

            <Route
              path="/billboard/:billboardId"
              element={<Billboard/>}
            />
          </Routes>
        </AuthProvider>
      </Router>
    );
  }
}
