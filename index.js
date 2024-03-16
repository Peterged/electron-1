const { app, BrowserWindow } = require('electron');

const path = require('path');
require('dotenv').config();

// Import the Express App
const expressApp = require('./server');
const PORT = process.env.PORT || 3000;

// Electron App
let mainWindow;


function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 900,
        title: 'Tooltorch App',
        minHeight: 600,
        minWidth: 800,
        webPreferences: {
            nodeIntegration: true
        }
    });
    mainWindow.maximize();

    mainWindow.loadURL(`https://discord.com`);

    mainWindow.on('closed', () => {
        mainWindow = null;
    })
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if(process.platfoprm !== 'darwin') {
        app.quit();
    }
})

app.on('activate', () => {
    if(mainWindow === null) {
        createWindow();
    }
})
