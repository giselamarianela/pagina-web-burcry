
import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ShoppingCart, Calendar, User, Folder, 
  ChevronRight, Facebook, Twitter, Linkedin, 
  CheckCircle2, Send, Sparkles, Loader2, 
  Instagram, Youtube, Phone, Mail, MapPin 
} from 'lucide-react';
import { GoogleGenAI, Type } from "@google/genai";

// --- SERVICIOS DE IA (Gemini) ---
// Initialize the GoogleGenAI client with the API key from environment variables
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const getSmartRecommendation = async (mood: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Suggest a gourmet burger name and a short mouth-watering description based on this mood: ${mood}.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            burgerName: { type: Type.STRING },
            description: { type: Type.STRING },
            price: { type: Type.STRING }
          },
          required: ["burgerName", "description", "price"]
        }
      }
    });
    // Use the .text property to access the response string
    return JSON.parse(response.text || '{}');
  } catch (error) {
    console.error("Gemini Error:", error);
    return null;
  }
};

// --- COMPONENTES DE INTERFAZ ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed w-full z-50 bg-dark/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <span className="text-primary font-oswald text-3xl font-bold tracking-tighter">
              BURG<span className="text-white">RY</span>
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {['Home', 'About Us', 'Menu', 'Pages', 'Contact Us'].map((item) => (
                <a key={item} href="#" className="text-gray-300 hover:text-primary px-3 py-2 text-sm font-medium uppercase tracking-wider transition-colors">{item}</a>
              ))}
              <button className="bg-primary text-dark px-6 py-2 rounded-md font-oswald font-bold uppercase hover:bg-yellow-500 transition-all transform hover:scale-105 flex items-center gap-2">
                <ShoppingCart size={18} /> Shop Online
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-400 hover:text-white">{isOpen ? <X size={28} /> : <Menu size={28} />}</button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-dark border-t border-white/10 px-2 pt-2 pb-3 space-y-1">
          {['Home', 'About Us', 'Menu', 'Pages', 'Contact Us'].map((item) => (
            <a key={item} href="#" className="text-gray-300 hover:text-primary block px-3 py-2 text-base font-medium uppercase">{item}</a>
          ))}
        </div>
      )}
    </nav>
  );
};

const SmartMenu = () => {
  const [mood, setMood] = useState('');
  const [recommendation, setRecommendation] = useState<any>(null);
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
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <Sparkles className="text-primary" size={24} />
          <h3 className="text-2xl font-oswald font-bold uppercase text-white">AI Flavor Finder</h3>
        </div>
        <form onSubmit={handleRecommend} className="flex gap-4 mb-6">
          <input 
            type="text" value={mood} onChange={(e) => setMood(e.target.value)}
            placeholder="How are you feeling today?"
            className="flex-1 bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none"
          />
          <button type="submit" disabled={loading} className="bg-primary text-dark px-6 py-3 rounded-lg font-oswald font-bold uppercase hover:bg-yellow-500 transition-all flex items-center gap-2">
            {loading ? <Loader2 className="animate-spin" size={20} /> : <Sparkles size={20} />} Suggest
          </button>
        </form>
        {recommendation && (
          <div className="p-6 bg-dark/80 rounded-lg border border-primary/30 animate-fade-in">
             <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl font-oswald font-bold text-primary uppercase">{recommendation.burgerName}</h4>
                <span className="text-xl font-oswald font-bold text-white">{recommendation.price}</span>
             </div>
             <p className="text-gray-300 italic">"{recommendation.description}"</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Hero = () => (
  <div className="relative pt-20 overflow-hidden">
    <div className="absolute inset-0 bg-cover bg-center opacity-30 h-[500px]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=2072&auto=format&fit=crop)' }} />
    <div className="relative max-w-7xl mx-auto px-4 py-32 text-center">
      <h1 className="text-4xl md:text-7xl font-oswald font-bold text-white mb-6 uppercase leading-tight tracking-tight">
        THE NEW BLACK BURGER WITH SPICE <br /> <span className="text-primary">TASTE TO SATISFY YOU</span>
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-6 text-gray-400 font-medium uppercase text-xs tracking-widest">
        <div className="flex items-center gap-2"><User size={14} className="text-primary" /> John Doe</div>
        <div className="flex items-center gap-2 border-l border-white/10 pl-6"><Calendar size={14} className="text-primary" /> July 28, 2021</div>
        <div className="flex items-center gap-2 border-l border-white/10 pl-6"><Folder size={14} className="text-primary" /> Food</div>
      </div>
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-dark pt-20 pb-8 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-4 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="space-y-4">
          <span className="text-primary font-oswald text-3xl font-bold tracking-tighter">BURG<span className="text-white">RY</span></span>
          <p className="text-gray-400 text-sm">Experience the ultimate gourmet journey with our AI-crafted flavors and premium ingredients.</p>
        </div>
        <div>
          <h4 className="text-lg font-oswald font-bold uppercase mb-4">Support</h4>
          <ul className="text-gray-400 text-xs space-y-2 uppercase font-bold tracking-widest">
            <li className="hover:text-primary cursor-pointer">FAQ's</li>
            <li className="hover:text-primary cursor-pointer">Privacy Policy</li>
            <li className="hover:text-primary cursor-pointer">Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-oswald font-bold uppercase mb-4">Contact</h4>
          <div className="text-gray-400 text-xs space-y-3">
             <p className="flex items-center gap-2"><Phone size={14} className="text-primary" /> +62831-2864-349-1</p>
             <p className="flex items-center gap-2"><Mail size={14} className="text-primary" /> contact@burgry.com</p>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-oswald font-bold uppercase mb-4">Follow Us</h4>
          <div className="flex gap-3">
             {[Facebook, Twitter, Instagram].map((Icon, i) => (
               <div key={i} className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-dark transition-all cursor-pointer"><Icon size={14} /></div>
             ))}
          </div>
        </div>
      </div>
      <div className="text-center text-[10px] text-gray-600 uppercase tracking-[0.2em] pt-8 border-t border-white/5">
        &copy; 2021 BURGRY GOURMET. ALL RIGHTS RESERVED.
      </div>
    </div>
  </footer>
);

// --- COMPONENTE PRINCIPAL (APP) ---

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-primary selection:text-dark">
      <div className="bg-texture"></div>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8">
              <SmartMenu />
              <article className="space-y-12">
                <img src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1965&auto=format&fit=crop" className="w-full h-[500px] object-cover rounded-lg border border-white/5 shadow-2xl" alt="Burger" />
                <p className="text-gray-400 leading-relaxed text-lg first-letter:text-5xl first-letter:text-primary first-letter:font-oswald first-letter:mr-3 first-letter:float-left">
                  Welcome to the future of gastronomy. At BURGRY, we don't just flip burgers; we engineer experiences. Our secret lies in the perfect balance of smoked charcoal-grilled beef and our signature spicy infusion that keeps you coming back for more.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="flex items-center gap-3 text-gray-300 text-xs font-bold uppercase tracking-widest">
                      <CheckCircle2 size={16} className="text-primary" /> Premium Wagyu Beef
                    </div>
                  ))}
                </div>
              </article>
            </div>
            <div className="lg:col-span-4">
              <aside className="sticky top-28 space-y-12">
                <div className="bg-card p-6 border-l-4 border-primary">
                  <h3 className="text-xl font-oswald font-bold uppercase mb-6">Latest News</h3>
                  <div className="space-y-4">
                    {['Making the perfect patty', 'Our new spicy sauce', 'Opening in Bali'].map((news, i) => (
                      <div key={i} className="group cursor-pointer">
                        <h4 className="text-xs font-bold group-hover:text-primary transition-colors uppercase tracking-wider">{news}</h4>
                        <span className="text-[10px] text-gray-500">AUG 0{i+1}, 2021</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative rounded-lg overflow-hidden group h-64">
                   <img src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=2071&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 transition-all duration-700" alt="Promo" />
                   <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center p-6 text-center">
                      <h3 className="text-2xl font-oswald font-bold text-white uppercase">20% OFF</h3>
                      <p className="text-xs text-gray-400 mb-4 uppercase font-bold">Online Orders Only</p>
                      <button className="bg-primary text-dark px-4 py-2 text-xs font-bold uppercase rounded">Order Now</button>
                   </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
