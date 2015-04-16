var timer = null;
var offset = 5000;
var index = -1;
var target = ["pic-01", "pic-02", "pic-03", "pic-04", "pic-05", "pic-06", "pic-07"];
//大图交替轮换
function slideImage(i) {
		var id = 'image_' + target[i];
		$('#' + id)
			.animate({
				opacity: 1
			}, 800, function() {
				$(this).find('.word').show();
			}).show()
			.siblings(':visible')
			.find('.word').animate({
				height: 'hide'
			}, 'fast', function() {
				$(this).parent().animate({
					opacity: 0
				}, 800).hide();
			});
	}
	//bind thumb a

function hookThumb() {
		$('#thumbs li a')
			.bind('click', function() {
				if (timer) {
					clearTimeout(timer);
				}
				var id = this.id;
				index = getIndex(id.substr(6));
				rechange(index);
				slideImage(index);
				timer = window.setTimeout(auto, offset);
				this.blur();
				return false;
			});
	}
	//bind next/prev img

function hookBtn() {
		$('#thumbs li div').filter('#play_prev,#play_next')
			.bind('click', function() {
				if (timer) {
					clearTimeout(timer);
				}
				var id = this.id;
				if (id == 'play_prev') {
					index--;
					if (index < 0) index = 6;
				} else {
					index++;
					if (index > 6) index = 0;
				}
				rechange(index);
				slideImage(index);
				timer = window.setTimeout(auto, offset);
			});
	}
	//get index

function getIndex(v) {
	for (var i = 0; i < target.length; i++) {
		if (target[i] == v) return i;
	}
}

function rechange(loop) {
	var id = 'thumb_' + target[loop];
	$('#thumbs li a.current').removeClass('current');
	$('#' + id).addClass('current');
}

function auto() {
	index++;
	if (index > 6) {
		index = 0;
	}
	rechange(index);
	slideImage(index);
	timer = window.setTimeout(auto, offset);
}
$(function() {
	auto();
	hookThumb();
	hookBtn();

});



// for content table

$(document).ready(function() {
	var _navs = $('#content_right_bottom div.content_tbl_btn');
	var _plates = $('#content > div.content_plate');

	_navs.click(function() {
		var i = $.inArray(this, _navs);
		_navs.removeClass('current').eq(i).addClass('current');
		_plates.removeClass('current').eq(i).addClass('current');
	});

	_navs.eq(0).click();
});

//  for page ctl
$(document).ready(function() {
	$.divselect("#pagectl_divselect", "#pagectl_inputselect");
});