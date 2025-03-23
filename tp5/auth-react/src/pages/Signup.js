import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            // Ajouter l'utilisateur au JSON Server
            const response = await axios.post('http://localhost:5000/users', { name, email, password });
            if (response.status === 201) {
                setMessage('Inscription réussie ! Redirection vers la page de connexion...');
                setTimeout(() => navigate('/login'), 2000); // Redirige vers login après 2 secondes
            }
        } catch (error) {
            setMessage("Erreur lors de l'inscription. Veuillez réessayer");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-card">
                <div className="signup-header">
                    <h2>Créer un compte</h2>
                    <p className="subtitle">Rejoignez-nous pour accéder à toutes nos fonctionnalités</p>
                </div>

                {message && (
                    <div className={`message ${message.includes('réussie') ? 'success' : 'error'}`}>
                        {message}
                    </div>
                )}

                <form onSubmit={handleSignup}>
                    <div className="form-group">
                        <label htmlFor="name">Nom</label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Votre nom et prénom"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Votre adresse email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Mot de passe</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Créez un mot de passe"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className={`signup-button ${loading ? 'loading' : ''}`}
                        disabled={loading}
                    >
                        {loading ? (
                            <span className="loading-spinner"></span>
                        ) : (
                            "S'inscrire"
                        )}
                    </button>
                </form>

                <div className="login-link">
                    Déjà inscrit ? <a href="/login">Connectez-vous ici</a>
                </div>
            </div>

            <style jsx>{`
                .signup-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 100vh;
                    background-color: #f5f7fa;
                    padding: 20px;
                    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                }
                
                .signup-card {
                    width: 100%;
                    max-width: 450px;
                    background: white;
                    border-radius: 12px;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
                    padding: 40px;
                    transition: transform 0.2s ease;
                }
                
                .signup-card:hover {
                    transform: translateY(-5px);
                }
                
                .signup-header {
                    text-align: center;
                    margin-bottom: 32px;
                }
                
                .signup-header h2 {
                    margin: 0;
                    color: #111827;
                    font-size: 24px;
                    font-weight: 700;
                }
                
                .subtitle {
                    color: #6b7280;
                    font-size: 14px;
                    margin-top: 8px;
                }
                
                .form-group {
                    margin-bottom: 20px;
                }
                
                label {
                    display: block;
                    margin-bottom: 6px;
                    font-size: 14px;
                    font-weight: 500;
                    color: #374151;
                }
                
                input {
                    width: 100%;
                    padding: 12px 16px;
                    border: 1px solid #d1d5db;
                    border-radius: 8px;
                    font-size: 15px;
                    transition: all 0.2s ease;
                    background-color: #f9fafb;
                    height: 48px;
                    box-sizing: border-box;
                }
                
                input:focus {
                    outline: none;
                    border-color: #4f46e5;
                    box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
                    background-color: white;
                }
                
                input::placeholder {
                    color: #9ca3af;
                    font-size: 14px;
                }
                
                .signup-button {
                    width: 100%;
                    padding: 12px;
                    background-color: #4f46e5;
                    color: white;
                    border: none;
                    border-radius: 8px;
                    font-size: 16px;
                    font-weight: 500;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 48px;
                }
                
                .signup-button:hover {
                    background-color: #4338ca;
                    transform: translateY(-1px);
                }
                
                .signup-button:active {
                    transform: translateY(1px);
                }
                
                .signup-button.loading {
                    background-color: #6366f1;
                    cursor: not-allowed;
                }
                
                .loading-spinner {
                    display: inline-block;
                    width: 20px;
                    height: 20px;
                    border: 3px solid rgba(255, 255, 255, 0.3);
                    border-radius: 50%;
                    border-top-color: white;
                    animation: spin 1s ease-in-out infinite;
                }
                
                @keyframes spin {
                    to { transform: rotate(360deg); }
                }
                
                .login-link {
                    text-align: center;
                    margin-top: 24px;
                    font-size: 14px;
                    color: #6b7280;
                }
                
                .login-link a {
                    color: #4f46e5;
                    text-decoration: none;
                    font-weight: 500;
                    transition: color 0.2s ease;
                }
                
                .login-link a:hover {
                    color: #4338ca;
                    text-decoration: underline;
                }
                
                .message {
                    padding: 12px 16px;
                    border-radius: 8px;
                    margin-bottom: 24px;
                    font-size: 14px;
                    animation: fadeIn 0.3s ease;
                }
                
                .success {
                    background-color: #ecfdf5;
                    color: #065f46;
                    border: 1px solid #a7f3d0;
                }
                
                .error {
                    background-color: #fef2f2;
                    color: #b91c1c;
                    border: 1px solid #fecaca;
                }
                
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                @media (max-width: 640px) {
                    .signup-card {
                        padding: 24px;
                    }
                }
            `}</style>
        </div>
    );
};

export default Signup;