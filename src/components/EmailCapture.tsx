import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

interface EmailCaptureProps {
  className?: string;
}

const EmailCapture: React.FC<EmailCaptureProps> = ({ className = '' }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setStatus('error');
      setMessage('Please enter your email address.');
      return;
    }

    setStatus('loading');
    
    try {
      // TODO: Replace with your actual Formspree form ID
      const response = await fetch('https://formspree.io/f/myzpolvb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('success');
        setMessage("Thanks! We'll keep you posted.");
        setEmail('');
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className={`w-full max-w-md mx-auto ${className}`}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            required
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 rounded-lg bg-white/15 border border-white/25 text-white placeholder:text-white/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition-all duration-300"
            disabled={status === 'loading'}
            aria-label="Email address"
          />
          <Button 
            type="submit" 
            variant="hero" 
            size="lg"
            disabled={status === 'loading'}
            className="px-8 py-3 min-w-[120px]"
          >
            {status === 'loading' ? 'Sending...' : 'Notify Me'}
          </Button>
        </div>
        
        {message && (
          <div 
            className={`text-center text-sm font-medium ${
              status === 'success' ? 'text-green-300' : 'text-red-300'
            }`}
            role="alert"
          >
            {message}
          </div>
        )}
      </form>
      
      {/* TODO: Optional - swap to Mailchimp integration later */}
    </div>
  );
};

export default EmailCapture;