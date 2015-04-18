$(document).ready(function() {
	var size = $('#newsimg_slide > ul > li').length;
	var idx = 0;

	$('#img_pre, #img_next').bind('click', function() {
		var id = this.id;
		if (id == 'img_pre') {
			idx--;
			if (idx < 0) idx = size - 1;
		} else {
			idx++;
			if (idx >= size) idx = 0;
		}
		showpic(idx);
	});

	function showpic(idx) {
		var perwidth = $('#newsimg_slide > ul > li').width();
		$('#newsimg_slide > ul > li').stop(true, false).animate({
			left: -perwidth * idx
		}, 500);
	}
});