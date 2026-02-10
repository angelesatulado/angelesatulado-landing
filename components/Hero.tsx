
"use client"; // Add this line

import React, { useEffect } from 'react';

const Hero: React.FC = () => {
  useEffect(() => {
    const trackLeadEvent = () => {
      if (typeof window !== "undefined" && window.fbq) {
        window.fbq("track", "Lead", { content_name: "hero_button" });
      }
    };

    const agendaButton = document.querySelector('a[href="#agenda"]');
    if (agendaButton) {
      agendaButton.addEventListener('click', trackLeadEvent);
    }

    return () => {
      if (agendaButton) {
        agendaButton.removeEventListener('click', trackLeadEvent);
      }
    };
  }, []); // Empty dependency array means this effect runs once on mount and clean up on unmount

  return (
    <section className="relative pt-10 pb-16 lg:pt-20 lg:pb-28 overflow-hidden px-4">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[-5%] left-[-5%] w-[50%] h-[50%] rounded-full bg-sky-50 blur-[120px] opacity-70"></div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 text-sky-700 font-bold text-xs mb-8 uppercase tracking-widest border border-sky-100 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-sky-500 animate-ping"></span>
              Asistencia y Acompañamiento Médico
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-slate-900 mb-8 leading-[1.05] tracking-tight">
              ¿No puedes llevarlo <br /> 
              <span className="text-sky-500">al médico?</span>
            </h1>
            <p className="max-w-xl mx-auto lg:mx-0 text-lg md:text-xl text-slate-600 mb-10 leading-relaxed font-medium">
              En <span className="font-bold text-slate-800">Ángeles a tu Lado</span> lo buscamos, lo acompañamos a su consulta y lo cuidamos como si fuera nuestra propia familia.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a 
                href="#agenda" 
                className="w-full sm:w-auto px-10 py-5 bg-sky-500 text-white rounded-[2rem] font-black text-lg hover:bg-sky-600 transition-all shadow-2xl shadow-sky-200 flex items-center justify-center gap-3 active:scale-95"
              >
                Agendar Acompañante
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <div className="flex items-center gap-4 bg-white p-2 pr-6 rounded-full shadow-lg border border-slate-50">
                <img className="w-10 h-10 rounded-full object-cover" src="https://i.pravatar.cc/100?u=doc1" alt="Personal" />
                <span className="text-sm font-black text-slate-700">Cuidadores capacitados</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative z-10 rounded-[3.5rem] overflow-hidden shadow-4xl border-[10px] border-white transform rotate-1 hover:rotate-0 transition-transform duration-700">
              {/* Foto de transporte/asistencia (referencia 3ra foto) */}
              <img 
                src="https://res.cloudinary.com/dg8y3x4sn/image/upload/v1769803992/hero-section1_ykl22f.jpg"
                alt="Servicio de acompañamiento médico Santo Domingo" 
                className="w-full h-[450px] md:h-[550px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10">
                <div className="bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-2xl">
                   <div className="flex items-center gap-4 mb-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <p className="text-xs font-black text-slate-400 uppercase tracking-widest">En servicio ahora</p>
                   </div>
                   <p className="font-black text-slate-800">Traslados seguros a clínicas de Santo Domingo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
