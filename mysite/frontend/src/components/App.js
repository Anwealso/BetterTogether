import { Grid, Avatar, Typography, Box } from "@mui/material";
import React from "react";
import { render } from "react-dom";
import "./app.scss";
import Old from "../assets/old.jpg";

export const App = () => {
  // console.log(Old);
  return (
    <div className="main" style={{ display: "flex", alignItems: "center" }}>
      <Grid
        container
        sx={{ justifyContent: "center", alignItems: "center" }}
        spacing={2}
        gap={6}
        zIndex={"100"}
      >
        <Grid item>
          <Avatar src={Old} sx={{ width: "450px", height: "450px" }} />
        </Grid>
        <Grid item>
          <Typography variant="h5" sx={{ color: "#052B00" }}>
            Our analysis of QLD data found that
          </Typography>
          <Typography variant="h1" fontWeight={900} sx={{ color: "#7D1E5A" }}>
            31.58 %
          </Typography>
          <Typography
            variant="h4"
            fontWeight={600}
            sx={{
              p: 0.5,
              m: 0.5,
              backgroundColor: "#7D1E5A",
              color: "white",
              whiteSpace: "pre",
              width: "fit-content",
            }}
          >
            of people over 70 in QLD were
          </Typography>
          <Typography
            variant="h4"
            fontWeight={600}
            sx={{
              p: 0.5,
              m: 0.5,
              backgroundColor: "#7D1E5A",
              color: "white",
              whiteSpace: "pre",
              width: "fit-content",
            }}
          >
            &apos;chronically&apos; lonely
          </Typography>
          <Typography variant="h5" sx={{ color: "#052B00", whiteSpace: "pre" }}>
            (or felt lonely all or most of the time) {"\n"}
            between December 2021 and Feburary 2022.
          </Typography>
        </Grid>
      </Grid>
      <Box
        sx={{
          width: 150,
          height: 150,
          borderRadius: "50%",
          position: "absolute",
          backgroundColor: "#F67AC8",
          bottom: "250px",
          right: "0px",
        }}
      />
      <Box
        sx={{
          width: 150,
          height: 150,
          borderRadius: "50%",
          position: "absolute",
          backgroundColor: "#F67AC8",
          bottom: "550px",
          left: "700px",
        }}
      />
      <Box
        sx={{
          width: 250,
          height: 250,
          borderRadius: "50%",
          position: "absolute",
          backgroundColor: "#7D1E5A",
          bottom: "60px",
          left: "400px",
        }}
      />
      <Box
        sx={{
          width: 110,
          height: 110,
          borderRadius: "50%",
          position: "absolute",
          backgroundColor: "#7D1E5A",
          bottom: "500px",
          left: "320px",
        }}
      />
      <Box
        sx={{
          width: 260,
          height: 260,
          borderRadius: "50%",
          position: "absolute",
          backgroundColor: "#F67AC8",
          bottom: "-150px",
        }}
      />
      <Box
        sx={{
          width: 140,
          height: 140,
          borderRadius: "50%",
          position: "absolute",
          backgroundColor: "#7D1E5A",
          bottom: "100px",
          right: "350px",
        }}
      />
    </div>
  );
};

const appDiv = document.getElementById("app");
render(<App />, appDiv);
