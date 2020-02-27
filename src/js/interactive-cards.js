/** @function IT_tabIndex
  * Adds tab index to interactive cards in Widgetkit
  * @param {string} containerClass - The class name of the parent container
  * @param {string} elementClass - The class name of the elements to include
  * @param {boolean} dev - true to print console logs
-------------------------------------------------------------------------- */

function IT_tabIndex (
  containerClass = 'interactive-cards',
  elementClass = 'uk-panel',
  dev = false
) {
  const CONTAINERS = document.getElementsByClassName(containerClass)
  if (dev) { console.log('CONTAINERS', CONTAINERS) }
  if (CONTAINERS) {
    for (let i = 0; i < CONTAINERS.length; i++) {
      const CONTAINER = CONTAINERS[i]
      const ELEMENTS = CONTAINER.getElementsByClassName(elementClass)
      if (dev) { console.log('CONTAINER', CONTAINER) }
      for (let i = 0; i < ELEMENTS.length; i++) {
        if (dev) { console.log('ELEMENTS[' + i + ']', ELEMENTS[i]) }
        ELEMENTS[i].tabIndex = 0
      }
    }
  }
}
