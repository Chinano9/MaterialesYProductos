const boton_todo = document.getElementById("btn-todo");
const boton_stretch = document.getElementById("btn-stretch");
const boton_cintas = document.getElementById("btn-cintas");
const boton_identificacion = document.getElementById("btn-identificacion");
const boton_maquinas = document.getElementById("btn-maquinas");
const boton_empaque = document.getElementById("btn-empaque");

boton_todo.addEventListener("click", () => {
    if(boton_todo.classList.contains("seleccionado")){
        return;
    }
    colocarClase("todo");
});

boton_stretch.addEventListener("click", () => {
    if(boton_stretch.classList.contains("seleccionado")){
        return;
    }
    colocarClase("stretch");
});

boton_cintas.addEventListener("click", () => {
    if(boton_cintas.classList.contains("seleccionado")){
        return;
    }
    colocarClase("cintas");
});

boton_identificacion.addEventListener("click", () => {
    if(boton_identificacion.classList.contains("seleccionado")){
        return;
    }
    colocarClase("identificacion");
});

boton_maquinas.addEventListener("click", () => {
    if(boton_maquinas.classList.contains("seleccionado")){
        return;
    }
    colocarClase("maquinas");
});

boton_empaque.addEventListener("click", () => {
    if(boton_empaque.classList.contains("seleccionado")){
        return;
    }
    colocarClase("empaque");
});

console.log(boton_cintas.classList);

function colocarClase(elemento){
    switch(elemento){
        case "todo":
            boton_todo.classList.add("seleccionado");
            boton_stretch.classList.remove("seleccionado");
            boton_cintas.classList.remove("seleccionado");
            boton_identificacion.classList.remove("seleccionado");
            boton_maquinas.classList.remove("seleccionado");
            boton_empaque.classList.remove("seleccionado");
            break;
        case "stretch":
            boton_stretch.classList.add("seleccionado");
        boton_todo.classList.remove("seleccionado");
        boton_cintas.classList.remove("seleccionado");
        boton_identificacion.classList.remove("seleccionado");
        boton_maquinas.classList.remove("seleccionado");
        boton_empaque.classList.remove("seleccionado");
            break;
        case "cintas":
            boton_cintas.classList.add("seleccionado");
            boton_todo.classList.remove("seleccionado");
            boton_stretch.classList.remove("seleccionado");
            boton_identificacion.classList.remove("seleccionado");
            boton_maquinas.classList.remove("seleccionado");
            boton_empaque.classList.remove("seleccionado");
            break;
        case "identificacion":
            boton_identificacion.classList.add("seleccionado");
            boton_todo.classList.remove("seleccionado");
            boton_stretch.classList.remove("seleccionado");
            boton_cintas.classList.remove("seleccionado");
            boton_maquinas.classList.remove("seleccionado");
            boton_empaque.classList.remove("seleccionado");
            break;
        case "maquinas":
            boton_maquinas.classList.add("seleccionado");
            boton_todo.classList.remove("seleccionado");
            boton_stretch.classList.remove("seleccionado");
            boton_cintas.classList.remove("seleccionado");
            boton_identificacion.classList.remove("seleccionado");
            boton_empaque.classList.remove("seleccionado");
            break;
        case "empaque":
            boton_empaque.classList.add("seleccionado");
            boton_todo.classList.remove("seleccionado");
            boton_stretch.classList.remove("seleccionado");
            boton_cintas.classList.remove("seleccionado");
            boton_identificacion.classList.remove("seleccionado");
            boton_maquinas.classList.remove("seleccionado");
            break;
        default:
            throw new Error("Boton no valido");
    }
}