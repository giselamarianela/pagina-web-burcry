
import React from 'react';
import { Calendar, User, Folder } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-20 overflow-hidden">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 h-[500px]" 
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=2072&auto=format&fit=crop)' }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 py-32 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-7xl font-oswald font-bold text-white mb-6 uppercase leading-tight tracking-tight">
          THE NEW BLACK BURGER WITH SPICE <br />
          <span className="text-primary">TASTE TO SATISFY YOU</span>
        </h1>
        
        <div className="flex flex-wrap justify-center items-center gap-6 text-gray-400 font-medium">
          <div className="flex items-center gap-2">
            <User size={18} className="text-primary" />
            <span>John Doe</span>
          </div>
          <div className="flex items-center gap-2 border-l border-white/10 pl-6">
            <Calendar size={18} className="text-primary" />
            <span>July 28, 2021</span>
          </div>
          <div className="flex items-center gap-2 border-l border-white/10 pl-6">
            <Folder size={18} className="text-primary" />
            <span>Food</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
