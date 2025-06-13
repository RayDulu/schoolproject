import React, { useState, useEffect } from 'react';
import { Terminal, Play, Download, RefreshCw } from 'lucide-react';

const NeuralLab: React.FC = () => {
  const [currentInput, setCurrentInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [generatedAds, setGeneratedAds] = useState<Array<{
    title: string;
    description: string;
    cta: string;
    style: string;
  }>>([]);

  const [typingText, setTypingText] = useState('');
  const fullText = 'Generate high-converting Facebook ad creative for a premium fitness app targeting busy professionals aged 25-40 who want quick, effective workouts at home';

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypingText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  const handleGenerate = () => {
    setIsProcessing(true);
    
    setTimeout(() => {
      setGeneratedAds([
        {
          title: 'Transform Your Body in Just 15 Minutes',
          description: 'Busy professional? Our AI-powered fitness app creates personalized workouts that fit your schedule. No gym required.',
          cta: 'Start Your Free Trial',
          style: 'Professional'
        },
        {
          title: 'From Couch to Confident in 30 Days',
          description: 'Join 100,000+ professionals who turned their living room into their personal gym. Quick, effective, results-driven.',
          cta: 'Get Instant Access',
          style: 'Motivational'
        },
        {
          title: 'Stop Making Excuses. Start Making Progress.',
          description: 'Your busy schedule isnt an excuse anymore. Get fit with workouts designed for your lifestyle and goals.',
          cta: 'Download Now',
          style: 'Direct'
        }
      ]);
      setIsProcessing(false);
    }, 3000);
  };

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-gradient-to-r from-green-400 to-cyan-600 bg-clip-text font-mono tracking-wider">
            NEURAL CREATIVE LAB
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Live synthesis chamber where ideas become high-converting campaigns
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Command Terminal */}
          <div className="space-y-6">
            <div className="bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden">
              <div className="bg-gray-800/50 px-4 py-3 border-b border-gray-700 flex items-center space-x-3">
                <Terminal className="h-5 w-5 text-green-400" />
                <span className="text-green-400 text-sm tracking-wider font-bold">NEURAL INTERFACE</span>
                <div className="flex space-x-1 ml-auto">
                  <div className="w-3 h-3 bg-red-400 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <div className="text-green-400 text-sm mb-2 tracking-wider">INPUT PROTOCOL:</div>
                  <textarea
                    className="w-full bg-gray-800/50 border border-gray-600 rounded-lg p-4 text-gray-300 font-mono text-sm focus:border-cyan-400 focus:outline-none resize-none"
                    rows={6}
                    value={currentInput || typingText}
                    onChange={(e) => setCurrentInput(e.target.value)}
                    placeholder="Describe your campaign requirements..."
                  />
                </div>

                <button
                  onClick={handleGenerate}
                  disabled={isProcessing}
                  className="w-full bg-gradient-to-r from-green-500 to-cyan-600 text-black font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isProcessing ? (
                    <>
                      <RefreshCw className="h-5 w-5 animate-spin" />
                      <span>NEURAL PROCESSING...</span>
                    </>
                  ) : (
                    <>
                      <Play className="h-5 w-5" />
                      <span>INITIATE SYNTHESIS</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* AI Processing Visual */}
            {isProcessing && (
              <div className="bg-gray-900/60 backdrop-blur-sm border border-cyan-400/30 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
                  <span className="text-cyan-400 text-sm tracking-wider font-bold">
                    NEURAL NETWORK ACTIVE
                  </span>
                </div>
                
                <div className="space-y-3">
                  {['Analyzing target demographics...', 'Processing psychological triggers...', 'Optimizing conversion elements...', 'Generating creative variations...'].map((step, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: `${index * 0.5}s` }} />
                      <span className="text-gray-300 text-sm">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Holographic Previews */}
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-cyan-400 tracking-wider mb-2">
                SYNTHESIZED CREATIVES
              </h3>
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto" />
            </div>

            {generatedAds.length > 0 ? (
              <div className="space-y-4">
                {generatedAds.map((ad, index) => (
                  <div
                    key={index}
                    className="group bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-xl p-6 transform transition-all duration-300 hover:scale-105 hover:border-cyan-400/50"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-purple-400 tracking-wider font-bold bg-purple-400/10 px-2 py-1 rounded">
                        {ad.style.toUpperCase()} VARIANT
                      </span>
                      <Download className="h-4 w-4 text-gray-400 group-hover:text-cyan-400 cursor-pointer transition-colors" />
                    </div>
                    
                    <h4 className="text-lg font-bold text-white mb-3">{ad.title}</h4>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">{ad.description}</p>
                    
                    <div className="bg-cyan-500 text-black text-center py-2 px-4 rounded-lg font-bold text-sm">
                      {ad.cta}
                    </div>

                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-700">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-xs text-gray-400">CONVERSION OPTIMIZED</span>
                      </div>
                      <span className="text-xs text-cyan-400 font-bold">98.7% MATCH</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 border-2 border-dashed border-gray-700 rounded-xl">
                <div className="text-gray-500 text-lg mb-2">Awaiting Neural Input</div>
                <div className="text-gray-600 text-sm">Synthesized creatives will materialize here</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeuralLab;