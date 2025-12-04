document.addEventListener('DOMContentLoaded', () => {
    // Seleziona tutti i link che iniziano con '#' (i link interni della navigazione)
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Impedisce il comportamento predefinito del link (salto immediato)
            e.preventDefault();

            // Ottiene l'ID della sezione di destinazione (es. #introduzione)
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Scorri la pagina in modo fluido fino alla sezione
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
