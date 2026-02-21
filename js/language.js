// ===============================
// LANGUAGE SYSTEM - FIXED & SAFE
// ===============================

const $ = id => document.getElementById(id);

const safeText = (id, value) => {
  const el = $(id);
  if (el) el.textContent = value;
};

const safePlaceholder = (id, value) => {
  const el = $(id);
  if (el) el.placeholder = value;
};

const TEXT = {
  id: {
    nav: {
      home: "Home",
      about: "Tentang",
      skills: "Skill",
      projects: "Proyek",
      certificates: "Sertifikat",
      contact: "Kontak"
    },
    heroRole: "UI/UX Designer & Fullstack Developer",
    cvEn: "Download CV (Inggris)",
    cvId: "Download CV (Indonesia)",
    aboutTitle: "Tentang Saya",
    aboutText:
      "Saya adalah UI/UX Designer dan Fullstack Developer yang memiliki minat besar dalam menciptakan tampilan antarmuka yang modern, fungsional, dan mudah digunakan.",
    skillsTitle: "Keahlian Saya",
    projectsTitle: "Proyek",
    projects: {
      fyumrist: "Website toko bunga online.",
      tprimeUI: "Desain UI/UX website trailer film.",
      capcut: "Desain UI editor video online.",
      loker: "Website lowongan kerja online.",
      tprimeWeb: "Website trailer film.",
      tictactoe: "Game website Tic-Tac-Toe."
    },
    viewWebsite: "Lihat Website",
    certTitle: "Sertifikat & Prestasi",
    certificates: {
      techcomfest: "SYNC REALITY: Membentuk masa depan pengalaman digital",
      soedirman: "Web Development",
      digiup: "Pelatihan AI tahun 2025"
    },
    contactTitle: "Hubungi Saya",
    contact: {
      name: "Nama Anda",
      email: "Email Anda",
      message: "Pesan Anda",
      button: "Kirim Pesan"
    },
    footer: "© Portofolio Deka."
  },

  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      certificates: "Certificates",
      contact: "Contact"
    },
    heroRole: "UI/UX Designer & Fullstack Developer",
    cvEn: "Download CV (English)",
    cvId: "Download CV (Indonesian)",
    aboutTitle: "About Me",
    aboutText:
      "I am a UI/UX Designer and Fullstack Developer focused on modern, functional, and user-friendly interfaces.",
    skillsTitle: "My Skills",
    projectsTitle: "Projects",
    projects: {
      fyumrist: "Online flower shop website.",
      tprimeUI: "Movie trailer website UI/UX design.",
      capcut: "Online video editor UI design.",
      loker: "Online job vacancy website.",
      tprimeWeb: "Movie trailer website.",
      tictactoe: "Tic-Tac-Toe website game."
    },
    viewWebsite: "View Website",
    certTitle: "Certificates & Achievements",
    certificates: {
      techcomfest: "SYNC REALITY: Shaping the future of digital experience",
      soedirman: "Web Development",
      digiup: "AI Training 2025"
    },
    contactTitle: "Contact Me",
    contact: {
      name: "Your Name",
      email: "Your Email",
      message: "Your Message",
      button: "Send Message"
    },
    footer: "© Deka Portfolio."
  }
};

function applyLang(lang) {
  const t = TEXT[lang];

  // NAV
  safeText("nav-home", t.nav.home);
  safeText("nav-about", t.nav.about);
  safeText("nav-skills", t.nav.skills);
  safeText("nav-projects", t.nav.projects);
  safeText("nav-certificates", t.nav.certificates);
  safeText("nav-contact", t.nav.contact);

  // HERO
  safeText("hero-role", t.heroRole);
  safeText("cv-en", t.cvEn);
  safeText("cv-id", t.cvId);

  // ABOUT
  safeText("about-title", t.aboutTitle);
  safeText("about-text", t.aboutText);

  // SKILLS
  safeText("skills-title", t.skillsTitle);

  // PROJECTS
  safeText("projects-title", t.projectsTitle);
  safeText("fyumrist-desc", t.projects.fyumrist);
  safeText("tprime-ui-desc", t.projects.tprimeUI);
  safeText("capcut-desc", t.projects.capcut);
  safeText("loker-desc", t.projects.loker);
  safeText("tprime-web-desc", t.projects.tprimeWeb);
  safeText("tictactoe-desc", t.projects.tictactoe);

  document
    .querySelectorAll(".btn-website")
    .forEach(btn => (btn.textContent = t.viewWebsite));

  // CERTIFICATES
  safeText("cert-title", t.certTitle);
  safeText("cert-techcomfest-desc", t.certificates.techcomfest);
  safeText("cert-soedirman-desc", t.certificates.soedirman);
  safeText("cert-digiup-desc", t.certificates.digiup);

  // CONTACT
  safeText("contact-title", t.contactTitle);
  safePlaceholder("contact-name", t.contact.name);
  safePlaceholder("contact-email", t.contact.email);
  safePlaceholder("contact-message", t.contact.message);
  safeText("contact-btn", t.contact.button);

  // FOOTER
  safeText("footer-text", t.footer);

  localStorage.setItem("lang", lang);
}

// ===============================
// INIT (WAJIB DI DOMContentLoaded)
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".lang-btn")
        .forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      applyLang(btn.dataset.lang);
    });
  });

  const lang = localStorage.getItem("lang") || "id";
  document
    .querySelector(`.lang-btn[data-lang="${lang}"]`)
    ?.classList.add("active");
  applyLang(lang);
});