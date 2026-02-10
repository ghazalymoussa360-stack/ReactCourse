/**
 * Composant fonctionnel Owl (Hibou)
 * Ce composant affiche une image de hibou avec une description
 * Il utilise les props pour la personnalisation et inclut un rendu conditionnel
 */

function Owl(props) {
    // Déstructuration des props pour faciliter l'accès aux données
    const { image, description, name } = props;

    // Style pour l'effet de survol (hover)
    const imageStyle = {
        width: '300px',
        height: '300px',
        objectFit: 'cover',
        borderRadius: '10px',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'pointer'
    };

    // Gestion du survol - ajoute un effet zoom et ombre
    const handleMouseEnter = (e) => {
        e.target.style.transform = 'scale(1.05)';
        e.target.style.boxShadow = '0 8px 16px rgba(0,0,0,0.3)';
    };

    const handleMouseLeave = (e) => {
        e.target.style.transform = 'scale(1)';
        e.target.style.boxShadow = 'none';
    };

    // Style pour le conteneur
    const containerStyle = {
        border: '2px solid #ddd',
        borderRadius: '15px',
        padding: '20px',
        margin: '20px',
        textAlign: 'center',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        maxWidth: '400px'
    };

    // Rendu conditionnel : affiche un message si aucune image n'est fournie
    if (!image) {
        return (
            <div style={containerStyle}>
                <p style={{ color: '#e74c3c', fontSize: '18px', fontWeight: 'bold' }}>
                    ⚠️ Aucune image de hibou n'a été fournie !
                </p>
            </div>
        );
    }

    // Rendu principal du composant
    return (
        <div style={containerStyle}>
            {/* Titre avec le nom du hibou s'il est fourni */}
            {name && (
                <h2 style={{ color: '#2c3e50', marginBottom: '15px' }}>
                    🦉 {name}
                </h2>
            )}
            
            {/* Image du hibou avec gestion des événements de survol */}
            <img
                src={image}
                alt={name || "Hibou"}
                style={imageStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onError={(e) => {
                    console.warn('Erreur de chargement image:', image);
                    e.target.src = 'https://via.placeholder.com/300/CCCCCC/666666?text=Image+Non+Disponible';
                }}
            />
            
            {/* Description du hibou */}
            {description && (
                <p style={{ 
                    marginTop: '15px', 
                    fontSize: '16px', 
                    color: '#555',
                    lineHeight: '1.6' 
                }}>
                    {description}
                </p>
            )}
        </div>
    );
}

// Export du composant pour pouvoir l'utiliser dans d'autres fichiers
// Note: Avec Babel standalone, on n'a pas besoin d'export, 
// le composant sera disponible globalement
