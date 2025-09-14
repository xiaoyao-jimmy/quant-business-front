import { app, BrowserWindow } from 'electron';
import path from 'path';
import isDev from 'electron-is-dev';

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // preload: path.join(__dirname, '../electron/preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false
    }
  })

  const startURL = isDev
    ? 'http://localhost:5173'
    : `file://${path.join(__dirname, '../dist/index.html')}`;

  win.loadURL(startURL);
  win.webContents.openDevTools();
};

app.whenReady().then(() => {
  createWindow();

  // session.defaultSession.setProxy({
  //   proxyRules: 'http://139.224.3.150:8080'
  // })
});
