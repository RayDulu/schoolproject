import React from 'react';
import { Brain, Cpu, Image, Rocket } from 'lucide-react';

const SystemOverview: React.FC = () => {
  const processes = [
    {
      icon: Brain,
      title: 'INPUT PROTOCOL',
      description: 'Brain-computer interface for campaign requirements',
      color: 'cyan',
      delay: '0s',
    },
    {
      icon: Cpu,
      title: 'AI SYNTHESIS',
      description: 'Neural network processing and optimization',
      color: 'blue',
      delay: '0.2s',
    },
    {
      icon: Image,
      title: 'CREATIVE MATRIX',
      description: 'Holographic ad preview generation',
      color: 'purple',
      delay: '0.4s',
    },
    {
      icon: Rocket,
      title: 'DEPLOYMENT SEQUENCE',
      description: 'Autonomous launch countdown interface',
      color: 'green',
      delay: '0.6s',
    },
  ];

  return (
    <section id="system" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text font-mono tracking-wider">
            NEURAL PROCESS FLOW
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Witness the convergence of artificial intelligence and creative mastery
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processes.map((process, index) => (
            <div
              key={index}
              className="group relative transform transition-all duration-500 hover:scale-105"
              style={{ animationDelay: process.delay }}
            >
              {/* 3D Card Effect */}
              <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-xl p-8 transform transition-all duration-300 group-hover:border-cyan-400/50 group-hover:rotate-y-12">
                
                {/* Holographic Icon */}
                <div className="relative mb-6">
                  <div className={`absolute inset-0 bg-${process.color}-400/20 rounded-full blur-xl`} />
                  <div className={`relative bg-${process.color}-400/10 rounded-full p-4 border border-${process.color}-400/30`}>
                    <process.icon className={`h-8 w-8 text-${process.color}-400`} />
                  </div>
                </div>

                {/* Process Info */}
                <h3 className="text-xl font-bold mb-3 text-white tracking-wider">
                  {process.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {process.description}
                </p>

                {/* Status Indicator */}
                <div className="flex items-center mt-4 space-x-2">
                  <div className={`w-2 h-2 bg-${process.color}-400 rounded-full animate-pulse`} />
                  <span className="text-xs text-gray-400 tracking-wider">ACTIVE</span>
                </div>

                {/* Scanning Line Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent transform -skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
              </div>

              {/* Data Stream Connection */}
              {index < processes.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent">
                  <div className="absolute top-0 left-0 w-2 h-0.5 bg-cyan-400 animate-pulse" />
                </div>
              )}

              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-${process.color}-400/5 rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
            </div>
          ))}
        </div>

        {/* Neural Network Visualization */}
        <div className="mt-16 relative">
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-32" viewBox="0 0 800 200">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(0,212,255,0)" />
                  <stop offset="50%" stopColor="rgba(0,212,255,1)" />
                  <stop offset="100%" stopColor="rgba(139,92,246,0)" />
                </linearGradient>
              </defs>
              <path
                d="M0,100 Q200,50 400,100 T800,100"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                fill="none"
                className="animate-pulse"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemOverview;