
  twitterFetcher.fetch('345170787868762112', 'example1', 1,true,    true, false);



(function($) {
    var $container = $('#container');
    $container.imagesLoaded( function() {
        $container.isotope();
    });      
})(jQuery); 


(function($) {
    var $container = $('#container');
    $container.isotope({
        itemSelector: '.photo'
    });
    var $optionSets = $('#options .option-set'),
        $optionLinks = $optionSets.find('a');
    $optionLinks.click(function() {
        var $this = $(this);
        // don't proceed if already selected
        if ($this.hasClass('selected')) {
            return false;
        }
        var $optionSet = $this.parents('.option-set');
        $optionSet.find('.selected').removeClass('selected');
        $this.addClass('selected');
        // make option object dynamically, i.e. { filter: '.my-filter-class' }
        var options = {},
            key = $optionSet.attr('data-option-key'),
            value = $this.attr('data-option-value');
        // parse 'false' as false boolean
        value = value === 'false' ? false : value;
        options[key] = value;
        if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
            // changes in layout modes need extra logic
            changeLayoutMode($this, options)
        } else {
            // otherwise, apply new options
            $container.isotope(options);
        }
        return false;
    });
})(jQuery); 


(function($) {
$('#parallax2').parallax("50%", 0.1, true);         $('#parallax3').parallax("50%", 0.1, true);
$('#parallax4').parallax("50%", 0.1, true);
})(jQuery);

(function($) {
    var menu = $('.navbar');
    $(window).scroll(function() {
        var y = $(this).scrollTop();
        var z = $('.topwrap').offset().top;
        if (y >= z) {
            menu.removeClass('firstnav').addClass('secondnav');
        } else {
            menu.removeClass('secondnav').addClass('firstnav');
        }
    });
    
    
    $('.nav a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = this.hash,
            $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 1600, 'swing', function() {
            window.location.hash = target;
        });
    });


    $('a.toplink[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = this.hash,
            $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 1600, 'swing', function() {
            window.location.hash = target;
        });
    });
})(jQuery); 


(function($) {
  $('.navbar').scrollspy(); 
})(jQuery); 

(function($) {
    $(".iframe").colorbox({
        iframe: true,
        slideshow: false,
        width: "100%",   maxWidth: "100%",   minWidth: "100%",
        height: "100%"
    });
})(jQuery); 

 
(function ($){
$(function (){
 $smallscreen();

$(window).resize(function () {
            $smallscreen()
        });

    });

    $smallscreen = function ()
    {
        if ( $(window).width() <= 767 ) {
            $('.colorbox').colorbox.remove();
            $(".collapse").collapse({
              toggle: false
            })

        } else {
            $('.colorbox').colorbox({rel:'colorbox'});
            $(".collapse").collapse({
              toggle: true
            })

        }            
    }

})(jQuery);


(function ($){
    $(document).bind('cbox_open', function() {
        $('html').css({
            overflow: 'hidden'
        });
    }).bind('cbox_closed', function() {
        $('html').css({
            overflow: ''
        });
    });
})(jQuery);

(function($) {
    $('#bxslider').bxSlider();
})(jQuery);

(function($) {
    $('#bxslider1').bxSlider();
})(jQuery);

(function($) {
    $('#bxslider2').bxSlider();
})(jQuery);

(function($) {
    $('#accordion .panel-body').hide();
    $('#accordion h4:first').addClass('active').next().slideDown('fast');
    $('#accordion h4').click(function() {
        if($(this).next().is(':hidden')) {
            $('#accordion h4').removeClass('active').next().slideUp('fast');
            $(this).toggleClass('active').next().slideDown('fast');
        }
    });
})(jQuery);


function scrollToTop() {
    $('html, body').animate({
        scrollTop: 0
    }, 'slow');
}