"use client"
import React, { useState, useEffect, useRef } from 'react'; // Added useEffect, useRef
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  {
    title: "Acompañamiento Profesional",
    desc: "Asistencia personalizada en sus citas médicas, asegurando que cada detalle sea atendido.",
    img: "https://res.cloudinary.com/dg8y3x4sn/image/upload/v1770313351/5_feb_2026_13_15_18_gizy3w.png"
  },
  {
    title: "Cuidados Integrales en Casa",
    desc: "Gestión de alimentación y administración de medicamentos con estricto rigor horario.",
    img: "https://res.cloudinary.com/dg8y3x4sn/image/upload/v1770313326/ChatGPT_Image_5_feb_2026_13_31_26_bvay09.png"
  },
  {
    title: "Monitoreo de Signos Vitales",
    desc: "Medición precisa de presión arterial y seguimiento constante de su estado de salud.",
    img: "https://res.cloudinary.com/dg8y3x4sn/image/upload/v1770313369/ChatGPT_Image_5_feb_2026_13_42_29_g0874z.png"
  }
];
const CarouselSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null); // Added useRef

  // Intersection Observer for ViewContent
  useEffect(() => {
  if (!sectionRef.current) return;

  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      window.fbq?.("track", "ViewContent", {
        content_name: "Nuestra_Labor_En_Accion",
        content_category: "Informacion_Visual",
      });
      observer.disconnect();
    }
  }, { threshold: 0.5 });

  observer.observe(sectionRef.current);

  return () => observer.disconnect();
}, []);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? services.length - 1 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === services.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
return (
    <section  ref={sectionRef} id="como-funciona" className="py-24 bg-slate-50 overflow-hidden">
  
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-sky-500 font-bold uppercase tracking-[0.3em] text-xs"
          >
            Servicios Humanizados
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-slate-900 mt-4 mb-6 tracking-tight"
          >
            Nuestra Labor en <span className="text-sky-500">Acción</span>
          </motion.h2>
        </div>
        
        {/* Contenedor expandido a max-w-7xl para mayor impacto visual */}
        <div className="relative group max-w-7xl mx-auto">
          
          {/* Altura incrementada a 700px en desktop para mayor inmersión */}
          <div className="relative h-[500px] md:h-[700px] rounded-[3.5rem] overflow-hidden shadow-[0_32px_64px_-15px_rgba(0,0,0,0.2)] bg-slate-200">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                <motion.img
                  src={services[currentIndex].img}
                  animate={{ scale: [1.1, 1] }}
                  transition={{ duration: 7, ease: "easeOut" }}
                  className="w-full h-full object-cover"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                {/* Tarjeta flotante reubicada y más amplia */}
                <motion.div 
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="absolute bottom-10 left-6 right-6 md:left-12 md:bottom-16 md:max-w-lg p-8 md:p-10 rounded-[2.5rem] bg-white/10 backdrop-blur-2xl border border-white/30 shadow-2xl"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <span className="h-px w-8 bg-sky-400"></span>
                      <span className="text-sky-400 text-xs font-bold uppercase tracking-widest">
                        Servicio Especializado
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                      {services[currentIndex].title}
                    </h3>
                    <p className="text-white/80 text-base md:text-lg leading-relaxed">
                      {services[currentIndex].desc}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
            
            {/* Indicadores en la parte superior derecha */}
            <div className="absolute top-10 right-12 flex gap-3 z-30">
              {services.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-1.5 transition-all duration-500 rounded-full ${
                    i === currentIndex ? "w-12 bg-sky-400" : "w-4 bg-white/40 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>
          
          {/* Controles de navegación con mejor contraste */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 bg-white text-slate-800 p-5 rounded-2xl shadow-xl hover:bg-sky-500 hover:text-white transition-all duration-300 z-40 hidden md:flex"
          >
            <FaChevronLeft className="w-5 h-5" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 bg-white text-slate-800 p-5 rounded-2xl shadow-xl hover:bg-sky-500 hover:text-white transition-all duration-300 z-40 hidden md:flex"
          >
            <FaChevronRight className="w-5 h-5" />
          </button>
        </div>
        
        {/* Sección de estadísticas con mayor espaciado */}
        <div className="mt-28 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {label: 'Doctores RD', val: '20+'},
            {label: 'Pacientes Felices', val: '1.2k'},
            {label: 'Zonas Cubiertas', val: 'Sto. Domingo'},
            {label: 'Atención', val: '24/7'}
          ].map((stat, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[3rem] text-center shadow-[0_20px_40px_rgba(0,0,0,0.04)] border border-slate-100"
            >
              <p className="text-4xl font-black text-slate-900 mb-2">{stat.val}</p>
              <p className="text-[11px] font-bold text-sky-500 uppercase tracking-[0.25em]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;
