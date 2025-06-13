import React, { useState } from 'react';
import { Radar, DollarSign, Calendar, Globe, TrendingUp } from 'lucide-react';

const MissionControl: React.FC = () => {
  const [formData, setFormData] = useState({
    audience: 'professionals',
    budget: 1000,
    duration: 7,
    geo: 'global',
  });

  const [predictions, setPredictions] = useState({
    reach: 125000,
    clicks: 8750,
    conversions: 525,
    roi: 340,
  });

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Simulate predictive analytics
    const newPredictions = {
      reach: Math.floor(Math.random() * 200000) + 50000,
      clicks: Math.floor(Math.random() * 15000) + 5000,
      conversions: Math.floor(Math.random() * 1000) + 200,
      roi: Math.floor(Math.random() * 500) + 200,
    };
    setPredictions(newPredictions);
  };

  return (
    <section id="mission" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text font-mono tracking-wider">
            MISSION CONTROL
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Configure your campaign parameters with military precision
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Tactical Interface */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Radar className="h-6 w-6 text-orange-400" />
                <h3 className="text-xl font-bold text-white tracking-wider">TACTICAL PARAMETERS</h3>
              </div>

              <div className="space-y-6">
                {/* Audience Targeting */}
                <div>
                  <label className="block text-sm text-orange-400 tracking-wider font-bold mb-3">
                    TARGET ACQUISITION
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {['professionals', 'students', 'entrepreneurs', 'seniors'].map((audience) => (
                      <button
                        key={audience}
                        onClick={() => handleInputChange('audience', audience)}
                        className={`p-3 rounded-lg border-2 text-sm font-bold tracking-wider transition-all duration-300 ${
                          formData.audience === audience
                            ? 'border-orange-400 bg-orange-400/10 text-orange-400'
                            : 'border-gray-600 text-gray-400 hover:border-gray-500'
                        }`}
                      >
                        {audience.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget Allocation */}
                <div>
                  <label className="block text-sm text-orange-400 tracking-wider font-bold mb-3">
                    BUDGET ALLOCATION: ${formData.budget.toLocaleString()}
                  </label>
                  <input
                    type="range"
                    min="100"
                    max="10000"
                    step="100"
                    value={formData.budget}
                    onChange={(e) => handleInputChange('budget', parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>$100</span>
                    <span>$10,000</span>
                  </div>
                </div>

                {/* Timeline */}
                <div>
                  <label className="block text-sm text-orange-400 tracking-wider font-bold mb-3">
                    MISSION DURATION: {formData.duration} DAYS
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    value={formData.duration}
                    onChange={(e) => handleInputChange('duration', parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1 Day</span>
                    <span>30 Days</span>
                  </div>
                </div>

                {/* Geographic Scope */}
                <div>
                  <label className="block text-sm text-orange-400 tracking-wider font-bold mb-3">
                    GEOGRAPHIC SCOPE
                  </label>
                  <select
                    value={formData.geo}
                    onChange={(e) => handleInputChange('geo', e.target.value)}
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg p-3 text-white focus:border-orange-400 focus:outline-none"
                  >
                    <option value="global">Global Operation</option>
                    <option value="us">United States</option>
                    <option value="europe">European Theater</option>
                    <option value="asia">Asia-Pacific</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Predictive Analytics */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <TrendingUp className="h-6 w-6 text-cyan-400" />
                <h3 className="text-xl font-bold text-white tracking-wider">PREDICTIVE ANALYTICS</h3>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: 'PROJECTED REACH', value: predictions.reach.toLocaleString(), icon: Globe, color: 'cyan' },
                  { label: 'ESTIMATED CLICKS', value: predictions.clicks.toLocaleString(), icon: TrendingUp, color: 'green' },
                  { label: 'CONVERSIONS', value: predictions.conversions.toLocaleString(), icon: DollarSign, color: 'purple' },
                  { label: 'ROI %', value: `${predictions.roi}%`, icon: TrendingUp, color: 'orange' },
                ].map((metric, index) => (
                  <div key={index} className={`bg-gradient-to-br from-${metric.color}-900/20 to-${metric.color}-800/20 border border-${metric.color}-400/30 rounded-lg p-4`}>
                    <div className="flex items-center justify-between mb-2">
                      <metric.icon className={`h-5 w-5 text-${metric.color}-400`} />
                      <div className={`w-2 h-2 bg-${metric.color}-400 rounded-full animate-pulse`} />
                    </div>
                    <div className={`text-2xl font-bold text-${metric.color}-400 mb-1`}>
                      {metric.value}
                    </div>
                    <div className="text-xs text-gray-400 tracking-wider">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Performance Chart Placeholder */}
              <div className="mt-8 p-6 bg-gray-800/30 rounded-lg border border-cyan-400/20">
                <div className="text-sm text-cyan-400 tracking-wider font-bold mb-4">
                  PERFORMANCE PROJECTION
                </div>
                <div className="h-32 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-orange-400/20 rounded relative">
                  <svg className="w-full h-full" viewBox="0 0 400 100">
                    <path
                      d="M0,80 Q100,20 200,40 T400,10"
                      stroke="rgba(0,212,255,0.8)"
                      strokeWidth="2"
                      fill="none"
                      className="animate-pulse"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Launch Sequence */}
            <div className="text-center">
              <button className="group relative bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold py-4 px-8 rounded-xl text-lg tracking-wider transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50">
                <span className="relative z-10">INITIATE LAUNCH SEQUENCE</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #f97316;
          cursor: pointer;
          box-shadow: 0 0 10px rgba(249, 115, 22, 0.5);
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #f97316;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 10px rgba(249, 115, 22, 0.5);
        }
      `}</style>
    </section>
  );
};

export default MissionControl;