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

                // BONUS: Se hai un menu a tendina su mobile, potresti chiuderlo qui
                // Esempio: chiudiMobileMenu();
            }
        });
    });

    // Puoi aggiungere qui altre funzionalità, ad esempio:
    // 1. Un effetto che cambia l'opacità del globo in base allo scroll.
    // 2. Un "Torna su" (Back to Top) button.
});
