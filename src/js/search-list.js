function IT_searchList (inputID, containerID, elementTag) {

  let input = document.getElementById(inputID);
  let container = document.getElementById(containerID);
  let elements = container.getElementsByTagName(elementTag);
  // toUpperCase makes sure the search input is not case sensitive
  let filter = input.value.toUpperCase();

  // Loop through all elements in query, and hide those who don't match the search
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
      elements[i].style.display = "";
    } else {
      elements[i].style.display = "none";
    }
  }
}
