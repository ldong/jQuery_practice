/**
 *
 * Created by ldong on 5/8/14.
 */

(function () {
    $('html').addClass('js');

    var contactForm = {
        container: $('#contact'),

        init: function () {  // same as constructor
            $('<button></button>', {
                text: 'Contact Me'
            })
                .insertAfter('article:first')
                .on('click', this.show);
        },

        show: function () {
            contactForm.close.call(contactForm.container);
            contactForm.container.show();
        },

        close: function () {
            var $this = $(this);
            $('<span></span>', {
                class: 'close',
                text: 'X'
            })
                .prependTo(this)
                .on('click', function () {
                    $this.hide();
                });
        }


    };

    contactForm.init();
})();
