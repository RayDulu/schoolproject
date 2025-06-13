import React from 'react';
import { Brain, Image, Clock, BarChart3, Zap, Shield } from 'lucide-react';

const CapabilityMatrix: React.FC = () => {
  const capabilities = [
    {
      icon: Brain,
      title: 'NEURAL COPYWRITING',
      description: 'Quantum-enhanced headline generation with psychological triggers',
      specs: ['GPT-4 Integration', '99.2% Conversion Rate', 'Real-time A/B Testing'],
      color: 'cyan',
    },
    {
      icon: Image,
      title: 'VISUAL SYNTHESIS',
      description: 'Photorealistic imagery generated from pure data streams',
      specs: ['DALL-E 3 Engine', '4K Resolution', 'Brand Consistency'],
      color: 'purple',
    },
    {
      icon: Clock,
      title: 'TEMPORAL OPTIMIZATION',
      description: 'Predictive timing algorithms for maximum engagement',
      specs: ['ML Scheduling', 'Timezone Analysis', 'Behavior Prediction'],
      color: 'green',
    },
    {
      icon: BarChart3,
      title: 'PERFORMANCE ORACLE',
      description: 'Omniscient analytics dashboard with predictive insights',
      specs: ['Real-time Metrics', 'ROI Forecasting', 'Anomaly Detection'],
      color: 'orange',
    },
    {
      icon: Zap,
      title: 'RAPID DEPLOYMENT',
      description: 'Lightning-fast campaign deployment across all platforms',
      specs: ['Multi-platform Sync', '< 60s Deploy Time', 'Auto-scaling'],
      color: 'yellow',
    },
    {
      icon: Shield,
      title: 'COMPLIANCE SHIELD',
      description: 'Automated compliance checking and policy adherence',
      specs: ['Policy Validation', 'Brand Safety', 'Regulatory Compliance'],
      color: 'blue',
    },
  ];

  return (
    <section id="capabilities" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-gradient-to-r from-purple-400 to-cyan-600 bg-clip-text font-mono tracking-wider">
            CAPABILITY MATRIX
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced systems engineered for advertising supremacy
          </p>
        </div>

        {/* Hexagonal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="group relative transform transition-all duration-500 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hexagonal Card */}
              <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm border border-gray-700 rounded-xl p-8 transform transition-all duration-300 group-hover:border-cyan-400/50">
                
                {/* System Status */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`flex items-center space-x-2 text-${capability.color}-400`}>
                    <div className={`w-2 h-2 bg-${capability.color}-400 rounded-full animate-pulse`} />
                    <span className="text-xs tracking-wider font-bold">ONLINE</span>
                  </div>
                  <div className="text-xs text-gray-500 font-mono">SYS-{index + 1}</div>
                </div>

                {/* Capability Icon */}
                <div className="relative mb-6">
                  <div className={`absolute inset-0 bg-${capability.color}-400/20 rounded-full blur-xl`} />
                  <div className={`relative bg-${capability.color}-400/10 rounded-full p-4 border border-${capability.color}-400/30`}>
                    <capability.icon className={`h-8 w-8 text-${capability.color}-400`} />
                  </div>
                </div>

                {/* System Info */}
                <h3 className="text-xl font-bold mb-3 text-white tracking-wider">
                  {capability.title}
                </h3>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                  {capability.description}
                </p>

                {/* Technical Specifications */}
                <div className="space-y-2 mb-6">
                  <div className="text-xs text-gray-400 tracking-wider font-bold">SPECIFICATIONS:</div>
                  {capability.specs.map((spec, specIndex) => (
                    <div key={specIndex} className="flex items-center space-x-2">
                      <div className={`w-1 h-1 bg-${capability.color}-400 rounded-full`} />
                      <span className="text-xs text-gray-400">{spec}</span>
                    </div>
                  ))}
                </div>

                {/* Performance Metric */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                  <span className="text-xs text-gray-500">PERFORMANCE</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-12 h-1 bg-gray-700 rounded-full overflow-hidden">
                      <div className={`h-full bg-${capability.color}-400 rounded-full animate-pulse`} style={{ width: '92%' }} />
                    </div>
                    <span className={`text-xs text-${capability.color}-400 font-bold`}>92%</span>
                  </div>
                </div>

                {/* Activation Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                
                {/* Scanning Line */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse" />
              </div>

              {/* Boot Sequence Effect */}
              <div className={`absolute inset-0 bg-${capability.color}-400/5 rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
            </div>
          ))}
        </div>

        {/* System Integration Visualization */}
        <div className="mt-16 relative">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-cyan-400 tracking-wider mb-2">
              SYSTEM INTEGRATION
            </h3>
            <p className="text-gray-400">All capabilities operate in perfect synchronization</p>
          </div>

          <div className="relative h-64 overflow-hidden">
            <svg className="w-full h-full" viewBox="0 0 800 200">
              <defs>
                <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(0,212,255,0)" />
                  <stop offset="50%" stopColor="rgba(0,212,255,0.8)" />
                  <stop offset="100%" stopColor="rgba(139,92,246,0)" />
                </linearGradient>
              </defs>
              
              {/* Connection Lines */}
              <path
                d="M100,100 Q200,50 300,100 T500,100 T700,100"
                stroke="url(#connectionGradient)"
                strokeWidth="2"
                fill="none"
                className="animate-pulse"
              />
              <path
                d="M100,120 Q250,80 400,120 T700,120"
                stroke="url(#connectionGradient)"
                strokeWidth="1"
                fill="none"
                className="animate-pulse"
                style={{ animationDelay: '0.5s' }}
              />
              
              {/* Node Points */}
              {[100, 250, 400, 550, 700].map((x, index) => (
                <circle
                  key={index}
                  cx={x}
                  cy={100 + (index % 2) * 20}
                  r="4"
                  fill="rgba(0,212,255,0.8)"
                  className="animate-pulse"
                  style={{ animationDelay: `${index * 0.2}s` }}
                />
              ))}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapabilityMatrix;