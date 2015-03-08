
$(document).ready(
	function() {
		var size = $('.slidebtn>ul>li').length;
		var idx = 0;
		var swtimer;

		$('.slidepic').css("margin-left", -($('.slidepic img').width() - $('.slidebox').width()) / 2);

		$('.slidebtn li').mouseover(function() {
			idx = $('.slidebtn li').index(this);
			showpic(idx);
		}).eq(0).mouseover();

		$('.slidebox').hover(function() {
			if (swtimer)
				clearInterval(swtimer);
		}, function() {
			swtimer = setInterval(function() {
				showpic(idx);
				idx++;
				if (idx == size) {
					idx = 0;
				}
			}, 4000);
		}).trigger('mouseleave');

		function showpic(idx) {
			var perwidth = $('.slidepic img').width();
			$('.slidepic').stop(true, false).animate({
				left: -perwidth * idx
			}, 500);

			$('.slidebtn li').removeClass('current').eq(idx).addClass('current');
		}

	});