import Link from 'next/link';
import React from 'react';

const Sidebar: React.FC = () => {
    return (
        <aside className="sidebar">
            <nav>
                <ul>
                    <li><Link href="/dashboard">Dashboard</Link></li>
                    <li><Link href="/dashboard/settings">Settings</Link></li>
                    <li><Link href="/dashboard/profile">Profile</Link></li>
                    <li><Link href="/dashboard/reports">Reports</Link></li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;