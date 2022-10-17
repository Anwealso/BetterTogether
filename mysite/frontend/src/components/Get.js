import React, { Component } from "react";
import { Grid, Button, Typography, Card, CardContent, CardActions, CardActionArea, CardMedia} from "@material-ui/core";
import Navbar from "./Navbar";
import UserInfo from "./UserInfo";

export default class Get extends Component {
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
              <CardActionArea href="/together/events">
              <CardMedia
                component="img"
                height="300"
                image="https://www.griswoldhomecare.com/sub/49822/images/bigstock-Group-Of-Seniors-Playing-Game-258166369.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Events
                </Typography>
                <Typography variant="body2">
                Feeling lonely? Or do you just want to find new people to connect with? Click here to find out what's going on around you.
                </Typography>
              </CardContent>
            </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={10} style={{padding:"3vw"}}>
            <Card>
              <CardActionArea href="/together/groups">
              <CardMedia
                component="img"
                height="300"
                image="https://media.istockphoto.com/photos/group-of-friends-laughing-picture-id464212215?k=20&m=464212215&s=612x612&w=0&h=brgMqIF2ShMaCkz4CWxL3CDSPKkfaB4IfCQFqX4lnVQ="
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Groups
                </Typography>
                <Typography variant="body2">
                Want to join your community? Volunteer today!
                </Typography>
              </CardContent>
            </CardActionArea>
            </Card>
          </Grid>
        </Grid>

        </div> 
      );
  }
}
