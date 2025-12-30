import React from 'react';
import { Icon } from './Icon';
import { IconName } from '../types';

export const Header: React.FC = () => {
  const logoUrl = "https://idxboost-single-property.s3.amazonaws.com/ad6f19fee807c6048e328d33bf4cd2e5/58726008becf56de4a8cfb855869cbac.png";

  return (
    <header className="flex items-center justify-between px-6 pt-10 pb-4 bg-[#121212]/95 backdrop-blur-md sticky top-0 z-40 border-b border-[#333]">
      <button className="text-white hover:text-primary transition-colors">
        <Icon name={IconName.Menu} style={{ fontSize: '28px' }} />
      </button>
      <div className="flex items-center justify-center flex-1 mx-4">
        <img 
          alt="Brickell Realty Group Logo" 
          className="h-12 w-auto object-contain brightness-0 invert filter" 
          src={logoUrl} 
        />
      </div>
      <div className="w-7"></div>
    </header>
  );
};