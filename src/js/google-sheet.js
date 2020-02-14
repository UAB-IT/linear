/* @function IT_googleSheet
 * @param {string} parentElem - ID of the parent HTLM element
 * @param {string} googleSheet - URL string that leads to a JSON feed
 * @param {boolean} dev - True to print console logs
-------------------------------------------------------------------------- */

function IT_googleSheet(
  parentElem,
  googleSheet,
  dev=false
) {
  parentElem = document.getElementById(parentElem);
  const TABLE = drawTable(parentElem);
  if (dev) { console.log("Parent Element", parentElem) }
  if (dev) { console.log("Table", TABLE) }

  // Create a table body and append it to the parent
  // @param {HTML element} parent - Element to append <tbody> to
  // @return {HTML <tbody> element}
  function drawTable(parent) {
    let table = document.createElement('tbody');
    parent.appendChild(table);
    return table;
  }

  // Draw a table row, with all cells, and append it to a table
  // @param {HTML element} table - Element to append the <row> to
  // @param {array} rowData - Array of cell data
  function drawRow(table, rowData) {
    if ((rowData.length == 0) || (rowData == null)) { return null; }
    let tr = document.createElement('tr');
    table.appendChild(tr);
    for (let i = 0; i < rowData.length; i++) {
      drawCell(tr, rowData[i]);
    }
    return tr;
  }

  // Draw a table cell with it's data, and append it to a row
  // This will also apply a class to the created element if its content
  // matches any of the cases in IT_applyConditionalClasses
  // @param {HTML element} tr - The table row to append the <td> to
  // @param {string} val - The value of the table cell's innerHTML
  function drawCell(tr, val) {
    let td = document.createElement('td');
    tr.appendChild(td);
    if (IT_applyConditionalClasses(val)) {
      td.classList.add(IT_applyConditionalClasses(val));
    }
    td.innerHTML = val;
    return td;
  }

  // Get the data from the google sheet
  IT_loadFile(googleSheet, 3000, populateTable);

  // Populate a table with google sheet JSON data
  // [1] Loop through all table cells
  // [2] If this cell is in the first column create a new row & reset the row data
  // [3] Ignore the first row | Add the value of the cell to the row data
  function populateTable() {
    let data = JSON.parse(this.responseText);
    data = data.feed.entry;
    let rowData = [];
    for (let i = 0; i < data.length; i++) {      // [1]
      let cell = data[i]["gs$cell"];
      let val = cell["$t"];
      if (cell.col == 1) {                       // [2]
        drawRow(table, rowData);
        rowData = [];
      }
      if (cell.row != 1) { rowData.push(val); }  // [3]
    }
    drawRow(TABLE, rowData);
  }
}



/* @function IT_loadFile
 * Load a file with an XMLHttpRequest
 * @param {string} url - A URL to get data from
 * @param {number} timeout
 * @param {function} callback - A function to be ran after the request is complete
-------------------------------------------------------------------------- */

function IT_loadFile(url, timeout, callback) {
  let args = Array.prototype.slice.call(arguments, 3);
  let xhr = new XMLHttpRequest();
  xhr.ontimeout = function () {
    console.error("The request for " + url + " timed out.");
  };
  xhr.onload = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        callback.apply(xhr, args);
      } else {
        console.error(xhr.statusText);
      }
    }
  };
  xhr.open("GET", url, true);
  xhr.timeout = timeout;
  xhr.send(null);
}



/* @function IT_applyConditionalClasses
 * @param {string} - Test to test against
 * @return {string} - The name of a class to be applied
-------------------------------------------------------------------------- */

function IT_applyConditionalClasses(query) {
  switch(query) {
    case 'Active': return 'cell-notice';
    case 'Containment': return 'cell-caution';
    case 'Phasing Out': return 'cell-caution-alt';
    case 'End of Life': return 'cell-warning';
    default: null;
  }
}
