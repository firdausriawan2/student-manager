import { Box } from "@mui/material";
import QrScanner from "qr-scanner";
import React, { useEffect, useRef } from "react";

function Test() {
  const videoRef = useRef(null);

  useEffect(() => {
    let scanner;

    const mulaiPindai = async () => {
      await new Promise((r) => setTimeout(r, 100));
      const videoElement = videoRef.current;

      try {
        const daftarKamera = await QrScanner.listCameras();
        if (daftarKamera.length === 0) {
          throw new Error("Tidak ditemukan kamera.");
        }

        // Pilih kamera belakang jika tersedia
        const kameraBelakang = daftarKamera.find((kamera) =>
          kamera.label.toLowerCase().includes("back")
        );
        const kamera = kameraBelakang || daftarKamera[0]; // Jika kamera belakang tidak tersedia, gunakan kamera pertama dari daftar

        scanner = new QrScanner(
          videoElement,
          (hasil) => {
            console.log("Hasil pindai:", hasil.data);
          },
          {
            onDecodeError: (err) => {
              console.error("Kesalahan Pemindai QR:", err);
            },
            preferredCamera: kamera.id,
            maxScansPerSecond: 1,
            highlightScanRegion: true,
            returnDetailedScanResult: true,
          }
        );
        await scanner.start();
      } catch (error) {
        console.error("Kesalahan Kamera:", error);
        // Tangani kesalahan dengan tepat, tampilkan pesan ke pengguna, dll.
      }
    };

    mulaiPindai();

    return () => {
      if (scanner) {
        scanner.destroy();
      }
    };
  }, []);

  return (
    <React.Fragment>
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
          ref={videoRef}
          style={{
            width: "100%",
            maxWidth: "400px",
            height: "100%",
            maxHeight: "400px",
            borderStyle: "dotted",
          }}
        ></video>
      </Box>
    </React.Fragment>
  );
}

export default Test;
