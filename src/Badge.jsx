import React, { useState } from 'react';
import artistesData from './variables.json';

const Badge = ({ selectedArtistId }) => {
    const [generatedBadge, setGeneratedBadge] = useState('');

    const generateBadge = () => {
        if (!selectedArtistId) {
            alert('Veuillez sélectionner un artiste.');
            return;
        }

        // Récupérer les informations sur l'artiste sélectionné
        const artiste = artistesData.artistes.find((artiste) => artiste.id === parseInt(selectedArtistId));

        // Générer l'attribut alt
        const alt = generateAlt(artiste);

        // Générer le code HTML du badge
        const badgeHtml = `<!--Badge--><a href="#" alt="${alt}"><img src="votre-image.jpg" alt="${alt}" style="width: 140px; height: 140px;"/></a>`;

        // Mettre à jour l'état avec le badge généré
        setGeneratedBadge(badgeHtml);
    };


    const generateAlt = (artiste) => {
        const randomFirstWord = getRandomFirstWord();
        const secondWord = Object.values(artiste.styles).some(style => style.name === 'STYLE.DJ') ? 'DJ' : (artiste.nbmembres > 2 ? 'groupe de musique' : 'musicien');
        const thirdWord = Math.random() < 0.5 ? artiste.localisation : Object.values(artiste.styles).map(style => style.name).join(', ');

        return `${randomFirstWord} ${secondWord} ${thirdWord}`;
    };

    const getRandomFirstWord = () => {
        const firstWords = ['Recherche', 'Devis', 'Tarifs', 'Prix', 'Reservation', 'Cherche'];
        return firstWords[Math.floor(Math.random() * firstWords.length)];
    };

    return (
        <div className="badge-container">
            <div>
                <button onClick={generateBadge}>Générer le badge</button>
            </div>
            <div>
                {/* Affichage du badge généré */}
                {generatedBadge && <pre>{generatedBadge}</pre>}
            </div>
        </div>
    );
};

export default Badge;
