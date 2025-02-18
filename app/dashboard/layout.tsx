"use client"
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex">
        <Sidebar isOpen={isOpen} onClose={toggleSidebar} />
        <main className="flex-1 p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;