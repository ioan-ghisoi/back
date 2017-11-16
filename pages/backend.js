/* eslint-env browser */

var Page = require('./page')
/*eslint no-process-env: "error"*/
var Selectors = require(process.cwd() + '/pages/selectors/selectors')

Selectors = Selectors.johnny

const backend = Object.create(Page, { // eslint-disable-line example/rule-name
  usernameInput: {get () { return browser.element(Selectors.backend.login.username) } },
  passwordInput: {get () { return browser.element(Selectors.backend.login.password) } },
  adminSignIn: {get () { return browser.element(Selectors.backend.admin_sign_in) } },
  open: {
    value () {
      Page.open(Selectors.url.magento_base + Selectors.url.payments_path)
    }
  }
})

module.exports = backend
