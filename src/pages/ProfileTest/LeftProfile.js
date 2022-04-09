import React from "react";
import { Box, Grid, Card, Typography } from "@mui/material";

const details = [
  { title: "Name", value: "Ajay Ratah", icon: "" },
  { title: "Age", value: "28" },
  { title: "awdaw" },
];

const LeftProfile = () => {
  return (
    <Card style={{ height: "100%" }}>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "5px",
          flexDirection: "column",
        }}
      >
        <Box style={{ display: "flex", justifyContent: "center" }}>
          <img
            style={{
              display: "flex",
              justifyContent: "center",
              height: "80%",
              width: "80%",
              borderRadius: "50%",
            }}
            alt="profile"
            src="https://mui.com/static/images/avatar/2.jpg"
          />
        </Box>
        <Box style={{ padding: "10px" }}>
          <Typography
            style={{ textAlign: "center", fontWeight: "bold" }}
            variant="h5"
          >
            Ajay Ratha
          </Typography>

          {details?.map((item, index) => {
            return (
              <Grid container spacing={1}>
                <Grid
                  item
                  xs={5}
                  style={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <Typography variant="h6">{item.title} :</Typography>
                </Grid>
                <Grid
                  item
                  xs={7}
                  style={{ display: "flex", justifyContent: "flex-start" }}
                >
                  <Typography variant="h6">{item.value}</Typography>
                </Grid>
              </Grid>
            );
          })}
        </Box>
      </Box>
    </Card>
  );
};

export default LeftProfile;
