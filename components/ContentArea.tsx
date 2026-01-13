
import React from 'react';
import { Facebook, Twitter, Linkedin, CheckCircle2 } from 'lucide-react';

const ContentArea: React.FC = () => {
  return (
    <article className="space-y-12">
      <div className="space-y-8">
        <img 
          src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1965&auto=format&fit=crop" 
          alt="Main Burger" 
          className="w-full h-[500px] object-cover rounded-lg border border-white/10 shadow-2xl"
        />
        
        <p className="text-gray-400 leading-relaxed first-letter:text-5xl first-letter:font-oswald first-letter:text-primary first-letter:mr-3 first-letter:float-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <div className="space-y-6">
        <h3 className="text-3xl font-oswald font-bold uppercase tracking-wide">CONTENT WRITER FOR WEBSITE</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img 
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop" 
            alt="Chefs" 
            className="w-full h-64 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-500"
          />
          <img 
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop" 
            alt="Food" 
            className="w-full h-64 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
        <p className="text-gray-400 leading-relaxed">
          Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
        {[
          "Quisque aliquet nibh sit amet lectus",
          "Nulla at metus ultricies, placerat augue",
          "Curabitur mollis ex vestibulum",
          "Quisque aliquet nibh sit amet lectus auctor",
          "Quisque aliquet nibh sit amet lectus",
          "Nulla at metus ultricies, placerat augue",
          "Curabitur mollis ex vestibulum",
          "Quisque aliquet nibh sit amet lectus auctor",
        ].map((item, idx) => (
          <div key={idx} className="flex items-center gap-3 text-gray-300">
            <CheckCircle2 size={18} className="text-primary" />
            <span className="text-sm uppercase tracking-wide">{item}</span>
          </div>
        ))}
      </div>

      <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-4">
          <span className="font-oswald font-bold uppercase text-sm">Tags :</span>
          <span className="text-xs bg-white/5 text-gray-400 px-3 py-1 rounded hover:text-primary cursor-pointer transition-colors">burger</span>
          <span className="text-xs bg-white/5 text-gray-400 px-3 py-1 rounded hover:text-primary cursor-pointer transition-colors">food</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="font-oswald font-bold uppercase text-sm">Share This :</span>
          <div className="flex gap-4">
            <Facebook size={18} className="text-gray-400 hover:text-primary cursor-pointer transition-colors" />
            <Twitter size={18} className="text-gray-400 hover:text-primary cursor-pointer transition-colors" />
            <Linkedin size={18} className="text-gray-400 hover:text-primary cursor-pointer transition-colors" />
          </div>
        </div>
      </div>

      {/* Comment Form Section */}
      <section className="pt-16 space-y-8">
        <div className="space-y-2">
          <h3 className="text-3xl font-oswald font-bold uppercase">Leave a Reply</h3>
          <p className="text-sm text-gray-500">Your email address will not be published. Required fields are marked *</p>
        </div>
        
        <form className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs uppercase font-bold tracking-widest text-gray-400">Comment</label>
            <textarea className="w-full h-48 bg-card border border-white/10 rounded-lg p-4 focus:outline-none focus:border-primary transition-colors text-white resize-none" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="text-xs uppercase font-bold tracking-widest text-gray-400">Name *</label>
              <input type="text" className="w-full bg-card border border-white/10 rounded-lg p-3 focus:outline-none focus:border-primary transition-colors text-white" />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase font-bold tracking-widest text-gray-400">Email *</label>
              <input type="email" className="w-full bg-card border border-white/10 rounded-lg p-3 focus:outline-none focus:border-primary transition-colors text-white" />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase font-bold tracking-widest text-gray-400">Website</label>
              <input type="text" className="w-full bg-card border border-white/10 rounded-lg p-3 focus:outline-none focus:border-primary transition-colors text-white" />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <input type="checkbox" id="save-info" className="w-4 h-4 rounded accent-primary border-none" />
            <label htmlFor="save-info" className="text-xs text-gray-500">Save my name, email, and website in this browser for the next time I comment.</label>
          </div>

          <button type="submit" className="bg-primary text-dark px-10 py-4 rounded-md font-oswald font-bold uppercase hover:bg-yellow-500 transition-all shadow-lg hover:shadow-primary/20">
            Post Comment
          </button>
        </form>
      </section>
    </article>
  );
};

export default ContentArea;
