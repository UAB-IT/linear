function IT_searchList (inputID, containerID, ...tags) {


  let input = document.getElementById(inputID);
  let container = document.getElementById(containerID);

  //console.log('Element tags', tags);

  for ( let i = 0; i < tags.length; i++ ) {

    let elements = container.getElementsByTagName(tags[i]);
    //console.log('Tags['+i+'] > Elements', elements);

    for ( let i = 0; i < elements.length; i++ ) {
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


  function validate( element, filter ) {
    for ( let i = 0; i < tags.length; i++ ) {
      if (element.innerHTML.toUpperCase().indexOf(filter.toUpperCase()) > -1 ) {
        return true;
      } else { return false; }
    }
  }

}
