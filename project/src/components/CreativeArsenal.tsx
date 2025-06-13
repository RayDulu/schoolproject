import React, { useState } from 'react';
import { ShoppingCart, Settings, Target, ChevronRight } from 'lucide-react';

const CreativeArsenal: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  const categories = [
    {
      icon: ShoppingCart,
      title: 'COMMERCE WARFARE',
      mission: 'Dominate retail battlegrounds with precision targeting',
      specializations: ['Fashion Campaigns', 'Tech Products', 'Lifestyle Brands'],
      color: 'cyan',
      samples: ['Dynamic Product Showcase', 'Flash Sale Campaigns', 'Brand Story Ads'],
    },
    {
      icon: Settings,
      title: 'ENTERPRISE OPERATIONS',
      mission: 'Strategic B2B campaigns for maximum conversion',
      specializations: ['SaaS Platforms', 'Consulting', 'Digital Services'],
      color: 'blue',
      samples: ['Lead Generation Funnels', 'Demo Campaigns', 'Thought Leadership'],
    },
    {
      icon: Target,
      title: 'BRAND DOMINATION',
      mission: 'Viral content that captures minds and hearts',
      specializations: ['Influencer Campaigns', 'Entertainment', 'Community Building'],
      color: 'purple',
      samples: ['Viral Video Ads', 'Social Campaigns', 'Brand Challenges'],
    },
  ];

  return (
    <section id="arsenal" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-gradient-to-r from-red-400 to-orange-600 bg-clip-text font-mono tracking-wider">
            SELECT YOUR WEAPON
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose your battlefield and deploy the perfect creative arsenal
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`group relative cursor-pointer transform transition-all duration-500 ${
                selectedCategory === index ? 'scale-105' : 'hover:scale-102'
              }`}
              onClick={() => setSelectedCategory(selectedCategory === index ? null : index)}
            >
              {/* Tactical Panel */}
              <div className={`relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm border-2 rounded-xl p-8 transition-all duration-300 ${
                selectedCategory === index 
                  ? `border-${category.color}-400 shadow-2xl shadow-${category.color}-400/20` 
                  : 'border-gray-700 group-hover:border-gray-600'
              }`}>
                
                {/* Holographic Icon */}
                <div className="relative mb-6">
                  <div className={`absolute inset-0 bg-${category.color}-400/20 rounded-full blur-xl animate-pulse`} />
                  <div className={`relative bg-${category.color}-400/10 rounded-full p-6 border-2 border-${category.color}-400/50`}>
                    <category.icon className={`h-12 w-12 text-${category.color}-400`} />
                  </div>
                  {selectedCategory === index && (
                    <div className="absolute -inset-2 border-2 border-dashed border-cyan-400 rounded-full animate-spin" />
                  )}
                </div>

                {/* Mission Brief */}
                <h3 className="text-2xl font-bold mb-4 text-white tracking-wider">
                  {category.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {category.mission}
                </p>

                {/* Specializations */}
                <div className="space-y-2 mb-6">
                  <div className="text-sm text-gray-400 tracking-wider font-semibold">SPECIALIZATIONS:</div>
                  {category.specializations.map((spec, specIndex) => (
                    <div key={specIndex} className="flex items-center space-x-2">
                      <div className={`w-1 h-1 bg-${category.color}-400 rounded-full`} />
                      <span className="text-sm text-gray-300">{spec}</span>
                    </div>
                  ))}
                </div>

                {/* Expand Indicator */}
                <div className="flex items-center justify-between">
                  <div className={`text-xs text-${category.color}-400 tracking-wider font-bold`}>
                    {selectedCategory === index ? 'DEPLOYING...' : 'READY FOR DEPLOYMENT'}
                  </div>
                  <ChevronRight className={`h-5 w-5 text-${category.color}-400 transform transition-transform ${
                    selectedCategory === index ? 'rotate-90' : ''
                  }`} />
                </div>

                {/* Selection Effects */}
                {selectedCategory === index && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent animate-pulse rounded-xl" />
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />
                  </>
                )}
              </div>

              {/* Sample Hologram Display */}
              {selectedCategory === index && (
                <div className="mt-6 space-y-3 animate-fadeIn">
                  <div className="text-sm text-cyan-400 tracking-wider font-bold mb-3">
                    MATERIALIZING SAMPLES...
                  </div>
                  {category.samples.map((sample, sampleIndex) => (
                    <div
                      key={sampleIndex}
                      className="bg-gray-900/60 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-4 transform transition-all duration-300 hover:scale-105"
                      style={{ animationDelay: `${sampleIndex * 0.1}s` }}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                        <span className="text-gray-300 text-sm">{sample}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-${category.color}-400/5 rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
            </div>
          ))}
        </div>

        {/* Deployment Status */}
        {selectedCategory !== null && (
          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-4 bg-gray-900/80 backdrop-blur-sm border border-cyan-400/30 rounded-full px-6 py-3">
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
              <span className="text-cyan-400 text-sm tracking-wider font-bold">
                WEAPON SYSTEM ARMED - READY FOR CREATIVE SYNTHESIS
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CreativeArsenal;