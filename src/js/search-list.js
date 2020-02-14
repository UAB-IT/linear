/* @function IT_searchList
 * Hides elements whos innderHTML doesn't match a string pulled from a text input
 * @param {string} inputID - The ID of the text input element to pull the filter string from
 * @param {string} containerID - The ID of the parent element
 * @param {string} ...tags - Argument list of HTML tags to filter
-------------------------------------------------------------------------- */

function IT_searchList (
  inputID,
  containerID,
  ...tags
){
  let input = document.getElementById(inputID);
  let container = document.getElementById(containerID);
  for ( let i=0; i < tags.length; i++ ) {
    let elements = container.getElementsByTagName(tags[i]);
    for ( let i=0; i < elements.length; i++ ) {
      let element = elements[i];
      let previousSibling = element.previousElementSibling;
      let nextSibling = element.nextElementSibling;
      if ( validate(element, input.value) ) {
        element.style.display = "";
      } else if (element.tagName == 'DD' && validate(previousSibling, input.value)) {
        element.style.display = "";
      } else if (element.tagName == 'DT' && validate(nextSibling, input.value)) {
        element.style.display = "";
      } else {
        element.style.display = "none";
      }
    }
  }

  /// Tests the innerHTML of an element against a string
  /// @param {html element node} element - The element to test
  /// @param {string} filter - The string to test against
  /// @return {boolean}
  function validate( element, filter ) {
    for ( let i = 0; i < tags.length; i++ ) {
      if (element.innerHTML.toUpperCase().indexOf(filter.toUpperCase()) > -1 ) {
        return true;
      } else { return false; }
    }
  }
}
