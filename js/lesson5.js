/**
 *
 * Created by ldong on 5/8/14.
 */

(function () {
    $('html').addClass('js');

    var contactForm = {
        container: $('#contact'),

        config: {
            effect: 'slideToggle',
            speed: 500
        },

        init: function (config) {  // same as constructor
            $.extend(this.config, config);

            $('<button></button>', {
                text: 'Contact Me'
            })
                .insertAfter('article:first')
                .on('click', this.show);
        },

        show: function () {
            contactForm.close.call(contactForm.container);
            contactForm.container[contactForm.config.effect](contactForm.config.speed);
        },

        close: function () {
            var $this = $(this);
            $('<span></span>', {
                class: 'close',
                text: 'X'
            })
                .prependTo(this)
                .on('click', function () {
                    $this[contactForm.config.effect](contactForm.config.speed);
                });
        }


    };

    contactForm.init({
//        effect: 'fadeToggle',
        speed: 300
    });
})();
