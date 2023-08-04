import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.firdausriawan.studentmgr",
  appName: "Student Manager",
  webDir: "build",
  server: {
    hostname: "55a8-2001-448a-1082-7bf1-fd4e-74f6-9ca6-a601.ngrok-free.app",
    cleartext: true,
    androidScheme: "https",
  },
};

export default config;
