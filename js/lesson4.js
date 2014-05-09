/**
 * Created by ldong on 5/9/14.
 */

(function(){
//    $('article').append('append!');
//    $('article').prepend('prepend!');
//    $('article').before('before!');
//    $('article').after('after!');
//    $('<h2></h2>', {
//        text: 'appendTo article',
//        class: 'myClass'
//    }).appendTo('article');
//
//    $('<h2></h2>', {
//        text: 'prependTo article',
//        class: 'myClass'
//    }).prependTo('article');
//
//    $('<h2></h2>', {
//        text: 'insertAfter article',
//        class: 'myClass'
//    }).insertAfter('article'); // create element then insert after
//
//    $('h2').after('after h2'); // again
//
//    $('<h2></h2>', {
//        text: 'insertBefore article',
//        class: 'myClass'
//    }).insertBefore('article'); // create element then insert before

    // using appendTo from existing elem to another, will simply move this elem
//    $('p').eq(0).after($('h2'));
//    $('p').first().after($('h2'));

    // swap two elements
    $('p').eq(0).after(function(){
        return $(this).prev();
    });


})();