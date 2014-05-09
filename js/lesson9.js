/**
 *
 * Created by ldong on 5/8/14.
 */

(function(){
    var box = $('div.box');
        w = $(window).width()/2 - box.outerWidth()/2,
        h = $(window).height()/2 - box.outerHeight()/2;

    $('button').on('click', function () {
       box.animate({
           'border-radius': 50,
           'left': w,
           'position': 'absolute'},
           {duration: 2000})
           .animate({
            'top': h
           }, {duration: 2000, queue: false});
    });

})();
