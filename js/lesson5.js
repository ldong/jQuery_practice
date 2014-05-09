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
            var cf = contactForm,
                container= cf.container,
                config = cf.config;
            if(container.is(':hidden')) {
                contactForm.close.call(container);
                container[config.effect](config.speed);
            }
        },

        close: function () {
            var $this = $(this);
            // prevent adding more span close
            if($this.find('span.close').length){ return;}
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
