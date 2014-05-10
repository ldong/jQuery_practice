/**
 *
 * Created by ldong on 5/8/14.
 */

(function () {
    var box = $('div.box');
    $.fn.fadeSlideToggle = function (speed, fn) {
        return $(this).animate({
            'height': 'toggle',
            'opacity': 'toggle'
        }, speed || 400, function () {
            $.isFunction(fn) && fn.call(this);
        });
    }

    $('button').on('click', function () {
        $('div.box').fadeSlideToggle(500, function () {
            console.log('Cool');
        });
    });
})();
