$(document).ready(function(){       
    var scroll_pos = 0;
    $(document).scroll(function() { 
    scroll_pos = $(this).scrollTop();
        if(scroll_pos > 50) {
            $("#navbar").css('background-color', 'rgba(255,255,255,0.9)');
            $("#name").css('color', 'rgba(0, 0, 0, 1.0)');
            $("#menulist").css('color', 'rgba(0, 0, 0, 1.0)');
            $(".menu-item:link").css('color', 'rgba(0, 0, 0, 1.0)');
            $(".menu-item:visited").css('color', 'rgba(0, 0, 0, 1.0)');
        } else {
            $("#navbar").css('background-color', 'rgba(250, 250, 250, 0.0)');
            $("#name").css('color', 'rgba(255, 255, 255, 1.0)');
            $("#menulist").css('color', 'rgba(245, 245, 245, 0.9)');
            $(".menu-item:link").css('color', 'rgba(245, 245, 245, 0.9)')
        }
    });

    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash,
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-90
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });

    $("#name").on("click", function (e){
        e.preventDefault();
        $('html, body').stop().animate({
            'scrollTop': 0
        }, 900, 'swing', function () {
            window.location.hash = 0;
        });
    });

     (function($){
    $.fn.parallax = function(options){
        var $$ = $(this);
        offset = $$.offset();
        var defaults = {
            "start": 0,
            "stop": offset.top + $$.height(),
            "coeff": 0.95
        };
        var opts = $.extend(defaults, options);
        return this.each(function(){
            $(window).bind('scroll', function() {
                windowTop = $(window).scrollTop();
                if((windowTop >= opts.start) && (windowTop <= opts.stop)) {
                    newCoord = windowTop * opts.coeff;
                    $$.css({
                        "background-position": "0 "+ newCoord + "px"
                    });
                }
            });
        });
    };
})(jQuery);

$('#banner').parallax({ "coeff": 0.6 });

});