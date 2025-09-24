define([
    'jquery',
    'Magento_Ui/js/modal/modal'
], function($,modal) {
    "use strict";
    return function (widget) {
        $.widget('mage.catalogAddToCart', widget, {
            /**
             * Handler for the form 'submit' event
             *
             * @param {Object} form
             */
            submitForm: function (form) {
                this.showCart();
                this.ajaxSubmit(form);
            },
            /**
             * Open minicart when Add To Cart has been clicked
             */
            showCart: function() {
                var $el = $('.minicart-wrapper');
                var modalInstance = modal({
                    title: "Item added to cart",
                    subTitle: "actions: ",
                    type: 'popup',
                    modalClass: 'cart-action-modal',
                    responsive: true,
                    clickableOverlay: true,
                    closeText: $.mage.__('Continue Shopping'),
                    buttons: [
                        {
                            text: $.mage.__('Go to Checkout'),
                            class: 'action primary',
                            click: function (event) {
                                window.location.href = "/checkout";
                            }
                        },
                        {
                            text: $.mage.__('Continue Shopping'),
                            class: 'action ',
                            click: function (event) {
                                this.closeModal(event);
                            }
                        }
                    ]
                }, $el);
                $el.modal('openModal');
            }
        });
        return $.mage.catalogAddToCart;
    }
});