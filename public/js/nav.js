// <!-- Function used to shrink nav bar removing paddings and adding black background -->
		$(window).scroll(function() {
			if ($(document).scrollTop() > 50) {
				$('.nav').addClass('affix');
			} else {
				$('.affix').css({'transition': '.5s'})
				$('.nav').removeClass('affix');
			}
		});
