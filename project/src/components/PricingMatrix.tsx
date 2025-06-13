import React, { useState } from 'react';
import { Shield, Zap, Crown, Check, X } from 'lucide-react';

const PricingMatrix: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState(1);

  const tiers = [
    {
      name: 'RECRUIT',
      subtitle: 'Basic Access Level',
      price: 97,
      icon: Shield,
      color: 'cyan',
      clearance: 'LEVEL 1',
      features: [
        { name: 'AI Creative Generation', included: true, limit: '50 creatives/month' },
        { name: 'Facebook Campaign Deployment', included: true, limit: '5 campaigns' },
        { name: 'Basic Analytics Dashboard', included: true, limit: 'Standard metrics' },
        { name: 'Email Support', included: true, limit: '48h response' },
        { name: 'Advanced Targeting', included: false, limit: null },
        { name: 'Custom Brand Voice', included: false, limit: null },
        { name: 'Priority Support', included: false, limit: null },
        { name: 'API Access', included: false, limit: null },
      ],
    },
    {
      name: 'OPERATIVE',
      subtitle: 'Enhanced Capabilities',
      price: 297,
      icon: Zap,
      color: 'purple',
      clearance: 'LEVEL 2',
      popular: true,
      features: [
        { name: 'AI Creative Generation', included: true, limit: '500 creatives/month' },
        { name: 'Multi-Platform Deployment', included: true, limit: 'Facebook, Instagram, LinkedIn' },
        { name: 'Advanced Analytics Suite', included: true, limit: 'Predictive insights' },
        { name: 'Priority Support', included: true, limit: '12h response' },
        { name: 'Advanced Targeting', included: true, limit: 'Behavioral + lookalike' },
        { name: 'Custom Brand Voice', included: true, limit: '3 brand profiles' },
        { name: 'A/B Test Automation', included: true, limit: 'Unlimited tests' },
        { name: 'API Access', included: false, limit: null },
      ],
    },
    {
      name: 'COMMANDER',
      subtitle: 'Full System Access',
      price: 697,
      icon: Crown,
      color: 'orange',
      clearance: 'LEVEL 3',
      features: [
        { name: 'Unlimited AI Generation', included: true, limit: 'No limits' },
        { name: 'Omnichannel Deployment', included: true, limit: 'All major platforms' },
        { name: 'Enterprise Analytics', included: true, limit: 'Custom dashboards' },
        { name: 'White-Glove Support', included: true, limit: '2h response + calls' },
        { name: 'Advanced Targeting', included: true, limit: 'All features' },
        { name: 'Unlimited Brand Voices', included: true, limit: 'Unlimited profiles' },
        { name: 'Advanced Automation', included: true, limit: 'Full suite' },
        { name: 'Full API Access', included: true, limit: 'Complete integration' },
      ],
    },
  ];

  return (
    <section id="access" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text font-mono tracking-wider">
            ACCESS LEVELS
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose your security clearance and unlock the power within
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`group relative transform transition-all duration-500 ${
                selectedTier === index ? 'scale-105' : 'hover:scale-102'
              } ${tier.popular ? 'lg:-mt-8' : ''}`}
              onClick={() => setSelectedTier(index)}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-purple-500 to-cyan-500 text-black font-bold py-2 px-6 rounded-full text-sm tracking-wider">
                    MOST POPULAR
                  </div>
                </div>
              )}

              {/* Security Clearance Card */}
              <div className={`relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm border-2 rounded-xl overflow-hidden transition-all duration-300 ${
                selectedTier === index 
                  ? `border-${tier.color}-400 shadow-2xl shadow-${tier.color}-400/20` 
                  : 'border-gray-700 group-hover:border-gray-600'
              }`}>
                
                {/* Security Header */}
                <div className={`bg-gradient-to-r from-${tier.color}-900/50 to-${tier.color}-800/50 p-6 border-b border-${tier.color}-400/20`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`bg-${tier.color}-400/20 rounded-full p-3 border border-${tier.color}-400/30`}>
                      <tier.icon className={`h-8 w-8 text-${tier.color}-400`} />
                    </div>
                    <div className={`text-xs text-${tier.color}-400 tracking-wider font-bold bg-${tier.color}-400/10 px-3 py-1 rounded-full`}>
                      {tier.clearance}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white tracking-wider mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {tier.subtitle}
                  </p>
                  
                  <div className="flex items-baseline space-x-2">
                    <span className={`text-4xl font-bold text-${tier.color}-400`}>
                      ${tier.price}
                    </span>
                    <span className="text-gray-400 text-sm">/month</span>
                  </div>
                </div>

                {/* Feature Permissions */}
                <div className="p-6">
                  <div className="space-y-4">
                    {tier.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <div className="mt-1">
                          {feature.included ? (
                            <Check className={`h-5 w-5 text-${tier.color}-400`} />
                          ) : (
                            <X className="h-5 w-5 text-gray-500" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className={`text-sm ${feature.included ? 'text-white' : 'text-gray-500'}`}>
                            {feature.name}
                          </div>
                          {feature.limit && (
                            <div className="text-xs text-gray-400 mt-1">
                              {feature.limit}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Activation Button */}
                <div className="p-6 pt-0">
                  <button className={`w-full bg-gradient-to-r from-${tier.color}-500 to-${tier.color}-600 text-black font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-${tier.color}-500/50`}>
                    ACTIVATE ACCESS
                  </button>
                </div>

                {/* Security Scanning Effect */}
                {selectedTier === index && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent animate-pulse rounded-xl" />
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />
                  </>
                )}
              </div>

              {/* Biometric Glow */}
              <div className={`absolute inset-0 bg-${tier.color}-400/5 rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
            </div>
          ))}
        </div>

        {/* Upgrade Path Visualization */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-gray-900/80 backdrop-blur-sm border border-cyan-400/30 rounded-full px-6 py-3">
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-cyan-400 text-sm tracking-wider font-bold">
              UPGRADE PATH UNLOCKED - SEAMLESS CLEARANCE ELEVATION
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingMatrix;