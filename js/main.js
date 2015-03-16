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


$(document).ready(function() { // hover for items

	$('table.show_iteminfo td').hover(itemhover, itemleave);

	function itemhover() {
		$(this).find('img').css({
			'filter': 'alpha(opacity=30)',
			'opacity': '0.3'
		});
		$(this).children('p').css({
			'display': 'block'
		});
	}

	function itemleave() {

		$(this).find('img').css({
			'filter': 'alpha(opacity=100)',
			'opacity': '1.0'
		});
		$(this).children('p').css({
			'display': 'none'
		});
	}
});


$(document).ready(function() { // hover for artists 

	$('#artcircle li a').hover(artistshover, artistsleave);

	function artistshover() {
		$(this).children('p').css({
			'display': 'block'
		});
		$(this).children('span').css({
			'display': 'block'
		});
	}

	function artistsleave() {
		$(this).children('p').css({
			'display': 'none'
		});
		$(this).children('span').css({
			'display': 'none'
		});
	}
});


$(document).ready(function() { // hover for sale rank

	$('#salerank td div').hover(itemhover, itemleave);

	function itemhover() {
		$(this).children('img').css({
			'filter': 'alpha(opacity=50)',
			'opacity': '0.5'
		});
		$(this).children('a').css({
			'display': 'block'
		});
	}

	function itemleave() {

		$(this).children('img').css({
			'filter': 'alpha(opacity=100)',
			'opacity': '1.0'
		});
		$(this).children('a').css({
			'display': 'none'
		});
	}
});


$(document).ready(function() { // footer shotcut	
	$('#footer .ft_shot_2').click(favorites);
});