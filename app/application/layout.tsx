"use client";

import React from 'react';
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider>
      <div className="min-h-screen relative bg-white dark:bg-[#1f1f1f] text-black dark:text-white">
        <Navbar />
        <main className='min-h-screen mt-16'>{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;