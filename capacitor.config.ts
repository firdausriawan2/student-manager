import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.firdausriawan.studentmgr',
  appName: 'Student Manager',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
