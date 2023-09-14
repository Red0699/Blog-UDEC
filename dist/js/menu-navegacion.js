// Variables para controlar el estado de las opciones

// Verificar si hay un valor almacenado para musicEnabled en localStorage
let musicEnabled = localStorage.getItem('musicEnabled') === 'false';
let contrastEnabled = false;

document.addEventListener('DOMContentLoaded', function () {
    const musicOption = document.getElementById('music-option');
    const contrastOption = document.getElementById('contrast-option');
    const musicPlayer = document.getElementById('music-player');
    const audioPlayer = document.getElementById('audio-player');

    // Función para actualizar el estado de musicEnabled en localStorage
    function updateMusicEnabledState(enabled) {
        localStorage.setItem('musicEnabled', enabled.toString());
    }

    /* -------------------Eventos para las opciones-------------------------- */

    console.log(musicEnabled)
    //Música
    musicOption.addEventListener('click', function () {
        musicEnabled = !musicEnabled;
        updateOptionState(musicOption, musicEnabled, 'Música');
        updateMusicEnabledState(musicEnabled); // Guardar el estado en localStorage

        if (musicEnabled) {
            musicPlayer.style.display = 'flex'; // Mostrar el reproductor de música
            audioPlayer.play();
            console.log('deberia mostrarse')
            
        } else {
            musicPlayer.style.display = 'none'; // Ocultar el reproductor de música
            audioPlayer.pause();
            audioPlayer.currentTime = 0;
            console.log('deberia ocultarse')
        }

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
