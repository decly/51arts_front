// for banner
$(document).ready(function() {
	var size = $('#banner .slidebtn>ul>li').length;
	var idx = 0;
	var swtimer;
	var interval = 4000;
	$('#banner .slidepic').css("margin-left", -($('#banner .slidepic img').width() - $('#banner.slidebox').width()) / 2);
	$('#banner .slidebtn li').mouseover(function() {
		idx = $('#banner .slidebtn li').index(this);
		showpic(idx);
	}).eq(0).mouseover();

	$('#banner.slidebox').hover(function() {
		if (swtimer)
			clearInterval(swtimer);
	}, function() {
		swtimer = setInterval(timer_showpic, interval);
	}).trigger('mouseleave');


	$('#banner.slidebox').find('#banner_pre, #banner_next').bind('click', function() {
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
		var perwidth = $('#banner .slidepic img').width();
		$('#banner .slidepic').stop(true, false).animate({
			left: -perwidth * idx
		}, 500);

		$('#banner .slidebtn li').removeClass('current').eq(idx).addClass('current');
	}
});