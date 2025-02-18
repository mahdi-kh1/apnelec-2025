import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Page = () => {
    return (
        <div>
            <Navbar />
            <main>
                <h1>Welcome to the Website</h1>
                <p>This is the main content area for the website view.</p>
            </main>
            <Footer />
        </div>
    );
};

export default Page;