import React, { useState } from 'react';
import artistesData from './variables.json';
import Badge from './Badge';

const Exercice = () => {
    const [selectedArtistId, setSelectedArtistId] = useState('');

    const handleArtistChange = (event) => {
        setSelectedArtistId(event.target.value);
    };

    return (
        <div className="exercice-container">
            <h2>Générateur de Badge</h2>
            <div>
                <label htmlFor="select-artist">Sélectionner un artiste:</label>
                <select id="select-artist" value={selectedArtistId} onChange={handleArtistChange}>
                    {artistesData.artistes.map((artiste) => (
                        <option key={artiste.id} value={artiste.id}>Artiste n°{artiste.id}</option>
                    ))}
                </select>
            </div>
            <div>
                <Badge generateBadge={() => selectedArtistId} />
            </div>

        </div>
    );
};

export default Exercice;
