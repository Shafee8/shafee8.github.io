// Show and Hide menu

$(document).ready(function(){
    
    'use strict';
    
    $(window).scroll(function(){
        
        'use strict';
        
        if($(window).scrollTop() < 80 ) {
            
            $('.navbar').css ({
                
                'margin-top': '-100px',
                'opacity': '0'
            
            });
            
            $('.navbar-default').css({
                
                'background-color': 'rgba(59,59,59,0)'
                
            })
            
        } else {
            
            $('.navbar').css ({
                
                'margin-top': '0',
                'opacity': '1'
                
            });
            
            $('.navbar-default').css({
                
                'background-color': 'rgba(59,59,59,0.7)',
                'border-color': '#444'
                
            })
            
            $('.navbar-brand img').css({
                
                'height': '35px',
                'padding-top': '0'
                
            })
            
            $('.navbar-nav > li > a').css({
                
                'padding-top':'15px'
                
            })
            
        }
        
    });
    
});



//Add Smooth Scrolling
$(document).ready(function() {
   'use strict';
    
    $('a[href*="#"]').click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
});


//Active Menu Item on Click
$(document).ready(function() {
    
   'use strict';
    
    $('.navbar-nav li a').click(function(){
        
        'use strict';
        
        $('.navbar-nav li a').parent().removeClass("active");
        
        $(this).parent().addClass('active');
        
    });    
    
});


//Highlight Menu on scroll
$(document).ready(function(){
    
    'use strict';
    
    $(window).scroll(function(){
        
        'use strict';
        
        $('section').each(function() {
            
            'use strict';
            
            var bb = $(this).attr('id'),
                hei = $(this).outerHeight(),
                grttop = $(this).offset().top - 70;
            
            if($(window).scrollTop() > grttop && $(window).scrollTop() < grttop + hei){
                
                $(".navbar-nav li a[href='#" + bb + "'] ").parent().addClass("active");
                
            }
            
            else{
                $(".navbar-nav li a[href='#" + bb + "'] ").parent().removeClass("active");
            }
            
        });
        
    });
    
});





//BX slider to screens
$(document).ready(function(){
    
    $('.bxslider').bxSlider({
        
        slideWidth: 292.5,
        auto: true,
        minSlides: 1,
        maxSlides: 3,
        slideMargin: 50
        
    });
    
});












