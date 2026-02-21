// about.js
const text = `I’m Deka Alfred Ibnu Kiswanto, a 16-year-old student with a deep passion for design and web development. From a young age, I’ve been fascinated by how technology can shape the way people interact with information and experiences. I enjoy creating visually appealing, user-friendly, and responsive websites that not only look great but also solve real problems.

I’m constantly learning new technologies and design trends to improve my skills, whether it’s exploring front-end frameworks, experimenting with UI/UX principles, or understanding how back-end systems work. My goal is to keep growing as a designer and developer while contributing to impactful and meaningful digital projects that bring value to users.`;

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
