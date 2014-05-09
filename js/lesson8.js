/**
 *
 * Created by ldong on 5/8/14.
 */

(function(){
    var content = $('div.content').hide();

    $.fn.flash = function(speed, easing, callback){
        var $this = $(this);
        $this.slideDown(500, function(){
            console.log('hi there');
            return $this.delay(2000).slideUp(200);
        });
    };

    $('h2').on('click', function(){
       content.flash();
    });
})();
