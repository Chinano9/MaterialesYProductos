try {
    const hamburguesa = document.getElementById("hamburguesa");
    const menu = document.getElementById("menu-responsivo")
    hamburguesa.addEventListener("click", () => {
        if (menu.classList.contains("mostrar")) {
            menu.classList.remove("mostrar");
            return;
        }
    
        menu.classList.add("mostrar");
    });
} catch (e) {
    
}

/**
 * Redirecciona al cliente a la url especificada
 * @param {string} url url al que se quiere redireccionar
 */
function redireccionar(url) {
    window.location.href = url;
}
