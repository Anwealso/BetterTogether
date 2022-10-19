import { useContext } from "react";
import AuthContext from "../context/AuthContext";

import React, { Component } from "react";
import { Grid, Button, ButtonGroup, Typography } from "@material-ui/core";
import Navbar from "./Navbar";

import {
  BrowserRouter,
  Link,
} from "react-router-dom";

const LogoutPage = () => {
  const { logoutUser } = useContext(AuthContext);

  return (
    <Grid container spacing={3}>
      <Navbar />

      <Grid item xs={12} align="center">
        <Typography variant="h3" compact="h3">
          You are now logged out!
        </Typography>

        <ButtonGroup disableElevation variant="contained" color="primary">

          <Link color="primary" to="/">
            Back to the home page
          </Link>
          
        </ButtonGroup>
      </Grid>
    </Grid>
  );
};

export default LogoutPage;