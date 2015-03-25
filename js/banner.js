// for banner
$(document).ready(function() {
	var size = $('.slidebtn>ul>li').length;
	var idx = 0;
	var swtimer;
	var interval = 4000;
	$('.slidepic').css("margin-left", -($('.slidepic img').width() - $('.slidebox').width()) / 2);
	$('.slidebtn li').mouseover(function() {
		idx = $('.slidebtn li').index(this);
		showpic(idx);
	}).eq(0).mouseover();

	$('.slidebox').hover(function() {
		if (swtimer)
			clearInterval(swtimer);
	}, function() {
		swtimer = setInterval(timer_showpic, interval);
	}).trigger('mouseleave');


	$('.slidebox').find('#banner_pre, #banner_next').bind('click', function() {
		var id = this.id;
		if (id == 'banner_pre') {
			idx--;
			if (idx < 0) idx = size - 1;
		} else {
			idx++;
			if (idx >= size) idx = 0;
		}
		showpic(idx);
	});

	function timer_showpic() {
		idx++;
		if (idx == size) {
			idx = 0;
		}
		showpic(idx);
	}

	function showpic(idx) {
		var perwidth = $('.slidepic img').width();
		$('.slidepic').stop(true, false).animate({
			left: -perwidth * idx
		}, 500);

		$('.slidebtn li').removeClass('current').eq(idx).addClass('current');
	}
});