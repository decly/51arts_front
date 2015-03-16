function favorites() {
	try {
		if (document.all) { // IE
			window.external.addFavorite(window.location, document.title);
		} else {
			window.sidebar.addPanel(document.title, window.location);
		}
	} catch (e) {
		var ctrl = (navigator.userAgent.toLowerCase()).indexOf('mac') != -1 ? 'Command/Cmd' : 'CTRL';
		alert('您可以使用快捷键 ' + ctrl + ' + D 添加到书签');
	}
}