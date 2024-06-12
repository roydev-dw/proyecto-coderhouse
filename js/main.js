const menuHamburguesa = document.querySelector(".menu-hamburguesa");
const menu = document.querySelector(".menu");
const mainContenido = document.querySelector(".main-contenido");

menuHamburguesa.addEventListener("click", () => {
    menu.classList.toggle("active");
    if (menu.classList.contains('active')) {
        mainContenido.style.marginTop = '280px';
        menu.style.paddingBottom = '10px';
    } else {
        mainContenido.style.marginTop = '0';
    }
});
