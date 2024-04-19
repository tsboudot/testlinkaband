import React from 'react';

const Badge = ({ selectedArtistId }) => {
    const generateBadge = () => {
        if (selectedArtistId) {
            // Implémentez votre logique de génération de badge ici, en utilisant selectedArtistId
            console.log(`Génération du badge pour l'artiste ${selectedArtistId}`);
        } else {
            console.log('Aucun artiste sélectionné');
        }
    };

    return (
        <div className="badge-container">
            <div>
                <button onClick={generateBadge}>Générer le badge</button>
            </div>
        </div>
    );
};

export default Badge;
