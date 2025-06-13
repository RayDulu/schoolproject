import React, { useState, useEffect } from 'react';
import { Play, ArrowRight, Activity } from 'lucide-react';

const Hero: React.FC = () => {
  const [glitchText, setGlitchText] = useState('FORGE THE FUTURE OF ADVERTISING');
  const [statusMetrics, setStatusMetrics] = useState({
    campaigns: 0,
    conversions: 0,
    revenue: 0,
  });

  useEffect(() => {
    // Glitch effect for title
    const glitchInterval = setInterval(() => {
      const originalText = 'FORGE THE FUTURE OF ADVERTISING';
      const glitchChars = '!@#$%^&*()_+[]{}|;:,.<>?';
      
      let glitched = originalText;
      for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * originalText.length);
        const randomChar = glitchChars[Math.floor(Math.random() * glitchChars.length)];
        glitched = glitched.substring(0, randomIndex) + randomChar + glitched.substring(randomIndex + 1);
      }
      
      setGlitchText(glitched);
      
      setTimeout(() => setGlitchText(originalText), 100);
    }, 3000);

    // Animated metrics
    const metricsInterval = setInterval(() => {
      setStatusMetrics({
        campaigns: Math.floor(Math.random() * 10000) + 50000,
        conversions: Math.floor(Math.random() * 1000) + 25000,
        revenue: Math.floor(Math.random() * 100000) + 500000,
      });
    }, 2000);

    return () => {
      clearInterval(glitchInterval);
      clearInterval(metricsInterval);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-transparent to-purple-900/20" />
        <div 
          className="absolute inset-0 bg-repeat opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,212,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,212,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'grid-move 20s linear infinite',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className="text-4xl md:text-7xl font-bold tracking-wider mb-6 font-mono">
            <span className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text">
              {glitchText}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Neural-powered creative synthesis meets autonomous deployment
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-bold tracking-wider text-black transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50">
              <span className="relative z-10 flex items-center space-x-2">
                <span>INITIALIZE SYSTEM</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
            </button>

            <button className="group relative px-8 py-4 border-2 border-cyan-400 rounded-lg font-bold tracking-wider text-cyan-400 transform transition-all duration-300 hover:bg-cyan-400 hover:text-black">
              <span className="flex items-center space-x-2">
                <Play className="h-5 w-5" />
                <span>WITNESS THE POWER</span>
              </span>
              <div className="absolute inset-0 border-2 border-cyan-400 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
            </button>
          </div>
        </div>

        {/* Status Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { label: 'ACTIVE CAMPAIGNS', value: statusMetrics.campaigns.toLocaleString(), icon: Activity, color: 'cyan' },
            { label: 'TOTAL CONVERSIONS', value: statusMetrics.conversions.toLocaleString(), icon: Activity, color: 'green' },
            { label: 'REVENUE GENERATED', value: `$${statusMetrics.revenue.toLocaleString()}`, icon: Activity, color: 'purple' },
          ].map((metric, index) => (
            <div key={index} className="relative group">
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 transform transition-all duration-300 group-hover:scale-105 group-hover:border-cyan-400/50">
                <div className="flex items-center justify-between mb-2">
                  <metric.icon className={`h-6 w-6 text-${metric.color}-400`} />
                  <div className={`w-2 h-2 bg-${metric.color}-400 rounded-full animate-pulse`} />
                </div>
                <div className={`text-2xl font-bold text-${metric.color}-400 mb-1`}>
                  {metric.value}
                </div>
                <div className="text-sm text-gray-400 tracking-wider">
                  {metric.label}
                </div>
              </div>
              <div className={`absolute inset-0 bg-${metric.color}-400/10 rounded-lg blur-lg opacity-0 group-hover:opacity-50 transition-opacity`} />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;