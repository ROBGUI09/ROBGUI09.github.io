window.onscroll = function () {
    canvas.style.top = Math.round(window.scrollY * 0.9).toString() + 'px';
    document.getElementsByTagName('main')[0].style.top = Math.round(window.scrollY / 2).toString() + 'px';
