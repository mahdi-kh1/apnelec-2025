"use client";

import React from 'react';
// import "@/styles/globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
        <Navbar />
        <main className='min-h-screen'>{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;