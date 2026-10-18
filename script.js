// ===== Data: edit bagian ini, HTML dibuat otomatis =====
const skills = ["HTML", "CSS", "JavaScript", "Git & GitHub", "React", "Node.js", "MySQL"];

const projects = [
  {
    title: "Interactive Web Portfolio & Learning Showcase",
    desc: "Website portofolio pribadi berbasis responsive web design yang dirancang untuk menampilkan profil, hasil belajar, dan proyek teknologi pendidikan secara interaktif.",
    stack: "HTML5, CSS3, JavaScript",
    demo: "#",
    repo: "#"
  },
  {
    title: "Modul & Media Pembelajaran Interaktif Basis Data",
    desc: "Penyusunan bahan ajar dan studi kasus perancangan basis data relasional (ERD & MariaDB) yang disederhanakan agar mudah dipahami oleh siswa/pembelajar tingkat awal.",
    stack: "MySQL, MariaDB, Canva, Instructional Design",
    demo: "#",
    repo: "#"
  },
  {
    title: "Analisis Data Statistik untuk Evaluasi Pembelajaran",
    desc: "Implementasi skrip Python di Jupyter Notebook untuk mengolah data kuantitatif, seperti perhitungan nilai rata-rata, varians, dan deviasi standar untuk keperluan evaluasi.",
    stack: "Python, Jupyter Notebook",
    demo: "#",
    repo: "#"
  }
];

// ===== Achievement =====
// GANTI contoh di bawah dengan pencapaian aslimu.
// "proof" = link bukti (sertifikat/dokumentasi). Kosongkan ("") jika tidak ada.
const achievements = [
  {
    title: "Sertif Praktik Kerja Lapangan",
    year: "2024",
    org: "Astracom Jaya",
    desc: "Menangani perbaikan laptop dan PC, mendiagnosis dan menyelesaikan masalah software maupun hardware, serta melayani kebutuhan pelanggan.",
    proof: ""
  },
  {
    title: "Sertifikat Uji Kompetensi Kelulusan SMK",
    year: "2026",
    org: "LSP P3 Teknologi Digital (BNSP), SMKN 1 Dlanggu",
    desc: "Dinyatakan kompeten pada uji kompetensi keahlian TKJ sebagai syarat kelulusan SMK, mencakup instalasi, konfigurasi, dan troubleshooting jaringan komputer.",
    proof: ""
  }
];

// ===== Render kemampuan =====
document.getElementById("skill-list").innerHTML = skills
  .map(skill => `<span class="tag">${skill}</span>`)
  .join("");

// ===== Render project =====
document.getElementById("project-list").innerHTML = projects
  .map(p => `
    <article class="project">
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <p class="stack">${p.stack}</p>
      <div class="links">
        <a href="${p.demo}">Demo</a>
        <a href="${p.repo}">Repository</a>
      </div>
    </article>`)
  .join("");

// ===== Render achievement =====
document.getElementById("achievement-list").innerHTML = achievements
  .map(a => `
    <article class="achievement">
      <span class="year">${a.year}</span>
      <h3>${a.title}</h3>
      <p class="org">${a.org}</p>
      <p>${a.desc}</p>
      ${a.proof ? `<div class="links"><a href="${a.proof}">Lihat bukti</a></div>` : ""}
    </article>`)
  .join("");

// ===== Tahun otomatis di footer =====
document.getElementById("year").textContent = new Date().getFullYear();

// ===== Placeholder jika foto belum ada =====
const photoBox = document.getElementById("photo");
const photoImg = photoBox.querySelector("img");
const showPlaceholder = () => photoBox.classList.add("no-photo");
photoImg.addEventListener("error", showPlaceholder);
if (photoImg.complete && photoImg.naturalWidth === 0) showPlaceholder();