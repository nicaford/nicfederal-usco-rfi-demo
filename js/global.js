/**
 * eCO Script
 * ==========
*/

$(function () {
  $('[data-toggle="popover"]').popover()
})

/* Footer */
$(window).ready(function(e) {
	$(".social-links").css("bottom", $("footer").outerHeight() - 1);
	$("body").css("margin-bottom", $("footer").outerHeight() + $(".social-links").outerHeight());
});
$("footer img").load(function(e) {
	$(".social-links").css("bottom", $("footer").outerHeight() - 1);
	$("body").css("margin-bottom", $("footer").outerHeight() + $(".social-links").outerHeight());
});
$(window).resize(function(e) {
	$(".social-links").css("bottom", $("footer").outerHeight() - 1);
	$("body").css("margin-bottom", $("footer").outerHeight() + $(".social-links").outerHeight());
});

/**
 * Utilities
 * =========
*/
String.prototype.ucwords = function() {
  return this.replace(/^(.)|\s+(.)/g, function ($1) {
    return $1.toUpperCase();
  });
};
const fillRange = function(start, end) {
  return Array(end - start + 1).fill().map((item, index) => start + index);
}
