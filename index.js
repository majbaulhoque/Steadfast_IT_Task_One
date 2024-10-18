let menu = document.getElementById("menulist");
let menuIcon = document.getElementById("menuIcon");

menulist.style.maxHeight = "0px";

function toggleMenu(){
    if(menulist.style.maxHeight === "0px"){
        menulist.style.maxHeight = "300px";
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-times"); 
    } else {
        menulist.style.maxHeight = "0px";
        menuIcon.classList.remove("fa-times");
        menuIcon.classList.add("fa-bars");
    }
}