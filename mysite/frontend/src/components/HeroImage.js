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
      textAlign: "center",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      color: "white",
      fontSize: "3vh"
    }
    
    return (
      <div style = {hero_image}>
        <div style = {hero_text}>
          <Typography variant="h2">
            {title}
          </Typography>
          <Typography variant="h5">
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