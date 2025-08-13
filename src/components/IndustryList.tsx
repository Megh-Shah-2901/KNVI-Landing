import React from 'react';

const industries = [
  'Event Management',
  'Medical/Dental', 
  'Insurance',
  'Hospitality',
  'SMBs',
  'Logistics',
  'Retail'
];

const IndustryList: React.FC = () => {
  return (
    <section className="w-full max-w-4xl mx-auto px-6 animate-fade-in-delay">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-white mb-6">
          Who We Serve
        </h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          From events and healthcare to logistics and retail, Knvi adapts to your workflows and systems.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3 md:gap-4">
          {industries.map((industry, index) => (
            <div
              key={industry}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-3 md:p-4 text-center border border-white/20 hover:bg-white/15 transition-all duration-300 min-h-[60px] flex items-center justify-center"
              style={{
                animationDelay: `${0.4 + index * 0.1}s`,
              }}
            >
              <span className="text-white font-medium text-xs md:text-sm xl:text-base leading-tight">
                {industry}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryList;