// utility
if(typeof Object.create !== 'function'){
    Object.create = function(obj){
        function F(){};
        F.prototype = obj;
        return new F();
    };
    
}
// plugin pattern
(function($, window, document, undefined){
    var Twitter = {
        init: function(options, elem){
            var self = this;
            this.prop ='value';
            self.elem = elem;
            self.$elem = $(elem);
            self.url = 'http://search.twitter.com/search.json';
            if (typeof options === 'string'){
                self.search = options;
            } else {
                self.search = options.search; 
                self.options = $.extend({}, $.fn.queryTwitter.options, options);
            }
        }
    };
    
    $.fn.queryTwitter = function(){
        return this.each(function(){

            var twitter = Object.create(Twitter);
            twitter.init();
            
        });
    };
    
    $.fn.queryTwitter.options = {
        search: '@tutspremium'
    };
    
})(jQuery, window, document);