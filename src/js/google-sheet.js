function IT_googleSheet(parentElem, googleSheet) {
  // Get the html element for the input id
  parentElem = document.getElementById(parentElem);
  console.log(parentElem)
  // Define the output data
  const table = drawTable(parentElem);

  // Create a table body and append it to the parent
  function drawTable(parent) {
    // Create the <tbody> element
    let table = document.createElement('tbody');
    // Add the tbody to the <table>
    parent.appendChild(table);
    // Return the <tbody> element
    return table;
  }

  // Draw a table row, with all cells, and append it to a table
  function drawRow(table, rowData) {
    // If there is no data, do nothing
    if ((rowData.length == 0) || (rowData == null)) { return null; }

    // Create the <tr> element
    let tr = document.createElement('tr');
    // Add the <tr> element to the table
    table.appendChild(tr);

    // Loop through the row data and create the cells
    for (let i = 0; i < rowData.length; i++) {
      drawCell(tr, rowData[i]);
    }

    // Return the table row element
    return tr;
  }

  function drawCell(tr, val) {
    // Create the <td> element
    let td = document.createElement('td');
    // Append the <td> element to the <tr> element
    tr.appendChild(td);

    // Add themes to cells if their contents match criteria
    if (val == "Active") { td.classList.add('cell-notice'); }
    if (val == "Containment") { td.classList.add('cell-caution'); }
    if (val == "Phasing Out") { td.classList.add('cell-caution-alt'); }
    if (val == "End of Life") { td.classList.add('cell-warning'); }

    // Write the cell's data to the <td> element
    td.innerHTML = val;
    // Return the <td> element
    return td;
  }

  IT_loadFile(googleSheet, 2000, populateTable);

  function populateTable() {
    let data = JSON.parse(this.responseText);
    data = data.feed.entry;
    // Create an empty string for row data
    let rowData = [];

    // Loop through all table cells
    for (let i = 0; i < data.length; i++) {
      // Get the actual cell data
      let cell = data[i]["gs$cell"];
      // Get the value of the cell
      let val = cell["$t"];

      // If this cell is in the first column
      if (cell.col == 1) {
        // Create a new row
        drawRow(table, rowData);
        // Clear the row data
        rowData = [];
      }
      // Ignore the first row
      // Add the value of the cell to the row data
      if (cell.row != 1) {
        rowData.push(val);
      }
    }
    // Add the contents of the last row
    drawRow(table, rowData);
  }
}

function IT_loadFile(url, timeout, callback) {
  var args = Array.prototype.slice.call(arguments, 3);
  var xhr = new XMLHttpRequest();
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
