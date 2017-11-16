// Example configuration to use browser located into non standard path
module.exports = {
    webdriverio: {
        logLevel: 'silent',
        screenshotPath: './reports/screenshots',
        desiredCapabilities: {
            chromeOptions: {
                args: ["headless", "disable-gpu"]
            },
            isHeadless: true
            
        },
        debug: true
    },
  }