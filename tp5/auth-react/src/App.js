import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';

const App = () => {
    const isAuthenticated = localStorage.getItem('token'); // Vérifie si l'utilisateur est connecté

    return (
        <Router>
            <Routes>
                {/* Route pour la page d'inscription */}
                <Route path="/signup" element={<Signup />} />
                {/* Route pour la page de connexion */}
                <Route path="/login" element={<Login />} />
                {/* Route pour la page d'accueil (protégée) */}
                <Route
                    path="/home"
                    element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
                />
                {/* Redirection par défaut vers la page d'inscription */}
                <Route path="*" element={<Navigate to="/signup" />} />
            </Routes>
        </Router>
    );
};

export default App;