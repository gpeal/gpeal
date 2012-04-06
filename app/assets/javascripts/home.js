$(document).ready(function() {
	resizeHeaderContentSeperator();
});

$(window).resize(function() {
	resizeHeaderContentSeperator();
});

var resizeHeaderContentSeperator = function() {
	$("#content-pane").width(window.innerWidth);
}