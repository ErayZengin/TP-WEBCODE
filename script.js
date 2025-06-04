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
