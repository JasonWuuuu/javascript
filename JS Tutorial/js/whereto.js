document.addEventListener('click', function (e) {
    var title = document.getElementById("title");
    switch (e.target.id) {
        case "changeSize":
            title.style.fontSize = '30px';
            break;
        case "hideTitle":
            title.style.display = 'none';
            break;
        case "showTitle":
            title.style.display = 'block';
            break;

        default:
            break;
    }
}, false);