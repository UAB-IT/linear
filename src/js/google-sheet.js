/** @function IT_googleSheet
  * @param {string} parentElem - ID of the parent HTLM element
  * @param {string} googleSheet - URL string that leads to a JSON feed
  * @param {boolean} dev - True to print console logs
-------------------------------------------------------------------------- */

function IT_googleSheet (
  parentElem,
  googleSheet,
  dev = false
) {
  const PARENT_ELEM = document.getElementById(parentElem)
  const TABLE = drawTable(PARENT_ELEM)
  if (dev) { console.log('Parent Element', PARENT_ELEM) }
  if (dev) { console.log('Table', TABLE) }

  // Create a table body and append it to the parent
  // @param {HTML element} parent - Element to append <tbody> to
  // @return {HTML <tbody> element}
  function drawTable (parent) {
    const TBODY = document.createElement('tbody')
    parent.appendChild(TBODY)
    return TBODY
  }

  // Draw a table row, with all cells, and append it to a table
  // @param {HTML element} table - Element to append the <row> to
  // @param {array} rowData - Array of cell data
  function drawRow (table, rowData) {
    if ((rowData.length === 0) || (rowData == null)) { return null }
    const TR = document.createElement('tr')
    table.appendChild(TR)
    for (let i = 0; i < rowData.length; i++) {
      drawCell(TR, rowData[i])
    }
    return TR
  }

  // Draw a table cell with it's data, and append it to a row
  // This will also apply a class to the created element if its content
  // matches any of the cases in IT_applyConditionalClasses
  // @param {HTML element} tr - The table row to append the <td> to
  // @param {string} val - The value of the table cell's innerHTML
  function drawCell (tr, val) {
    const TD = document.createElement('td')
    tr.appendChild(TD)
    if (IT_applyConditionalClasses(val)) {
      TD.classList.add(IT_applyConditionalClasses(val))
    }
    TD.textContent = val
    return TD
  }

  // Get the data from the google sheet
  IT_loadFile(googleSheet, 3000, populateTable)

  // Populate a table with google sheet JSON data
  // [1] Loop through all table cells
  // [2] If this cell is in the first column create a new row & reset the row data
  // [3] Ignore the first row | Add the value of the cell to the row data
  function populateTable () {
    let data = JSON.parse(this.responseText)
    data = data.feed.entry
    let rowData = []
    for (let i = 0; i < data.length; i++) { // [1]
      const CELL = data[i].gs$cell
      console.log(CELL)
      const VAL = CELL.$t
      if (CELL.col == '1') { // [2]
        drawRow(TABLE, rowData)
        rowData = []
      }
      if (CELL.row != '1') { rowData.push(VAL) } // [3]
    }
    drawRow(TABLE, rowData)
  }
}

/** @function IT_loadFile
  * Load a file with an XMLHttpRequest
  * @param {string} url - A URL to get data from
  * @param {number} timeout
  * @param {function} callback - A function to be ran after the request is complete
-------------------------------------------------------------------------- */

function IT_loadFile (url, timeout, callback) {
  const ARGS = Array.prototype.slice.call(arguments, 3)
  const XHR = new window.XMLHttpRequest()
  XHR.ontimeout = function () {
    console.error('The request for ' + url + ' timed out.')
  }
  XHR.onload = function () {
    if (XHR.readyState === 4) {
      if (XHR.status === 200) {
        callback.apply(XHR, ARGS)
      } else {
        console.error(XHR.statusText)
      }
    }
  }
  XHR.open('GET', url, true)
  XHR.timeout = timeout
  XHR.send(null)
}

/** @function IT_applyConditionalClasses
  * @param {string} - Test to test against
  * @return {string} - The name of a class to be applied
-------------------------------------------------------------------------- */

function IT_applyConditionalClasses (query) {
  switch (query) {
    case 'Active':
    case 'Functional':
      return 'cell-notice'
    case 'Containment':
    case 'Functional with issues':
      return 'cell-caution'
    case 'Phasing Out': return 'cell-caution-alt'
    case 'Down':
    case 'End of Life':
      return 'cell-warning'
    default: return null
  }
}
