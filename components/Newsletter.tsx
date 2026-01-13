
import React from 'react';
import { Send } from 'lucide-react';

const Newsletter: React.FC = () => {
  return (
    <section className="bg-primary py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-oswald font-bold text-dark uppercase mb-2">GET EXCLUSIVE UPDATE</h2>
            <p className="text-dark/70 uppercase text-xs font-bold tracking-widest">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          
          <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Email" 
              className="min-w-[300px] px-6 py-4 rounded-md bg-white text-dark placeholder:text-gray-400 focus:outline-none shadow-xl"
            />
            <button className="flex items-center justify-center gap-2 bg-dark text-white px-8 py-4 rounded-md font-oswald font-bold uppercase hover:bg-gray-900 transition-all shadow-xl">
              <Send size={18} />
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
