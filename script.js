// Zmienna do odtwarzacza audio
const audioPlayer = document.getElementById('audio-player');
const stopButton = document.getElementById('stop-button');
const playButton = document.getElementById('play-button');

// Funkcja zatrzymania odtwarzania
stopButton.addEventListener('click', function() {
    audioPlayer.pause();
    audioPlayer.currentTime = 0; // Resetuje piosenkę do początku
});

// Funkcja wznowienia odtwarzania
playButton.addEventListener('click', function() {
    audioPlayer.play();
});
