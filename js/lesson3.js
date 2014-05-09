/**
 * Created by ldong on 5/9/14.
 */

(function(){
    var $this = 0;
    $('h2').bind('click', function(){
        console.log('clicked');
        $(this).clone(true).appendTo('body');
    });
})();