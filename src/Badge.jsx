import { generateAlt } from './badgeGenerator';
import React, { useState } from 'react'; // Importez useState depuis React
import artistesData from './variables.json';

const Badge = ({ selectedArtistId }) => {
    //Hook useState pour mettre à jour la valeur de badge
    const [generatedBadge, setGeneratedBadge] = useState('');

    const generateBadge = () => {
        if (!selectedArtistId) {
            alert('Veuillez sélectionner un artiste.');
            return;
        }

        // Récupérer les informations sur l'artiste sélectionné
        const artiste = artistesData.artistes.find((artiste) => artiste.id === parseInt(selectedArtistId));

        // Appel fonction alt
        const alt = generateAlt(artiste);

        // URL de l'image
        const imageUrl = 'https://images.lesindesradios.fr/fit-in/1100x2000/filters:format(webp)/medias/Vsj0LZpM34/image/Slash_Londres_20221697615214906-format16by9.png';

        // Badge final = String avec le lien, l'URL de l'image, et alt. 
        const badgeHtml = `<!--Badge--><a href="https://linkaband.com" target'_blank'><img src="${imageUrl}" alt="${alt}" style="width: 140px; height: 140px;"/></a>`;

        // Utilisation du Hook pour mettre à jour la valeur de Badge
        setGeneratedBadge(badgeHtml);
    };

    return (
        <div className="badge-container">
            <div>
                <button onClick={generateBadge}>Générer le badge</button>
            </div>
            <div>
                {generatedBadge && <pre>{generatedBadge}</pre>}
            </div>
        </div>
    );
};

export default Badge;

