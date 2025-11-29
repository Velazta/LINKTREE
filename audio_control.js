// audio_control.js atau tambahkan ke particles.js

document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('ambient-sound');
    
    // Fungsi untuk memulai audio
    function playAudioOnce() {
        // Coba putar audio.
        // Cek dulu apakah audio sudah memiliki data dan belum berstatus 'paused'
        if (audio && audio.paused) {
            audio.play().catch(error => {
                // Tangani error jika pemutaran gagal (karena browser blocking)
                console.log("Audio play failed, waiting for user interaction.", error);
            });
            
            // Hapus event listener setelah interaksi pertama
            document.removeEventListener('click', playAudioOnce);
            document.removeEventListener('keydown', playAudioOnce);
        }
    }

    // Tunggu interaksi pengguna pertama (klik atau tekan tombol)
    document.addEventListener('click', playAudioOnce);
    document.addEventListener('keydown', playAudioOnce);
});