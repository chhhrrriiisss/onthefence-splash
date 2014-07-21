/* 
	Main dom scripts go here
	~chrisnicholls.co.nz
*/

var viewportWidth;
var viewportHeight;
var imagesLoaded = false;
var loadedImages = '';
var isUpdating = false;
var mobileWidth = 981; // Skel.js 'small' and lower

function checkImages() {

	if (!imagesLoaded) {
		// Load grunticons depending on mobile or not
		if (viewportWidth < mobileWidth) {
			// Set smaller image pack		
			assets = ["img/images-min.data.svg.css", "img/images-min.data.png.css", "img/images-min.fallback.css"];			
			
		} else {
			// Set default image pack
			assets = ["img/images.data.svg.css", "img/images.data.png.css", "img/images.fallback.css"];		
		}

		grunticon(assets);
		imagesLoaded = true;
	}

}

window.resizeTrigger = function() {

    if (typeof window.innerWidth != 'undefined')
    {
        viewportWidth = window.innerWidth;
        viewportHeight = window.innerHeight;
    }
    // IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
    else if (typeof document.documentElement != 'undefined' && typeof document.documentElement.clientWidth != 'undefined' && document.documentElement.clientWidth != 0)
    {
        viewportWidth = document.documentElement.clientWidth;
        viewportHeight = document.documentElement.clientHeight;
    }

    // older versions of IE
    else {
        viewportWidth = document.getElementsByTagName('body')[0].clientWidth;
        viewportHeight = document.getElementsByTagName('body')[0].clientHeight;
    }	
}

resizeTrigger();
checkImages();

// Loading effect removed
$(window).load(function() {
	// Body loaded, lets fade everything in
	$('body').removeClass('loading').addClass('js');
});

$(document).ready(function() {

	isAnimating = false;

 	var $menu = $('#menu');
 	var menuActive = false;
    $menuToggle = $('#menu-toggle');
    $menuLinks = $('#menu ul li a');
  	
  	// Nav Menu on Mobile
	$menuToggle.click(function() {
		menuActive = true;
		$menuToggle.toggleClass('active');
		$menu.toggleClass('active');
		return false;
	});

	// Smooth Scroll to Anchor	
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

			if (target.length) {
				$('html,body').animate({
				scrollTop: (target.offset().top - (viewportHeight * .15))
				}, 1000);

				if (menuActive) {

					$menuToggle.removeClass('active');
					$menu.removeClass('active');
					menuActive = false;
				}

				return false;
			}
		}
	});

	// Prevent null links from going anywhere or doing dodgy things
	$('a.null').click(function(e) {
		e.preventDefault();
	});

	// // Type adjustment at different screen sizes
	$('body').flowtype({
		minimum   : 500,
		maximum   : 1200,
		minFont   : 10,
		maxFont   : 17,
		fontRatio : 36
	});	
	
	// Sticks nav to top of page on scroll
	$('.header-wrapper').waypoint('sticky', {
		offset: 300,
		direction: 'down right',
		stuckClass: 'stuck',
		wrapper: '<div class="sticky-wrapper" />'
	});

	// Resize trigger
	$(window).on('resize', resizeTrigger);

	// Banner slider controller
	var $slideControl = $.fn.slider();

});

