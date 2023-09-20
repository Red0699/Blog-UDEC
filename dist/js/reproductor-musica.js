document.addEventListener('DOMContentLoaded', function () {
    const audioPlayer = document.getElementById('audio-player');
    const playPauseButton = document.getElementById('play-pause-button');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    const songTitle = document.querySelector('.song-title');
    const artist = document.querySelector('.artist');

    //console.log(musicRep)

    // Array de canciones
    const songs = [
        { title: 'Nocturne Op.9 No.2', artist: 'Frédéric Chopin', source: './assets/music/Nocturne.mp3' },
        { title: 'Polonaise, Op. 53', artist: 'Fréderic Chopin', source: './assets/music/Polonaise.mp3' },
    ];

    let currentSongIndex = 0;

    // Función para cargar y reproducir una canción
    function loadSong(index) {
        const song = songs[index];
        audioPlayer.src = song.source;
        songTitle.textContent = song.title;
        artist.textContent = song.artist;
        audioPlayer.play();
    }

    // Inicializa con la primera canción
    loadSong(currentSongIndex);

    // Control de reproducción/pausa
    playPauseButton.addEventListener('click', function () {
        if (audioPlayer.paused || audioPlayer.ended) {
            audioPlayer.play();
            playPauseButton.innerHTML = '<i class="fa-solid fa-pause"></i>';
        } else {
            audioPlayer.pause();
            playPauseButton.innerHTML = '<i class="fa-solid fa-play"></i>';
        }
    });

    // Cambiar a la canción anterior
    prevButton.addEventListener('click', function () {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        loadSong(currentSongIndex);
    });

    // Cambiar a la siguiente canción
    nextButton.addEventListener('click', function () {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        loadSong(currentSongIndex);
    });

});
