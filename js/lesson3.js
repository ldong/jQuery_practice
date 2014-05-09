/**
 * Created by ldong on 5/9/14.
 */

(function(){
    var $this = 0;
    // live is Deprecated in jQuery2
    $('h2').live('click', function(){
        console.log('clicked');
        $(this).clone().appendTo('body');
    });
})();