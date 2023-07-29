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
import BottomMenu from "./components/BottomMenu";

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
      <BottomMenu />
    </React.Fragment>
  );
}

export default App;
