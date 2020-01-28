// NAV TOGGLE ONCLICK WITH FADE
// LOGIC TAKEN FROM UR TOOLKIT

function IT_sidebar() {
  jQuery(".clickFade .deeper.parent .deeper.parent ul").hide();
  jQuery(".clickFade .deeper.parent .deeper.parent > .nav-header").click(function () {
    jQuery(this).children("ul").stop(true, true).toggle("fast, linear"),
    jQuery(this).parent().toggleClass("active");
    return false
  });
}
IT_sidebar();
