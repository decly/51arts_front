$(document).ready(function() { // hover for click sort

	$('#click_sort ul li').mouseover(itemhover);

	function itemhover() {
		$(this).siblings().find('.click_sort_float').slideUp('fast');
		$(this).find('.click_sort_float').slideDown('fast');
	}

});