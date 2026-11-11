//Color de fondo según título
if (document.title === "Mario") {
    document.body.style.backgroundColor = "red";
} else if (document.title === "Luigi") {
    document.body.style.backgroundColor = "green";
} else if (document.title === "Wario") {
    document.body.style.backgroundColor = "yellow";
} else if (document.title === "Waluigi") {
    document.body.style.backgroundColor = "purple";
} else {
    document.body.style.backgroundColor = "white";
}

const paginaActual = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('#menu a').forEach(a => {
    if (a.getAttribute('href').includes(paginaActual)) {
        a.style.fontWeight = 'bold';
        a.style.borderBottom = '2px solid';
    }
});

document.querySelector('footer').insertAdjacentHTML('afterend',
    `<p>${new Date().toLocaleDateString('es-ES', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })}</p>`
);

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

document.querySelectorAll("li[data-portada]").forEach(li => {
    li.addEventListener("click", () => {
        document.getElementById("portadaJuego").src =
            "../images/" + li.dataset.portada;
    });
});