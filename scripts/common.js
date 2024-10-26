function nav(pageName){
    body = document.querySelector("body");
    main = document.querySelector("main");

    nav = document.createElement("nav");
    nav.classList.add("navbar", "navbar-expand-md", "navbar-dark", "fixed-top", "bg-dark", "p-0");

    // with language switch
    // nav.innerHTML = "\
    //         <div class=\"container-fluid\">\
    //             <a class=\"navbar-brand p-2 m-0 d-flex align-items-center\" href=\"/\"><img src=\"/images/icons/icon.jpg\" class=\"border border-light border-1 rounded-circle d-inline-block align-text-top\" height=\"36\"></a>\
    //             <div><i class=\"navbar-brand bi bi-translate\" onclick=\"changeLang()\"></i><a class=\"navbar-brand o-font-head p-0\">" + pageName +"</a></div>\
    //         </div>\
    //     <!--<div class=\"nav-border\"></div>-->\
    // "

    nav.innerHTML = "\
            <div class=\"container-fluid\">\
                <a class=\"navbar-brand p-2 m-0 d-flex align-items-center\" href=\"/\"><img src=\"/images/icons/icon.jpg\" class=\"border border-light border-1 rounded-circle d-inline-block align-text-top\" height=\"36\"></a>\
                <div><a class=\"navbar-brand o-font-head p-0\">" + pageName +"</a></div>\
            </div>\
        <!--<div class=\"nav-border\"></div>-->\
    "

    body.insertBefore(nav, main);
}

function changeLang() {
    const curr_div = document.querySelector("#curr_lang");
    const curr_lang = curr_div.classList[0];
    // alert(curr_lang);
    if(curr_lang === "lang-en"){
        const toHide = document.querySelectorAll(".lang-en");
        const toShow = document.querySelectorAll(".lang-ja");
        toHide.forEach((element) => element.style.display = "none");
        toShow.forEach((element) => element.style.display = "");
        curr_div.classList.remove("lang-en");
        curr_div.classList.add("lang-ja");
    }else if(curr_lang === "lang-ja"){
        const toHide = document.querySelectorAll(".lang-ja");
        const toShow = document.querySelectorAll(".lang-en");
        toHide.forEach((element) => element.style.display = "none");
        toShow.forEach((element) => element.style.display = "");
        curr_div.classList.remove("lang-ja");
        curr_div.classList.add("lang-en");
    }
}
