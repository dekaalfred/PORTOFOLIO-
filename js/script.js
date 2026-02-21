document.addEventListener("DOMContentLoaded", () => {
  const typed = document.getElementById("typed");
  const words = [
    "Hey I'm Deka Alfred",
    "UI/UX Designer & Fullstack Developer",
  ];

  let wordIndex = 0;     
  let charIndex = 0;     
  let isDeleting = false;
  const typingSpeed = 100;   // kecepatan ketik
  const eraseSpeed = 60;     // kecepatan hapus
  const delayBetween = 2500; // jeda antar kata
  const delayBeforeStart = 1500; // jeda awal sebelum mulai ngetik

  function type() {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
      // mengetik
      typed.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentWord.length) {
        // selesai ngetik kata, tunggu sebentar lalu hapus
        isDeleting = true;
        setTimeout(type, delayBetween);
      } else {
        setTimeout(type, typingSpeed);
      }
    } else {
      // menghapus
      typed.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        // pindah kata
        isDeleting = false;
        wordIndex++;

        if (wordIndex >= words.length) {
          // sudah sampai kata terakhir → kembali ke kata pertama
          wordIndex = 0;

          // langsung tulis kata pertama penuh dan stop
          typed.textContent = words[0];
          return; // STOP di sini
        }
        setTimeout(type, typingSpeed);
      } else {
        setTimeout(type, eraseSpeed);
      }
    }
  }

  // jeda awal sebelum mulai mengetik
  setTimeout(type, delayBeforeStart);
});
