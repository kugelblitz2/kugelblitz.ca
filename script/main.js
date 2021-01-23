// Automatic Scrolling
function scrollDown(direction) {    // direction = 1 scrolls down, direction = -1 scrolls up
    var pageHeight = direction * document.getElementsByClassName("page")[0].clientHeight;
    window.scrollBy(0, pageHeight);
}

// Dark Mode
var light = '#F9F9F9';
var dark = '#444444';
setColorScheme();

if(window.matchMedia){
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setColorScheme);
}

function setColorScheme() {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
        document.documentElement.style.setProperty('--maincolor', dark);
        document.documentElement.style.setProperty('--textcolor', light);
    }
    else{
        document.documentElement.style.setProperty('--maincolor', light);
        document.documentElement.style.setProperty('--textcolor', dark);
    }
}