const menuHamburguesa = document.querySelector(".menu-hamburguesa");
const menu = document.querySelector(".menu");
const mainContenido = document.querySelector(".main-contenido");
const botonAceptarCookies = document.getElementById("btn-aceptar-cookies");
const avisoCookies = document.getElementById("aviso-cookies");
const fondoAvisoCookies = document.getElementById("fondo-aviso-coockies");

menuHamburguesa.addEventListener("click", () => {
    menu.classList.toggle("active");
    if (menu.classList.contains('active')) {
        mainContenido.style.marginTop = '280px';
        menu.style.paddingBottom = '10px';
    } else {
        mainContenido.style.marginTop = '0';
    }
});

avisoCookies.classList.add('active');
fondoAvisoCookies.classList.add('active')

botonAceptarCookies.addEventListener('click', () => {
    avisoCookies.classList.remove('active');
    fondoAvisoCookies.classList.remove('active');

    localStorage.setItem('coockies-aceptadas', true);
});
