import { Grid, Button, ButtonGroup, Typography } from "@material-ui/core";

function HeroImage(image, title) {
    const hero_image = {
      // marginTop: "vh",
      backgroundImage: image,
      height: "50%",
      width: "100%",backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position: "relative"
    }

    const hero_text = {
      textAlign: "left",
      position: "absolute",
      top: "60%",
      left: "50%",
      transform: "translate(-60%, -50%)",
      color: "white",
      fontSize: "3vh"
    }
    
    return (
      <div style = {hero_image}>
        <div
            style={{
              background: "rgb(2,0,36)",
              background:
                "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(6,71,162,0.7) 0%, rgba(0,212,255,0) 100%)",
              width: "110vw",
              height: "100%",
              position: "absolute",
            }}
          />
        <div style = {hero_text}>
          <Typography variant="h2">
            {title}
          </Typography>
          <Typography variant="h2">
            Join Your Community Today
          </Typography>
          <ButtonGroup disableElevation variant="contained" color="primary">

            {/* <Button color="primary" to="/survey/1" component={Link}>
              Try the Survey
            </Button> */}
            
          </ButtonGroup>
        </div>
      </div>
    );
  }
  
  export default HeroImage;