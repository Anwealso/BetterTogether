import React, { Component } from "react";
import { Routes, Route, useParams } from 'react-router-dom';
import { Grid, Button, Typography, Radio, FormControl, FormControlLabel, FormLabel, RadioGroup , Card, CardContent, CardActions, CardMedia} from "@material-ui/core";
// import { Grid, Button, Typography, Radio, FormControl, FormControlLabel, FormLabel, RadioGroup, Card } from "@material-ui/core";
// import PosterImage from '../../static/images/ons_blanked.jpeg';
// import * as React from 'react';
// import Card, { Grid } from '@material-ui/core';
// import CardActions from '@material-ui/core';
// import CardContent from '@material-ui/core';
// import CardMedia from '@material-ui/core';
// import Button from '@material-ui/core';
// import Typography from '@material-ui/core';

export default class Events extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
    };

    this.getPosts = this.getPosts.bind(this);
    this.getPosts();
  }

  componentDidMount() {
    this.timer = setInterval(()=> this.getPosts(), 1000);
  }
  
  componentWillUnmount() {
    clearInterval(this.timer) 
    this.timer = null;
    // Fix the fact that this is not unmounting when we go to another page
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
          {/* <Typography gutterBottom variant="h5" component="div">
          </Typography> */}
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
          <Button size="small">Subscribe</Button>
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


  // todo: add css and divs
  render() {
    return (
      <div className="posts-container">
        <h2> Event List</h2>
         {this.state.events.map((event) => {
          // import * as React from 'react';
          // import Card from '@mui/material/Card';
          // import CardActions from '@mui/material/CardActions';
          // import CardContent from '@mui/material/CardContent';
          // import CardMedia from '@mui/material/CardMedia';
          // import Button from '@mui/material/Button';
          // import Typography from '@mui/material/Typography';
          
            return (
              
            //   <Card sx={{ maxWidth: 345 }}>
            //     <CardMedia
            //       component="img"
            //       height="140"
            //       image="/static/images/cards/contemplative-reptile.jpg"
            //       alt="green iguana"
            //     />
            //     <CardContent>
            //       <Typography gutterBottom variant="h5" component="div">
            //         Lizard
            //       </Typography>
            //       <Typography variant="body2" color="text.secondary">
            //         Lizards are a widespread group of squamate reptiles, with over 6,000
            //         species, ranging across all continents except Antarctica
            //       </Typography>
            //     </CardContent>
            //     <CardActions>
            //       <Button size="small">Share</Button>
            //       <Button size="small">Learn More</Button>
            //     </CardActions>
            //   </Card>
            // );
          
            // return (
              
            //       <Card sx={{ maxWidth: 345 }} key={event.id}>
            //         {/* <CardMedia
            //           component="img"
            //           height="140"
            //           // image="/static/images/cards/contemplative-reptile.jpg"
            //           alt="green iguana"
            //         /> */}
            //         {/* <CardContent>
            //           <Typography gutterBottom variant="h5" component="div">
            //             Lizard
            //           </Typography>
            //           <Typography variant="body2" color="text.secondary">
            //             Lizards are a widespread group of squamate reptiles, with over 6,000
            //             species, ranging across all continents except Antarctica
            //           </Typography>
            //         </CardContent>
            //         <CardActions>
            //           <Button size="small">Share</Button>
            //           <Button size="small">Learn More</Button>
            //         </CardActions> */}
            //       </Card>
              
              <Grid>
                {this.renderMedia(event)}
               {/* <div className="post-card" key={event.id}>

                  <h2 className="post-title">{event.title}</h2>
                  <p className="post-body">{event.location}</p>
                  <p className="post-body">{event.time}</p>
                  <p className="post-body">{event.description}</p>
               </div> */}
               </Grid>
            );
         })}
      </div>
      );
  }
}

// import * as React from 'react';
// // import { Grid, Button, Typography, Radio, FormControl, FormControlLabel, FormLabel, RadioGroup, Card } from "@material-ui/core";
// import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';


