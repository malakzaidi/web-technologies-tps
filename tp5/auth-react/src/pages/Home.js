import React, { useState } from "react";
import {
    FiMenu,
    FiHome,
    FiBook,
    FiCalendar,
    FiFileText,
    FiAward,
    FiLogOut,
    FiBell,
    FiTrendingUp,
    FiClock,
    FiCheckSquare,
} from "react-icons/fi";

const Home = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const userName = "Utilisateur"; // Example user (replace as needed)

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="sidenav-container">
            {/* Sidebar */}
            <div className={`sidenav ${isSidebarOpen ? "" : "closed"}`}>


                <nav className="mat-nav-list">
                    <a href="#" className="mat-list-item active">
                        <FiHome className="mat-icon" />
                        <span className="nav-text">Tableau de bord</span>
                    </a>
                    <a href="#" className="mat-list-item">
                        <FiBook className="mat-icon" />
                        <span className="nav-text">Mes cours</span>
                    </a>
                    <a href="#" className="mat-list-item">
                        <FiCalendar className="mat-icon" />
                        <span className="nav-text">Calendrier</span>
                    </a>
                    <a href="#" className="mat-list-item">
                        <FiFileText className="mat-icon" />
                        <span className="nav-text">Documents</span>
                    </a>
                    <a href="#" className="mat-list-item">
                        <FiAward className="mat-icon" />
                        <span className="nav-text">Certifications</span>
                    </a>
                </nav>
            </div>

            {/* Main Content */}
            <div className="sidenav-content">
                {/* Toolbar */}
                <header className="mat-toolbar">
                    <div className="flex">
                        <button className="mat-icon-button" onClick={toggleSidebar}>
                            <FiMenu />
                        </button>
                    </div>
                    <div className="flex">
                        <div className="notification-badge">
                            <FiBell className="mat-icon" />
                            <span className="badge">3</span>
                        </div>
                        <div className="user-profile">
                            <div className="avatar">{userName.charAt(0)}</div>
                            <div className="user-info">
                                <span className="user-name">{userName}</span>
                                <span className="user-role">Utilisateur</span>
                            </div>
                        </div>
                        <button className="logout">
                            <FiLogOut />
                            <span>Déconnexion</span>
                        </button>
                    </div>
                </header>

                {/* Main Content Section */}
                <div className="content">
                    <div className="dashboard-header">
                        <div>
                            <h1 className="page-title">Tableau de bord</h1>
                            <p className="welcome-message">Bienvenue {userName} ! Voici un aperçu de votre activité.</p>
                        </div>
                    </div>

                    <div className="progress-overview">
                        <div className="progress-card">
                            <div className="progress-header">
                                <h3 className="progress-title">Progression globale</h3>
                                <div className="progress-icon">
                                    <FiTrendingUp />
                                </div>
                            </div>
                            <div className="progress-bar-container">
                                <div className="progress-bar" style={{ width: "68%" }}></div>
                            </div>
                            <div className="progress-stats">
                                <div className="progress-percentage">68%</div>
                                <div className="progress-label">4 sur 6 modules terminés</div>
                            </div>
                        </div>

                        <div className="progress-card">
                            <div className="progress-header">
                                <h3 className="progress-title">Activité hebdomadaire</h3>
                                <div className="progress-icon">
                                    <FiClock />
                                </div>
                            </div>
                            <div className="progress-bar-container">
                                <div className="progress-bar" style={{ width: "45%" }}></div>
                            </div>
                            <div className="progress-stats">
                                <div className="progress-percentage">4.5 hrs</div>
                                <div className="progress-label">Objectif : 10 hrs</div>
                            </div>
                        </div>

                        <div className="progress-card">
                            <div className="progress-header">
                                <h3 className="progress-title">Tâches en attente</h3>
                                <div className="progress-icon">
                                    <FiCheckSquare />
                                </div>
                            </div>
                            <div className="progress-bar-container">
                                <div className="progress-bar" style={{ width: "75%" }}></div>
                            </div>
                            <div className="progress-stats">
                                <div className="progress-percentage">9/12</div>
                                <div className="progress-label">3 tâches en attente</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Styles */}
            <style jsx>{`
                /* Global Styles */
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                .sidenav-container {
                    display: flex;
                    min-height: 100vh;
                    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                    background-color: #f8fafc;
                }

                .sidenav {
                    width: 260px;
                    background: #ffffff;
                    border-right: 1px solid #e2e8f0;
                    height: 100vh;
                    overflow-y: auto;
                    transition: all 0.3s ease;
                    color: #334155;
                    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
                }
                
                .sidenav.closed {
                    transform: translateX(-100%);
                }

                .logo-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 20px;
                    border-bottom: 1px solid #e2e8f0;
                }

                .logo {
                    max-height: 36px;
                    transition: transform 0.2s ease;
                }

                .mat-nav-list {
                    padding: 12px 0;
                }
                
                .mat-list-item {
                    display: flex;
                    align-items: center;
                    margin: 4px 8px;
                    padding: 0 12px;
                    height: 44px;
                    text-decoration: none;
                    color: #64748b;
                    border-radius: 6px;
                    transition: all 0.2s ease;
                }
                
                .mat-list-item:hover {
                    background-color: #f1f5f9;
                    color: #0f172a;
                }
                
                .mat-list-item.active {
                    background-color: #f1f5f9;
                    color: #4f46e5;
                    font-weight: 500;
                    border-left: 3px solid #4f46e5;
                }
                
                .mat-icon {
                    margin-right: 12px;
                    font-size: 18px;
                    color: #64748b;
                }
                
                .mat-list-item.active .mat-icon {
                    color: #4f46e5;
                }
                
                .nav-text {
                    font-size: 14px;
                    letter-spacing: 0.01em;
                }

                .sidenav-content {
                    flex: 1;
                }
                
                .mat-toolbar {
                    background: #ffffff;
                    padding: 0 24px;
                    height: 64px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-bottom: 1px solid #e2e8f0;
                    color: #0f172a;
                    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
                    position: sticky;
                    top: 0;
                    z-index: 1000;
                }
                
                .flex {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                }
                
                .mat-icon-button {
                    width: 40px;
                    height: 40px;
                    line-height: 40px;
                    border-radius: 6px;
                    background: none;
                    border: none;
                    font-size: 20px;
                    cursor: pointer;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.2s ease;
                    color: #64748b;
                }
                
                .mat-icon-button:hover {
                    background: #f1f5f9;
                    color: #0f172a;
                }

                .content {
                    padding: 24px;
                    background-color: #f8fafc;
                    min-height: calc(100vh - 64px);
                }
                
                .dashboard-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 24px;
                }
                
                .page-title {
                    font-size: 24px;
                    font-weight: 600;
                    color: #0f172a;
                    margin: 0;
                }
                
                .welcome-message {
                    font-size: 16px;
                    color: #64748b;
                    margin-top: 4px;
                }

                .progress-overview {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                    gap: 24px;
                    margin-bottom: 24px;
                }
                
                .progress-card {
                    background: white;
                    border-radius: 8px;
                    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
                    padding: 20px;
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                    border: 1px solid #e2e8f0;
                }
                
                .progress-card:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
                }
                
                .progress-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    margin-bottom: 16px;
                }
                
                .progress-title {
                    font-size: 16px;
                    font-weight: 600;
                    color: #0f172a;
                    margin: 0;
                }
                
                .progress-icon {
                    width: 40px;
                    height: 40px;
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: rgba(79, 70, 229, 0.1);
                    color: #4f46e5;
                }
                
                .progress-bar-container {
                    height: 8px;
                    background: #e2e8f0;
                    border-radius: 4px;
                    margin-bottom: 12px;
                    overflow: hidden;
                }
                
                .progress-bar {
                    height: 100%;
                    border-radius: 4px;
                    background: #4f46e5;
                }
                
                .progress-stats {
                    display: flex;
                    justify-content: space-between;
                    font-size: 14px;
                }
                
                .progress-percentage {
                    font-weight: 600;
                    color: #0f172a;
                }
                
                .progress-label {
                    color: #64748b;
                }
                
                /* User Profile */
                .user-profile {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    cursor: pointer;
                    padding: 6px;
                    border-radius: 6px;
                    transition: all 0.2s ease;
                }
                
                .user-profile:hover {
                    background: #f1f5f9;
                }
                
                .avatar {
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    background: #e2e8f0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 600;
                    color: #64748b;
                    font-size: 14px;
                }
                
                .user-info {
                    display: flex;
                    flex-direction: column;
                }
                
                .user-name {
                    font-size: 14px;
                    font-weight: 500;
                    color: #0f172a;
                }
                
                .user-role {
                    font-size: 12px;
                    color: #64748b;
                }
                
                /* Notification Badge */
                .notification-badge {
                    position: relative;
                }
                
                .badge {
                    position: absolute;
                    top: -2px;
                    right: -2px;
                    width: 18px;
                    height: 18px;
                    border-radius: 50%;
                    background: #4f46e5;
                    color: white;
                    font-size: 11px;
                    font-weight: 600;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 2px solid #ffffff;
                }
                
                /* Logout Button */
                .logout {
                    background-color: #4f46e5;
                    color: white;
                    transition: all 0.2s ease;
                    border-radius: 6px;
                    padding: 0 16px;
                    height: 38px;
                    font-weight: 500;
                    border: none;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    cursor: pointer;
                }
                
                .logout:hover {
                    background-color: #4338ca;
                    box-shadow: 0 2px 4px rgba(79, 70, 229, 0.2);
                }
                
                /* Responsive Adjustments */
                @media (max-width: 768px) {
                    .sidenav {
                        width: 240px;
                    }
                
                    .content {
                        padding: 16px;
                    }
                
                    .progress-overview {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </div>
    );
};

export default Home;