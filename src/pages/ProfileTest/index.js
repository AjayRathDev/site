import React from "react";
import { Grid } from "@mui/material";
import LeftProfile from "./LeftProfile";
import RightProfile from "./RightProfile";

const Profile = () => {
  return (
    <Grid container style={{ display: "flex", height: "100%" }}>
      <Grid item xs={2.5}>
        <LeftProfile />
      </Grid>
      <Grid item xs={9.5}>
        <RightProfile />
      </Grid>
    </Grid>
  );
};

export default Profile;
