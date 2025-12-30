import React from 'react';
import { Icon } from './Icon';
import { IconName } from '../types';

interface PhoneFrameProps {
  children: React.ReactNode;
}

export const PhoneFrame: React.FC<PhoneFrameProps> = ({ children }) => {
  return (
    <div className="relative w-full max-w-[414px] bg-white dark:bg-[#121212] rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] border-[8px] border-[#2c2c2c] h-[850px] flex flex-col ring-1 ring-white/10 mx-auto my-8">
      {/* Status Bar */}
      <div className="h-6 w-full bg-[#121212] flex justify-between items-center px-6 text-[10px] font-body text-white/40 absolute top-0 z-50 rounded-t-[2rem]">
        <span>9:41</span>
        <div className="flex gap-1">
          <Icon name={IconName.Signal} className="text-[14px]" />
          <Icon name={IconName.Wifi} className="text-[14px]" />
          <Icon name={IconName.Battery} className="text-[14px]" />
        </div>
      </div>

      {/* Main Content Area */}
      {children}

      {/* Home Indicator */}
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-[120px] h-1 bg-white/20 rounded-full z-50 pointer-events-none"></div>
    </div>
  );
};