/** @function toggleClass
 * Adds or removes a given class name from an element with the given ID
 * @param {string} targetElemID ID of the element to toggle the class on
 * @param {string} className Name of the class to be toggled
************************************************************************** */

function toggleClass (
  targetElemID,
  className
) {
  const ELEM = document.getElementById(targetElemID)
  if (ELEM.classList.contains(className)) {
    ELEM.classList.remove(className)
  } else {
    ELEM.classList.add(className)
  }
}
