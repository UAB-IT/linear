/* @function IT_tabIndex
 * Adds tab index to interactive cards in Widgetkit
 * @param {string} containerClass - The class name of the parent container
 * @param {string} elementClass - The class name of the elements to include
 * @param {boolean} dev - true to print console logs
-------------------------------------------------------------------------- */

function IT_tabIndex(
  containerClass = "interactive-cards",
  elementClass = "uk-panel",
  dev = false
){
  let containers = document.getElementsByClassName(containerClass);
  if (dev) { console.log("containers", containers); }
  if (containers) {
    for (let i=0; i < containers.length; i++) {
      let container = containers[i];
      let elements = container.getElementsByClassName(elementClass);
      if (dev) { console.log("container", container); }
      for (let i=0; i < elements.length; i++) {
        if (dev) { console.log("elements["+i+"]", elements[i]); }
        elements[i].tabIndex = 0;
      }
    }
  }
}
