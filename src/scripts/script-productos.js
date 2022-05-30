const boton_todo = document.getElementById("btn-todo");
const ribbons = document.getElementsByClassName("ribbons");
const boton_cintas = document.getElementById("btn-cintas");
const cintas = document.getElementsByClassName("cintas");
const boton_identificacion = document.getElementById("btn-etiquetas");
const identificacion = document.getElementsByClassName("etiquetas");
const boton_empaque = document.getElementById("btn-empaque");
const empaque = document.getElementsByClassName("empaque");

boton_todo.addEventListener("click", () => {
    if (boton_todo.classList.contains("seleccionado")) {
        return;
    }
    colocarClaseOculto("todo");
});

boton_cintas.addEventListener("click", () => {
    if (boton_cintas.classList.contains("seleccionado")) {
        return;
    }
    colocarClaseOculto("cintas");
});

boton_identificacion.addEventListener("click", () => {
    if (boton_identificacion.classList.contains("seleccionado")) {
        return;
    }
    colocarClaseOculto("etiquetas");
});

boton_empaque.addEventListener("click", () => {
    if (boton_empaque.classList.contains("seleccionado")) {
        return;
    }
    colocarClaseOculto("empaque");
});

// Redireccionar a un producto.
function redireccionar(url){
    window.location.href = url;
}

//esta funcion coloca la clase "seleccionada", lo cual hace que el boton se muestre como seleccionado
//para que el usuario pueda saber que elemento selecciono
//parametro: nombre del elemento
//retorno: void
//ejemplo: colocarClaseOculto("todo");
function colocarClaseOculto(elemento) {
    switch (elemento) {
        case "todo":
            boton_todo.classList.add("seleccionado");
            boton_cintas.classList.remove("seleccionado");
            boton_identificacion.classList.remove("seleccionado");
            boton_empaque.classList.remove("seleccionado");

            //se muestran todas las categorias
            for (const element of ribbons) {
                element.classList.remove("oculto");
            }
            for (const element of cintas) {
                element.classList.remove("oculto");
            }
            for (const element of identificacion) {
                element.classList.remove("oculto");
            }
            for (const element of empaque) {
                element.classList.remove("oculto");
            }
            break;

        case "cintas":
            boton_cintas.classList.add("seleccionado");
            boton_todo.classList.remove("seleccionado");
            boton_identificacion.classList.remove("seleccionado");
            boton_empaque.classList.remove("seleccionado");

            //se muestran solo las categorias de cintas
            for (const element of ribbons) {
                element.classList.add("oculto");
            }
            for (const element of cintas) {
                element.classList.remove("oculto");
            }
            for (const element of identificacion) {
                element.classList.add("oculto");
            }
            for (const element of empaque) {
                element.classList.add("oculto");
            }
            break;
        case "etiquetas":
            boton_identificacion.classList.add("seleccionado");
            boton_todo.classList.remove("seleccionado");
            boton_cintas.classList.remove("seleccionado");
            boton_empaque.classList.remove("seleccionado");
    
            //se muestran solo las categorias de identificacion  
            for (const element of ribbons) {
                element.classList.remove("oculto");
            }
            for (const element of cintas) {             
                element.classList.add("oculto");
            }
            for (const element of identificacion) {
                element.classList.remove("oculto");
            }
            for (const element of empaque) {
                element.classList.add("oculto");
            }
            break;
        case "empaque":
            boton_empaque.classList.add("seleccionado");
            boton_todo.classList.remove("seleccionado");
            boton_cintas.classList.remove("seleccionado");
            boton_identificacion.classList.remove("seleccionado");

            //se muestran solo las categorias de empaque
            for (const element of ribbons) {
                element.classList.add("oculto");
            }
            for (const element of cintas) {
                element.classList.add("oculto");
            }
            for (const element of identificacion) {
                element.classList.add("oculto");
            }
            for (const element of empaque) {
                element.classList.remove("oculto");
            }
            break;
        default:
            throw new Error("Boton no valido");
    }
}