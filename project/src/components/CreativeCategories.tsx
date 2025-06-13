import React, { useState } from 'react';
import { ShoppingCart, Building, Target, Zap, Brain, Cpu } from 'lucide-react';

const CreativeCategories: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const categories = [
    {
      title: 'E-COMMERCE',
      icon: ShoppingCart,
      color: '#00ffff',
      previewImage: 'https://i.imghippo.com/files/Yix6618Yk.png'
    },
    {
      title: 'REAL ESTATE',
      icon: Building,
      color: '#8b5cf6',
      previewImage: 'https://i.imghippo.com/files/MU3562NqY.png'
    },
    {
      title: 'LEAD GENERATION',
      icon: Target,
      color: '#00ff88',
      previewImage: 'https://i.imghippo.com/files/PkdH7325M.png'
    },
  ];

  const handleCategoryClick = (index: number) => {
    setSelectedCategory(index);
    setIsGenerating(true);
    setShowPreview(false);

    // Simulate generation process
    setTimeout(() => {
      setIsGenerating(false);
      setShowPreview(true);
    }, 3000);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Three Category Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => handleCategoryClick(index)}
              className="group relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm border-2 rounded-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{
                borderColor: `${category.color}40`,
                boxShadow: selectedCategory === index 
                  ? `0 0 30px ${category.color}60`
                  : `0 0 15px ${category.color}30`,
              }}
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div 
                  className="absolute inset-0 rounded-full blur-xl animate-pulse"
                  style={{ backgroundColor: `${category.color}30` }}
                />
                <div 
                  className="relative rounded-full p-6 border-2"
                  style={{ 
                    backgroundColor: `${category.color}10`,
                    borderColor: `${category.color}50`,
                  }}
                >
                  <category.icon 
                    className="h-12 w-12 mx-auto"
                    style={{ color: category.color }}
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white tracking-wider font-mono">
                {category.title}
              </h3>

              {/* Hover Glow */}
              <div 
                className="absolute inset-0 rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                style={{ backgroundColor: `${category.color}20` }}
              />

              {/* Selection Indicator */}
              {selectedCategory === index && (
                <div 
                  className="absolute top-0 left-0 w-full h-1 animate-pulse"
                  style={{ backgroundColor: category.color }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Generation/Preview Area */}
        {selectedCategory !== null && (
          <div className="text-center">
            {isGenerating ? (
              /* Generation Effect */
              <div className="relative bg-gray-900/80 backdrop-blur-sm border rounded-xl p-12 max-w-2xl mx-auto"
                style={{ borderColor: `${categories[selectedCategory].color}40` }}>
                
                {/* Generation Status */}
                <div className="mb-8">
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <Brain className="h-8 w-8 animate-pulse" style={{ color: categories[selectedCategory].color }} />
                    <span className="text-2xl font-bold text-white tracking-wider">
                      GENERATING {categories[selectedCategory].title} CREATIVE
                    </span>
                    <Cpu className="h-8 w-8 animate-spin" style={{ color: categories[selectedCategory].color }} />
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-700 rounded-full h-2 mb-6">
                    <div 
                      className="h-2 rounded-full animate-pulse"
                      style={{ 
                        backgroundColor: categories[selectedCategory].color,
                        width: '100%',
                        animation: 'progress 3s ease-in-out'
                      }}
                    />
                  </div>
                </div>

                {/* Neural Network Visualization */}
                <div className="relative h-64 bg-gray-800/50 rounded-lg overflow-hidden">
                  {/* Flowing Data Lines */}
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute h-0.5 w-full opacity-60"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${categories[selectedCategory].color}, transparent)`,
                        top: `${(i + 1) * 8}%`,
                        animation: `flow-${i % 2 === 0 ? 'right' : 'left'} 1.5s linear infinite`,
                        animationDelay: `${i * 0.1}s`,
                      }}
                    />
                  ))}

                  {/* Neural Nodes */}
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-3 h-3 rounded-full animate-pulse"
                      style={{
                        backgroundColor: categories[selectedCategory].color,
                        left: `${Math.random() * 90 + 5}%`,
                        top: `${Math.random() * 80 + 10}%`,
                        animationDelay: `${i * 0.1}s`,
                        animationDuration: `${1 + Math.random()}s`,
                      }}
                    />
                  ))}

                  {/* Central Processing Core */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div 
                      className="w-16 h-16 rounded-full border-4 animate-spin"
                      style={{ borderColor: `${categories[selectedCategory].color}40 ${categories[selectedCategory].color} ${categories[selectedCategory].color}40 ${categories[selectedCategory].color}` }}
                    />
                  </div>
                </div>

                {/* Generation Steps */}
                <div className="mt-8 space-y-2">
                  {[
                    'Analyzing target demographics...',
                    'Processing psychological triggers...',
                    'Optimizing conversion elements...',
                    'Rendering final creative...'
                  ].map((step, index) => (
                    <div key={index} className="flex items-center justify-center space-x-3 text-gray-300">
                      <div 
                        className="w-2 h-2 rounded-full animate-pulse"
                        style={{ 
                          backgroundColor: categories[selectedCategory].color,
                          animationDelay: `${index * 0.5}s`
                        }}
                      />
                      <span className="text-sm">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : showPreview ? (
              /* Image Preview */
              <div className="relative bg-gray-900/80 backdrop-blur-sm border rounded-xl p-8 max-w-4xl mx-auto"
                style={{ borderColor: `${categories[selectedCategory].color}40` }}>
                
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-white tracking-wider mb-2">
                    {categories[selectedCategory].title} CREATIVE GENERATED
                  </h3>
                  <div className="flex items-center justify-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full animate-pulse"
                      style={{ backgroundColor: categories[selectedCategory].color }}
                    />
                    <span 
                      className="text-sm tracking-wider font-bold"
                      style={{ color: categories[selectedCategory].color }}
                    >
                      NEURAL SYNTHESIS COMPLETE
                    </span>
                  </div>
                </div>

                {/* Generated Image */}
                <div className="relative">
                  <img 
                    src={categories[selectedCategory].previewImage}
                    alt={`${categories[selectedCategory].title} Creative`}
                    className="w-full max-w-2xl mx-auto rounded-lg shadow-2xl"
                    style={{ boxShadow: `0 0 30px ${categories[selectedCategory].color}30` }}
                  />
                  
                  {/* Holographic Overlay */}
                  <div 
                    className="absolute inset-0 rounded-lg opacity-20 animate-pulse"
                    style={{
                      background: `linear-gradient(45deg, transparent 30%, ${categories[selectedCategory].color}20 50%, transparent 70%)`,
                      backgroundSize: '200% 200%',
                      animation: 'holographic-shine 3s ease-in-out infinite',
                    }}
                  />
                </div>

                {/* Action Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    className="px-8 py-3 rounded-lg font-bold tracking-wider transition-all duration-300 hover:scale-105"
                    style={{
                      backgroundColor: categories[selectedCategory].color,
                      color: '#000000',
                      boxShadow: `0 4px 15px ${categories[selectedCategory].color}40`,
                    }}
                  >
                    DEPLOY CAMPAIGN
                  </button>
                  
                  <button 
                    onClick={() => handleCategoryClick(selectedCategory)}
                    className="px-8 py-3 border-2 rounded-lg font-bold tracking-wider text-white transition-all duration-300 hover:scale-105"
                    style={{ borderColor: categories[selectedCategory].color }}
                  >
                    GENERATE NEW VARIANT
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes flow-right {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes flow-left {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }

        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        
        @keyframes holographic-shine {
          0% { background-position: -200% -200%; }
          50% { background-position: 200% 200%; }
          100% { background-position: -200% -200%; }
        }
      `}</style>
    </section>
  );
};

export default CreativeCategories;