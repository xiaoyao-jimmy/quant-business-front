import { app, BrowserWindow } from 'electron';
import path from 'path';
import isDev from 'electron-is-dev';

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  const startURL = isDev
    ? 'http://localhost:5173'
    : `file://${path.join(__dirname, './index.html')}`;

  win.loadURL(startURL);
};

app.whenReady().then(() => {
  createWindow();
});
