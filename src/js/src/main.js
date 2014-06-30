/* 
	Main dom scripts go here
	~chrisnicholls.co.nz
*/

$(document).ready(function() {

	$('body').removeClass('loading');
	
	$('.header-wrapper').waypoint('sticky', {
		offset: 300,
		direction: 'down right',
		stuckClass: 'stuck',
		wrapper: '<div class="sticky-wrapper" />'
	});

	$('body').flowtype({
		minimum   : 500,
		maximum   : 1200,
		minFont   : 10,
		maxFont   : 17,
		fontRatio : 35
	});

});