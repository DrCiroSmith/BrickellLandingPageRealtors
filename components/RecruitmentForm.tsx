import React, { useState } from 'react';
import { Icon } from './Icon';
import { IconName, RecruitmentFormData, Language } from '../types';

interface RecruitmentFormProps {
  onSuccess: () => void;
}

export const RecruitmentForm: React.FC<RecruitmentFormProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState<RecruitmentFormData>({
    fullName: '',
    age: '',
    phone: '',
    email: '',
    hasLicense: '',
    yearsExperience: '',
    languages: [{ language: '', level: '' }],
    appointmentDate: '',
    cv: null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, cv: e.target.files![0] }));
    }
  };

  const handleLanguageChange = (index: number, field: keyof Language, value: string) => {
    const newLanguages = [...formData.languages];
    newLanguages[index][field] = value;
    setFormData(prev => ({ ...prev, languages: newLanguages }));
  };

  const addLanguage = () => {
    setFormData(prev => ({
      ...prev,
      languages: [...prev.languages, { language: '', level: '' }]
    }));
  };

  const removeLanguage = (index: number) => {
    if (formData.languages.length > 1) {
      setFormData(prev => ({
        ...prev,
        languages: prev.languages.filter((_, i) => i !== index)
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted', formData);
    // Simulate API call
    setTimeout(() => {
        onSuccess();
    }, 1000);
  };

  return (
    <div id="apply" className="py-16 px-6 bg-[#121212] relative scroll-mt-20">
      <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-bl-full pointer-events-none"></div>
      
      <div className="mb-10">
        <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block">Únete al equipo</span>
        <h2 className="text-3xl text-white font-display font-normal leading-tight mb-6">
          Define tu <br />
          <span className="italic text-gray-500">Legado</span>
        </h2>
        <p className="text-sm text-gray-400 font-light mb-8">
          Estamos buscando agentes con visión y determinación. Completa el formulario para una consulta privada.
        </p>
        
        <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6 mb-8">
          <div>
            <h4 className="text-2xl text-white font-display mb-1">95%</h4>
            <p className="text-[10px] uppercase tracking-widest text-gray-500">Retención</p>
          </div>
          <div>
            <h4 className="text-2xl text-white font-display mb-1">$2B+</h4>
            <p className="text-[10px] uppercase tracking-widest text-gray-500">Ventas</p>
          </div>
        </div>
      </div>

      <div className="bg-[#0f0f0f] p-6 border border-white/5 shadow-2xl rounded-sm">
        <h3 className="mb-6 text-xl text-white font-display">Solicitud de Cita</h3>
        
        <form className="space-y-6" onSubmit={handleSubmit}>
          
          <div className="space-y-6">
            <div className="group">
              <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-1 group-focus-within:text-primary transition-colors">Nombre completo</label>
              <input
                required
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="block w-full border-b border-gray-700 bg-transparent py-2 text-white placeholder-transparent focus:border-primary focus:ring-0 text-sm transition-colors focus:outline-none"
                placeholder="Tu nombre"
                type="text"
              />
            </div>

            <div className="group">
              <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-1 group-focus-within:text-primary transition-colors">Edad</label>
              <input
                required
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="block w-full border-b border-gray-700 bg-transparent py-2 text-white placeholder-transparent focus:border-primary focus:ring-0 text-sm transition-colors focus:outline-none"
                placeholder="25"
                min="18"
                type="number"
              />
            </div>

            <div className="group">
              <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-1 group-focus-within:text-primary transition-colors">Email</label>
              <input
                required
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="block w-full border-b border-gray-700 bg-transparent py-2 text-white placeholder-transparent focus:border-primary focus:ring-0 text-sm transition-colors focus:outline-none"
                placeholder="email@ejemplo.com"
                type="email"
              />
            </div>

            <div className="group">
              <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-1 group-focus-within:text-primary transition-colors">Teléfono</label>
              <input
                required
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="block w-full border-b border-gray-700 bg-transparent py-2 text-white placeholder-transparent focus:border-primary focus:ring-0 text-sm transition-colors focus:outline-none"
                placeholder="+1 (555) 000-0000"
                type="tel"
              />
            </div>

            <div className="group">
              <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-1 group-focus-within:text-primary transition-colors">Licencia de Realtor</label>
              <select
                required
                name="hasLicense"
                value={formData.hasLicense}
                onChange={handleChange}
                className="block w-full border-b border-gray-700 bg-transparent py-2 text-white focus:border-primary focus:ring-0 text-sm appearance-none cursor-pointer focus:outline-none"
              >
                <option className="bg-[#181818] text-gray-400" value="">Seleccionar...</option>
                <option className="bg-[#181818]" value="Activa">Sí, activa</option>
                <option className="bg-[#181818]" value="En proceso">En proceso</option>
                <option className="bg-[#181818]" value="No">No</option>
              </select>
            </div>

            <div className="group">
              <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-1 group-focus-within:text-primary transition-colors">Experiencia</label>
              <select
                required
                name="yearsExperience"
                value={formData.yearsExperience}
                onChange={handleChange}
                className="block w-full border-b border-gray-700 bg-transparent py-2 text-white focus:border-primary focus:ring-0 text-sm appearance-none cursor-pointer focus:outline-none"
              >
                <option className="bg-[#181818] text-gray-400" value="">Seleccionar...</option>
                <option className="bg-[#181818]" value="Menos de 1 año">Menos de 1 año</option>
                <option className="bg-[#181818]" value="1-3 años">1-3 años</option>
                <option className="bg-[#181818]" value="3-5 años">3-5 años</option>
                <option className="bg-[#181818]" value="5+ años">5+ años</option>
              </select>
            </div>

            <div className="group">
               <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-1">Idiomas</label>
               <div className="space-y-3">
                 {formData.languages.map((lang, index) => (
                   <div key={index} className="flex gap-2 items-end">
                      <div className="group flex-grow">
                        <input
                            required
                            placeholder="Ej. Español"
                            value={lang.language}
                            onChange={(e) => handleLanguageChange(index, 'language', e.target.value)}
                            className="block w-full border-b border-gray-700 bg-transparent py-2 text-white placeholder-transparent focus:border-primary focus:ring-0 text-sm transition-colors focus:outline-none"
                        />
                      </div>
                      <div className="group w-1/3">
                        <select
                           required
                           value={lang.level}
                           onChange={(e) => handleLanguageChange(index, 'level', e.target.value)}
                           className="block w-full border-b border-gray-700 bg-transparent py-2 text-white focus:border-primary focus:ring-0 text-[11px] appearance-none cursor-pointer focus:outline-none"
                        >
                           <option className="bg-[#181818] text-gray-400" value="">Nivel...</option>
                           <option className="bg-[#181818]" value="Básico">Básico</option>
                           <option className="bg-[#181818]" value="Intermedio">Intermedio</option>
                           <option className="bg-[#181818]" value="Avanzado">Avanzado</option>
                           <option className="bg-[#181818]" value="Nativo">Nativo</option>
                        </select>
                      </div>
                      {formData.languages.length > 1 && (
                        <button type="button" onClick={() => removeLanguage(index)} className="text-gray-500 hover:text-red-500 pb-2">
                           <Icon name={IconName.Delete} style={{fontSize: '18px'}}/>
                        </button>
                      )}
                   </div>
                 ))}
               </div>
               <button type="button" onClick={addLanguage} className="mt-4 text-[10px] font-bold uppercase tracking-widest text-primary hover:text-white transition-colors flex items-center gap-1">
                 <Icon name={IconName.Add} style={{fontSize: '16px'}} /> Agregar otro idioma
               </button>
            </div>

            <div className="group">
              <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-1 group-focus-within:text-primary transition-colors">Fecha de Cita (A partir del 6 de Enero)</label>
              <div className="relative">
                <input
                  required
                  name="appointmentDate"
                  value={formData.appointmentDate}
                  onChange={handleChange}
                  min="2025-01-06"
                  type="date"
                  style={{ colorScheme: 'dark' }}
                  className="block w-full border-b border-gray-700 bg-transparent py-2 text-white placeholder-gray-500 focus:border-primary focus:ring-0 text-sm transition-colors focus:outline-none cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:absolute"
                />
                <Icon name={IconName.CalendarToday} className="absolute right-0 bottom-2 text-white pointer-events-none text-lg" />
              </div>
            </div>

            <div className="group">
              <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-3">CV / Resumen Profesional (Max 25MB)</label>
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col items-center justify-center w-full h-24 border border-gray-700 border-dashed cursor-pointer hover:bg-[#181818] hover:border-primary transition-all rounded-sm relative overflow-hidden">
                  <div className="flex flex-row items-center justify-center gap-3 pt-5 pb-6">
                    <Icon name={IconName.UploadFile} className="text-gray-400" />
                    <p className="text-xs text-gray-400">
                      <span className="font-semibold text-white">{formData.cv ? 'Archivo seleccionado' : 'Click para subir'}</span>
                    </p>
                  </div>
                  {formData.cv && <p className="absolute bottom-1 text-[9px] text-primary">{formData.cv.name}</p>}
                  <input
                    accept=".pdf"
                    onChange={handleFileChange}
                    className="hidden"
                    type="file"
                  />
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-white text-black py-4 px-8 text-sm font-bold uppercase tracking-widest hover:bg-primary disabled:bg-gray-500 disabled:cursor-not-allowed transition-colors duration-300"
            >
              Enviar Solicitud
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};