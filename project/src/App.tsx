import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SystemOverview from './components/SystemOverview';
import CreativeArsenal from './components/CreativeArsenal';
import NeuralLab from './components/NeuralLab';
import MissionControl from './components/MissionControl';
import CapabilityMatrix from './components/CapabilityMatrix';
import CreativeCategories from './components/CreativeCategories';
import TestimonialArchive from './components/TestimonialArchive';
import PricingMatrix from './components/PricingMatrix';
import FinalProtocol from './components/FinalProtocol';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-mono overflow-x-hidden">
      <ParticleBackground />
      <Header />
      <Hero />
      <SystemOverview />
      <CreativeArsenal />
      <NeuralLab />
      <MissionControl />
      <CapabilityMatrix />
      <CreativeCategories />
      <TestimonialArchive />
      <PricingMatrix />
      <FinalProtocol />
    </div>
  );
}

export default App;