jQuery(document).ready(function () {
  // Check if element is scrolled into view
  function isScrolledIntoView (elem) {
    let docViewTop = jQuery(window).scrollTop()
    let docViewBottom = docViewTop + jQuery(window).height()
    let elemTop = jQuery(elem).offset().top
    let elemBottom = elemTop + jQuery(elem).height()
    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop))
  }

  jQuery(window).scroll(function () {
    jQuery('.animated').each(function() {
      if (isScrolledIntoView(this) === true) {
        jQuery(this).addClass('fadein')
      }
    })
    jQuery('.underline').each(function () {
      if (isScrolledIntoView(this) === true) {
        jQuery(this).addClass('underlineAnim')
      }
    })
    jQuery('.card').each(function () {
      if (isScrolledIntoView(this) === true) {
        jQuery(this).addClass('fadein')
      }
    })
  })
})
