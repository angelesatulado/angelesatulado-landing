
"use client"; // Add this line

import React, { useEffect, useRef } from 'react';
import { FaCarSide, FaUserDoctor, FaPalette, FaHouse } from 'react-icons/fa6';

const Features: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (typeof window !== "undefined" && window.fbq) {
              window.fbq("track", "ViewContent", {
                content_name: "Nuestros_Servicios",
                content_category: "Servicios",
              });
            }
            observer.unobserve(entry.target); // Stop observing after it intersects once
          }
        });
      },
      {
        root: null, // viewport
        rootMargin: "0px",
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const services = [
    {
      title: 'Acompañamiento Médico',
      desc: '¿No puedes llevarlo a su cita? Nosotros lo buscamos, lo acompañamos con el doctor y lo regresamos seguro a casa.',
      icon: <FaCarSide />,
      color: 'bg-sky-50',
      textColor: 'text-sky-600',
      badge: 'Más solicitado'
    },
    {
      title: 'Cuidado Profesional',
      desc: 'Personal con background en enfermería para cuidar a tus seres queridos con la paciencia y el conocimiento que merecen.',
      icon: <FaUserDoctor />,
      color: 'bg-indigo-50',
      textColor: 'text-indigo-600',
      badge: '24/7'
    },
    {
      title: 'Vida Activa',
      desc: 'Fomentamos la salud mental con actividades recreativas, pintura y ejercicios suaves adaptados a su ritmo.',
      icon: <FaPalette />,
      color: 'bg-teal-50',
      textColor: 'text-teal-600',
      badge: 'Bienestar'
    },
    {
      title: 'Senior Resort (Próximamente)',
      desc: 'Estamos construyendo un paraíso: una casa hogar tipo resort para que vivan su mejor etapa con dignidad y lujo.',
      icon: <FaHouse />,
      color: 'bg-amber-50',
      textColor: 'text-amber-600',
      badge: 'Proyecto'
    }
  ];

  return (
    <section ref={sectionRef} id="servicios" className="py-24 bg-white px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Nuestros Servicios</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">Soluciones reales para familias dominicanas que buscan lo mejor para sus adultos mayores.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, idx) => (
            <div key={idx} className={`${s.color} p-8 rounded-[2.5rem] border border-slate-50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col h-full`}>
              <div className="flex justify-between items-start mb-6">
                <div className={`text-5xl ${s.textColor} group-hover:scale-110 transition-transform`}>{s.icon}</div>
                <span className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter text-slate-500 shadow-sm border border-slate-100">{s.badge}</span>
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-4">{s.title}</h3>
              <p className="text-slate-600 font-medium leading-relaxed flex-1">{s.desc}</p>
              <div className="mt-8">
                <a href="#agenda" className="text-sky-600 font-black text-sm uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                  Saber más
                  <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
