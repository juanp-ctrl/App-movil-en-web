let ele2, ele, menu, v_login, v_home, entrar, cerrar, vistas = [];

let path = window.location.pathname;
let page = path.split("/").pop();

//Iniciar la ejecucion de la funcion cuando la pagina cargue por completo
document.addEventListener('readystatechange', function() {
    if (document.readyState === "complete") {
        ele2 = document.getElementsByTagName("div")[0];
        ele = ele2.getElementsByTagName("div")[0];
        menu = document.getElementsByTagName("nav")[0];
        if(page === "index.html"){
            v_login = document.getElementById("vista_login");
            v_home = document.getElementById("vista_home");
            vistas.push(v_login);
            vistas.push(v_home);
            cargarVistas();
        }
        else if(page === "apuntes.html"){
            cargarCategorias();
        }
        else{
            cerrar = document.getElementById("cerrar_s").addEventListener("click", cerrarSesion);
        }
        init();
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
    toggleMenu();
    document.getElementById("body-overlay2").classList.add("menu-open");
    document.getElementById("recuadro_s").classList.add("active");
    document.getElementById("entendido").addEventListener("click", cerrarRecuadro);
}

function cerrarRecuadro(){
    document.getElementById("recuadro_s").classList.remove("active");
    document.getElementById("body-overlay2").classList.remove("menu-open");
    sessionStorage.setItem("sesion", 0);
    if(page === "index.html"){
        cargarVistas();
    }
    else{
        document.location = "index.html";
    }
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
let categorias = [], val;
function cargarCategorias(){
    let opcion = document.getElementById('opciones').selectedOptions[0].value;
    for (let i = 0; i < 4; i++) {
        let valor = document.getElementById("enlace").childNodes;
        categorias.push(valor);
    }

    let n = 0;

    categorias.forEach(element => {
        if(element.item(n).id != opcion){
            val = document.getElementById(element.item(n).id);
        }
        n++
    });
}




//Codigo manu

//para mostrar los apuntes de acuerdo con la seleccion del combo
//carga divs de cada apunte en un vector, guardamos id y los identificamos por materia
// identificamos la seleccion del combo
//de acuerdo con la seleccion mostramos solo los que tienen ese id que corresponde a la materia
//seleccionada y ocultamos el resto
// function cargarApuntes(){

// }
// function muestra_oculta(id){
//     if (document.getElementById){ //se obtiene el id
//     var el = document.getElementById(id); //se define la variable "el" igual a nuestro div
//     el.style.display = (el.style.display == 'none') ? 'block' : 'none'; //damos un atributo display:none que oculta el div
//     }
//     }
//     window.onload = function(){/*hace que se cargue la función lo que predetermina que div estará oculto hasta llamar a la función nuevamente*/
//     muestra_oculta('contenido'); "contenido_a_mostrar" //es el nombre que le dimos al DIV
// }


//para el registro
var valido;

document.getElementById("boton_registro").addEventListener("click",validacion);


//funcion para validar que los campos esten completos
function validacion (){
    var valores = [];
    valido = true;
    //agrego datos del usuario en un array
    valores.push(document.getElementById("nombre").value);
    valores.push(document.getElementById("correo").value);
    valores.push(document.getElementById("universidad").value);
    valores.push(document.getElementById("carrera").value);
    valores.push(document.getElementById("monitor").value);
    valores.push(document.getElementById("password").value);

    for(let i=0; i<valores.length; i++){
        if (valores[i] == ""){
            valido = false;
            break;
        }
    }

    if(valido == true){
        if (!localStorage.getItem(correo)){
            registro();
        }
        else{
            alert("Usted ya se encuentra registrado");
            document.location = "index.html";
        }
       
    } else{
        alert('Por favor completa todos los campos');
    }
}

function registro(){
    var nombre = document.getElementById("nombre").value; //obtengo los valores del los campos del form
    var correo = document.getElementById("correo").value;
    var universidad = document.getElementById("universidad").value;
    var carrera = document.getElementById("carrera").value;
    var password = document.getElementById("password").value;
    var formulario = document.getElementById("formulario");


    //creo un objeto usuario
     var datosUsuario = {
        nombre: nombre,
        correo: correo,
        universidad: universidad,
        carrera: carrera,
        password: password
    };

    //agrego los datos del usuario al localStorage
    localStorage.setItem(datosUsuario.correo, JSON.stringify(datosUsuario));
    console.log(datosUsuario)
    formulario.reset(); //blanquea los campos del form
    alert('Registro exitoso. Bienvenido a EstudiantesApp');
    document.location = "index.html#"; 
   
}
