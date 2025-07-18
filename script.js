document.getElementById('menu-btn').onclick = () => {
  document.getElementById('nav').classList.toggle('show');
};

const btnToggle = document.getElementById('toggle-fonctionnalites');
const sectionFonct = document.getElementById('fonctionnalites');

btnToggle.onclick = () => {
  const visible = sectionFonct.style.display !== 'none';
  sectionFonct.style.display = visible ? 'none' : 'block';
  btnToggle.textContent = visible ? 'Afficher Fonctionnalités' : 'Masquer Fonctionnalités';
};

const btnTop = document.getElementById('scroll-top');
window.onscroll = () => {
  btnTop.style.display = window.scrollY > 200 ? 'block' : 'none';
};
btnTop.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

const quotes = document.querySelectorAll('#temoignages blockquote');
let index = 0;
const showQuote = i => {
  quotes.forEach((q, n) => q.style.display = n === i ? 'block' : 'none');
};
document.getElementById('prev').onclick = () => showQuote((index = (index - 1 + quotes.length) % quotes.length));
document.getElementById('next').onclick = () => showQuote((index = (index + 1) % quotes.length));
showQuote(index);

document.querySelector('form').onsubmit = e => {
  e.preventDefault();
  const [nom, email, message] = e.target.elements;
  if (!nom.value || !email.value || !message.value) {
    alert('Tous les champs sont requis.');
  } else if (!/\S+@\S+\.\S+/.test(email.value)) {
    alert('Email invalide.');
  } else {
    alert('Merci pour votre message !');
    e.target.reset();
  }
};