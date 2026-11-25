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
