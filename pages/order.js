/* eslint-disable no-alert, no-console */

var Page = require('./page')
var Selectors = require(process.cwd() + '/pages/selectors/selectors')

Selectors = Selectors.johnny

const order = Object.create(Page, {// eslint-disable-line example/rule-name
  loader: { get () { return browser.element(Selectors.frontend.order.loader) } },
  addProduct: { get () { return browser.element(Selectors.frontend.order.add_product) } },
  counter: { get () { return browser.element(Selectors.frontend.order.product_counter) } },
  cart: { get () { return browser.element(Selectors.frontend.order.cart) } },
  goToCheckout: { get () { return browser.element(Selectors.frontend.order.go_to_checkout) } },
  goToPayment: { get () { return browser.element(Selectors.frontend.order.go_to_payment) } },

  open: {
    value () {
      Page.open(Selectors.url.magento_base + Selectors.url.product_path)
    }
  }
})

module.exports = order
