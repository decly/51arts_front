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
