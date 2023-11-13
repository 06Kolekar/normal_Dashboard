let menu = document.getElementById("menu");
let close = document.getElementById("close");

let nav = document.getElementById("nav");
let layout = document.getElementById("layout");

menu.onclick = function(){
    menu.style.visibility = "hidden";
    close.style.visibility = "visible";

    nav.style.visibility = "visible";
    layout.style.left = "25rem";
}

close.onclick = function(){
    menu.style.visibility = "visible";
    close.style.visibility = "hidden";

    nav.style.visibility = "hidden";
    layout.style.left = "15rem";
}
    
