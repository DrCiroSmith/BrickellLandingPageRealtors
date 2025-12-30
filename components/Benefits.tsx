import React from 'react';
import { Icon } from './Icon';
import { IconName } from '../types';

export const Benefits: React.FC = () => {
  return (
    <section className="bg-background-dark py-16 px-6 relative z-10">
      <div className="mb-12">
        <h2 className="text-3xl text-white font-display font-normal leading-tight mb-4">
          Excelencia en <span className="text-primary italic">Cada Detalle</span>
        </h2>
        <div className="border-l border-white/10 pl-6">
          <p className="text-sm text-gray-400 font-light leading-relaxed">
            Diseñamos un ecosistema donde la ambición se encuentra con la oportunidad. Nuestras herramientas y soporte están calibrados para agentes que no aceptan menos que lo extraordinario.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {/* Card 1 */}
        <div className="group relative bg-[#121212] p-6 hover:bg-[#181818] transition-colors duration-500 border border-white/5">
          <div className="mb-4 text-primary">
            <Icon name={IconName.Token} style={{ fontSize: '36px', fontWeight: 300 }} />
          </div>
          <h3 className="mb-2 text-lg text-white font-medium font-display">Tecnología Superior</h3>
          <p className="text-xs leading-relaxed text-gray-400 font-light">
            Plataformas CRM propietarias y análisis de mercado en tiempo real para mantenerte siempre adelante de la competencia.
          </p>
        </div>

        {/* Card 2 */}
        <div className="group relative bg-[#121212] p-6 hover:bg-[#181818] transition-colors duration-500 border border-white/5">
          <div className="mb-4 text-primary">
            <Icon name={IconName.Architecture} style={{ fontSize: '36px', fontWeight: 300 }} />
          </div>
          <h3 className="mb-2 text-lg text-white font-medium font-display">Soporte Integral</h3>
          <p className="text-xs leading-relaxed text-gray-400 font-light">
            Un equipo dedicado de coordinadores de transacciones y soporte legal para asegurar cierres impecables.
          </p>
        </div>

        {/* Card 3 */}
        <div className="group relative bg-[#121212] p-6 hover:bg-[#181818] transition-colors duration-500 border border-white/5">
          <div className="mb-4 text-primary">
            <Icon name={IconName.School} style={{ fontSize: '36px', fontWeight: 300 }} />
          </div>
          <h3 className="mb-2 text-lg text-white font-medium font-display">Mentoria Elite</h3>
          <p className="text-xs leading-relaxed text-gray-400 font-light">
            Programas de coaching ejecutivo con los líderes más influyentes del sector inmobiliario de Miami.
          </p>
        </div>
      </div>
    </section>
  );
};