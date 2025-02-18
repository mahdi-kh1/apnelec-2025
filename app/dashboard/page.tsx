import React from 'react';
import Sidebar from './components/Sidebar';
import DashboardHeader from './components/DashboardHeader';

const DashboardPage = () => {
    return (
        <div className="dashboard">
            <Sidebar />
            <div className="dashboard-content">
                <DashboardHeader />
                <main>
                    <h1>Welcome to the Dashboard</h1>
                    {/* Additional dashboard content goes here */}
                </main>
            </div>
        </div>
    );
};

export default DashboardPage;