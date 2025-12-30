import React from 'react';

export const Hero: React.FC = () => {
  // Using the image from the reference site (Github Pages)
  const bgImage = "https://drcirosmith.github.io/BrickellLandingPageNewRealtors/images/hero-bg.png";
  // Fallback if the github image fails to load or for better resolution
  const fallbackBg = "https://images.unsplash.com/photo-1535498730771-e735b998cd64?q=80&w=1000&auto=format&fit=crop"; 
  
  return (
    <section className="relative w-full h-[500px] flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transform scale-105" 
        style={{
          backgroundImage: `url('${bgImage}'), url('${fallbackBg}')`
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent z-0"></div>
      
      <div className="relative z-10 w-full px-6 pt-12">
        <div className="max-w-xl">
          <span className="mb-4 inline-block border-l-2 border-primary pl-4 text-xs font-semibold uppercase tracking-[0.2em] text-gray-200">
            Exclusivo para Agentes de Élite
          </span>
          <h1 className="text-4xl sm:text-5xl font-medium leading-tight text-white font-display mb-4">
            Eleva Tu <br/>
            <span className="italic text-primary pr-2">Carrera</span>
          </h1>
          <p className="max-w-sm text-sm font-light leading-relaxed text-gray-300 border-l border-white/20 pl-4 ml-1">
            Únete a Brickell Realty Group. Accede a las propiedades más exclusivas de Miami y herramientas diseñadas para el éxito.
          </p>
          <div className="mt-8">
            <a href="#apply" className="group flex h-12 w-48 items-center justify-center bg-primary px-6 text-xs font-bold uppercase tracking-widest text-black transition-all hover:bg-white">
              Solicitar Cita
              <span className="material-symbols-outlined ml-2 transition-transform group-hover:translate-x-1 text-sm">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};