//for navigation
$(document).ready(function() {
	$("#nav .navs").mouseover(function() {
		document.getElementById('subNav_' + Number($(this).index('.navs') + 1)).
		style.display = 'block';
	}).mouseout(function() {
		document.getElementById('subNav_' + Number($(this).index('.navs') + 1)).
		style.display = 'none';
	});
});

//  for search
$(document).ready(function() {
	$('#keyword').focus(function() {
		$('#keyword_def').css({
			'display': 'none'
		});
	}).blur(function() {
		if (this.value.length == 0)
			$('#keyword_def').css({
				'display': 'inline'
			});
	});

	$.divselect("#divselect", "#inputselect");
});


// for shopping cart count
$(document).ready(function() {
	var cart_timer;
	var check_interval = 1000;
	cart_timer = setInterval(checking_cart_cnt, check_interval);

	function checking_cart_cnt() {
		var cnt = parseInt($('#nav .nav_cart_cnt').text());
		if (!isNaN(cnt) && cnt != 0) {
			$('#nav .nav_cart_cnt').css({
				'display': 'block'
			});
		}
	}
});


// footer shotcut	
$(document).ready(function() {
	$('#footer .ft_shot_2').click(favorites);
});