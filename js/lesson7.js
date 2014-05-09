/**
 *
 * Created by ldong on 5/8/14.
 */

(function(){
    $('div.content').hide();

    $('div.container>h2').on('click', function() {
        $(this).next().fadeIn('slow');
    });

})();
