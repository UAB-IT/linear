// Adds tab index to interactive cards in Widgetkit
function IT_tabIndex(containerClass = "interactive-cards", elementClass = "uk-panel", debug = false){
  let container = document.getElementsByClassName(containerClass);
  let elem = container.getElementsByClassName(elementClass);
  for (let i = 0; i < elem.length; i++){
    if (debug === true) {console.log(elem[i]);}
    elem[i].tabIndex = 0;
  }
}
