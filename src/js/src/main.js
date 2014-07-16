/* 
	Main dom scripts go here
	~chrisnicholls.co.nz
*/

$(window).load(function() {
	// Body loaded, lets fade everything in
	$('body').removeClass('loading').addClass('js')
});

$(document).ready(function() {


	windowWidth = window.innerWidth;
	windowHeight = window.innerHeight;	


	isAnimating = false;

	// // Overlay box trigger
	// $("#launch-button").colorbox({
	// 	iframe:true, 
	// 	width:"980", 
	// 	height:"600", 
	// 	overlayClose: false, 
	// 	close: "<div class='image-close'></div>",
	// 	xhrError: "Uh oh, something went a bit wrong." 
	// });

 	var $menu = $('#menu'),
    $menulink = $('#menu-toggle');
  
	$menulink.click(function() {

		console.log('hit');
		$menulink.toggleClass('active');
		$menu.toggleClass('active');
		return false;

	});

	 // // Select menu list
  //   $("#nav-menu").on("change", function() {  

  //       var val = this.value;
  //       var urlCheck = val.slice(4);

  //       console.log('value:' + val);

  //       if (urlCheck == 'http') {        	
  //       	window.location.href = val;

  //       } else {
  //       	scrollToTarget($(val));
  //       }       		

        
  //   });


	// Smooth scroll to anchor
	$('a[href*=#]:not([href=#])').click(function() {

		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);	
			scrollToTarget(target);		
		}
		
	});

	function scrollToTarget(target) {

		if (!isAnimating) {

			isAnimating = true;			

			var hash = target.slice(1);

			target = target.length ? target : $('[name=' + hash +']');

			if (target.length) {

				position = (target.offset().top) - (windowHeight * .1);

				console.log(target);


				$('body, html').animate({
				scrollTop: position
				}, 1000, function() {

					isAnimating = false;

				});

				return false;
			}
		
		}

	}


	// Prevent null links from going anywhere or doing dodgy things
	$('a.null').click(function(e) {
		e.preventDefault();
	});

	// Type adjustment at different screen sizes
	//$('body').flowtype({
	// 	minimum   : 500,
	// 	maximum   : 1200,
	// 	minFont   : 10,
	// 	maxFont   : 17,
	// 	fontRatio : 36
	// });	
	
	// Sticks nav to top of page on scroll
	$('.header-wrapper').waypoint('sticky', {
		offset: 300,
		direction: 'down right',
		stuckClass: 'stuck',
		wrapper: '<div class="sticky-wrapper" />'
	});

	// Resize trigger
	$(window).on('resize', resizeTrigger);

	function resizeTrigger() {

		windowWidth = window.innerWidth;
		windowHeight = window.innerHeight;
	}

	// Banner slider controller
	var $slideControl = $.fn.slider();

});

