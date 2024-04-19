// badgeGenerator.js

const generateAlt = (artiste) => {
    const randomFirstWord = getRandomFirstWord();
    //Un mot choisi aléatoirement dans la liste
    const secondWord = Object.values(artiste.styles).some(style => style.name === 'STYLE.DJ') ? 'DJ' : (artiste.nbmembres > 2 ? 'groupe de musique' : 'musicien');
    //Si artiste = DJ : Style.DJ, sinon nbMembres > 2 ? Groupe, sinon Musicien
    const thirdWord = Math.random() < 0.5 ? artiste.localisation : Object.values(artiste.styles).map(style => style.name).join(', ');
    // Ou localisation, ou styles
    return `${randomFirstWord} ${secondWord} ${thirdWord}`;
};

const getRandomFirstWord = () => {
    const firstWords = ['Recherche', 'Devis', 'Tarifs', 'Prix', 'Reservation', 'Cherche'];
    return firstWords[Math.floor(Math.random() * firstWords.length)];
};

export { generateAlt };
