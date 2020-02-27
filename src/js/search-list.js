/** @function IT_searchList
 * Hides elements whos innderHTML doesn't match a string pulled from a text input
 * @param {string} inputID - The ID of the text input element to pull the filter string from
 * @param {string} containerID - The ID of the parent element
 * @param {string} ...tags - Argument list of HTML tags to filter
-------------------------------------------------------------------------- */

function IT_searchList (
  inputID,
  containerID,
  ...tags
) {
  const INPUT = document.getElementById(inputID)
  const CONTAINER = document.getElementById(containerID)
  for (let i = 0; i < tags.length; i++) {
    const ELEMENTS = CONTAINER.getElementsByTagName(tags[i])
    for (let i = 0; i < ELEMENTS.length; i++) {
      const ELEMENT = ELEMENTS[i]
      const PREVIOUS_SIBLING = ELEMENT.previousElementSibling
      const NEXT_SIBLING = ELEMENT.nextElementSibling
      if (validate(ELEMENT, INPUT.value)) {
        ELEMENT.style.display = ''
      } else if (ELEMENT.tagName === 'DD' && validate(PREVIOUS_SIBLING, INPUT.value)) {
        ELEMENT.style.display = ''
      } else if (ELEMENT.tagName === 'DT' && validate(NEXT_SIBLING, INPUT.value)) {
        ELEMENT.style.display = ''
      } else {
        ELEMENT.style.display = 'none'
      }
    }
  }

  /// Tests the innerHTML of an element against a string
  /// @param {html element node} element - The element to test
  /// @param {string} filter - The string to test against
  /// @return {boolean}
  function validate (element, filter) {
    for (let i = 0; i < tags.length; i++) {
      if (element.innerHTML.toUpperCase().indexOf(filter.toUpperCase()) > -1) {
        return true
      } else { return false }
    }
  }
}
