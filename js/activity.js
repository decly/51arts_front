// for activity

$(document).ready(function() {
	var defaultOpts = {
		interval: 2000,
		fadeInTime: 300,
		fadeOutTime: 200
	};
	var _titles = $("ul.slide-txt li");
	var _titles_bg = $("ul.op li");
	var _bodies = $("ul.slide-pic li");
	var _count = _titles.length;
	var _current = 0;
	var _intervalID = null;
	var stop = function() {
		window.clearInterval(_intervalID);
	};
	var slide = function(opts) {
		if (opts) {
			_current = opts.current || 0;
		} else {
			_current = (_current >= (_count - 1)) ? 0 : (++_current);
		};
		_bodies.filter(":visible").fadeOut(defaultOpts.fadeOutTime, function() {
			_bodies.eq(_current).fadeIn(defaultOpts.fadeInTime);
			_bodies.removeClass("current").eq(_current).addClass("current");
		});
		_titles.removeClass("current").eq(_current).addClass("current");
		_titles_bg.removeClass("current").eq(_current).addClass("current");
	};
	var go = function() {
		stop();
		_intervalID = window.setInterval(function() {
			slide();
		}, defaultOpts.interval);
	};
	var itemMouseOver = function(target, items) {
		stop();
		var i = $.inArray(target, items);
		slide({
			current: i
		});
	};
	_titles.hover(function() {
		if ($(this).attr('class') != 'current') {
			itemMouseOver(this, _titles);
		} else {
			stop();
		}
	}, go);
	_bodies.hover(stop, go);
	go();
});