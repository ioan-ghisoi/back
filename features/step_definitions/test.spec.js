/*eslint-disable no-undef */
var Backend = require(process.cwd() + "/pages/backend");
var Order = require(process.cwd() + "/pages/order");
var Selectors = require(process.cwd() + "/pages/selectors/selectors");

Selectors = Selectors.johnny;

module.exports = function () {
  this.setDefaultTimeout(99000); // set to avaoid timeout due to mangeto laod times

  this.Given(/^I set the viewport$/, function() {
    browser.setViewportSize({
        width: 1280,
        height: 1024
    });
    var width = browser.getViewportSize('width')
    console.log(width); // outputs: 1024

    var height = browser.getViewportSize('height');
    console.log(height); // outputs: 768

  })

  this.Given(/^Magic$/, () => {
    browser.setViewportSize({
      width: 1280,
      height: 1024
  });
  var width = browser.getViewportSize('width')
  console.log(width); // outputs: 1024

  var height = browser.getViewportSize('height');
  console.log(height); // outputs: 768
    browser.url("http://magento-2-travis.dev/admin")
    browser.waitUntil(function () {
			return browser.isVisible(Selectors.backend.login.username);
    }, Selectors.values.timeout_short, "Checkout should be a payment option");
    
    browser.setValue(Selectors.backend.login.username, Selectors.auth.login_username);
    browser.setValue(Selectors.backend.login.password, Selectors.auth.login_password);
    Backend.adminSignIn.click();
    browser.url("http://magento-2-travis.dev/admin")
    browser.setViewportSize({
      width: 1280,
      height: 1024
  });
    browser.pause(10000);

    var width = browser.getViewportSize('width')
    console.log(width); // outputs: 1024

    var height = browser.getViewportSize('height');
    console.log(height); // outputs: 768

    console.log("1");
    browser.click("#menu-magento-backend-stores");
    browser.pause(5000);
    console.log("2");
    browser.click(".item-system-config");
    browser.pause(5000);
    console.log("3");
    browser.click("div.config-nav-block:nth-child(6) > div:nth-child(1)");
    browser.pause(5000);
    console.log("4");
    browser.click("div.config-nav-block:nth-child(6) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)");
    browser.pause(5000);
    console.log("5");
    browser.click("#admin_security-head");
    browser.pause(5000);
    console.log("6");
    browser.click("#admin_security_use_form_key_inherit");
    browser.pause(5000);
    console.log("7");
    browser.selectByValue("#admin_security_use_form_key","0");
    browser.pause(5000);
    console.log("8");
    browser.click("#save");
    console.log("9");
    

  });

  this.Then(/^I set the payment option title$/, () => {
    browser.waitUntil(function () {
      return browser.isVisible(Selectors.backend.checkout.basic.category_selector);
    }, Selectors.values.timeout_short, "basic category should be visible");
    if (!(browser.getAttribute(Selectors.backend.checkout.basic.category_selector, "class")  === "open")) {
      if (!browser.isVisibleWithinViewport(Selectors.backend.checkout.basic.category_selector)) {
        browser.click(Selectors.backend.checkout.basic.category_selector);
      } else {
          browser.scroll(1118, 45);
          browser.click(Selectors.backend.checkout.basic.category_selector);
      }
    }
    browser.setValue(Selectors.backend.checkout.basic.title, Selectors.values.title);
  });


  this.Then(/^I set the payment option order$/, function () {
    browser.waitUntil(function () {
      return browser.isVisible(Selectors.backend.checkout.basic.category_selector);
    }, Selectors.values.timeout_short, "basic category should be visible");
    if (!(browser.getAttribute(Selectors.backend.checkout.basic.category_selector, "class")  === "open")) {
      if (!browser.isVisibleWithinViewport(Selectors.backend.checkout.basic.category_selector)) {
        browser.click(Selectors.backend.checkout.basic.category_selector);
      } else {
          browser.scroll(1118, 45);
          browser.click(Selectors.backend.checkout.basic.category_selector);
      }
    }
    browser.waitUntil(function () {
      return browser.isVisible(Selectors.backend.checkout.basic.sort_order);
    }, Selectors.values.timeout_short, "basic setting should be visible");
    browser.setValue(Selectors.backend.checkout.basic.sort_order, Selectors.values.sort_order);
  });

  this.Then(/^I set the integration type to (.*)$/, function (integration) {
    browser.waitUntil(function () {
      return browser.isVisible(Selectors.backend.checkout.basic.category_selector);
    }, Selectors.values.timeout_short, "basic category should be visible");
    if (!(browser.getAttribute(Selectors.backend.checkout.basic.category_selector, "class")  === "open")) {
      if (!browser.isVisibleWithinViewport(Selectors.backend.checkout.basic.category_selector)) {
        browser.click(Selectors.backend.checkout.basic.category_selector);
      } else {
          browser.scroll(1118, 45);
          browser.click(Selectors.backend.checkout.basic.category_selector);
      }
    }
    browser.waitUntil(function () {
      return browser.isVisible(Selectors.backend.checkout.basic.integration);
    }, Selectors.values.timeout_short, "basic setting should be visible");
    browser.pause(500); // ensure load
    switch (integration) {
      case "embedded":
        browser.selectByValue(Selectors.backend.checkout.basic.integration, "embedded");
        break;
      case "hosted":
        browser.selectByValue(Selectors.backend.checkout.basic.integration, "hosted");
        break;
      default:
        browser.selectByValue(Selectors.backend.checkout.basic.integration, "embedded");
        break;
    }
  });

  this.Then(/^I set the payment mode to (.*)$/, function (mode) {
    browser.waitUntil(function () {
      return browser.isVisible(Selectors.backend.checkout.basic.category_selector);
    }, Selectors.values.timeout_short, "basic category should be visible");
    if (!(browser.getAttribute(Selectors.backend.checkout.basic.category_selector, "class")  === "open")) {
      if (!browser.isVisibleWithinViewport(Selectors.backend.checkout.basic.category_selector)) {
        browser.click(Selectors.backend.checkout.basic.category_selector);
      } else {
          browser.scroll(1118, 45);
          browser.click(Selectors.backend.checkout.basic.category_selector);
      }
    }
    browser.waitUntil(function () {
      return browser.isVisible(Selectors.backend.checkout.basic.hosted_payment_mode);
    }, Selectors.values.timeout_short, "basic setting should be visible");
    switch (mode) {
      case "cards":
        browser.selectByValue(Selectors.backend.checkout.basic.hosted_payment_mode, "cards");
        break;
      case "local payments":
        browser.selectByValue(Selectors.backend.checkout.basic.hosted_payment_mode, "localpayments");
        break;
      case "mixed":
        browser.selectByValue(Selectors.backend.checkout.basic.hosted_payment_mode, "mixed");
        break;
      default:
        browser.selectByValue(Selectors.backend.checkout.basic.hosted_payment_mode, "cards");
        break;
    }
  });

  this.Then(/^I set the theme color$/, function () {
    browser.waitUntil(function () {
      return browser.isVisible(Selectors.backend.checkout.basic.category_selector);
    }, Selectors.values.timeout_short, "basic category should be visible");
    if (!(browser.getAttribute(Selectors.backend.checkout.basic.category_selector, "class")  === "open")) {
      if (!browser.isVisibleWithinViewport(Selectors.backend.checkout.basic.category_selector)) {
        browser.click(Selectors.backend.checkout.basic.category_selector);
      } else {
          browser.scroll(1118, 45);
          browser.click(Selectors.backend.checkout.basic.category_selector);
      }
    }
    browser.waitUntil(function () {
      return browser.isVisible(Selectors.backend.checkout.basic.hosted_theme_color);
    }, Selectors.values.timeout_short, "basic setting should be visible");
    browser.setValue(Selectors.backend.checkout.basic.hosted_theme_color, Selectors.values.theme_color);
  });

  this.Then(/^I set the button label$/, function () {
    browser.waitUntil(function () {
      return browser.isVisible(Selectors.backend.checkout.basic.category_selector);
    }, Selectors.values.timeout_short, "basic category should be visible");
    if (!(browser.getAttribute(Selectors.backend.checkout.basic.category_selector, "class")  === "open")) {
      if (!browser.isVisibleWithinViewport(Selectors.backend.checkout.basic.category_selector)) {
        browser.click(Selectors.backend.checkout.basic.category_selector);
      } else {
          browser.scroll(1118, 45);
          browser.click(Selectors.backend.checkout.basic.category_selector);
      }
    }
    browser.waitUntil(function () {
      return browser.isVisible(Selectors.backend.checkout.basic.hosted_button_label);
    }, Selectors.values.timeout_short, "basic setting should be visible");
    browser.setValue(Selectors.backend.checkout.basic.hosted_button_label, Selectors.values.button_label);
  });

  this.Then(/^I save the backend settings$/, function () {
    browser.click(Selectors.backend.checkout.button_save);
  });

  this.Then(/^I enable Vault$/, function () {
    browser.waitUntil(function () {
      return browser.isVisible(Selectors.backend.checkout.advanced.category_selector);
    }, Selectors.values.timeout_short, "advanced category should be visible");
    if (browser.getAttribute(Selectors.backend.checkout.advanced.category_selector, "class") != "open") {
      browser.pause(500); // ensure load
      browser.click(Selectors.backend.checkout.advanced.category_selector);
    }
    browser.waitUntil(function () {
      return browser.isVisible(Selectors.backend.checkout.advanced.vault);
    }, Selectors.values.timeout_short, "advanced setting should be visible");
    browser.selectByValue(Selectors.backend.checkout.advanced.vault, "1");
  });

  this.Then(/^I set Vault title$/, function () {
    browser.waitUntil(function () {
      return browser.isVisible(Selectors.backend.checkout.advanced.category_selector);
    }, Selectors.values.timeout_short, "advanced category should be visible");
    if (browser.getAttribute(Selectors.backend.checkout.advanced.category_selector, "class") != "open") {
      browser.pause(500); // ensure load
      browser.click(Selectors.backend.checkout.advanced.category_selector);
    }
    browser.waitUntil(function () {
      return browser.isVisible(Selectors.backend.checkout.advanced.vaut_title);
    }, Selectors.values.timeout_short, "advanced setting should be visible");
    browser.setValue(Selectors.backend.checkout.advanced.vaut_title, Selectors.values.title);
  });

  this.Then(/^I set the save cards automatically functionality to (.*)$/, function (option) {
    browser.waitUntil(function () {
      return browser.isVisible(Selectors.backend.checkout.advanced.category_selector);
    }, Selectors.values.timeout_short, "advanced category should be visible");
    if (browser.getAttribute(Selectors.backend.checkout.advanced.category_selector, "class") != "open") {
      browser.pause(500); // ensure load
      browser.click(Selectors.backend.checkout.advanced.category_selector);
    }
    browser.waitUntil(function () {
      return browser.isVisible(Selectors.backend.checkout.advanced.save_cards_authomatically);
    }, Selectors.values.timeout_short, "advanced setting should be visible");
    switch (option) {
      case "yes":
        browser.selectByValue(Selectors.backend.checkout.advanced.save_cards_authomatically, "1");
        break;
      case "no":
        browser.selectByValue(Selectors.backend.checkout.advanced.save_cards_authomatically, "0");
        break;
      default:
        browser.selectByValue(Selectors.backend.checkout.advanced.save_cards_authomatically, "1");
        break;
    }
  });

  this.Then(/^I set the hide card storage functionality to (.*)$/, function (option) {
    browser.waitUntil(function () {
      return browser.isVisible(Selectors.backend.checkout.advanced.category_selector);
    }, Selectors.values.timeout_short, "advanced category should be visible");
    if (browser.getAttribute(Selectors.backend.checkout.advanced.category_selector, "class") != "open") {
      browser.pause(500); // ensure load
      browser.click(Selectors.backend.checkout.advanced.category_selector);
    }
    browser.waitUntil(function () {
      return browser.isVisible(Selectors.backend.checkout.advanced.hide_card_storage);
    }, Selectors.values.timeout_short, "advanced setting should be visible");
    switch (option) {
      case "yes":
        browser.selectByValue(Selectors.backend.checkout.advanced.hide_card_storage, "1");
        break;
      case "no":
        browser.selectByValue(Selectors.backend.checkout.advanced.hide_card_storage, "0");
        break;
      default:
        browser.selectByValue(Selectors.backend.checkout.advanced.hide_card_storage, "1");
        break;
    }
  });

  this.Then(/^I set the CVV verification functionality to (.*)$/, function (option) {
    browser.waitUntil(function () {
      return browser.isVisible(Selectors.backend.checkout.advanced.category_selector);
    }, Selectors.values.timeout_short, "advanced category should be visible");
    if (browser.getAttribute(Selectors.backend.checkout.advanced.category_selector, "class") != "open") {
      browser.pause(500); // ensure load
      browser.click(Selectors.backend.checkout.advanced.category_selector);
    }
    browser.waitUntil(function () {
      return browser.isVisible(Selectors.backend.checkout.advanced.cvv_vetification);
    }, Selectors.values.timeout_short, "advanced setting should be visible");
    switch (option) {
      case "yes":
        browser.selectByValue(Selectors.backend.checkout.advanced.cvv_vetification, "1");
        break;
      case "no":
        browser.selectByValue(Selectors.backend.checkout.advanced.cvv_vetification, "0");
        break;
      default:
        browser.selectByValue(Selectors.backend.checkout.advanced.cvv_vetification, "1");
        break;
    }
  });

  this.Then(/^I (.*) 3D Secure$/, function (option) {
    browser.waitUntil(function () {
      return browser.isVisible(Selectors.backend.checkout.advanced.category_selector);
    }, Selectors.values.timeout_short, "advanced category should be visible");
    if (browser.getAttribute(Selectors.backend.checkout.advanced.category_selector, "class") != "open") {
      browser.pause(500); // ensure load
      browser.click(Selectors.backend.checkout.advanced.category_selector);
    }
    browser.waitUntil(function () {
      return browser.isVisible(Selectors.backend.checkout.advanced.three_d);
    }, Selectors.values.timeout_short, "advanced setting should be visible");
    switch (option) {
      case "enable":
        browser.selectByValue(Selectors.backend.checkout.advanced.three_d, "1");
        break;
      case "disable":
        browser.selectByValue(Selectors.backend.checkout.advanced.three_d, "0");
        break;
      default:
        browser.selectByValue(Selectors.backend.checkout.advanced.three_d, "0");
        break;
    }
  });

  this.Then(/^I (.*) autocapture$/, function (option) {
    browser.waitUntil(function () {
      return browser.isVisible(Selectors.backend.checkout.advanced.category_selector);
    }, Selectors.values.timeout_short, "advanced category should be visible");
    if (browser.getAttribute(Selectors.backend.checkout.advanced.category_selector, "class") != "open") {
      browser.pause(500); // ensure load
      browser.click(Selectors.backend.checkout.advanced.category_selector);
    }
    browser.waitUntil(function () {
      return browser.isVisible(Selectors.backend.checkout.advanced.autocapture);
    }, Selectors.values.timeout_short, "advanced setting should be visible");
    switch (option) {
      case "enable":
        browser.selectByValue(Selectors.backend.checkout.advanced.autocapture, "1");
        break;
      case "disable":
        browser.selectByValue(Selectors.backend.checkout.advanced.autocapture, "0");
        break;
      default:
        browser.selectByValue(Selectors.backend.checkout.advanced.autocapture, "0");
        break;
    }
  });

  this.Then(/^I set order creation to take place (.*) authorisation$/, function (option) {
    browser.waitUntil(function () {
      return browser.isVisible(Selectors.backend.checkout.order.category_selector);
    }, Selectors.values.timeout_short, "advanced category should be visible");
    if (browser.getAttribute(Selectors.backend.checkout.order.category_selector, "class") != "open") {
      browser.pause(500); // ensure load
      browser.click(Selectors.backend.checkout.order.category_selector);
    }
    browser.waitUntil(function () {
      return browser.isVisible(Selectors.backend.checkout.order.order_creation);
    }, Selectors.values.timeout_short, "advanced setting should be visible");
    switch (option) {
      case "before":
        browser.selectByValue(Selectors.backend.checkout.order.order_creation, "before_auth");
        break;
      case "after":
        browser.selectByValue(Selectors.backend.checkout.order.order_creation, "after_auth");
        break;
      default:
        browser.selectByValue(Selectors.backend.checkout.order.order_creation, "after_auth");
        break;
    }
  });

  this.Then(/^I (.*) order comments overrride$/, function (option) {
    browser.waitUntil(function () {
      return browser.isVisible(Selectors.backend.checkout.order.category_selector);
    }, Selectors.values.timeout_short, "advanced category should be visible");
    if (browser.getAttribute(Selectors.backend.checkout.order.category_selector, "class") != "open") {
      browser.pause(500); // ensure load
      browser.click(Selectors.backend.checkout.order.category_selector);
    }
    browser.waitUntil(function () {
      return browser.isVisible(Selectors.backend.checkout.order.order_comments);
    }, Selectors.values.timeout_short, "advanced setting should be visible");
    switch (option) {
      case "enable":
        browser.selectByValue(Selectors.backend.checkout.order.order_comments, "1");
        break;
      case "disable":
        browser.selectByValue(Selectors.backend.checkout.order.order_comments, "0");
        break;
      default:
        browser.selectByValue(Selectors.backend.checkout.order.order_comments, "1");
        break;
    }
  });

  this.Then(/^I set the (.*) order status to (.*)$/, function (type, option) {
    // for 'option' this terms must be used: canceled, closed, complete, fraud, holded, payment_review,
    // paypal_canceled_reversal, paypal_reversed, pending, pending_payment, pending_paypal, processing
    browser.waitUntil(function () {
      return browser.isVisible(Selectors.backend.checkout.order.category_selector);
    }, Selectors.values.timeout_short, "advanced category should be visible");
    if (browser.getAttribute(Selectors.backend.checkout.order.category_selector, "class") != "open") {
      browser.pause(500); // ensure load
      browser.click(Selectors.backend.checkout.order.category_selector);
    }
    browser.waitUntil(function () {
      return browser.isVisible(Selectors.backend.checkout.order.new_order_status);
    }, Selectors.values.timeout_short, "advanced setting should be visible");

    switch (type) {
      case "new":
        browser.selectByValue(Selectors.backend.checkout.order.new_order_status, option);
        break;
      case "authorised":
        browser.selectByValue(Selectors.backend.checkout.order.authorised_order_status, option);
        break;
      case "captured":
        browser.selectByValue(Selectors.backend.checkout.order.captured_order_status, option);
        break;
      case "refund":
        browser.selectByValue(Selectors.backend.checkout.order.refund_order_status, option);
        break;
      case "flagged":
        browser.selectByValue(Selectors.backend.checkout.order.flagged_order_status, option);
        break;
    }
  });

  this.Then(/^I (.*) auto generated invoices$/, function (option) {
    browser.waitUntil(function () {
      return browser.isVisible(Selectors.backend.checkout.order.category_selector);
    }, Selectors.values.timeout_short, "advanced category should be visible");
    if (browser.getAttribute(Selectors.backend.checkout.order.category_selector, "class") != "open") {
      browser.pause(500); // ensure load
      browser.click(Selectors.backend.checkout.order.category_selector);
    }
    browser.waitUntil(function () {
      return browser.isVisible(Selectors.backend.checkout.order.auto_generated_invoice);
    }, Selectors.values.timeout_short, "advanced setting should be visible");
    switch (option) {
      case "enable":
        browser.selectByValue(Selectors.backend.checkout.order.auto_generated_invoice, "1");
        break;
      case "disable":
        browser.selectByValue(Selectors.backend.checkout.order.auto_generated_invoice, "0");
        break;
      default:
        browser.selectByValue(Selectors.backend.checkout.order.auto_generated_invoice, "1");
        break;
    }
  });

  this.Given(/^I go to the backend of Checkout's plugin$/, function () {
    browser.setViewportSize({
      width: 1280,
      height: 1024
  });
    browser.url("http://magento-2-travis.dev/admin/admin/system_config/edit/section/payment/")
    browser.setViewportSize({
      width: 1280,
      height: 1024
  });


  var width = browser.getViewportSize('width')
  console.log(width); // outputs: 1024

  var height = browser.getViewportSize('height');
  console.log(height); // outputs: 768


    browser.pause(5000);
    try{
      browser.isExisting("#payment_us_checkout_com_checkout_com_base_settings-head");
    }catch(er){
      console.log(er);
    }
		
	});


};