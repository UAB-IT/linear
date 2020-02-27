/** @function IT_sidebar
  * Logic taken from similar implementation on uab.edu/toolkit
-------------------------------------------------------------------------- */

function IT_sidebar () {
  jQuery('.clickFade .deeper.parent .deeper.parent ul').hide()
  jQuery('.clickFade .deeper.parent .deeper.parent > .nav-header').click(function () {
    jQuery(this).children('ul').stop(true, true).toggle('fast, linear')
    jQuery(this).parent().toggleClass('active')
    return false
  })
}
