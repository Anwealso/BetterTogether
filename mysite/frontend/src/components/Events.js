import React, { Component } from "react";
import { Routes, Route, useParams } from 'react-router-dom';
import { Grid, Button, Typography, Radio, FormControl, FormControlLabel, FormLabel, RadioGroup , Card, CardContent, CardActions, CardMedia} from "@material-ui/core";
import Navbar from "./Navbar";
import UserInfo from "./UserInfo";

export default class Events extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
      user: UserInfo()
    };

    this.getPosts = this.getPosts.bind(this);
    this.getPosts();
  }

  componentDidMount() {
    this.timer = setInterval(()=> this.getPosts(), 100000);
  }
  
  componentWillUnmount() {
    clearInterval(this.timer) 
    this.timer = null;
    // Fix the fact that this is not unmounting when we go to another page
  }

  subscribeToEvent(event_id) {
    const user = this.state.user.user_id
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: this.state.user.user_id,
        event: event_id,
      }),
    };
    fetch("/api/submit-attendance", requestOptions)
      .then((response) => {
        console.log(response)

        if (response.ok) {
          console.log("fuck yesssss")
          // this.props.history.push("/submitted");
        } else {
          this.setState({ error: "Survey not found." });
        }
      })
      .catch((error) => {
        console.log(error);
      });
    // console.log(user + " Subcribing to " + event_id)
    // const response = await fetch("/api/atten/", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     user,
    //     event_id
    //   })
    // });
    // if (response.status === 201) {
    //   history.push("/login");
    // } else {
    //   alert("Something went wrong!");
    // }
    // console.log("go")
  }

  renderMedia(props) {
    return (
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
          <Typography variant="body2" color="text.secondary">
          At {props.location}, {props.time.substring(8,10)}/{props.time.substring(5,7)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small"  onClick={() => { this.subscribeToEvent(props.id); }}>Subscribe</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      </div>
    );
  }

  // Feth from api and save to events array from state
  getPosts() {
    return fetch("/api/events")
      .then((response) => {
        console.log(response)
        if (!response.ok) {
          console.log("Response not okay")
          this.props.history.push("/");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Retrieved data from API")
        console.log(data)
        this.setState({
          events: data
        });
      });
  }


  render() {
    return (

      <Grid container spacing={1}>
          <Navbar />

          <Grid item xs={12} align="center">

                {this.state.events.map((event) => {
                    return (      
                      <Grid style={{backgroundColor: "ghostwhite", borderRadius: "20px", margin: "10px", padding: "10px", width: "50%"}}>
                        {this.renderMedia(event)}
                       </Grid>
                    );
                 })}
          </Grid>
        </Grid>
      );
  }
}
