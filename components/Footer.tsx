import React from 'react';
import { Icon } from './Icon';
import { IconName } from '../types';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#121212] py-12 border-t border-white/10">
      <div className="px-6 flex flex-col items-center justify-between gap-6">
        <div className="flex items-center gap-2">
           <Icon name={IconName.Apartment} className="text-gray-600" />
           <p className="text-[10px] uppercase tracking-widest text-gray-500">© 2025 Brickell Realty Group.</p>
        </div>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="#" className="text-[10px] font-semibold uppercase tracking-widest text-gray-500 hover:text-primary transition-colors">Privacidad</a>
          <a href="#" className="text-[10px] font-semibold uppercase tracking-widest text-gray-500 hover:text-primary transition-colors">Términos</a>
        </div>
        
        <div className="flex gap-4">
           <a href="https://www.instagram.com/brickell.realty.group/" target="_blank" rel="noopener noreferrer" className="text-[10px] font-semibold uppercase tracking-widest text-gray-500 hover:text-primary transition-colors">Instagram</a>
           <a href="https://www.facebook.com/p/Brickell-Realty-Group-100063637617298/?locale=es_LA" target="_blank" rel="noopener noreferrer" className="text-[10px] font-semibold uppercase tracking-widest text-gray-500 hover:text-primary transition-colors">Facebook</a>
           <a href="https://www.linkedin.com/company/brickell-realty-group/" target="_blank" rel="noopener noreferrer" className="text-[10px] font-semibold uppercase tracking-widest text-gray-500 hover:text-primary transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};