import React from 'react';

const Badge = ({ generateBadge }) => {
    const handleGenerateBadge = () => {
        // Mettez ici la logique pour générer le badge, si nécessaire
    };

    return (
        <div className="badge-container">
            <div>
                <button onClick={handleGenerateBadge}>Générer le badge</button>
            </div>
        </div>
    );
};

export default Badge;
