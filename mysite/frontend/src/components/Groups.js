import React, { Component } from "react";
import { Grid, Button, Typography, Card, CardContent, CardActions, CardMedia} from "@material-ui/core";
import Navbar from "./Navbar";
import UserInfo from "./UserInfo";

export default class Groups extends Component {
  constructor(props) {
    super(props);

    this.state = {
      groups: [],
      user: UserInfo()
    };

    this.getPosts = this.getPosts.bind(this);
    this.getPosts();
    this.checkAttendance = this.checkAttendance.bind(this);
    // this.getPosts = this..bind(this);
  }

  componentDidMount() {
    this.timer = setInterval(()=> this.getPosts(), 100000);
  }
  
  componentWillUnmount() {
    clearInterval(this.timer) 
    this.timer = null;
    // Fix the fact that this is not unmounting when we go to another page
  }

  checkAttendance(group_id) {
    // let check = false
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: this.state.user.user_id,
        group: group_id,
      }),
    };
    fetch("/api/check-attendance", requestOptions)
      .then((response) => {
        console.log(response)
        return response.json()
      }).then((data) => {
        // console.log("hello2?")
        // console.log(data.message == 1)
        if (data.message == 1) {
          return "outlined" 
        } else {
          return "contained"
        }
      })

    // console.log("hello?")

    // return check

    // if (check === true) {
    //   return "contained"
    // } else {
    //   return "outlined"
    // }
  }

  subscribeToGroup(group_id) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: this.state.user.user_id,
        group: group_id,
      }),
    };
    fetch("/api/submit-attendance", requestOptions)
      .then((response) => {
        console.log(response)

        if (response.ok) {
          console.log("Subscribed")
        } else {
          this.setState({ error: "Survey not found." });
        }
        return response.json()
      })
      .catch((error) => {
        console.log(error);
      });
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
          <Typography variant="body2">
          At {props.location}
          </Typography>
          <Typography variant="body2">
            {props.description}
          </Typography>
        </CardContent>
        <CardActions>
          {/* {this.checkAttendance(props.id).then(console.log())} */}
          {/* variant={} */}
          <Button size="small" variant={this.checkAttendance(props.id)} onClick={() => { this.subscribeToGroup(props.id); }}>Subscribe</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      </div>
    );
  }

  // Feth from api and save to groups array from state
  getPosts() {
    return fetch("/api/groups")
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
          groups: data
        });
      });
  }


  render() {
    return (

      <Grid container spacing={1}>
          <Navbar />

          <Grid item xs={12} align="center">

                {this.state.groups.map((group) => {
                    return (      
                      <Grid key={group.id} style={{backgroundColor: "ghostwhite", borderRadius: "20px", margin: "10px", padding: "10px", width: "50%"}}>
                        {this.renderMedia(group)}
                       </Grid>
                    );
                 })}
          </Grid>
        </Grid>
      );
  }
}
