const { app, BrowserWindow, globalShortcut, screen } = require('electron')

function createWindow() {

  const win = new BrowserWindow({
    width: 190,
    height: 190,
    frame: false,
    transparent: true,
    resizable: false,
    movable: true,
    show: true,
    webPreferences: {
      nodeIntegration: true
    }
  })

  
  globalShortcut.register('f5', function () {
    console.log('f5 is pressed')
    win.reload()
  })
  
  win.loadFile('./page/index.html')
  
  win.on('will-move', function (event, rect) {
    // const { width, height } = screen.getPrimaryDisplay().workAreaSize

    // if (rect.height + rect.y > height) event.preventDefault()

    // if (rect.width + rect.x > width) event.preventDefault()
  })
}

app.whenReady().then(() => createWindow())


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})


app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})