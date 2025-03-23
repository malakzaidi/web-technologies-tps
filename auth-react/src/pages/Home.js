import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <div>
            <h2>Bienvenue sur la page d'accueil</h2>
            <button onClick={handleLogout}>Se déconnecter</button>
        </div>
    );
};

export default Home;