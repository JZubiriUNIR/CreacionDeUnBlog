//Validacion de formulario
$('#formContacto').on('submit', function (e) {
    e.preventDefault();

    if (!this.checkValidity()) {
        this.reportValidity();
        return;
    }

    alert('¡Mensaje enviado! (simulado)');
    this.reset();
});