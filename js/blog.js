//Muestra la caratula del juego seleccionado
$('li[data-caratulajuego]').on('click', function () {
    $('#caratulajuego').attr('src', '../images/' + $(this).data('caratulajuego'));
});