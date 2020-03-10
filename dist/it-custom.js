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

/** @function IT_sidebar
  * Logic taken from similar implementation on uab.edu/toolkit
-------------------------------------------------------------------------- */

function IT_sidebar () {
  jQuery('.clickFade .nav-header + ul').hide()
  jQuery('.clickFade .nav-header').click(function () {
    jQuery(this).children('ul').stop(true, true).toggle('fast, linear')
    jQuery(this).parent().toggleClass('active')
    return false
  })
}

/** jQuery-TOC
 * Table of Contents Generator Plugin for (non-)jQuery
 * https://github.com/idiotWu/jQuery-TOC
 *
 * @author Dolphin Wood <dolphin.w.e@gmail.com>
 * @version 0.0.6
 * Copyright 2015. MIT licensed.
-------------------------------------------------------------------------- */

!function(e){"use strict";var t=function(e,t){for(var n in t)t.hasOwnProperty(n)&&t[n]&&(e[n]=t[n]);return e},n=function(e,t){var n=[],r=document.querySelectorAll(t);return Array.prototype.forEach.call(r,function(t){var r=t.querySelectorAll(e);n=n.concat(Array.prototype.slice.call(r))}),n},r=function(e){if("string"!=typeof e)return 0;var t=e.match(/\d/g);return t?Math.min.apply(null,t):1},o=function(e,t){for(;t--;)e=e.appendChild(document.createElement("ol")),t&&(e=e.appendChild(document.createElement("li")));return e},c=function(e,t){for(;t--;)e=e.parentElement;return e},i=function(e,t){return function(n,r,o){var c=n.textContent,i=t+"-"+o;r.textContent=c;var a=e?i:n.id||i;a=encodeURIComponent(a),n.id=a,r.href="#"+a}},a=function(e){var t=e.selector,a=e.scope,u=document.createElement("ol"),l=u,f=null,d=i(e.overwrite,e.prefix);return n(t,a).reduce(function(e,t,n){var i=r(t.tagName),a=i-e;a>0&&(l=o(f,a)),a<0&&(l=c(l,2*-a)),l=l||u;var p=document.createElement("li"),m=document.createElement("a");return d(t,m,n),l.appendChild(p).appendChild(m),f=p,i},r(t)),u},u=function(e){var n={selector:"h1, h2, h3, h4, h5, h6",scope:"body",overwrite:!1,prefix:"toc"};e=t(n,e);var r=e.selector;if("string"!=typeof r)throw new TypeError("selector must be a string");if(!r.match(/^(?:h[1-6],?\s*)+$/g))throw new TypeError("selector must contains only h1-6");var o=location.hash;return o&&setTimeout(function(){var e=document.getElementById(o.slice(1));e&&e.scrollIntoView()},0),a(e)};"function"==typeof define&&define.amd?define(function(){return u}):e.initTOC=u}(window);

/** @function IT_twitter
  * Creates a twitter feed
  * @param {string} container - ID of the HTML element that will contain the feed
  * @param {number} limit - Max number to tweets to display
  * @param {boolean} dev - True to print console logs
-------------------------------------------------------------------------- */

function IT_twitter (
  container,
  limit,
  dev = false
) {
  const PARENT = document.getElementById(container)
  if (dev) { console.log('Twitter feed parent', PARENT) }
  const FEED = document.createElement('a')
  FEED.classList.add('twitter-timeline')
  FEED.setAttribute('data-dnt', 'true')
  FEED.setAttribute('data-height', '2000')
  FEED.setAttribute('data-theme', 'light')
  FEED.setAttribute('data-tweet-limit', limit)
  FEED.setAttribute('data-chrome', 'noheader nofooter')
  FEED.setAttribute('href', 'https://twitter.com/UABIT?ref_src=twsrc%5Etfw')
  FEED.innerHTML = 'Tweets by UABIT'

  if (dev) { console.log('FEED', FEED) }
  PARENT.appendChild(FEED)
  const SCRIPT = document.createElement('script')
  SCRIPT.src = 'https://platform.twitter.com/widgets.js'
  if (dev) { console.log('script', SCRIPT) }
  document.head.appendChild(SCRIPT)
}

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
    TD.innerHTML = val
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
      const VAL = CELL.$t
      if (CELL.col === 1) { // [2]
        drawRow(TABLE, rowData)
        rowData = []
      }
      if (CELL.row !== 1) { rowData.push(VAL) } // [3]
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

function IT_applyConditionalClasses(query) {
  switch(query) {
    case 'Active':
    case 'Functional':
      return 'cell-notice';
    case 'Containment':
    case 'Functional with issues':
      return 'cell-caution';
    case 'Phasing Out': return 'cell-caution-alt';
    case 'Down':
    case 'End of Life':
      return 'cell-warning';
    default: null;
  }
}

/** @function IT_searchList
 * Hides elements whos innderHTML doesn't match a string pulled from a text input
 * @param {string} inputID - The ID of the text input element to pull the filter string from
 * @param {string} containerID - The ID of the parent element
 * @param {string} ...tags - Argument list of HTML tags to filter
-------------------------------------------------------------------------- */

function IT_searchList (
  inputID,
  containerID,
  ...tags
) {
  const INPUT = document.getElementById(inputID)
  const CONTAINER = document.getElementById(containerID)
  for (let i = 0; i < tags.length; i++) {
    const ELEMENTS = CONTAINER.getElementsByTagName(tags[i])
    for (let i = 0; i < ELEMENTS.length; i++) {
      const ELEMENT = ELEMENTS[i]
      const PREVIOUS_SIBLING = ELEMENT.previousElementSibling
      const NEXT_SIBLING = ELEMENT.nextElementSibling
      if (validate(ELEMENT, INPUT.value)) {
        ELEMENT.style.display = ''
      } else if (ELEMENT.tagName === 'DD' && validate(PREVIOUS_SIBLING, INPUT.value)) {
        ELEMENT.style.display = ''
      } else if (ELEMENT.tagName === 'DT' && validate(NEXT_SIBLING, INPUT.value)) {
        ELEMENT.style.display = ''
      } else {
        ELEMENT.style.display = 'none'
      }
    }
  }

  /// Tests the innerHTML of an element against a string
  /// @param {html element node} element - The element to test
  /// @param {string} filter - The string to test against
  /// @return {boolean}
  function validate (element, filter) {
    for (let i = 0; i < tags.length; i++) {
      if (element.innerHTML.toUpperCase().indexOf(filter.toUpperCase()) > -1) {
        return true
      } else { return false }
    }
  }
}
