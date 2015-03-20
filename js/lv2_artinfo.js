$(document).ready(function() { // hover for click sort

	$('#click_sort ul li').hover(itemhover, itemleave);

	function itemhover() {
		
		$(this).find('.click_sort_float').css({
			'display': 'block'
		});
	}

	function itemleave() {
		
		$(this).find('.click_sort_float').css({
			'display': 'none'
		});
	}

});