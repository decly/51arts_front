$(document).ready(function() { // set default for login 	
	$('#login_wrap input').focus(function() {
		$(this).siblings('span').css({
			'display': 'none'
		});
	}).blur(function() {
		if (this.value.length == 0)
			$(this).siblings('span').css({
				'display': 'inline'
			});
	});
});


$(document).ready(function() { // text scroll for sale info
	marquee(25, 10, 3000);

	function marquee(height, speed, delay) {
		var scrollT;
		var pause = false;
		var ScrollBox = document.getElementById("sale_scroll");
		if (document.getElementById("holder").offsetHeight <= height) return;
		var _tmp = ScrollBox.innerHTML.replace('holder', 'holder2');
		ScrollBox.innerHTML += _tmp;
		ScrollBox.onmouseover = function() {
			pause = true
		}
		ScrollBox.onmouseout = function() {
			pause = false
		}
		ScrollBox.scrollTop = 0;

		function start() {
			scrollT = setInterval(scrolling, speed);
			if (!pause) ScrollBox.scrollTop += 2;
		}

		function scrolling() {
			if (ScrollBox.scrollTop % height != 0) {
				ScrollBox.scrollTop += 1;
				if (ScrollBox.scrollTop >= ScrollBox.scrollHeight / 2) ScrollBox.scrollTop = 0;
			} else {
				clearInterval(scrollT);
				setTimeout(start, delay);
			}
		}
		setTimeout(start, delay);
	}
});