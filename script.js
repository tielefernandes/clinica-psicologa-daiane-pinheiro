const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 80) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


const nav = document.querySelector(".nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// scroll suave do botão de agendamento para o formulário de contato
const btnNav = document.querySelector('.btn-nav');
const contatoForm = document.querySelector('.contato-form');

if (btnNav && contatoForm) {
  btnNav.addEventListener('click', (e) => {
    e.preventDefault();
    const navHeight = document.querySelector('.nav')?.offsetHeight || 0;
    const top = contatoForm.getBoundingClientRect().top + window.scrollY - navHeight - 16;
    window.scrollTo({ top, behavior: 'smooth' });
  });
}

// scroll suave para o botão 'Agendar consulta' dentro do hero
const heroPrimary = document.querySelector('.hero .btn-primary');
if (heroPrimary && contatoForm) {
  heroPrimary.addEventListener('click', (e) => {
    e.preventDefault();
    const navHeight = document.querySelector('.nav')?.offsetHeight || 0;
    const top = contatoForm.getBoundingClientRect().top + window.scrollY - navHeight - 16;
    window.scrollTo({ top, behavior: 'smooth' });
  });
}

// smooth scroll para links de âncora no nav (e ativar reveal quando necessário)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const hash = this.getAttribute('href');
    if (!hash || hash === '#') return; // deixa links vazios normais
    const target = document.querySelector(hash);
    if (!target) return;
    e.preventDefault();
    const navHeight = document.querySelector('.nav')?.offsetHeight || 0;
    const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 12;
    window.scrollTo({ top, behavior: 'smooth' });
    // ativar reveal se for uma seção com reveal
    if (target.classList.contains('reveal')) {
      target.classList.add('active');
    }
  });
});
