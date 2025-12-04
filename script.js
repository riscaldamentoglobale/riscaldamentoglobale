document.addEventListener('DOMContentLoaded', () => {
    // Seleziona tutti i link che iniziano con '#' (i link interni della navigazione)
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Scorri la pagina in modo fluido
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
