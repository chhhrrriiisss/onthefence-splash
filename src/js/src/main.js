/* 
	Main dom scripts go here
	~chrisnicholls.co.nz
*/

$(window).load(function() {
	// Body loaded, lets fade everything in
	$('body').removeClass('loading');
});

$(document).ready(function() {


	windowWidth = window.innerWidth;
	windowHeight = window.innerHeight;		
	isAnimating = false;


	// Overlay box trigger
	$("#launch-button").colorbox({
		iframe:true, 
		width:"980", 
		height:"600", 
		overlayClose: false, 
		close: "<div class='image-close'></div>",
		xhrError: "Uh oh, something went a bit wrong." 
	});

	// Smooth scroll to anchor
	$('a[href*=#]:not([href=#])').click(function() {

		if (!isAnimating) {

			isAnimating = true;

			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);		

				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

				if (target.length) {

					position = ((target.offset().top) - (windowHeight * .1));

					console.log(target);

					if (target.selector == "#home") {
						position = 0;
						console.log('hit');
					}

					$('html,body').animate({
					scrollTop: position
					}, 1000, function() {

						isAnimating = false;

					});

					return false;
				}
			}
		}
	});


	// Prevent null links from going anywhere or doing dodgy things
	$('a.null').click(function(e) {
		e.preventDefault();
	});

	// Type adjustment at different screen sizes
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

	// Toggle menu on mobile
	$('#nav-toggle').click(function() {
		toggleMenu();
	});

	// Resize trigger
	$(window).on('resize', resizeTrigger);

	function resizeTrigger() {

		windowWidth = window.innerWidth;
		windowHeight = window.innerHeight;

		if (menuOpen) {
			closeMenu();
		}
	}

	var menuOpen = false;

	function toggleMenu() {

		if (menuOpen) {
			menuOpen = false;
			closeMenu();
		} else {
			menuOpen = true;
			openMenu();
		}
	}

	function closeMenu() {
		$('#nav-header').removeClass('expand');	 
	}

	function openMenu() {
		$('#nav-header').addClass('expand');	 
	}

	// Banner slider controller
	var $slideControl = $.fn.slider();

});

