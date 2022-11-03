var p = 5; function start() {
    var a = document.getElementById("i"); id = setInterval(imagemove, 5); function imagemove() {
        if (p == 745) {
            clearInterval(id); document.getElementById('d').style.opacity
                = 1;
        }
        else {
            p += 5;
            a.style.left = p + 'px';
        }
    }
}
function stop() {
    clearInterval(id);
}
function reset() {
    document.getElementById('d').style.opacity = 0;
    document.getElementById('i').style.left = "5px"; clearInterval(id); p = 5;
}
