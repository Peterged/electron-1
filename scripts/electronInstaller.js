const electronInstaller = require('electron-winstaller');
require('dotenv').config();

const APP_NAME = process.env.APP_NAME || 'electron-quick-start';
const APP_VERSION = process.env.APP_VERSION || '1.0.0';


try {
    await electronInstaller.createWindowsInstaller({
        appDirectory: `./out/build/${APP_NAME}-win32-x64`,
        outputDirectory: './out/build/installer64',
        authors: 'PLAYER',
        exe: 'electron-quick-start.exe',
        certificateFile: './certs/cert.pfx',
        certificatePassword: process.env.CERT_PASSWORD,
    });

}
catch(e) {
    console.log(`No dice: ${e.message}`)
}