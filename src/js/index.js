import '../main.css';

const callAudio = (char) => {
    const audio = document.getElementById(char);
    audio.play()
    document.getElementById('display').textContent = audio.parentNode.id
} 

document.addEventListener('keydown', (e) => {
    const char = e.key.toUpperCase()
    switch (char) {
        case 'Q':
        case 'W':
        case 'E':
        case 'A':
        case 'S':
        case 'D':
        case 'Z':
        case 'X':
        case 'C':
            callAudio(char);
            break;
        default:
            break;
    }
})

document.querySelector('.all-drum').addEventListener('click', (e) => {
    if (e.target.classList.contains('drum-pad')) {
        callAudio(e.target.innerText);
    }
})