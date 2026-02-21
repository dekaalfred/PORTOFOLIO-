// about.js
const text = `Saya Deka Alfred Ibnu Kiswanto, seorang siswa berusia 16 tahun dengan hasrat mendalam terhadap desain dan pengembangan web. Sejak kecil, saya selalu tertarik dengan bagaimana teknologi dapat membentuk cara orang berinteraksi dengan informasi dan pengalaman. Saya menikmati membuat situs web yang menarik secara visual, mudah digunakan, dan responsif, yang tidak hanya terlihat bagus tetapi juga menyelesaikan masalah nyata.

Saya terus-menerus mempelajari teknologi baru dan tren desain untuk meningkatkan keterampilan saya, baik itu menjelajahi kerangka kerja front-end, bereksperimen dengan prinsip UI/UX, atau memahami bagaimana sistem back-end bekerja. Tujuan saya adalah terus berkembang sebagai desainer dan pengembang sambil berkontribusi pada proyek digital yang berdampak dan bermakna yang memberikan nilai bagi pengguna.`

let i = 0;
const speed = 40;

function typeWriter() {
  const aboutText = document.getElementById("about-text");
  if (!aboutText) return; // aman kalau elemen belum ada

  if (i < text.length) {
    // Ganti newline dengan <br><br> supaya paragraf rapi
    const char = text.charAt(i) === '\n' ? '<br><br>' : text.charAt(i);
    aboutText.innerHTML += char;
    i++;
    setTimeout(typeWriter, speed);
  }
}

// Jalankan setelah halaman siap
window.addEventListener("DOMContentLoaded", typeWriter);
