import React from 'react';
import EmailCapture from '@/components/EmailCapture';
import IndustryList from '@/components/IndustryList';
import knviLogo from '@/assets/knvi-logo.png';
import waveAccent from '@/assets/wave-accent.png';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full">
        <div className="container mx-auto px-6 py-8">
          <div className="flex justify-center">
            <img 
              src={knviLogo} 
              alt="Knvi Technologies" 
              className="h-16 md:h-20 w-auto animate-fade-in"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 pt-8">
        {/* Hero Section */}
        <section className="w-full max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Website Under Construction
              </h1>
            </div>
            
            <div className="flex items-center justify-center gap-2 mb-6">
              <img 
                src={waveAccent} 
                alt="Voice waves" 
                className="h-4 w-16 opacity-80"
              />
              <span className="text-xl md:text-2xl font-semibold text-white/90">
                Innovation in Action
              </span>
              <img 
                src={waveAccent} 
                alt="Voice waves" 
                className="h-4 w-16 opacity-80"
              />
            </div>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Knvi's AI voice agents are already transforming business communication. 
              Our site is next — get notified when it's ready.
            </p>
          </div>

          {/* Email Capture */}
          <div className="pt-4">
            <p className="text-lg text-white/80 mb-6 font-medium">
              Be the first to know when we go live.
            </p>
            <EmailCapture className="animate-fade-in-delay" />
          </div>
        </section>

        {/* Industries Section */}
        <div className="w-full pt-20 pb-16">
          <IndustryList />
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-white/20 bg-black/20">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center">
            <p className="text-white/70 text-sm">
              © 2025 Knvi Technologies. All rights reserved.
            </p>
            {/* TODO: Add social icons when provided */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
