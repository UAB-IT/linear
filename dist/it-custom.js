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

// NAV TOGGLE ONCLICK WITH FADE
// LOGIC TAKEN FROM UR TOOLKIT

function IT_sidebar() {
  jQuery(".clickFade .deeper.parent .deeper.parent ul").hide();
  jQuery(".clickFade .deeper.parent .deeper.parent > .nav-header").click(function () {
    jQuery(this).children("ul").stop(true, true).toggle("fast, linear"),
    jQuery(this).parent().toggleClass("active");
    return false
  });
}

 /*!
 * jQuery-TOC
 * Table of Contents Generator Plugin for (non-)jQuery
 * https://github.com/idiotWu/jQuery-TOC
 * 
 * @author Dolphin Wood <dolphin.w.e@gmail.com>
 * @version 0.0.6
 * Copyright 2015. MIT licensed.
 */
!function(e){"use strict";var t=function(e,t){for(var n in t)t.hasOwnProperty(n)&&t[n]&&(e[n]=t[n]);return e},n=function(e,t){var n=[],r=document.querySelectorAll(t);return Array.prototype.forEach.call(r,function(t){var r=t.querySelectorAll(e);n=n.concat(Array.prototype.slice.call(r))}),n},r=function(e){if("string"!=typeof e)return 0;var t=e.match(/\d/g);return t?Math.min.apply(null,t):1},o=function(e,t){for(;t--;)e=e.appendChild(document.createElement("ol")),t&&(e=e.appendChild(document.createElement("li")));return e},c=function(e,t){for(;t--;)e=e.parentElement;return e},i=function(e,t){return function(n,r,o){var c=n.textContent,i=t+"-"+o;r.textContent=c;var a=e?i:n.id||i;a=encodeURIComponent(a),n.id=a,r.href="#"+a}},a=function(e){var t=e.selector,a=e.scope,u=document.createElement("ol"),l=u,f=null,d=i(e.overwrite,e.prefix);return n(t,a).reduce(function(e,t,n){var i=r(t.tagName),a=i-e;a>0&&(l=o(f,a)),a<0&&(l=c(l,2*-a)),l=l||u;var p=document.createElement("li"),m=document.createElement("a");return d(t,m,n),l.appendChild(p).appendChild(m),f=p,i},r(t)),u},u=function(e){var n={selector:"h1, h2, h3, h4, h5, h6",scope:"body",overwrite:!1,prefix:"toc"};e=t(n,e);var r=e.selector;if("string"!=typeof r)throw new TypeError("selector must be a string");if(!r.match(/^(?:h[1-6],?\s*)+$/g))throw new TypeError("selector must contains only h1-6");var o=location.hash;return o&&setTimeout(function(){var e=document.getElementById(o.slice(1));e&&e.scrollIntoView()},0),a(e)};"function"==typeof define&&define.amd?define(function(){return u}):e.initTOC=u}(window);
function IT_twitter(container, limit, debug=false) {
  let parent = document.getElementById(container);
  if (debug) {console.log("parent", parent);}

  let feed = document.createElement("a");
  feed.classList.add('twitter-timeline');
  feed.setAttribute("data-dnt", "true");
  feed.setAttribute("data-height", "2000");
  feed.setAttribute("data-theme", "light");
  feed.setAttribute("data-tweet-limit", limit);
  feed.setAttribute("data-chrome", "noheader nofooter");
  feed.setAttribute("href", "https://twitter.com/UABIT?ref_src=twsrc%5Etfw");
  feed.innerHTML = "Tweets by UABIT";
  parent.appendChild(feed);
  if (debug) {console.log("feed", feed);}

  let script = document.createElement('script');
  script.src = 'https://platform.twitter.com/widgets.js';
  document.head.appendChild(script);
  if (debug) {console.log("script", script);}
}

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
    if (IT_applyConditionalClasses(val)) {
      td.classList.add(IT_applyConditionalClasses(val));
    }

    // Write the cell's data to the <td> element
    td.innerHTML = val;
    // Return the <td> element
    return td;
  }

  IT_loadFile(googleSheet, 3000, populateTable);

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

function IT_applyConditionalClasses(query) {
  switch(query) {
    case 'Active': return 'cell-notice';
    case 'Containment': return 'cell-caution';
    case 'Phasing Out': return 'cell-caution-alt';
    case 'End of Life': return 'cell-warning';
    default: null;
  }
}

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
