'use strict';


module.exports = {

    johnny: {
        auth: {
            login_username: "admin",
            login_password: "ih3artmagento",
            new_customer: {
                customer_email: "checkout@email.com",
                customer_firstname: "John",
                customer_lastname: "Snow",
                customer_street: "Winterfell 42",
                customer_country: "GB",
                customer_city: "London",
                customer_postcode: "w1w 8sy",
                customer_phone: "07121231234",
            },
            registered_customer: {
                email: "checkouttest@checkout.com",
                password: "1Nicioseansa",
            },
            three_d_password: "Checkout1!",
        },
        url: {
            magento_base: "http://magento-2-travis.dev",
            payments_path: "/admin/admin/system_config/edit/section/payment/",
            product_path: "/fusion-backpack.html",
            sign_in: "/customer/account/login/",
            orders_path: "/admin/sales/order/",
            invoices_path: "/admin/sales/invoice/"
        },
        backend:{
            login: {
                username: "#username",
                password:"#login",
            },
            admin_sign_in: ".action-login",
            checkout: {
                selector: "#payment_us_checkout_com-head",
                button_save: "#save",
                basic: {
                    category_selector: "#payment_us_checkout_com_checkout_com_base_settings-head",
                    environment: "#payment_us_checkout_com_checkout_com_base_settings_environment",
                    title: "#payment_us_checkout_com_checkout_com_base_settings_title",
                    sort_order: "#payment_us_checkout_com_checkout_com_base_settings_sort_order",
                    new_order_status: "#payment_us_checkout_com_checkout_com_base_settings_new_order_status",
                    auto_invoices: "#payment_us_checkout_com_checkout_com_base_settings_auto_generate_invoice",
                    integration: "#payment_us_checkout_com_checkout_com_base_settings_integration",
                    theme: "#payment_us_checkout_com_checkout_com_base_settings_embedded_theme",
                    css_file: "#payment_us_checkout_com_checkout_com_base_settings_css_file",
                    hosted_theme_color: "#payment_us_checkout_com_checkout_com_base_settings_theme_color",
                    hosted_payment_mode: "#payment_us_checkout_com_checkout_com_base_settings_payment_mode",
                    hosted_button_label: "#payment_us_checkout_com_checkout_com_base_settings_button_label",
                    hosted_header: "#modal-wrapper > div.cko-md-content > div > div.header",
                    hosted_pay_button: "#modal-wrapper > div.cko-md-content > div > div.container-body > div.content.card > form > input",
                    hosted_alt_payments: "#modal-wrapper > div.cko-md-content > div > div.container-body > div.content-control.tabs.split-view > div.tab.lp.fragment-2.enter",
                },
                advanced: {
                    category_selector: "#payment_us_checkout_com_checkout_com_advanced_settings-head",
                    cvv_vetification: "#payment_us_checkout_com_checkout_com_advanced_settings_useccv",
                    vault:"#payment_us_checkout_com_checkout_com_advanced_settings_checkout_com_cc_vault_active",
                    save_cards_authomatically: "#payment_us_checkout_com_checkout_com_advanced_settings_checkout_com_cc_vault_autosave",
                    hide_card_storage: "#payment_us_checkout_com_checkout_com_advanced_settings_checkout_com_cc_vault_hide_storage",
                    vaut_title: "#payment_us_checkout_com_checkout_com_advanced_settings_checkout_com_cc_vault_title",
                    three_d:"#payment_us_checkout_com_checkout_com_advanced_settings_verify_3dsecure",
                    autocapture: "#payment_us_checkout_com_checkout_com_advanced_settings_auto_capture",
                    autocap_time: "#payment_us_checkout_com_checkout_com_advanced_settings_auto_capture_time"
                },
                order: {
                    category_selector: "#payment_us_checkout_com_checkout_com_order_settings-head",
                    order_creation: "#payment_us_checkout_com_checkout_com_order_settings_order_creation",
                    order_comments: "#payment_us_checkout_com_checkout_com_order_settings_order_comments_override",
                    new_order_status: "#payment_us_checkout_com_checkout_com_order_settings_new_order_status",
                    authorised_order_status: "#payment_us_checkout_com_checkout_com_order_settings_order_status_authorized",
                    captured_order_status: "#payment_us_checkout_com_checkout_com_order_settings_order_status_captured",
                    refund_order_status: "#payment_us_checkout_com_checkout_com_order_settings_order_status_refunded",
                    flagged_order_status: "#payment_us_checkout_com_checkout_com_order_settings_order_status_flagged",
                    auto_generated_invoice: "#payment_us_checkout_com_checkout_com_order_settings_auto_generate_invoice"
                },
                last_order: "tr.data-row:nth-child(1) > td:nth-child(2) > div:nth-child(1)",
                order_comments: "#sales_order_view_tabs_order_history",
                catured_comment_1: "#Order_History > section:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1)",
                catured_comment_2: "#Order_History > section:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1)"
            }
        },
        frontend: {
            order: {
                loader: ".loading-mask",
                add_product:"#product-addtocart-button",
                product_counter: "span.counter:nth-child(2)",
                cart: ".showcart",
                go_to_checkout: "#top-cart-btn-checkout",
                go_to_payment: ".button",
                checkout_page_loader: "#checkout-loader",
                customer_email: "#customer-email",
                customer_firstname: "#shipping-new-address-form > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)",
                customer_lastname: "div._required:nth-child(2) > div:nth-child(2) > input:nth-child(1)",
                customer_street: "fieldset.field > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)",
                customer_country: "div.field:nth-child(9) > div:nth-child(2) > select:nth-child(1)",
                customer_uk_selector: "div.field:nth-child(9) > div:nth-child(2) > select:nth-child(1) > option:nth-child(234)",
                customer_city: "div.field:nth-child(5) > div:nth-child(2) > input:nth-child(1)",
                customer_postcode: "div.field:nth-child(8) > div:nth-child(2) > input:nth-child(1)",
                customer_phone: "div.field:nth-child(10) > div:nth-child(2) > input:nth-child(1)",
                shipping_method: "#s_method_flatrate",   
                terms: "#agreement_1",             
                terms_hosted: "div.checkout-agreements-block:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)",
                checkout_payment_option: "#checkout_com",
                checkout_embedded_form: "#embeddedForm",
                checkout_iframe_selector: "#cko-iframe-id",
                embedded_fields: {
                    card_number: 'input[data-checkout="card-number"]',
                    mounth: 'input[data-checkout="expiry-month"]',
                    year: 'input[data-checkout="expiry-year"]',
                    cvv: 'input[data-checkout="cvv"]'
                },
                last_order_number: "tr.data-row:nth-child(1) > td:nth-child(4) > div:nth-child(1)",
                place_order_button: "#placeOrder",
                checkout_success_message: ".checkout-success",
                order_number: ".checkout-success > p:nth-child(1) > span:nth-child(1)",
                three_d_password: "#txtPassword",
                three_d_submit: "#txtButton",
                hosted_place_order: "#checkout-payment-method-load > div > div > div.payment-method._active > div.payment-method-content > div.actions-toolbar > div > button",
                shipping_option: "#s_method_freeshipping_freeshipping"
            },
            hosted: {
                card_number: 'div.input-group:nth-child(2) > input:nth-child(2)',
                mounth: 'div.split-view:nth-child(2) > div:nth-child(1) > input:nth-child(1)',
                year: 'div.split-view:nth-child(2) > div:nth-child(2) > input:nth-child(1)',
                cvv: 'div.split-view:nth-child(3) > div:nth-child(2) > div:nth-child(1) > input:nth-child(2)',
                title: '',
                pay_button: '.form-submit',
                hosted_header: "#modal-wrapper > div.cko-md-content > div > div.header",
                hosted_pay_button: "#modal-wrapper > div.cko-md-content > div > div.container-body > div.content.card > form > input",
                hosted_alt_payments: "#modal-wrapper > div.cko-md-content > div > div.container-body > div.content-control.tabs.split-view > div.tab.lp.fragment-2.enter",
            },
            sign_in_email: "div.email:nth-child(2) > div:nth-child(2) > input:nth-child(1)",
            sign_in_password: "div.field:nth-child(3) > div:nth-child(2) > input:nth-child(1)",
            sign_in_button: "button.login",
            logged_in_name: "ul.header:nth-child(3) > li:nth-child(2) > span:nth-child(1) > button:nth-child(2)",
            sign_out: "li.active > div:nth-child(2) > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1)",
            checkout_option_title: "div.payment-method:nth-child(2) > div:nth-child(1) > label:nth-child(2) > span:nth-child(1)",
        },
        values: {
            timeout_short: 15000,
            title: "Test",
            sort_order: 0,
            new_order_status: 'complete',
            theme_color: "#eaeaea",
            button_label: "johnny",
            card: {
                visa: {
                    card_number: '4242424242424242',
                    mounth: '06',
                    year: '18',
                    cvv: '100'
                },
                mastercard: {
                    card_number: '5436031030606378',
                    mounth: '06',
                    year: '25',
                    cvv: '257'
                },
                amex: {
                    card_number: '345678901234564',
                    mounth: '06',
                    year: '25',
                    cvv: '1051'
                },
                diners: {
                    card_number: '30123456789019',
                    mounth: '06',
                    year: '25',
                    cvv: '257'
                },
                jcb: {
                    card_number: '3530111333300000',
                    mounth: '06',
                    year: '18',
                    cvv: '100'
                },
                discover: {
                    card_number: '6011111111111117',
                    mounth: '06',
                    year: '18',
                    cvv: '100'
                },
    
            }
        }
    },

    login:{
        username: "jarvis",
        password: "1Nicioseansa",
        customer_email: "jarvis@email.com",
        customer_password: "1Nicioseansa",
        three_d_password: "Checkout1!",
        johnny_email: "ioan.ghisoi@checkout.com",
        johnny_password: "5Nicioseansa!",
        sandbox_account: "integrationIoan",
        sandbox_business: "integrationIoan",
        sandbox_channel: "MAGENTO 2.1",
    },
    url: {
        magento_base:"http://127.0.0.1/cko-magento2.1",
        magento_admin:"http://127.0.0.1/cko-magento2.1/admin",
        magento_product:"http://127.0.0.1/cko-magento2.1/fusion-backpack.html",
        sign_in: "http://127.0.0.1/cko-magento2.1/customer/account/login/",
        invoices: "http://127.0.0.1/cko-magento2.1/admin/sales/invoice/",
        sandbox: "https://sandbox.checkout.com/login",
        orders: "http://127.0.0.1/cko-magento2.1/admin/sales/order/"
    },
    elements:{
        backend:{
            text_username:"#username",
            text_pasword:"#login",
            button_sign_in: "Sign in",
            stores: "#menu-magento-backend-stores > a:nth-child(1)",
            configuration: ".item-system-config",
            sales: "div.config-nav-block:nth-child(4) > div:nth-child(1)",
            payment_methods: "li.admin__page-nav-item:nth-child(10) > a:nth-child(1)",
            checkout: {
                button_save: "#save",
                basic: {
                    category_selector: "#payment_us_checkout_com_checkout_com_base_settings-head",
                    environment: "#payment_us_checkout_com_checkout_com_base_settings_environment",
                    title: "#payment_us_checkout_com_checkout_com_base_settings_title",
                    sort_order: "#payment_us_checkout_com_checkout_com_base_settings_sort_order",
                    new_order_status: "#payment_us_checkout_com_checkout_com_base_settings_new_order_status",
                    auto_invoices: "#payment_us_checkout_com_checkout_com_base_settings_auto_generate_invoice",
                    integration: "#payment_us_checkout_com_checkout_com_base_settings_integration",
                    theme: "#payment_us_checkout_com_checkout_com_base_settings_embedded_theme",
                    css_file: "#payment_us_checkout_com_checkout_com_base_settings_css_file",
                },
                advanced: {
                    category_selector: "#payment_us_checkout_com_checkout_com_advanced_settings-head",
                    cvv_vetification: "#payment_us_checkout_com_checkout_com_advanced_settings_useccv",
                    vault:"#payment_us_checkout_com_checkout_com_advanced_settings_checkout_com_cc_vault_active",
                    vaut_title: "#payment_us_checkout_com_checkout_com_advanced_settings_checkout_com_cc_vault_title",
                    three_d:"#payment_us_checkout_com_checkout_com_advanced_settings_verify_3dsecure",
                    autocapture: "#payment_us_checkout_com_checkout_com_advanced_settings_auto_capture",
                    autocap_time: "#payment_us_checkout_com_checkout_com_advanced_settings_auto_capture_time"
                }
            }
        },
        frontend: {
            product: "li.product-item:nth-child(1) > div:nth-child(1) > a:nth-child(1) > span:nth-child(1) > span:nth-child(1)",
            add_product: "#product-addtocart-button",
            cart: ".showcart",
            go_to_checkout: "#top-cart-btn-checkout",
            email: "#customer-email",
            firstname: "#shipping-new-address-form > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)",
            lastname: "div._required:nth-child(2) > div:nth-child(2) > input:nth-child(1)",
            street: "fieldset.field > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)",
            country: "div.field:nth-child(9) > div:nth-child(2) > select:nth-child(1)",
            uk_selector: "div.field:nth-child(9) > div:nth-child(2) > select:nth-child(1) > option:nth-child(234)",
            city: "div.field:nth-child(5) > div:nth-child(2) > input:nth-child(1)",
            postcode: "div.field:nth-child(8) > div:nth-child(2) > input:nth-child(1)",
            phone: "div.field:nth-child(10) > div:nth-child(2) > input:nth-child(1)",
            next_1: ".button",
            checkout_option_title: "div.payment-method:nth-child(2) > div:nth-child(1) > label:nth-child(2) > span:nth-child(1)",
            checkout_page_loader: "#checkout-loader",
            shipping_loader: "#opc-shipping_method",
            cart_counter: ".counter-number",
            product_gallery: '.gallery-placeholder',
            checkout_payment_option: "#checkout_com",
            checkout_embedded_form: "#embeddedForm",
            checkout_iframe_selector: "#cko-iframe-id",
            card: {
                card_number: 'input[data-checkout="card-number"]',
                mounth: 'input[data-checkout="expiry-month"]',
                year: 'input[data-checkout="expiry-year"]',
                cvv: 'input[data-checkout="cvv"]'
            },
            place_order_button: "#placeOrder",
            place_order_loader: ".loading-mask",
            checkout_success_message: ".checkout-success",
            order_number: ".checkout-success > p:nth-child(1) > span:nth-child(1)",
            magento_sales: "#menu-magento-sales-sales",
            invoices_table: ".item-sales-invoice",
            sign_in: "ul.header:nth-child(2) > li:nth-child(2) > a:nth-child(1)",
            sign_in_email: "div.email:nth-child(2) > div:nth-child(2) > input:nth-child(1)",
            sign_in_password: "div.field:nth-child(3) > div:nth-child(2) > input:nth-child(1)",
            sign_in_button: "button.login",
            save_card: "div.payment-group:nth-child(1) > div:nth-child(2)",
            select_save_card: "#checkout_com_cc_vault_3",
            saved_card_place_order: "div._active > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > button:nth-child(1)",
            three_d_password: "#txtPassword",
            three_d_submit: "#txtButton",
            hosted_place_order: "#checkout-payment-method-load > div > div > div.payment-method._active > div.payment-method-content > div.actions-toolbar > div > button",
            hosted: {
                card_number: 'div.input-group:nth-child(2) > input:nth-child(2)',
                mounth: 'div.split-view:nth-child(2) > div:nth-child(1) > input:nth-child(1)',
                year: 'div.split-view:nth-child(2) > div:nth-child(2) > input:nth-child(1)',
                cvv: 'div.split-view:nth-child(3) > div:nth-child(2) > div:nth-child(1) > input:nth-child(2)',
                title: '',
                pay_button: '.form-submit'
            },
            hosted_theme_color: "#payment_us_checkout_com_checkout_com_base_settings_theme_color",
            hosted_payment_mode: "#payment_us_checkout_com_checkout_com_base_settings_payment_mode",
            hosted_button_label: "#payment_us_checkout_com_checkout_com_base_settings_button_label",
            hosted_header: "#modal-wrapper > div.cko-md-content > div > div.header",
            hosted_pay_button: "#modal-wrapper > div.cko-md-content > div > div.container-body > div.content.card > form > input",
            hosted_alt_payments: "#modal-wrapper > div.cko-md-content > div > div.container-body > div.content-control.tabs.split-view > div.tab.lp.fragment-2.enter",
            hub: {
                email: ".email-input",
                password: ".password-input",
                sign_in: ".cko-btn",
                logo: ".logo-checkout",
                search: "body > div.app-wrapper > header > div.header-search-bar.ng-scope > div > input",
                account_name: "li.ng-scope:nth-child(1) > div:nth-child(1) > a:nth-child(2)",
                business_name: "div.header-search-bar-property > a:nth-child(2)",
                magento: "li.header-search-bar-element:nth-child(12) > a:nth-child(1)",
                transactions: "a.sidebar-element:nth-child(2)",
                populated: "tr.animate-repeat:nth-child(1) > td:nth-child(3)",
                first_transaction: "tr.animate-repeat:nth-child(1) > td:nth-child(4) > a:nth-child(1)",
                capture_payment_button: ".modal-footer > button:nth-child(2)",
                capture_confirm: "button.blue:nth-child(3)",
                date: ".date-label",
                refresh: ".cko-btn",
                last_order_status: "tr.animate-repeat:nth-child(1) > td:nth-child(5)"
            },
            last_order: "tr.data-row:nth-child(1) > td:nth-child(2)",
            create_invoice_button:"#order_invoice",
            submit_invoice: ".save"
            
        }
    },
    text:{
        title: "Test",
        order: {
            email: "jarvis@email.com",
            first_name: "test",
            last_name: "user",
            postcode: "w1w 8sy",
            address_line_1: "90 High Way to Haven",
            country: "United Kingdom",
            city: "Lodon",
            phone: "0712345678999"
        },
        class:{
            blocked_content: "_block-content-loading",
        },
        card: {
            visa: {
                card_number: '4242424242424242',
                mounth: '06',
                year: '18',
                cvv: '100'
            },
            mastercard: {
                card_number: '5436031030606378',
                mounth: '06',
                year: '25',
                cvv: '257'
            },
            amex: {
                card_number: '345678901234564',
                mounth: '06',
                year: '25',
                cvv: '1051'
            },
            diners: {
                card_number: '30123456789019',
                mounth: '06',
                year: '25',
                cvv: '257'
            },
            jcb: {
                card_number: '3530111333300000',
                mounth: '06',
                year: '18',
                cvv: '100'
            },
            discover: {
                card_number: '6011111111111117',
                mounth: '06',
                year: '18',
                cvv: '100'
            },

        },
        hosted_customisation: {
            color: "#eaeaea",
            button: "Jarvis"
        }
    }

}