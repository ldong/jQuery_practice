/**
 *
 * Created by ldong on 5/8/14.
 */

$(window).load(function () {

    var sliderUL = $('div.slider').css('overflow', 'hidden').children('ul'),
        imgs = sliderUL.find('img'),
        imgWidth = imgs[0].width,
//        imgWidth = imgs.first().css('width'); // return 600px
//        imgWidth = imgs.width();              // return 600
        imgLen = imgs.length,
        current = 1,
        totalImgsWidth = imgWidth * imgLen;

        console.log(imgs[0]);
        console.log('pic w: '+imgs[0].width);
        console.log(imgLen);
        console.log('totalImgsWidth: '+totalImgsWidth);

    $('#slider-nav').show().find('button').on('click', function () {
        var direction = $(this).data('direction'),
            loc = imgWidth;

        (direction === 'next') ? ++current : --current;

        if ( current === 0) {
            current = imgLen;   // go to the last slide
            direction = 'next';
            loc = totalImgsWidth - imgWidth;
        } else if (current - 1 === imgLen){
            current = 1;
            loc = 0;
        }
        console.log('dir: '+direction);
        console.log('loc: '+loc);
        transition(sliderUL, loc, direction);
    });

    function transition( container, loc, direction ){
        var unit;  // -= +=
        if ( direction && loc !== 0){
            unit = (direction ==='next') ? '-=' : '+=';
        } else {
            console.log('unit is not defined');
        }
        container.animate({
            'margin-left': unit ? (unit+ loc) : loc
        });
    }
}); // $ may refer different library, in this proj, $ is for jQuery
