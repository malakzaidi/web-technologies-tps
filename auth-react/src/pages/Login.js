import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            // Vérifie si l'utilisateur existe dans le JSON Server
            const response = await axios.get(`http://localhost:5000/users?email=${email}&password=${password}`);
            if (response.data.length > 0) {
                // Utilisateur trouvé : sauvegarde dans localStorage et redirige vers Home
                localStorage.setItem('token', JSON.stringify(response.data[0]));
                navigate('/home');
            } else {
                setMessage('Email ou mot de passe incorrect.');
            }
        } catch (error) {
            setMessage('Erreur lors de la connexion.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-header">
                    <h2>Connexion</h2>
                    <p className="subtitle">Connectez-vous pour accéder à votre compte</p>
                </div>

                {message && (
                    <div className="message error">
                        {message}
                    </div>
                )}

                <form onSubmit={handleLogin}>
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
                            placeholder="Votre mot de passe"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className="forgot-password">
                        <a href="/forgot-password">Mot de passe oublié ?</a>
                    </div>

                    <button
                        type="submit"
                        className={`login-button ${loading ? 'loading' : ''}`}
                        disabled={loading}
                    >
                        {loading ? (
                            <span className="loading-spinner"></span>
                        ) : (
                            "Se connecter"
                        )}
                    </button>
                </form>

                <div className="signup-link">
                    Nouveau ici ? <a href="/signup">Créez un compte</a>
                </div>
            </div>

            <style jsx>{`
                .login-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 100vh;
                    background-color: #f5f7fa;
                    padding: 20px;
                    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                }
                
                .login-card {
                    width: 100%;
                    max-width: 450px;
                    background: white;
                    border-radius: 12px;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
                    padding: 40px;
                    transition: transform 0.2s ease;
                }
                
                .login-card:hover {
                    transform: translateY(-5px);
                }
                
                .login-header {
                    text-align: center;
                    margin-bottom: 32px;
                }
                
                .login-header h2 {
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
                
                .forgot-password {
                    text-align: right;
                    margin-bottom: 20px;
                }
                
                .forgot-password a {
                    font-size: 13px;
                    color: #4f46e5;
                    text-decoration: none;
                    transition: color 0.2s ease;
                }
                
                .forgot-password a:hover {
                    color: #4338ca;
                    text-decoration: underline;
                }
                
                .login-button {
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
                
                .login-button:hover {
                    background-color: #4338ca;
                    transform: translateY(-1px);
                }
                
                .login-button:active {
                    transform: translateY(1px);
                }
                
                .login-button.loading {
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
                
                .signup-link {
                    text-align: center;
                    margin-top: 24px;
                    font-size: 14px;
                    color: #6b7280;
                }
                
                .signup-link a {
                    color: #4f46e5;
                    text-decoration: none;
                    font-weight: 500;
                    transition: color 0.2s ease;
                }
                
                .signup-link a:hover {
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
                    .login-card {
                        padding: 24px;
                    }
                }
            `}</style>
        </div>
    );
};

export default Login;