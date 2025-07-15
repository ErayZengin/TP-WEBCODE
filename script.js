const boutonFonctionnalites = document.getElementById('bouton-fonctionnalites');
const sectionFonctionnalites = document.querySelector('.fonctionnalites');

boutonFonctionnalites?.addEventListener('click', () => {
  const estMasqué = sectionFonctionnalites.style.display === 'none';
  sectionFonctionnalites.style.display = estMasqué ? 'block' : 'none';
  boutonFonctionnalites.textContent = estMasqué ? 'Masquer Fonctionnalités' : 'Afficher Fonctionnalités';
});

const boutonMenu = document.querySelector('.bouton-menu');
const menuNavigation = document.querySelector('.menu-navigation');

boutonMenu?.addEventListener('click', () => {
  menuNavigation.classList.toggle('open');
});

document.querySelector('form')?.addEventListener('submit', function (e) {
  e.preventDefault();
  const [nom, email, message] = this.elements;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!nom.value.trim() || !email.value.trim() || !message.value.trim()) {
    alert("Tous les champs sont requis.");
  } else if (!emailRegex.test(email.value)) {
    alert("Veuillez entrer une adresse email valide.");
  } else {
    alert("Merci pour votre message !");
    this.reset();
  }
});

const boutonHaut = document.createElement("button");
boutonHaut.textContent = "↑";
Object.assign(boutonHaut.style, {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  backgroundColor: "#007BFF",
  color: "white",
  border: "none",
  borderRadius: "50%",
  padding: "0.5rem 1rem",
  fontSize: "1.2rem",
  cursor: "pointer",
  display: "none",
  zIndex: "1000"
});
document.body.appendChild(boutonHaut);

window.addEventListener('scroll', () => {
  boutonHaut.style.display = window.scrollY > 200 ? 'block' : 'none';
});

boutonHaut.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const sections = document.querySelectorAll('section');
const observateur = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
});

sections.forEach(section => {
  Object.assign(section.style, {
    opacity: 0,
    transform: 'translateY(20px)',
    transition: 'all 0.6s ease-out'
  });
  observateur.observe(section);
});

const citations = document.querySelectorAll('.temoignages blockquote');
let indiceActuel = 0;

function afficherCitation(i) {
  citations.forEach((bq, index) => {
    bq.style.display = index === i ? 'block' : 'none';
  });
}

const creerBouton = (texte, action) => {
  const bouton = document.createElement('button');
  bouton.textContent = texte;
  Object.assign(bouton.style, {
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    padding: '0.3rem 0.6rem',
    marginTop: '1rem',
    cursor: 'pointer',
    marginRight: texte === '←' ? '1rem' : '0'
  });
  bouton.addEventListener('click', action);
  return bouton;
};

const conteneurTemoignages = document.querySelector('.temoignages');
const conteneurBoutons = document.createElement('div');
conteneurBoutons.appendChild(creerBouton('←', () => {
  indiceActuel = (indiceActuel - 1 + citations.length) % citations.length;
  afficherCitation(indiceActuel);
}));
conteneurBoutons.appendChild(creerBouton('→', () => {
  indiceActuel = (indiceActuel + 1) % citations.length;
  afficherCitation(indiceActuel);
}));
conteneurTemoignages.appendChild(conteneurBoutons);
afficherCitation(indiceActuel);