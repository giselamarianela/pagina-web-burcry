
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark pt-20 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <span className="text-primary font-oswald text-4xl font-bold tracking-tighter">
              BURG<span className="text-white">RY</span>
            </span>
            <p className="text-gray-400 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-oswald font-bold uppercase">Support</h4>
            <ul className="space-y-3 text-gray-400 text-sm font-medium uppercase tracking-wider">
              <li className="hover:text-primary cursor-pointer transition-colors">FAQ's</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Privacy Policy</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Term & Conditions</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Contact</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-oswald font-bold uppercase">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 group">
                <div className="p-2 bg-white/5 rounded-md group-hover:bg-primary transition-colors">
                  <Phone size={16} className="text-primary group-hover:text-dark" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase text-gray-500 font-bold">Phone</span>
                  <span className="text-sm font-bold text-gray-300">+62831-2864-349-1</span>
                </div>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="p-2 bg-white/5 rounded-md group-hover:bg-primary transition-colors">
                  <Mail size={16} className="text-primary group-hover:text-dark" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase text-gray-500 font-bold">Email</span>
                  <span className="text-sm font-bold text-gray-300">contact@burgry.com</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-oswald font-bold uppercase">Address</h4>
            <div className="flex items-start gap-3 group">
              <div className="p-2 bg-white/5 rounded-md group-hover:bg-primary transition-colors mt-1">
                <MapPin size={16} className="text-primary group-hover:text-dark" />
              </div>
              <p className="text-sm font-bold text-gray-300 leading-tight">
                Jl. Pantai Kuta No. 34, Badung, Bali
              </p>
            </div>
            
            <div className="pt-4 space-y-4">
              <h4 className="text-xs uppercase font-bold tracking-widest text-gray-500">Follow Us</h4>
              <div className="flex gap-4">
                {[Facebook, Twitter, Instagram, Youtube].map((Icon, idx) => (
                  <div key={idx} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary cursor-pointer transition-all group">
                    <Icon size={18} className="text-gray-400 group-hover:text-dark" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-widest text-gray-500">
          <p>Burger Template Kit by Jegtheme</p>
          <p>Copyright © 2021. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
