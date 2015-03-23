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

// footer shotcut	
$(document).ready(function() {
	$('#footer .ft_shot_2').click(favorites);
});