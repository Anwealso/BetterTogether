import React, { Component } from "react";
import { Grid, Button, Typography, Card, CardContent, CardActions, CardMedia} from "@material-ui/core";
import Navbar from "./Navbar";
import UserInfo from "./UserInfo";

export default class TogetherApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      groups: [],
      user: UserInfo()
    };
  }

  // renderMedia(props) {
  //   return (
  //   );
  // }

  render() {
    return (

      <div style={{width:"100%"}}>
        <Navbar />

        <Grid container spacing={2} style={{display:"flex", flexDirection:"column", alignItems:"center", overflow:"scroll"}}>
          <Grid item xs={10} style={{padding:"3vw"}}>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image="https://images.theconversation.com/files/456640/original/file-20220406-22-skjmyw.jpg?ixlib=rb-1.1.0&rect=0%2C50%2C6699%2C3349&q=45&auto=format&w=668&h=324&fit=crop"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Find Help
                </Typography>
                <Typography variant="body2">
                Feeling lonely? Or do you just want to find new people to connect with? Click here to find out what's going on around you.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={10} style={{padding:"3vw"}}>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image="https://www.wslhd.health.nsw.gov.au/Images/UserUploadedImages/3818/Adult%20and%20elderly%20community%20services%20(1).png"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Give Help
                </Typography>
                <Typography variant="body2">
                Want to join your community? Volunteer today!
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        </div> 
      );
  }
}
