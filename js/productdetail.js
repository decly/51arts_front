// for product show img
$(document).ready(function() {

	var _thumbs = $('#product_imgs #product_img_lit ul li');
	var _mainshow = $('#product_imgs #product_img_big');
	var slide = function(opts) {
		if (opts) {
			_current = opts.current || 0;
		} else {
			_current = 0;
		}
		_mainshow.find('img').attr('src', _thumbs.eq(_current).find('img').attr('src'));
		_thumbs.removeClass("current").eq(_current).addClass("current");
	};

	var itemMouseOver = function(target, items) {
		var i = $.inArray(target, items);
		slide({
			current: i
		});
	};
	_thumbs.mouseover(function() {
		if ($(this).attr('class') != 'current') {
			itemMouseOver(this, _thumbs);
		}
	});
	slide();
});


// for product show switch
$(document).ready(function() {
	var idx = 0;
	var slideinterval = 500;
	var round_size = 4;
	var size = Math.ceil($('#product_show_lit ul li').length / round_size);

	$('#product_show_lit').siblings('#product_show_pre, #product_show_next').bind('click', function() {
		var id = this.id;
		if (id == 'product_show_pre') {
			idx--;
			if (idx < 0) idx = size - 1;
		} else {
			idx++;
			if (idx >= size) idx = 0;
		}
		showpic(idx);
	});

	function showpic(index) {
		var perwidth = $('#product_show_lit').width();
		$('#product_img_lit ul li').animate({
			left: -perwidth * index
		}, slideinterval);
	}
});


// for product show classify selected
$(document).ready(function() {
	var _thumbs = $('#product_classify ul li');
	var selected = $('#classify_selected');

	_thumbs.click(function() {
		var i = $.inArray(this, _thumbs);
		selected.val(i);
		_thumbs.removeClass("current").eq(i).addClass("current");
	});
	_thumbs.eq(0).click();
});

// for product plate
$(document).ready(function() {
	var _navs = $('#product_nav ul li');
	var _plates = $('#product_plate > div');

	_navs.click(function() {
		var i = $.inArray(this, _navs);
		_navs.removeClass('current').eq(i).addClass('current');
		_plates.removeClass('current').eq(i).addClass('current');
	});

	_navs.eq(0).click();
});

// for commit login
$(document).ready(function() {
	if ($('#has_login').val() == 0) {
		$('#commit_login').css({
			'display': 'block'
		});
		$('#comment_write form textarea').attr("readonly", "readonly").click(function() {
			$(this).blur();
			$('#commit_login').click();
		});
	}
});