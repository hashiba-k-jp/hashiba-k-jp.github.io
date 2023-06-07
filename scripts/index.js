

function changeName(){
    target = document.querySelector("#name");
    if(target.classList.contains("name-url")){
        target.classList.remove("name-url");
        target.classList.add("name-name");
        target.innerHTML = "<span class=\"lead\">HASHIBA Keishi</span>";
    }else if(target.classList.contains("name-name")) {
        target.classList.remove("name-name");
        target.classList.add("name-url");
        target.innerHTML = "<span class=\"lead o-font-head\">hashiba-k-jp.github.io</span>";
    }
}

/*

*/