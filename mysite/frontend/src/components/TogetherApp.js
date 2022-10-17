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

      <Grid container spacing={1}>
          <Navbar />

          {/* <Grid item xs={12} align="center">

                
            <div>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={props.image}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {props.title}
                </Typography>
                <Typography variant="body2">
                At {props.location}
                </Typography>
                <Typography variant="body2">
                  {props.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant={this.checkAttendance(props.id)} onClick={() => { this.subscribeToGroup(props.id); }}>Subscribe</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
            </div>
          </Grid>*/}
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image="url()"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {/* {props.title} */}
                </Typography>
                <Typography variant="body2">
                At 
                </Typography>
                <Typography variant="body2">
                  {/* {props.description} */}
                </Typography>
              </CardContent>
              <CardActions>
                {/* <Button size="small" variant={this.checkAttendance(props.id)} onClick={() => { this.subscribeToGroup(props.id); }}>Subscribe</Button>
                <Button size="small">Learn More</Button> */}
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={4}>
            {/* <Item>xs=4</Item> */}
          </Grid>
          <Grid item xs={4}>
            {/* <Item>xs=4</Item> */}
          </Grid>
          <Grid item xs={8}>
            {/* <Item>xs=8</Item> */}
          </Grid>
        </Grid>

        </Grid> 
      );
  }
}
