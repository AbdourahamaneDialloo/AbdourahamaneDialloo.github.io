document.addEventListener('DOMContentLoaded', function () {
    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let progressBar = entry.target.querySelector('.progress-bar');
                progressBar.style.width = progressBar.getAttribute('data-width');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.progress').forEach(progress => {
        observer.observe(progress);
        // Ajoute l'événement mouseover pour remplir la barre de progression
        progress.addEventListener('mouseover', function() {
            let progressBar = progress.querySelector('.progress-bar');
            progressBar.style.width = progressBar.getAttribute('data-width');
        });
    });

    // Intervalle pour remplir les barres de progression toutes les 2 secondes
    setInterval(() => {
        document.querySelectorAll('.progress').forEach(progress => {
            let progressBar = progress.querySelector('.progress-bar');
            progressBar.style.width = progressBar.getAttribute('data-width');
        });
    }, 2000);
});

AOS.init();
document.addEventListener('DOMContentLoaded', function() {
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width;
    });
});

// Sélectionne l'élément HTML où le texte sera affiché
let elementPhrase = document.querySelector('#phrase');
// Tableau contenant les phrases à afficher
let tab = [
    '👨‍💻 Abdourahamane Diallo - Développeur Web', 
    '⚡ Passionné par JavaScript et l’innovation'
];


// Variables pour suivre l'index du texte et de la lettre en cours d'affichage
let indexText = 0; 
let indexLettre = 0; 

// Fonction pour afficher le texte lettre par lettre
function afficher() {
    // Vérifie si l'index du texte est valide (inférieur à la longueur du tableau)
    if (indexText < tab.length) {
        // Vérifie si l'index de la lettre est valide (inférieur à la longueur du texte actuel)
        if (indexLettre < tab[indexText].length) {
            // Ajoute la lettre actuelle au contenu de l'élément HTML
            elementPhrase.textContent += tab[indexText][indexLettre];
            
            // Incrémente l'index de la lettre pour passer à la suivante
            indexLettre++;
            // Rappelle la fonction afficher après 100 ms pour afficher la prochaine lettre
            setTimeout(afficher, 100);
        } else {
            // Si toutes les lettres du texte actuel ont été affichées :
            // Attend 2 secondes avant de passer au texte suivant
            setTimeout(() => {
                // Efface le contenu de l'élément HTML pour le texte suivant
                elementPhrase.textContent = '';
                // Réinitialise l'index de la lettre à 0 pour le nouveau texte
                indexLettre = 0;
                
                // Passe au texte suivant dans le tableau
                // L'opérateur % (modulo) permet de revenir au début du tableau si on dépasse la fin
                indexText = (indexText + 1) % tab.length;
                // Rappelle la fonction afficher pour commencer l'affichage du texte suivant
                afficher();
            }, 2000); // Délai de 2 secondes avant de passer au texte suivant
        }
    }
}
// Appelle la fonction afficher pour démarrer l'affichage du texte
afficher();