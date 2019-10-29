// Adds tab index to interactive cards in Widgetkit

var widget = document.getElementsByClassName("interactive-cards")[0];
var elem = widget.getElementsByClassName("uk-panel");
    
for (let i = 0; i < elem.length; i++) {
  //console.log(elem[i]);
  elem[i].tabIndex = 0;
}