/** @function IT_sidebar
  * Logic taken from similar implementation on uab.edu/toolkit
-------------------------------------------------------------------------- */

function IT_sidebar () {
  jQuery('.clickFade .nav-header + ul').hide()
  jQuery('.clickFade .nav-header').click(function () {
    jQuery(this).children('ul').stop(true, true).toggle('fast, linear')
    jQuery(this).parent().toggleClass('active')
    return false
  })
}
