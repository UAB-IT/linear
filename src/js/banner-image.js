function IT_addCSS(css) {
  const head = document.head || document.getElementsByTagName('head')[0];
  const style = document.createElement('style');
  head.appendChild(style);
  style.type = 'text/css';
  style.appendChild(document.createTextNode(css));
}

// DEPRECIATED Implementing banner images with Joomla Modules
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
