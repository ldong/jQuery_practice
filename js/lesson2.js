/**
 *
 * Created by ldong on 5/8/14.
 */

(function(){
    var dd= $('dd');
    dd.filter(':nth-child(n+4)').hide();
    $('dl').on('mouseenter', 'dt', function(){
        var $this = $(this);
        console.log($this);
        console.log($this.next());
        $this
            .next()
                .show()
                .siblings('dd')
                    .slideUp(500);

    });
})();
