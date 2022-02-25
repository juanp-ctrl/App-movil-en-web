let ele2, ele, menu, v_login, v_home, entrar, cerrar, vistas = [];

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
    let s = sessionStorage.getItem("sesion");
    if(s == 0){
        for(let i = 0; i<vistas.length; i++){
            vistas[i].classList.add("hide");
        }
        vistas[0].classList.remove("hide");
        entrar = document.getElementById("Entrar").addEventListener("click", vistaHome);
        cerrar = document.getElementById("cerrar_s").addEventListener("click", cerrarSesion);
    }
    else{
        vistaHome();
    }
}

function vistaHome(){
    sessionStorage.setItem("sesion", 1);
    for(let i = 0; i<vistas.length; i++){
        vistas[i].classList.add("hide");
    }
    vistas[1].classList.remove("hide");
    cerrar = document.getElementById("cerrar_s").addEventListener("click", cerrarSesion);
}

function cerrarSesion(){
    document.getElementById("real-menu").classList.remove("menu-open");
    document.getElementById("body-overlay").addEventListener("click", cerrarRecuadro);
    document.getElementById("recuadro_s").classList.add("active");
    document.getElementById("entendido").addEventListener("click", cerrarRecuadro);
}

function cerrarRecuadro(){
    document.getElementById("recuadro_s").classList.remove("active");
    document.getElementById("body-overlay").classList.remove("menu-open");
    sessionStorage.setItem("sesion", 0);
    cargarVistas();
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

//para mostrar los apuntes de acuerdo con la seleccion del combo
//carga divs de cada apunte en un vector, guardamos id y los identificamos por materia
// identificamos la seleccion del combo
//de acuerdo con la seleccion mostramos solo los que tienen ese id que corresponde a la materia
//seleccionada y ocultamos el resto
function cargarApuntes(){

}
function muestra_oculta(id){
    if (document.getElementById){ //se obtiene el id
    var el = document.getElementById(id); //se define la variable "el" igual a nuestro div
    el.style.display = (el.style.display == 'none') ? 'block' : 'none'; //damos un atributo display:none que oculta el div
    }
    }
    window.onload = function(){/*hace que se cargue la función lo que predetermina que div estará oculto hasta llamar a la función nuevamente*/
    muestra_oculta('contenido');/* "contenido_a_mostrar" es el nombre que le dimos al DIV */
}
