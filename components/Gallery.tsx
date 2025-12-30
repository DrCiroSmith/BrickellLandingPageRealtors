import React from 'react';

export const Gallery: React.FC = () => {
  const images = [
    "https://drcirosmith.github.io/BrickellLandingPageNewRealtors/images/gallery-1.png",
    "https://drcirosmith.github.io/BrickellLandingPageNewRealtors/images/gallery-2.png",
    "https://drcirosmith.github.io/BrickellLandingPageNewRealtors/images/gallery-3.png",
    "https://drcirosmith.github.io/BrickellLandingPageNewRealtors/images/gallery-4.png"
  ];

  return (
    <div className="w-full bg-background-dark pb-0">
      <div className="grid grid-cols-2">
        {images.map((img, index) => (
          <div key={index} className="aspect-[4/5] relative group overflow-hidden">
            <div 
              className="h-full w-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" 
              style={{ backgroundImage: `url('${img}')` }}
            ></div>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
        ))}
      </div>
    </div>
  );
};