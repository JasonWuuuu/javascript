(function () {
    var element = document.getElementById("event"),
        input = document.getElementById("input");
    var handler = function (e) {
        e = e || window.event;
        element.innerHTML = e.type;
    }
    input.addEventListener('change', function () {
        this.value = "you have changed something";

    }, false)
    element.onclick = handler;
    element.onmouseover = handler;
    element.onmouseout = handler;
    window.onload = handler;
    window.onkeydown = handler;
    window.onkeyup = handler;


})()

