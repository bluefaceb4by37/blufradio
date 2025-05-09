// Skrypt do zmiany tytułu utworu
let songName = document.getElementById('song-name');

// Zmieniamy tytuł utworu na 'Manieczki - Que Sera' przy załadowaniu strony
songName.innerText = 'Manieczki - Que Sera';

// Dodatkowe efekty mogą być dodane, np. animacja na hover, zmiana tła, itp.
document.body.style.transition = 'background-color 0.5s ease';

// Zmiana tła na dzień/noc (w zależności od godziny)
let hours = new Date().getHours();
if (hours >= 6 && hours < 18) {
    // Dzień
    document.body.style.backgroundColor = '#f2f2f2';
    document.body.style.color = '#000';
} else {
    // Noc
    document.body.style.backgroundColor = '#111';
    document.body.style.color = '#fff';
}
