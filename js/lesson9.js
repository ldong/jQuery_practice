/**
 *
 * Created by ldong on 5/8/14.
 */

(function(){
    var box = $('div.box');
        w = $(window).width()/2 - box.outerWidth()/2,
        h = $(window).height()/2 - box.outerHeight()/2;

    $('button').on('click', function () {
        box.addClass('rounded')
    });

})();
