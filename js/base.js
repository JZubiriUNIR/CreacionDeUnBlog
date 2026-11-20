//Color de fondo según título
const colores = {
    "Mario": "red",
    "Luigi": "green",
    "Wario": "yellow",
    "Waluigi": "purple"
};
$("body").css("backgroundColor", colores[$("title").text()] || "white");

//Incidir en la página actual
const paginaActual = location.pathname.split('/').pop() || 'index.html';
$('#menu a').filter(function () {
    return $(this).attr('href').includes(paginaActual);
}).css({fontWeight: 'bold', borderBottom: '2px solid'});

//Fecha actual en el footer
$('footer').after(`<p>${new Date().toLocaleDateString('es-ES', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
})}</p>`);

document.getElementById('formContacto')?.addEventListener('submit', e => {
    e.preventDefault();
    const nombre = e.target.nombre.value.trim();
    const email = e.target.email.value.trim();
    const msg = e.target.mensaje.value.trim();

    if (!nombre) return alert('Escribe tu nombre.');
    if (!/^\S+@\S+\.\S+$/.test(email)) return alert('Email no válido.');
    if (!msg) return alert('Escribe un mensaje.');

    alert('¡Mensaje enviado! (simulado)');
    e.target.reset();
});

//Muestra la caratula del juego seleccionado
$('li[data-caratulajuego]').on('click', function () {
    $('#caratulajuego').attr('src', '../images/' + $(this).data('caratulajuego'));
});