/* 
	Main dom scripts go here
	~chrisnicholls.co.nz
*/

$(document).ready(function() {

	$('body').removeClass('loading');
	
	// $('.header-wrapper').waypoint('sticky', {
	// 	offset: 300,
	// 	direction: 'down right',
	// 	stuckClass: 'stuck',
	// 	wrapper: '<div class="sticky-wrapper" />'
	// });

	$('body').flowtype({
		minimum   : 500,
		maximum   : 1200,
		minFont   : 10,
		maxFont   : 17,
		fontRatio : 35
	});

	 var $slideControl = $.fn.slider();

});


/* 
   Banner Slider Plugin
*/

(function ($) {

    $.fn.slider = function( options ) {

        $s = this;

        $container = $('.slide-wrapper');
        $slides = $container.find('.slide');
        $currentSlide = $('#slide1');
        $navNext =  $('#slider-next');
        $navPrev = $('#slider-prev');

        currentIndex = ( $currentSlide.index() + 1);
        maxIndex = $slides.length;
        activeClass = 'active-slide-left';

        isAnimating = false;

        $b = $('body');
        $w = $(window);

        // Toggles in/out animations in sequence
        animate = function($targetSlide) {           	
        	$currentSlide.removeClass('active-slide-left active-slide-right');          		
        	$targetSlide.addClass(activeClass);        	
        },

        // Goes to a specific slide given the index
        goToSlide = function(index, direction) {

        	// Check we're not already waiting
        	if (!isAnimating) {

        		isAnimating = true;

	        	// Ensure it's within the limits
	        	if (index < 1) {
	        		index = maxIndex;
	            } else if (index > maxIndex) {
	            	index = 1;
	            }

	            // Get the target slide
	        	$targetSlide = $('#slide' + index);
	        	activeClass = 'active-slide-'+direction;

	        	// Wait for animation complete
	        	$.when( animate($targetSlide, direction) ).done(function() {	            
		            currentIndex = index;
		            $currentSlide = $targetSlide;	
		            isAnimating = false;
	            });    
	        }    	

        };

        $s.next = function() {            
          	
          	newIndex = currentIndex + 1;
          	goToSlide(newIndex, 'right');
          	
        };

        $s.prev = function() {

            newIndex = currentIndex - 1;
          	goToSlide(newIndex, 'left');
        };

        $s.goto = function(target) {
            gotoSlide(target);
        };

        // On Window Resize Handler
        $navNext.click($s.next); 
        $navPrev.click($s.prev); 

		$container.swipe({
			swipe:function(event, direction, distance, duration, fingerCount){
				if (direction == "right") {
					$s.prev();
				}
				if (direction == "left") {
					$s.next();
				}
			},
			threshold:100,
			allowPageScroll: 'vertical'
		});

        return $s;

    }

}( jQuery ));
