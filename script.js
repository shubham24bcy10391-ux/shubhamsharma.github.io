// ===== TERMINAL ANIMATION =====
const lines = [
  { text: "$ whoami", cls: "t-cmd", delay: 300 },
  { text: "> shivu | cybersecurity student @ VIT Bhopal", cls: "t-out", delay: 700 },
  { text: "$ nmap -sV target.lab", cls: "t-cmd", delay: 1400 },
  { text: "PORT     STATE SERVICE VERSION", cls: "t-info", delay: 1800 },
  { text: "22/tcp   open  ssh     OpenSSH 7.4", cls: "t-out", delay: 2100 },
  { text: "80/tcp   open  http    Apache 2.4", cls: "t-out", delay: 2300 },
  { text: "3306/tcp open  mysql   MySQL 5.7", cls: "t-warn", delay: 2500 },
  { text: "$ sqlmap -u http://target/login.php --dbs", cls: "t-cmd", delay: 3200 },
  { text: "[*] testing connection to target...", cls: "t-out", delay: 3700 },
  { text: "[!] parameter 'id' is vulnerable", cls: "t-err", delay: 4200 },
  { text: "[+] databases: information_schema, users", cls: "t-warn", delay: 4600 },
  { text: "$ echo 'keep learning, keep hacking 🚀'", cls: "t-cmd", delay: 5400 },
  { text: "> ethically, always.", cls: "t-out", delay: 5900 },
];

function runTerminal() {
  const body = document.getElementById('terminalBody');
  if (!body) return;
  lines.forEach(({ text, cls, delay }) => {
    setTimeout(() => {
      const line = document.createElement('div');
      line.className = cls;
      line.textContent = text;
      body.appendChild(line);
      body.scrollTop = body.scrollHeight;
    }, delay);
  });
}

// ===== SCROLL FADE-IN =====
function initFadeIn() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.project-card, .skill-cat, .cert-card, .about-card, .about-text')
    .forEach(el => {
      el.classList.add('fade-in');
      observer.observe(el);
    });
}

// ===== MOBILE MENU =====
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');

navToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

function closeMobileMenu() {
  mobileMenu.classList.remove('open');
}

// ===== YEAR =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== ACTIVE NAV HIGHLIGHT =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 80) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.style.color = link.getAttribute('href') === '#' + current ? 'var(--accent)' : '';
  });
});

// ===== INIT =====
window.addEventListener('DOMContentLoaded', () => {
  runTerminal();
  initFadeIn();
});
