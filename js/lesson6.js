/**
 *
 * Created by ldong on 5/8/14.
 */

(function(){
    var obj = {
      doIt: function(){
          console.log(this);
//          e.preventDefault();
      }
    };
//    function doSomething(e) {
//        e.preventDefault();
//        console.log(this);
//    };

//    $('a').on('click', $.proxy(obj.doIt, obj));
//    $('a').on('click', obj.doIt);
    $('a').on('click', function(e){
        obj.doIt();
        e.preventDefault();
    });

//    $('a').on('click', function(e){
//        obj.doIt();
//        obj.doIt.call(this);
//        e.preventDefault();
//    });
})();
