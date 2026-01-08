import React from 'react'
import Hero from './Hero';
import Awards from './Award';
import Stats from './Stats'; // Make sure the file is named 'stats.js' and is in the same folder as Homepage.js, and that it exports the component as default.
import Pricing from './Pricing';
import Education from './Education';
import Navbar from '../Navbar';
import Footer from '../Footer';
import OpenAccount from '../OpenAccount';

function Homepage() {
    return ( 
        <>
        <Hero />
        <Awards/>
        <Stats/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
        </>
     );
}

export default Homepage;