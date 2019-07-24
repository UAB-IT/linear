var mainImg = document.querySelectorAll("div.item-image>img");
console.log(mainImg[0]);

var mainSrc = mainImg[0].getAttribute("src");
console.log(mainSrc);

var css = '#banner::before { background-image: url( "'+mainSrc+'" ) !important; }',
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');

head.appendChild(style);

style.type = 'text/css';
style.appendChild(document.createTextNode(css));
