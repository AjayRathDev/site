import {
  AppBar,
  Container,
  Box,
  Tooltip,
  IconButton,
  Avatar,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Header = () => {
  let navigate = useNavigate();

  const changePage = (pagename) => {
    navigate(pagename);
  };

  return (
    <AppBar position="static">
      <Container
        maxWidth="xl"
        style={{
          height: "8vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Box onClick={() => changePage("/")}>Header</Box>
          <Box>
            <Tooltip title="Open Profile">
              <IconButton onClick={() => changePage("/profile")} sx={{ p: 0 }}>
                <Avatar
                  alt="Profile"
                  src="https://mui.com/static/images/avatar/2.jpg"
                />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Header;
