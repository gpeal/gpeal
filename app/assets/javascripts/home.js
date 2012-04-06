$(document).ready(function() {
	resizeHeaderContentSeperator();
	resizeContent();
});

$(window).resize(function() {
	resizeHeaderContentSeperator();
	resizeContent();
});

var resizeHeaderContentSeperator = function() {
	$(".horizontal-divider").width(window.innerWidth - 335);
}

var resizeContent = function() {
	$("#content").css("width", (window.innerWidth-335)*0.5);
	$("#header-quote").css("width", (window.innerWidth-335)*0.9);
}