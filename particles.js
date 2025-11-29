const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

let width, height;
let particles = [];
const particleCount = 100; // Jumlah partikel yang akan dibuat

// Fungsi untuk menyesuaikan ukuran canvas
function resizeCanvas() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Kelas Particle
class Particle {
    constructor() {
        // Posisi awal di atas layar (y = 0) secara acak
        this.x = Math.random() * width;
        this.y = Math.random() * height; // Dimulai dari ketinggian acak
        this.size = Math.random() * 3 + 1; // Ukuran 1 hingga 4
        // Kecepatan vertikal (gerak jatuh)
        this.speedY = Math.random() * 0.4 + 0.1;
        // Kecepatan horizontal kecil untuk efek angin
        this.speedX = Math.random() * 0.5 - 0.25;
        this.color = 'rgba(255, 255, 255, 0.8)';
    }

    // Update posisi partikel
    update() {
        this.y += this.speedY;
        this.x += this.speedX;

        // Jika partikel jatuh di bawah layar, kembalikan ke atas
        if (this.y > height) {
            this.y = 0;
            this.x = Math.random() * width;
        }
    }

    // Gambar partikel
    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

// Inisialisasi partikel
function init() {
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}

// Loop Animasi Utama
function animate() {
    // Bersihkan canvas setiap frame
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
    }
    
    // Minta browser untuk menggambar ulang di frame berikutnya
    requestAnimationFrame(animate);
}

init();
animate();