const toggleBtn = document.getElementById('toggleFonctionnalites');
const fonctionalitesSection = document.querySelector('.fonctionnalites');

toggleBtn.addEventListener('click', () => {
    if (fonctionalitesSection.style.display === 'none') {
        fonctionalitesSection.style.display = 'block';
        toggleBtn.textContent = 'Masquer Fonctionnalités';
    } else {
        fonctionalitesSection.style.display = 'none';
        toggleBtn.textContent = 'Afficher Fonctionnalités';
    }
});

const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

burger.addEventListener('click', () => {
  menu.classList.toggle('open');
});

document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    const [nom, email, message] = [...this.elements];
    if (!nom.value.trim() || !email.value.trim() || !message.value.trim()) {
        alert("Tous les champs sont requis.");
        return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        alert("Veuillez entrer une adresse email valide.");
        return;
    }
    alert("Merci pour votre message !");
    this.reset();
});

const scrollBtn = document.createElement("button");
scrollBtn.textContent = "↑";
scrollBtn.id = "btnScrollTop";
scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "20px";
scrollBtn.style.right = "20px";
scrollBtn.style.backgroundColor = "#007BFF";
scrollBtn.style.color = "white";
scrollBtn.style.border = "none";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.padding = "0.5rem 1rem";
scrollBtn.style.fontSize = "1.2rem";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.display = "none";
scrollBtn.style.zIndex = "1000";
document.body.appendChild(scrollBtn);

window.addEventListener('scroll', () => {
    scrollBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
});

scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.6s ease-out';
    observer.observe(section);
});

const blockquotes = document.querySelectorAll('.témoignages blockquote');
let current = 0;

function showQuote(index) {
    blockquotes.forEach((bq, i) => {
        bq.style.display = i === index ? 'block' : 'none';
    });
}

const prevBtn = document.createElement('button');
prevBtn.textContent = '←';
prevBtn.style.marginRight = '1rem';

const nextBtn = document.createElement('button');
nextBtn.textContent = '→';

[prevBtn, nextBtn].forEach(btn => {
    btn.style.backgroundColor = '#007BFF';
    btn.style.color = 'white';
    btn.style.border = 'none';
    btn.style.padding = '0.3rem 0.6rem';
    btn.style.marginTop = '1rem';
    btn.style.cursor = 'pointer';
});

const container = document.querySelector('.témoignages');
const btnWrap = document.createElement('div');
btnWrap.appendChild(prevBtn);
btnWrap.appendChild(nextBtn);
container.appendChild(btnWrap);

prevBtn.addEventListener('click', () => {
    current = (current - 1 + blockquotes.length) % blockquotes.length;
    showQuote(current);
});

nextBtn.addEventListener('click', () => {
    current = (current + 1) % blockquotes.length;
    showQuote(current);
});

showQuote(current); 