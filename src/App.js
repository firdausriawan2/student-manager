import {
  AppBar,
  Avatar,
  BottomNavigation,
  BottomNavigationAction,
  Toolbar,
  Typography,
} from "@mui/material";
import { Home, Person4 } from "@mui/icons-material";
import React from "react";
import Routes from "./routes/web";
import BottomMenu from "./components/BottomMenu";
import BottomMenu2 from "./components/BottomMenu2";

function App() {
  return (
    <React.Fragment>
      {/* Header */}
      <AppBar>
        <Toolbar>
          <Avatar sx={{ mr: 1, bgcolor: "secondary-main" }}>
            <Person4 />
          </Avatar>
          <Typography variant="h6">Student Manager</Typography>
        </Toolbar>
      </AppBar>
      {/* Header */}
      {/* Content */}
      <Routes />
      {/* Content */}
      <BottomMenu2 />
    </React.Fragment>
  );
}

export default App;
