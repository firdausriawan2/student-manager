import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import {
  Home,
  Person4,
  PersonRounded,
  QrCodeScanner,
} from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

function BottomMenu() {
  const [value, setValue] = React.useState(0);
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 0,
        top: "auto",
        left: 0,
        right: 0,
        boxShadow: 3,
      }}
    >
      <BottomNavigation
        showLabels
        sx={{
          backgroundColor: "primary",
        }}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          component={Link}
          to="/"
          label="Home"
          icon={<Home />}
        />
        <BottomNavigationAction
          component={Link}
          to="/scan"
          label="Scan"
          icon={<QrCodeScanner />}
        />
        <BottomNavigationAction
          component={Link}
          to="/profile"
          label="Profile"
          icon={<PersonRounded />}
        />
      </BottomNavigation>
    </Box>
  );
}

export default BottomMenu;
