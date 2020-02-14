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

/* @function IT_sidebar
 * Logic taken from similar implementation on uab.edu/toolkit
-------------------------------------------------------------------------- */

function IT_sidebar() {
  jQuery(".clickFade .deeper.parent .deeper.parent ul").hide();
  jQuery(".clickFade .deeper.parent .deeper.parent > .nav-header").click(function () {
    jQuery(this).children("ul").stop(true, true).toggle("fast, linear"),
    jQuery(this).parent().toggleClass("active");
    return false
  });
}

/* jQuery-TOC
 * Table of Contents Generator Plugin for (non-)jQuery
 * https://github.com/idiotWu/jQuery-TOC
 *
 * @author Dolphin Wood <dolphin.w.e@gmail.com>
 * @version 0.0.6
 * Copyright 2015. MIT licensed.
-------------------------------------------------------------------------- */

!function(e){"use strict";var t=function(e,t){for(var n in t)t.hasOwnProperty(n)&&t[n]&&(e[n]=t[n]);return e},n=function(e,t){var n=[],r=document.querySelectorAll(t);return Array.prototype.forEach.call(r,function(t){var r=t.querySelectorAll(e);n=n.concat(Array.prototype.slice.call(r))}),n},r=function(e){if("string"!=typeof e)return 0;var t=e.match(/\d/g);return t?Math.min.apply(null,t):1},o=function(e,t){for(;t--;)e=e.appendChild(document.createElement("ol")),t&&(e=e.appendChild(document.createElement("li")));return e},c=function(e,t){for(;t--;)e=e.parentElement;return e},i=function(e,t){return function(n,r,o){var c=n.textContent,i=t+"-"+o;r.textContent=c;var a=e?i:n.id||i;a=encodeURIComponent(a),n.id=a,r.href="#"+a}},a=function(e){var t=e.selector,a=e.scope,u=document.createElement("ol"),l=u,f=null,d=i(e.overwrite,e.prefix);return n(t,a).reduce(function(e,t,n){var i=r(t.tagName),a=i-e;a>0&&(l=o(f,a)),a<0&&(l=c(l,2*-a)),l=l||u;var p=document.createElement("li"),m=document.createElement("a");return d(t,m,n),l.appendChild(p).appendChild(m),f=p,i},r(t)),u},u=function(e){var n={selector:"h1, h2, h3, h4, h5, h6",scope:"body",overwrite:!1,prefix:"toc"};e=t(n,e);var r=e.selector;if("string"!=typeof r)throw new TypeError("selector must be a string");if(!r.match(/^(?:h[1-6],?\s*)+$/g))throw new TypeError("selector must contains only h1-6");var o=location.hash;return o&&setTimeout(function(){var e=document.getElementById(o.slice(1));e&&e.scrollIntoView()},0),a(e)};"function"==typeof define&&define.amd?define(function(){return u}):e.initTOC=u}(window);

/* @function IT_twitter
 * Creates a twitter feed
 * @param {string} container - ID of the HTML element that will contain the feed
 * @param {number} limit - Max number to tweets to display
 * @param {boolean} dev - True to print console logs
-------------------------------------------------------------------------- */

function IT_twitter(
  container,
  limit,
  dev=false
){
  const PARENT = document.getElementById(container);
  if (dev) { console.log("Twitter feed parent", PARENT); }
  let feed = document.createElement("a");
    feed.classList.add('twitter-timeline');
    feed.setAttribute("data-dnt", "true");
    feed.setAttribute("data-height", "2000");
    feed.setAttribute("data-theme", "light");
    feed.setAttribute("data-tweet-limit", limit);
    feed.setAttribute("data-chrome", "noheader nofooter");
    feed.setAttribute("href", "https://twitter.com/UABIT?ref_src=twsrc%5Etfw");
    feed.innerHTML = "Tweets by UABIT";
  if (dev) { console.log("feed", feed); }
  PARENT.appendChild(feed);
  let script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
  if (dev) { console.log("script", script); }
  document.head.appendChild(script);
}

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
