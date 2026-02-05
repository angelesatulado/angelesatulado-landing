"use client";

import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const images = [
  "https://images.unsplash.com/photo-1588776814546-da631a747943?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1542884748-2b87b36c6b90?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1541535650810-10d26f5d2ebb?auto=format&fit=crop&q=80&w=1200",
];
//comentario
const CarouselSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section id="como-funciona" className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Nuestra Labor en Acción
          </h2>
          <p className="text-slate-500 text-lg font-medium">
            Porque una imagen vale más que mil palabras, conozca a nuestros ángeles.
          </p>
        </div>
        
        <div className="relative w-full max-w-full mx-auto">
          <div className="relative h-96 md:h-[600px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
            {images.map((src, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2 bg-white/80 backdrop-blur-sm text-slate-600 hover:bg-white hover:text-sky-500 rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-all duration-300 z-20"
          >
            <FaChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2 bg-white/80 backdrop-blur-sm text-slate-600 hover:bg-white hover:text-sky-500 rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-all duration-300 z-20"
          >
            <FaChevronRight className="w-6 h-6" />
          </button>
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {[
            {label: 'Doctores RD', val: '20+'},
            {label: 'Pacientes Felices', val: '1.2k'},
            {label: 'Zonas Cubiertas', val: 'Santo Domingo'},
            {label: 'Atención', val: '24/7'}
          ].map((stat, i) => (
            <div key={i} className="bg-slate-50 p-6 rounded-[2rem] text-center border border-slate-100 hover:bg-sky-50 transition-colors">
              <p className="text-2xl md:text-3xl font-black text-sky-500 mb-1">{stat.val}</p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;
