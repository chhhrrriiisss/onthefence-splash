/* 
	Main dom scripts go here
	~chrisnicholls.co.nz
*/

$(document).ready(function() {

	
	$('.header-wrapper').waypoint('sticky', {
		offset: 300,
		direction: 'down right',
		stuckClass: 'stuck',
		wrapper: '<div class="sticky-wrapper" />'
	});

});