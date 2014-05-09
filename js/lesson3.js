/**
 * Created by ldong on 5/9/14.
 */

(function(){
    var $this = 0;
    $('div.container').delegate('h2', 'click', function(){
        console.log('clicked');
        $(this).clone().appendTo('.container');
    });
})();