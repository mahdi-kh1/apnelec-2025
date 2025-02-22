import React from 'react';
import HeroSlider from './components/HeroSlider';
import ServicesPage from './services/page';

const Page = () => {
    return (
        <div className='-mt-24'>
            <HeroSlider/>
            <ServicesPage/>
        </div>
    );
};

export default Page;