import { Person4, QrCodeScanner, Stop } from "@mui/icons-material";
import { AppBar, Avatar, Box, Fab, Toolbar, Typography } from "@mui/material";
import QrScanner from "qr-scanner";
import React, { useState } from "react";

let stopScan = false;
let hasilScan = "";

function App() {
  const [btnScan, setBtnScan] = useState(true);

  const mulaiScan = async (isScan) => {
    setBtnScan(isScan);
    stopScan = isScan;
    if (btnScan === false) return;
    await new Promise((r) => setTimeout(r, 100));
    const videoElement = document.getElementById("scanView");
    const scanner = new QrScanner(
      videoElement,
      (result) => {
        hasilScan = result.data;
        setBtnScan(true);
        stopScan = true;
      },
      {
        onDecodeError: (err) => {
          console.error(err);
        },
        maxScansPerSecond: 1,
        highlightScanRegion: true,
        returnDetailedScanResult: true,
      }
    );
    await scanner.start();
    while (stopScan === false) {
      await new Promise((r) => setTimeout(r, 100));
    }
    scanner.stop();
    scanner.destroy();
  };

  return (
    <React.Fragment>
      <AppBar>
        <Toolbar>
          <Avatar sx={{ mr: 1, bgcolor: "secondary-main" }}>
            <Person4 />
          </Avatar>
          <Typography variant="h6">QR Code Scanner</Typography>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          display: "flex",
          height: "100vh",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {btnScan === false && (
          <video
            id="scanView"
            style={{
              width: "100%",
              maxWidth: "400px",
              height: "100%",
              maxHeight: "400px",
              borderStyle: "dotted",
            }}
          ></video>
        )}
        {btnScan && (
          <Typography variant="h6">
            Hasil Scan: <br />
            {hasilScan}
          </Typography>
        )}
        <Fab
          color={btnScan ? "primary" : "secondary"}
          sx={{ position: "absolute", bottom: 16, right: 16 }}
          onClick={() => mulaiScan(!btnScan)}
        >
          {btnScan && <QrCodeScanner />}
          {btnScan === false && <Stop />}
        </Fab>
      </Box>
    </React.Fragment>
  );
}

export default App;
