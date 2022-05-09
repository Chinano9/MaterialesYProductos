document.addEventListener('scroll', () => {
    const elementos = document.getElementsByClassName('tag');
    console.log("Scrolling");
    for (let elemento of elementos) {
        let esVisible = isInViewport(elemento);
        if (!esVisible) {
            elemento.classList.add('visible');
        } else {
            elemento.classList.remove('visible');
        }
    }
});

function isInViewport(element) {
    const rect = element.getBoundingClientRect();

    return (
        rect.bottom >= (window.innerHeight +100 || document.documentElement.clientHeight + 100)
    );
}