// utility
if(typeof Object.create !== 'function'){
    Object.create = function(obj){
        function F();
        F.prototype = obj;
        return new F();
    }
}
// plugin pattern
(function($, window, document, undefined){
    var Twitter = {
        init: function(){
            this.prop ='value';
        }
    };
    
    $.fn.queryTwitter = function(){
        return this.each(function(){
            var twitter = Object.create(Twitter);
            twitter.init();
            
        });
    };
    
    $.fn.queryTwitter.options = {
        
    };
    
})(jQuery, window, document);