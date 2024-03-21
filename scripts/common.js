function nav(pageName){
    body = document.querySelector("body");
    main = document.querySelector("main");

    nav = document.createElement("nav");
    nav.classList.add("navbar", "navbar-expand-md", "navbar-dark", "fixed-top", "bg-dark", "p-0");
    nav.innerHTML = "\
            <div class=\"container-fluid\">\
                <a class=\"navbar-brand p-2 m-0 d-flex align-items-center\" href=\"/\"><img src=\"/images/icons/icon.jpg\" class=\"border border-light border-1 rounded-circle d-inline-block align-text-top\" height=\"36\"></a>\
                <a class=\"navbar-brand o-font-head p-0\">" + pageName +"</a>\
            </div>\
        <!--<div class=\"nav-border\"></div>-->\
    "

    body.insertBefore(nav, main);
}