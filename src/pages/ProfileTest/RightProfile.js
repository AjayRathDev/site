import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import Details from "./Details";

const bar = [
  { name: "Bio", details: ["My Bio", "Intrest", "Motivation", "Accomplish"] },
  {
    name: "Experince",
    details: ["My Experince", "Motivation", "Accomplish", "Intrest"],
  },
  {
    name: "Expertise",
    details: ["Intrest", "My Expertise", "Accomplish", "Motivation"],
  },
  { name: "Goal", details: ["Motivation", "My Goal", "Accomplish", "Intrest"] },
  { name: "Plan", details: ["Accomplish", "Intrest", "Motivation", "My Plan"] },
];

const a = ["My Bio", "Intrest", "Motivation", "Accomplish"];

const RightProfile = () => {
  const [details, setDetails] = useState([]);

  return (
    <Box
      style={{
        height: "100%",
        display: "flex",
      }}
    >
      <Box
        style={{
          display: "flex",
          width: "25%",
          height: "100%",
          background: "#1976D2",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {bar.map((item, index) => (
          <Button
            onClick={() => setDetails(item.details)}
            style={{
              backgroundColor: "white",
              width: "80%",
              color: "#1976D2",
              margin: "2% 0",
            }}
            variant="contained"
          >
            {item.name}
          </Button>
        ))}
      </Box>
      <Box
        style={{
          width: "75%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {details.length > 0 && (
          <Box
            style={{
              width: "75%",
              height: "70%",
              borderRadius: "10%",
              border: "3px solid #1976D2",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              style={{
                width: "80%",
                margin: "10px 0",
              }}
            >
              {details.map((item) => (
                <Details item={item} />
              ))}
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default RightProfile;
