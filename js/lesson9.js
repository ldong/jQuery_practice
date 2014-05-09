/**
 *
 * Created by ldong on 5/8/14.
 */

(function(){
    var box = $('div.box');
        fontSize = parseInt(box.css('font-size'), 10);
    console.log(fontSize);
    $('button').on('click', function(){
//        box.css('font-size', fontSize+=5);
//        box.css('font-size', '+=5');

//        box.animate({
//            'font-size': '+=5',  // default is px pixel
//            'color': 'blue',
//            'width': '+500'
//        }, 500, 'swing', function(){
//            console.log('Complete')
//        });

        box.
            animate({
            'font-size': '+=5'  // default is px pixel
            }, { duration: 500 }).
            animate({
                'top': 500
            }, {duration: 3000, queue: false}); //false: animate simultaneously

    });
})();
