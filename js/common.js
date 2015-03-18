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


$(document).ready(function() { // set default for search
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
});

$(document).ready(function() { // footer shotcut	
	$('#footer .ft_shot_2').click(favorites);
});