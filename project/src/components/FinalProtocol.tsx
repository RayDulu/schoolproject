import React, { useState } from 'react';
import { Mail, ArrowRight, Shield, Zap } from 'lucide-react';

const FinalProtocol: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isActivating, setIsActivating] = useState(false);
  const [systemStatus, setSystemStatus] = useState('STANDBY');

  const handleActivation = (e: React.FormEvent) => {
    e.preventDefault();
    setIsActivating(true);
    setSystemStatus('INITIALIZING...');
    
    setTimeout(() => {
      setSystemStatus('BIOMETRIC SCAN COMPLETE');
    }, 1000);
    
    setTimeout(() => {
      setSystemStatus('NEURAL LINK ESTABLISHED');
    }, 2000);
    
    setTimeout(() => {
      setSystemStatus('WELCOME TO THE FUTURE');
      setIsActivating(false);
    }, 3000);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-orange-500 bg-clip-text font-mono tracking-wider">
            ACTIVATE YOUR NEURAL LINK
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join the elite force of next-generation marketers. Initialize your connection to the advertising matrix.
          </p>
        </div>

        {/* Biometric Signup Interface */}
        <div className="relative max-w-md mx-auto mb-12">
          <form onSubmit={handleActivation} className="space-y-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-lg blur-lg" />
              <div className="relative bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-lg p-6">
                
                {/* Fingerprint Scanner Aesthetic */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className="relative">
                    <Shield className="h-6 w-6 text-cyan-400" />
                    <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-md animate-pulse" />
                  </div>
                  <span className="text-cyan-400 text-sm tracking-wider font-bold">
                    BIOMETRIC INTERFACE
                  </span>
                </div>

                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="neural.link@your-domain.com"
                    required
                    className="w-full bg-gray-800/50 border border-gray-600 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none font-mono text-sm"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isActivating}
              className="w-full bg-gradient-to-r from-cyan-500 via-purple-500 to-orange-500 text-black font-bold py-4 px-8 rounded-lg text-lg tracking-wider transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3"
            >
              {isActivating ? (
                <>
                  <Zap className="h-6 w-6 animate-pulse" />
                  <span>NEURAL SYNC IN PROGRESS...</span>
                </>
              ) : (
                <>
                  <span>INITIALIZE SYSTEM ACCESS</span>
                  <ArrowRight className="h-6 w-6" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* System Status Display */}
        <div className="mb-12">
          <div className={`inline-flex items-center space-x-4 bg-gray-900/80 backdrop-blur-sm border rounded-full px-6 py-3 transition-all duration-300 ${
            isActivating ? 'border-cyan-400/50' : 'border-gray-700'
          }`}>
            <div className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              isActivating ? 'bg-cyan-400 animate-pulse' : 'bg-gray-500'
            }`} />
            <span className={`text-sm tracking-wider font-bold ${
              isActivating ? 'text-cyan-400' : 'text-gray-400'
            }`}>
              SYSTEM STATUS: {systemStatus}
            </span>
          </div>
        </div>

        {/* Diagnostic Readouts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { label: 'NEURAL PATHWAYS', value: 'READY', status: 'active' },
            { label: 'AI SYNTHESIS', value: 'ONLINE', status: 'active' },
            { label: 'CREATIVE MATRIX', value: 'STANDBY', status: 'waiting' },
          ].map((diagnostic, index) => (
            <div key={index} className="bg-gray-900/60 backdrop-blur-sm border border-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-400 tracking-wider">{diagnostic.label}</span>
                <div className={`w-2 h-2 rounded-full ${
                  diagnostic.status === 'active' ? 'bg-green-400 animate-pulse' : 'bg-yellow-400'
                }`} />
              </div>
              <div className={`text-lg font-bold ${
                diagnostic.status === 'active' ? 'text-green-400' : 'text-yellow-400'
              }`}>
                {diagnostic.value}
              </div>
            </div>
          ))}
        </div>

        {/* Final Message */}
        <div className="text-center">
          <p className="text-gray-400 text-sm leading-relaxed max-w-md mx-auto">
            By activating your neural link, you agree to transcend conventional advertising limitations and unlock unprecedented creative potential.
          </p>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
    </section>
  );
};

export default FinalProtocol;