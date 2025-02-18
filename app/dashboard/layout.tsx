import React from 'react';
import Sidebar from './components/Sidebar';
import DashboardHeader from './components/DashboardHeader';

interface DashboardLayoutProps {
    children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
    return (
        <div className="dashboard-layout">
            <DashboardHeader />
            <div className="dashboard-content">
                <Sidebar />
                <main>{children}</main>
            </div>
        </div>
    );
};

export default DashboardLayout;