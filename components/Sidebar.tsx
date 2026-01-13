
import React from 'react';
import { ChevronRight } from 'lucide-react';

const Sidebar: React.FC = () => {
  const featuredNews = [
    { id: '1', title: 'LOOK HOW WE MAKE BEEF MEAT TASTY WITH THIS TECHNIQUE', date: 'August 3, 2021' },
    { id: '2', title: 'GET A 20% DISCOUNT AT OUR BIRTHDAY EVENT FOR $20 SPEND', date: 'July 28, 2021' },
    { id: '3', title: 'STRAWBERRY SMOOTHIE IS THE BEST BEVERAGE FOR YOUR HOT DAY', date: 'July 28, 2021' },
  ];

  const categories = ['News', 'Food', 'Beverage'];

  return (
    <aside className="space-y-12">
      {/* Search - simplified */}
      <div className="bg-card p-6 border-l-4 border-primary">
        <h3 className="text-xl font-oswald font-bold uppercase mb-6 tracking-wide">Featured News</h3>
        <div className="space-y-6">
          {featuredNews.map((news) => (
            <div key={news.id} className="group cursor-pointer">
              <h4 className="text-sm font-bold leading-tight group-hover:text-primary transition-colors duration-300">
                {news.title}
              </h4>
              <p className="text-xs text-gray-500 mt-2 uppercase tracking-widest">{news.date}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-card p-6 border-l-4 border-primary">
        <h3 className="text-xl font-oswald font-bold uppercase mb-6 tracking-wide">Category</h3>
        <ul className="space-y-4">
          {categories.map((cat) => (
            <li key={cat} className="flex items-center gap-2 text-gray-400 hover:text-primary cursor-pointer transition-colors font-medium">
              <div className="w-4 h-[2px] bg-primary"></div>
              <span className="uppercase text-sm tracking-widest">{cat}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative rounded-lg overflow-hidden group">
        <img 
          src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=2071&auto=format&fit=crop" 
          alt="Offer" 
          className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center p-6">
          <h3 className="text-2xl font-oswald font-bold text-white mb-2 uppercase">GET 20% DISCOUNT FOR ONLINE PAYMENT</h3>
          <p className="text-gray-300 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="bg-primary text-dark px-6 py-2 rounded-sm font-oswald font-bold uppercase hover:bg-yellow-500 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
