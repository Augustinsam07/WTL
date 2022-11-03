function bgcolor() {
    var elements = document.getElementById("i").value; var elements2 =
        document.getElementById("d1"); elements2.style.backgroundColor = elements;
}
function tcolor() {
    var elements = document.getElementById("i2").value; var elements2 =
        document.getElementById("d1"); elements2.style.color = elements;
}
function ts() {
    var elements = document.getElementById("i3").value; var elements2 =
        document.getElementById("d1"); elements2.style.fontSize = elements + "px";
}
function bw() {
    var elements = document.getElementById("i4").value; var elements2 =
        document.getElementById("d1"); elements2.style.width = elements + "px";
}
function bh() {
    var elements = document.getElementById("i5").value; var elements2 =
        document.getElementById("d1");
    var elements3 = elements * (3 / 4); elements2.style.height = elements + "px";
    elements2.style.paddingTop = elements3 + "px";
}
function r() {
    var elements = document.getElementById("i6").value; var elements2 =
        document.getElementById("d1"); elements2.style.borderRadius = elements + "px";
}