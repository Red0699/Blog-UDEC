document.addEventListener('DOMContentLoaded', function () {
    const musicOption = document.getElementById('music-option');
    const contrastOption = document.getElementById('contrast-option');

    // Variables para controlar el estado de las opciones
    let musicEnabled = true;
    let contrastEnabled = false;

    /* -------------------Eventos para las opciones-------------------------- */

    //Música
    musicOption.addEventListener('click', function () {
        musicEnabled = !musicEnabled;
        updateOptionState(musicOption, musicEnabled, 'Música');
    });

    // Contraste
    contrastOption.addEventListener('click', function () {
        contrastEnabled = !contrastEnabled;
        updateOptionState(contrastOption, contrastEnabled, 'Contraste');
    });

    //----------------------------------------------------------------------------
    
    // Función para actualizar el estado y texto de las opciones
    function updateOptionState(option, isEnabled, optionName) {
        if (isEnabled) {
            option.classList.add('active');
            option.querySelector('.menu-text').textContent = `Deshabilitar ${optionName}`;
        } else {
            option.classList.remove('active');
            option.querySelector('.menu-text').textContent = `Habilitar ${optionName}`;
        }
    }
});
