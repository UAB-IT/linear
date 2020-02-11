// Adds tab index to interactive cards in Widgetkit
function IT_tabIndex(
  containerClass = "interactive-cards",
  elementClass = "uk-panel",
  dev = false) {

  let containers = document.getElementsByClassName(containerClass);

  if (dev === true) { console.log("containers", containers); }

  if (containers) {
    for (let i=0; i < containers.length; i++) {
      let container = containers[i];
      if (dev === true) { console.log("container", container); }
      let elements = container.getElementsByClassName(elementClass);

      for (let i=0; i < elements.length; i++) {
        if (dev === true) { console.log("elements["+i+"]", elements[i]); }
        elements[i].tabIndex = 0;
      }

    }
  }
}
