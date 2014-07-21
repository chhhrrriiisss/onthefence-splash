/* 
	Main dom scripts go here
	~chrisnicholls.co.nz
*/

var viewportWidth;
var viewportHeight;
var mobileWidth = 981; // Skel.js 'small' and lower

window.isMobile = function() {
	var check = false;
	(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
	return check; 
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

// Load grunticons depending on mobile or not
if (viewportWidth < mobileWidth || isMobile()) {
	// Set smaller image pack		
	assets = ["img/images-min.data.svg.css", "img/images-min.data.png.css", "img/images-min.fallback.css"];			
	
} else {
	// Set default image pack
	assets = ["img/images.data.svg.css", "img/images.data.png.css", "img/images.fallback.css"];		
}

grunticon(assets);


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
	$('a[href*=#]:not([href=#])').click(function(e) {
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

				e.preventDefault();
			}
		}
	});

	// Prevent null links from going anywhere or doing dodgy things
	$('a.null').click(function(e) {
		e.preventDefault();
	});

	// // Type adjustment at different screen sizes
	// $('body').flowtype({
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

	// Banner slider controller
	var $slideControl = $.fn.slider();

});

