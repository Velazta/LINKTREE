// audio_control.js atau tambahkan ke particles.js

document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('ambient-sound');
    
    if (audio) {
        audio.volume = 0.03; 
    }
    
    function playAudioOnce() {
        if (audio && audio.paused) {
            audio.play().catch(error => {
                console.log("Audio play failed, waiting for user interaction.", error);
            });
            
            document.removeEventListener('click', playAudioOnce);
            document.removeEventListener('keydown', playAudioOnce);
        }
    }

    document.addEventListener('click', playAudioOnce);
    document.addEventListener('keydown', playAudioOnce);
});