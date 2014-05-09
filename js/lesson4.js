/**
 * Created by ldong on 5/9/14.
 */

(function(){
    var co = $('article').find('span.co').each(function(){
//        $(this).closest('p').prepend('Hi dude');
        var $this = $(this);

        $('<blockquote></blockquote>', {
            class: 'co',
//            text: $this.text()
            text: 'Hello JS'
        }).prependTo($this.closest('p'));
    });


})();