const { app, remote, BrowserWindow, shell, ipcMain, Menu } = require('electron');
const path = require('path');
const url = require('url');

// Let electron reloads by itself when webpack watches changes in ./ (i.e. build/)
require('electron-reload')(path.join(__dirname, '..'));

let mainWindow;
const isDev =
	'ELECTRON_IS_DEV' in process.env
	  ? parseInt(process.env.ELECTRON_IS_DEV, 10) === 1
	  : !(app || remote.app).isPackaged;

const startUrl = process.env.ELECTRON_START_URL || url.format({
  pathname: path.join(__dirname, '/../build/index.html'),
  protocol: 'file:',
  slashes : true
});

const createWindow = () => {
  mainWindow = new BrowserWindow({
    backgroundColor: '#FEFEFE',
    minWidth       : 880,
    show           : false,
    titleBarStyle  : 'hidden',
    webPreferences : {
      nodeIntegration: true,
      webPreferences : { webSecurity: !isDev },
      webSecurity    : !isDev // Allow file access while in development
    },
    height: 860,
    width : 1280
  });

  mainWindow.loadURL(startUrl);

  if (isDev) {
    const {
      default: installExtension,
      REACT_DEVELOPER_TOOLS,
      REDUX_DEVTOOLS
    } = require('electron-devtools-installer');

    installExtension(REACT_DEVELOPER_TOOLS)
      .then(name => {
        console.log(`Added Extension: ${name}`);
      })
      .catch(err => {
        console.log('An error occurred: ', err);
      });

    installExtension(REDUX_DEVTOOLS)
      .then(name => {
        console.log(`Added Extension: ${name}`);
      })
      .catch(err => {
        console.log('An error occurred: ', err);
      });
    
      mainWindow.webContents.openDevTools();
  }

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();

    ipcMain.on('open-external-window', (event, arg) => {
      shell.openExternal(arg);
    });
  });
};

const generateMenu = () => {
  const template = [
    {
      label  : 'File',
      submenu: [{ role: 'about' }, { role: 'quit' }]
    },
    {
      label  : 'Edit',
      submenu: [
        { role: 'undo' },
        { role: 'redo' },
        { type: 'separator' },
        { role: 'cut' },
        { role: 'copy' },
        { role: 'paste' },
        { role: 'pasteandmatchstyle' },
        { role: 'delete' },
        { role: 'selectall' }
      ]
    },
    {
      label  : 'View',
      submenu: [
        { role: 'togglefullscreen' }
      ]
    },
    {
      role   : 'window',
      submenu: [{ role: 'minimize' }, { role: 'close' }]
    }
  ];

  if (isDev) {
    template[2].submenu.push({ role: 'reload' });
    template[2].submenu.push({ role: 'forcereload' });
    template[2].submenu.push({ role: 'toggledevtools' });
    template[2].submenu.push({ type: 'separator' });
    template[2].submenu.push({ role: 'resetzoom' });
    template[2].submenu.push({ role: 'zoomin' });
    template[2].submenu.push({ role: 'zoomout' });
    template[2].submenu.push({ type: 'separator' });
  }

  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
};

app.on('ready', () => {
  createWindow();
  generateMenu();
});

app.on('window-all-closed', () => {
  app.quit();
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
