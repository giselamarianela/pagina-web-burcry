
import React, { useState } from 'react';
import { Sparkles, Loader2, ChevronRight } from 'lucide-react';
import { getSmartRecommendation } from '../services/geminiService';

const SmartMenu: React.FC = () => {
  const [mood, setMood] = useState('');
  const [recommendation, setRecommendation] = useState<{burgerName: string, description: string, price: string} | null>(null);
  const [loading, setLoading] = useState(false);

  const handleRecommend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!mood.trim()) return;
    
    setLoading(true);
    const result = await getSmartRecommendation(mood);
    setRecommendation(result);
    setLoading(false);
  };

  return (
    <div className="bg-card/50 border border-primary/20 rounded-xl p-8 mb-16 relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <Sparkles size={80} className="text-primary" />
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <Sparkles className="text-primary" size={24} />
          <h3 className="text-2xl font-oswald font-bold uppercase text-white">AI Flavor Finder</h3>
        </div>
        <p className="text-gray-400 mb-6 text-sm">Not sure what to eat? Tell us your mood (e.g., "adventurous", "starving", "fancy") and our AI will craft your perfect burger.</p>

        <form onSubmit={handleRecommend} className="flex gap-4">
          <input 
            type="text" 
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            placeholder="How are you feeling?"
            className="flex-1 bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors"
          />
          <button 
            type="submit"
            disabled={loading}
            className="bg-primary text-dark px-6 py-3 rounded-lg font-oswald font-bold uppercase hover:bg-yellow-500 transition-all flex items-center gap-2 disabled:opacity-50"
          >
            {loading ? <Loader2 className="animate-spin" size={20} /> : <Sparkles size={20} />}
            Suggest
          </button>
        </form>

        {recommendation && (
          <div className="mt-8 p-6 bg-dark/80 rounded-lg border border-primary/30 animate-in fade-in slide-in-from-bottom-4 duration-500">
             <div className="flex justify-between items-start mb-4">
                <h4 className="text-xl font-oswald font-bold text-primary uppercase">{recommendation.burgerName}</h4>
                <span className="text-xl font-oswald font-bold text-white">{recommendation.price}</span>
             </div>
             <p className="text-gray-300 italic mb-4">"{recommendation.description}"</p>
             <button className="text-xs uppercase font-bold tracking-widest text-primary hover:underline flex items-center gap-1">
                Add to Cart <ChevronRight size={14} />
             </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SmartMenu;
