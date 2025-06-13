import React from 'react';
import { Quote, Star, TrendingUp } from 'lucide-react';

const TestimonialArchive: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      title: 'CMO, TechNova',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'AdForge AI transformed our campaign performance overnight. Our ROAS increased by 340% in the first month alone.',
      metrics: { roas: '340%', clicks: '125K', conversions: '8.2K' },
      color: 'cyan',
    },
    {
      name: 'Marcus Rodriguez',
      title: 'Founder, GrowthHacker',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'The AI-generated creatives consistently outperform our human-designed ads. Its like having a team of expert copywriters working 24/7.',
      metrics: { performance: '+285%', time_saved: '40hrs/week', revenue: '$2.1M' },
      color: 'purple',
    },
    {
      name: 'Elena Vasquez',
      title: 'Marketing Director, FitLife',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'The predictive analytics helped us identify the perfect timing and audience segments. Our cost per acquisition dropped by 67%.',
      metrics: { cpa_reduction: '67%', reach: '2.3M', engagement: '+425%' },
      color: 'green',
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text font-mono tracking-wider">
            MISSION REPORTS
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Intelligence gathered from the field - verified success stories
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative transform transition-all duration-500 hover:scale-105"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Holographic Testimonial Card */}
              <div className={`relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm border border-gray-700 rounded-xl p-8 transform transition-all duration-300 group-hover:border-${testimonial.color}-400/50`}>
                
                {/* Classification Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`flex items-center space-x-2 text-${testimonial.color}-400`}>
                    <div className={`w-2 h-2 bg-${testimonial.color}-400 rounded-full animate-pulse`} />
                    <span className="text-xs tracking-wider font-bold">CLASSIFIED</span>
                  </div>
                  <Quote className={`h-6 w-6 text-${testimonial.color}-400/50`} />
                </div>

                {/* Agent Profile */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="relative">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full border-2 border-cyan-400/30"
                    />
                    <div className={`absolute -bottom-1 -right-1 w-5 h-5 bg-${testimonial.color}-400 rounded-full border-2 border-gray-900 flex items-center justify-center`}>
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.title}</p>
                  </div>
                </div>

                {/* Mission Report */}
                <blockquote className="text-gray-300 text-sm leading-relaxed mb-6 relative">
                  <div className={`absolute left-0 top-0 w-1 h-full bg-${testimonial.color}-400/30 rounded-full`} />
                  <div className="pl-4">
                    "{testimonial.content}"
                  </div>
                </blockquote>

                {/* Success Metrics */}
                <div className="space-y-3">
                  <div className="text-xs text-gray-400 tracking-wider font-bold">MISSION METRICS:</div>
                  <div className="grid grid-cols-3 gap-3">
                    {Object.entries(testimonial.metrics).map(([key, value], metricIndex) => (
                      <div key={metricIndex} className={`bg-${testimonial.color}-400/10 border border-${testimonial.color}-400/30 rounded-lg p-3 text-center`}>
                        <div className={`text-lg font-bold text-${testimonial.color}-400`}>
                          {value}
                        </div>
                        <div className="text-xs text-gray-400 uppercase tracking-wider">
                          {key.replace('_', ' ')}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Rating System */}
                <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-700">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, starIndex) => (
                      <Star key={starIndex} className={`h-4 w-4 text-${testimonial.color}-400 fill-current`} />
                    ))}
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className={`h-4 w-4 text-${testimonial.color}-400`} />
                    <span className={`text-xs text-${testimonial.color}-400 font-bold`}>VERIFIED</span>
                  </div>
                </div>

                {/* Holographic Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              </div>

              {/* Voice-over Effect Indicator */}
              <div className={`absolute top-4 right-4 w-3 h-3 bg-${testimonial.color}-400 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity`} />

              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-${testimonial.color}-400/5 rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
            </div>
          ))}
        </div>

        {/* Statistics Dashboard */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { label: 'ACTIVE AGENTS', value: '50,000+', color: 'cyan' },
            { label: 'MISSIONS COMPLETED', value: '2.3M', color: 'purple' },
            { label: 'TOTAL ROI GENERATED', value: '$847M', color: 'green' },
            { label: 'SUCCESS RATE', value: '98.7%', color: 'orange' },
          ].map((stat, index) => (
            <div key={index} className={`text-center p-6 bg-gradient-to-br from-${stat.color}-900/20 to-${stat.color}-800/20 border border-${stat.color}-400/30 rounded-xl`}>
              <div className={`text-3xl font-bold text-${stat.color}-400 mb-2`}>
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialArchive;