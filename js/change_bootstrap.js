/**
 * Created by ldong on 5/7/14.
 */

(function(){
     var link = $('link').first();
     $('button').on('click', function(){
         $this = $(this);
         console.log($this);
         $this
             .siblings('button')
             .removeAttr('disabled')
             .end()
             .attr('disabled', 'disabled');

         var changed_css = $this.data('css');
         console.log(changed_css);
         link.attr('href', changed_css);



//         this_button = $(this).text("text changed");
//         event.preventDefault();
//         $(this_button).hide( "slow" );
     });
})();