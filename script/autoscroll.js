function scrollDown(direction) {    // direction = 1 scrolls down, direction = -1 scrolls up
    var pageHeight = direction * document.getElementsByClassName("page")[0].clientHeight;
    window.scrollBy(0, pageHeight);
}