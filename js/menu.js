const btnMenu = document.getElementById("btn-menu");
const menu = document.getElementById("nav");
const menuInterno = document.getElementsByClassName("link");

btnMenu.addEventListener("click", function(){
    menu.classList.toggle("mostrar");
});

for (var i = 0 ; i < menuInterno.length; i++) {
    menuInterno[i].addEventListener('click' , function(){
        menu.classList.toggle("mostrar");
    }) ; 
}



