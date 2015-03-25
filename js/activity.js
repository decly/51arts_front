// for activity

//$(document).ready(function() {
//	var defaultOpts = {
//		interval: 4000,
//		fadeInTime: 300,
//		fadeOutTime: 200
//	};
//	var _thumbs = $("#act ul.slide-li li");
//	var _bodies = $("#act ul.slide-pic li");
//	var _count = _thumbs.length;
//	var _current = 0;
//	var _intervalID = null;
//	var stop = function() {
//		window.clearInterval(_intervalID);
//	};
//	var slide = function(opts) {
//		if (opts) {
//			_current = opts.current || 0;
//		} else {
//			_current = (_current >= (_count - 1)) ? 0 : (++_current);
//		};
//		_bodies.filter(":visible").fadeOut(defaultOpts.fadeOutTime, function() {
//			_bodies.eq(_current).fadeIn(defaultOpts.fadeInTime);
//			_bodies.removeClass("current").eq(_current).addClass("current");
//		});
//		_thumbs.removeClass("current").eq(_current).addClass("current");
//	};
//	var go = function() {
//		stop();
//		_intervalID = window.setInterval(function() {
//			slide();
//		}, defaultOpts.interval);
//	};
//	var itemMouseOver = function(target, items) {
//		stop();
//		var i = $.inArray(target, items);
//		slide({
//			current: i
//		});
//	};
//	_thumbs.hover(function() {
//		if ($(this).attr('class') != 'current') {
//			itemMouseOver(this, _thumbs);
//		} else {
//			stop();
//		}
//	}, go);
//	_bodies.hover(stop, go);
//	go();
//});