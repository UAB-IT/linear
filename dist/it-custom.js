function IT_addCSS(css) {
  const head = document.head || document.getElementsByTagName('head')[0];
  const style = document.createElement('style');
  head.appendChild(style);
  style.type = 'text/css';
  style.appendChild(document.createTextNode(css));
}

function IT_replaceBanner(debug = false) {
  const mainImg = document.querySelectorAll("div.item-image>img");
    if (debug) { console.log(mainImg[0]); }
  const mainSrc = mainImg[0].getAttribute("src");
    if (debug) { console.log(mainSrc); }

  let css = `
    #banner::before {
      background-image: url("${mainSrc}") !important;
    }
    div.item-image {
      display: none !important;
    }`;
  IT_addCSS(css);
}

// Adds tab index to interactive cards in Widgetkit
function IT_tabIndex(containerClass = "interactive-cards", elementClass = "uk-panel", debug = false){
  let container = document.getElementsByClassName(containerClass);
  let elem = container.getElementsByClassName(elementClass);
  for (let i = 0; i < elem.length; i++){
    if (debug === true) {console.log(elem[i]);}
    elem[i].tabIndex = 0;
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
IT_sidebar();

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
