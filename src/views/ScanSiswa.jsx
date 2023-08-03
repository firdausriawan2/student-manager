import { Box } from "@mui/material";
import QrScanner from "qr-scanner";
import React, { useEffect } from "react";

let hasilScan = "";

function ScanSiswa() {
  useEffect(() => {
    let scanner;

    const startScan = async () => {
      await new Promise((r) => setTimeout(r, 100));
      const videoElement = document.getElementById("scanView");

      scanner = new QrScanner(
        videoElement,
        (result) => {
          console.log("Hasil pindai:", result.data);
          hasilScan = result.data;
        },
        {
          onDecodeError: (err) => {
            console.log("kesalahan pemindai QR:", err);
          },
          maxScansPerSecond: 1,
          highlightScanRegion: true,
          returnDetailedScanResult: true,
        }
      );
      await scanner.start();
    };

    startScan();

    return () => {
      if (scanner) {
        scanner.destroy();
      }
    };
  }, []);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          height: "100vh",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <video
          id="scanView"
          style={{
            width: "100%",
            // maxWidth: "400px",
            height: "100%",
            // maxHeight: "400px",
            borderStyle: "dotted",
          }}
        ></video>
      </Box>
    </>
  );
}

export default ScanSiswa;
