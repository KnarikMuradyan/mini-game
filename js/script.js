"use strict"

window.addEventListener( "DOMContentLoaded" ,() => {

    let nIntervId;
    
    function changeColor() {
      if (!nIntervId) {
        nIntervId = setInterval(flashText,70);
      }
    }
    
    function flashText() {
      const Elem = document.getElementById("my_box");
      Elem.className = Elem.className === "go" ? "stop" : "go";
    }
    
    function stopTextColor() {
      clearInterval(nIntervId);
      nIntervId = null;
    }
    
    document.getElementById("start").addEventListener("click", changeColor);
    document.getElementById("stop").addEventListener("click", stopTextColor);
    
})
