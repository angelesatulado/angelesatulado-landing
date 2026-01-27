"use client";

import React, { useState } from 'react';
import { AppointmentFormData, ServiceType } from '../types';

const AppointmentForm: React.FC = () => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    /* Fix: Using ServiceType.TRANSPORT as ServiceType.CHECKUP does not exist in the defined enum */
    serviceType: ServiceType.TRANSPORT,
    appointmentDate: '',
    appointmentTime: '',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const message = `*Nueva Solicitud de Cita - Ángeles a tu Lado RD*%0A%0A` +
      `*Paciente:* ${formData.fullName}%0A` +
      `*Teléfono:* ${formData.phone}%0A` +
      `*Servicio:* ${formData.serviceType}%0A` +
      `*Fecha deseada:* ${formData.appointmentDate}%0A` +
      `*Hora:* ${formData.appointmentTime}%0A` +
      `*Sector:* ${formData.address}%0A` +
      `*Observaciones:* ${formData.notes || 'N/A'}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      
      const whatsappNumber = '18296193919'; // Número de RD
      window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    }, 1200);
  };

  if (success) {
    return (
      <div className="bg-white rounded-[3rem] p-12 shadow-3xl text-center max-w-2xl mx-auto border border-sky-100 animate-in zoom-in-95 duration-500">
        <div className="w-24 h-24 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-3xl font-black text-slate-900 mb-4">¡Solicitud en Camino!</h3>
        <p className="text-slate-500 text-lg mb-10 font-medium italic">Un ángel de nuestro equipo te contactará por WhatsApp en los próximos minutos para confirmar tu visita.</p>
        <button 
          onClick={() => setSuccess(false)}
          className="bg-sky-500 text-white px-8 py-4 rounded-2xl font-black shadow-lg hover:bg-sky-600 transition-all"
        >
          Volver a Agendar
        </button>
      </div>
    );
  }

  return (
    <section id="agenda" className="py-24 bg-gradient-to-b from-sky-50/50 to-white px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Agende su consulta hoy</h2>
          <p className="text-slate-500 text-lg font-medium">Atención inmediata en Santo Domingo y zonas aledañas.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-[3rem] p-8 md:p-14 shadow-4xl shadow-sky-100/50 border border-sky-50 grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          <div className="space-y-3">
            <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Nombre del Paciente</label>
            <input
              required
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Nombre y Apellido"
              className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-4 focus:ring-sky-100 outline-none transition-all placeholder:text-slate-300 font-bold text-slate-700 shadow-sm"
            />
          </div>

          <div className="space-y-3">
            <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Teléfono WhatsApp</label>
            <input
              required
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Ej. 809-000-0000"
              className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-4 focus:ring-sky-100 outline-none transition-all placeholder:text-slate-300 font-bold text-slate-700 shadow-sm"
            />
          </div>

          <div className="space-y-3 md:col-span-2">
            <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Sector o Dirección en Sto. Dgo.</label>
            <input
              required
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Ej. Piantini, Naco, Bella Vista..."
              className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-4 focus:ring-sky-100 outline-none transition-all placeholder:text-slate-300 font-bold text-slate-700 shadow-sm"
            />
          </div>

          <div className="space-y-3">
            <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Servicio Requerido</label>
            <select
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-4 focus:ring-sky-100 outline-none transition-all font-bold text-slate-700 shadow-sm appearance-none cursor-pointer"
            >
              {Object.values(ServiceType).map(service => (
                <option key={service} value={service}>{service}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-3">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Fecha</label>
              <input
                required
                type="date"
                name="appointmentDate"
                value={formData.appointmentDate}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none focus:ring-4 focus:ring-sky-100 outline-none transition-all font-bold text-slate-700 shadow-sm"
              />
            </div>
            <div className="space-y-3">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Hora</label>
              <input
                required
                type="time"
                name="appointmentTime"
                value={formData.appointmentTime}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none focus:ring-4 focus:ring-sky-100 outline-none transition-all font-bold text-slate-700 shadow-sm"
              />
            </div>
          </div>

          <div className="space-y-3 md:col-span-2">
            <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Breve descripción del caso</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows={3}
              placeholder="¿Cómo podemos ayudar a su familiar?"
              className="w-full px-6 py-5 rounded-2xl bg-slate-50 border-none focus:ring-4 focus:ring-sky-100 outline-none transition-all placeholder:text-slate-300 font-bold text-slate-700 shadow-sm resize-none"
            />
          </div>

          <div className="md:col-span-2 pt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-6 rounded-3xl font-black text-xl shadow-2xl transition-all flex items-center justify-center gap-4 ${
                isSubmitting 
                  ? 'bg-slate-200 cursor-not-allowed text-slate-400' 
                  : 'bg-sky-500 text-white hover:bg-sky-600 hover:-translate-y-1 active:scale-95 shadow-sky-200'
              }`}
            >
              {isSubmitting ? 'Enviando...' : 'Confirmar por WhatsApp'}
              {!isSubmitting && <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>}
            </button>
            <p className="text-center text-sm font-bold text-slate-400 mt-6 flex items-center justify-center gap-2">
               <span className="w-2 h-2 bg-green-500 rounded-full"></span>
               Asistencia en vivo disponible ahora
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AppointmentForm;