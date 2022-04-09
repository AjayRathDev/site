import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

const Details = ({ item }) => {
  return (
    <Box
      style={{
        display: "flex",
        alignItems: "space-between",
        margin: "5% 0",
        gap: "10px",
        flexDirection: "column",
      }}
    >
      <Box>
        <Typography>{item}</Typography>
      </Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <TextField
          style={{ width: "70%" }}
          label={item}
          id="outlined-size-small"
          size="small"
        />
        <Button
          style={{
            backgroundColor: "#1976D2",
            width: "10%",
          }}
          variant="contained"
        >
          Edit
        </Button>
        <Button
          style={{
            backgroundColor: "#1976D2",
            width: "15%",
          }}
          variant="contained"
        >
          Update
        </Button>
      </Box>
    </Box>
  );
};

export default Details;
