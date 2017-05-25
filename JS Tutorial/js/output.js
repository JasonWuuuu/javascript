(function () {
    if (document.addEventListener) {
        document.addEventListener('click', handler, false);

    }
    else {
        document.attachEvent('click', handler);
    }//IE事件兼容


    function handler(e) {
        var title = document.getElementById("title"),
            output = document.getElementById("output").value;//input框用value而不是nodevalue，后者指的应该是标签中innerHTML的值
        ;
        switch (e.target.id) {
            case "i_nnerHTML":
                title.innerHTML = output;
                break;
            case "a_lert":
                window.alert(output);
                break;
            case "c_onsole":
                console.log(output);
                break;
            case "d_ocument":
                document.write(output);
                break;

            default:
                break;
        }
    }

})();