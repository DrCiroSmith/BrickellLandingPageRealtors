import React from 'react';
import { Icon } from './Icon';
import { IconName } from '../types';

export const ThankYou: React.FC = () => {
  return (
    <div className="min-h-[500px] flex flex-col items-center justify-center px-8 text-center bg-[#121212]">
      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 animate-bounce">
         <span className="material-symbols-outlined text-4xl text-primary">check</span>
      </div>
      <h2 className="text-3xl text-white font-display mb-4">¡Gracias!</h2>
      <p className="text-gray-400 font-light mb-8">
        Tu solicitud ha sido recibida correctamente. Nuestro equipo revisará tu perfil y nos pondremos en contacto contigo en breve para coordinar tu entrevista.
      </p>
      <div className="p-6 bg-[#181818] border border-white/5 w-full">
         <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Próximos pasos</p>
         <p className="text-sm text-white font-light">
           Revisa tu correo electrónico para la confirmación de tu cita.
         </p>
      </div>
    </div>
  );
};