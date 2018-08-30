window.onload = function(){
    var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    if(!isChrome){
        removeElement('iframeAudio');    
    } else {
        removeElement('playAudio');    
    }
}

function removeElement(id) {
    var element = document.getElementById(id);
    element.parentNode.removeChild(element);
}