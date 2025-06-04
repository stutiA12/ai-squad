import React from 'react';
import frame from './assets/Background ray.png';
import Navbar from './components/Navbar';
import MainContainer from './components/MainContent';
import AboutUs from './components/AboutUs';
import './App.css';
import Services from './components/Services';
import Features from './components/Features';
import UseCases from './components/UseCases';
import LLMSection from './components/LLMSection';
import PricingPlans from './components/PricingPlans';
import Testimonials from './components/Testimonials';
import BlogsEvents from './components/Blogsevent';
import ContactFooter from './components/ContactFooter';

function App() {
    return (
        <div className="app-container">
            <Navbar />
            <MainContainer />
            <AboutUs />
            <Services />
            <Features />
            <UseCases/>
            <LLMSection/>
            <PricingPlans />
            <Testimonials />
            <BlogsEvents/>
            <ContactFooter/>
            </div>
        
    );
}

export default App;
