$(document).ready(function() {
	resizeHeaderContentSeperator();
});

$(window).resize(function() {
	resizeHeaderContentSeperator();
});

var resizeHeaderContentSeperator = function() {
	$("#header").width(window.innerWidth-350);
}