import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-lg border-b border-cyan-500/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Zap className="h-8 w-8 text-cyan-400 animate-pulse" />
              <div className="absolute inset-0 h-8 w-8 bg-cyan-400/20 rounded-full blur-md animate-pulse" />
            </div>
            <span className="text-xl font-bold tracking-wider text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
              ADFORGE AI
            </span>
          </div>

          <nav className="hidden md:flex space-x-8">
            {['SYSTEM', 'CAPABILITIES', 'ARSENAL', 'MISSION', 'ACCESS'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm tracking-wider font-semibold relative group"
              >
                {item}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-cyan-400 p-2"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg border-t border-cyan-500/20">
          <div className="px-4 py-4 space-y-4">
            {['SYSTEM', 'CAPABILITIES', 'ARSENAL', 'MISSION', 'ACCESS'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm tracking-wider font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;