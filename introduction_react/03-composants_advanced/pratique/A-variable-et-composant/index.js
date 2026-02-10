import React from 'react';
import ReactDOM from 'react-dom/client';
import Owl from './Owl-webpack';
import './styles.css';

/**
 * Application principale
 * Démontre l'utilisation du composant Owl avec différentes props
 */

function App() {
    // Données pour différents hiboux
    // Utilisation de placeholders via.placeholder.com (toujours fonctionnels)
    const owls = [
        {
            name: "Hedwige",
            image: "https://via.placeholder.com/300/FFFFFF/333333?text=Hedwige",
            description: "Une magnifique chouette des neiges, élégante et majestueuse. Connue pour son plumage blanc immaculé."
        },
        {
            name: "Archimède",
            image: "https://via.placeholder.com/300/FFA500/FFFFFF?text=Archimede",
            description: "Un hibou grand-duc sage et réfléchi, aux yeux perçants orange."
        },
        {
            name: "Bubo",
            image: "https://via.placeholder.com/300/8B4513/FFFFFF?text=Bubo",
            description: "Un petit hibou curieux avec de grands yeux expressifs et un plumage brun tacheté."
        }
    ];

    return (
        <div className="app-container">
            <h1 className="app-title">🦉 Galerie de Hiboux 🦉</h1>
            
            <div className="owls-container">
                {/* Affichage de plusieurs hiboux avec différentes props */}
                {owls.map((owl, index) => (
                    <Owl
                        key={index}
                        name={owl.name}
                        image={owl.image}
                        description={owl.description}
                    />
                ))}
                
                {/* Test du rendu conditionnel : hibou sans image */}
                <Owl
                    name="Mystérieux"
                    description="Ce hibou reste un mystère..."
                />
            </div>

            <div className="info-text">
                <p>💡 Passez la souris sur les images pour voir l'effet de survol !</p>
                <p style={{ marginTop: '10px', fontSize: '14px' }}>
                    🎨 Images de placeholder - Remplacez-les par de vraies images de hiboux si vous voulez !
                </p>
            </div>
        </div>
    );
}

// Rendu de l'application dans le DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
