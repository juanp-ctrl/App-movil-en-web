let ele2, ele, menu, v_login, v_home, entrar, vistas = [];

//Iniciar la ejecucion de la funcion cuando la pagina cargue por completo
document.addEventListener('readystatechange', function() {
    if (document.readyState === "complete") {
        ele2 = document.getElementsByTagName("div")[0];
        ele = ele2.getElementsByTagName("div")[0];
        menu = document.getElementsByTagName("nav")[0];
        v_login = document.getElementById("vista_login");
        v_home = document.getElementById("vista_home");
        vistas.push(v_login);
        vistas.push(v_home);
        init();
        cargarVistas();
    }
});

function cargarVistas(){
    for(let i = 0; i<vistas.length; i++){
        vistas[i].classList.add("hide");
    }
    vistas[0].classList.remove("hide");
    entrar = document.getElementById("Entrar").addEventListener("click", vistaHome);
}

function vistaHome(){
    for(let i = 0; i<vistas.length; i++){
        vistas[i].classList.add("hide");
    }
    vistas[1].classList.remove("hide");
}

//Funcion para cambiar el estado del menu
function toggleMenu() {
    if (!hasClass(ele, "menu-open")) {
        ele.classList.add("menu-open");
    } else {
        ele.classList.remove("menu-open");
    }

    if (!hasClass(menu, "menu-open")) {
        menu.classList.add("menu-open");
    } else {
        menu.classList.remove("menu-open");
    }
}

//A los elementos con estos ids les agregamos un evento de click para ejecutar la funcion activarMenu
function init() {
    document.getElementById("open-menu").addEventListener("click", toggleMenu);
    document.getElementById("body-overlay").addEventListener("click", toggleMenu);
}

function hasClass(ele, cls) {
    return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

