import {
  BottomNavigation,
  BottomNavigationAction,
  Fab,
  Box,
} from "@mui/material";
import { Home, PersonRounded, QrCodeScanner } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

function BottomMenu() {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        top: "auto",
        left: 0,
        right: 0,
        boxShadow: 3,
      }}
    >
      <BottomNavigation
        // showLabels
        sx={{
          backgroundColor: "primary",
        }}
      >
        <BottomNavigationAction
          component={Link}
          to="/"
          label="Home"
          icon={<Home />}
        />
        <Fab
          LinkComponent={Link}
          to="/scan"
          color="primary"
          sx={{ bottom: 20 }}
        >
          <QrCodeScanner />
        </Fab>
        <BottomNavigationAction
          component={Link}
          to="/profile"
          label="ProfileTe"
          icon={<PersonRounded />}
        />
      </BottomNavigation>
    </Box>
  );
}

export default BottomMenu;
