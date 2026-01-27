
"use client"; // Required for useState, useRef

import React, { useState, useRef } from 'react';

const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const leftReflectionRef = useRef<HTMLVideoElement>(null); // Added useRef for left reflection
  const rightReflectionRef = useRef<HTMLVideoElement>(null); // Added useRef for right reflection

  const handlePlay = () => {
    if (videoRef.current && leftReflectionRef.current && rightReflectionRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        leftReflectionRef.current.pause(); // Pause left reflection
        rightReflectionRef.current.pause(); // Pause right reflection
      } else {
        videoRef.current.play();
        leftReflectionRef.current.play(); // Play left reflection
        rightReflectionRef.current.play(); // Play right reflection
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section id="como-funciona" className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Vea nuestra labor en acción</h2>
          <p className="text-slate-500 text-lg font-medium">Porque una imagen vale más que mil palabras, conozca a nuestros ángeles.</p>
        </div>
        
        {/* Main container for all three videos */}
        <div className="relative flex justify-center items-center py-8">
          {/* Blurred Reflection Left (visible only on large screens) */}
          <div className="absolute left-0 hidden lg:flex justify-end pr-8" style={{ width: 'calc(50% - 192px)' }}> {/* 192px is half of max-w-sm (384px) */}
            <video
              ref={leftReflectionRef} // Assign ref
              src="/promo-video.mp4"
              loop
              playsInline
              muted
              className="w-full max-w-[150px] aspect-[9/16] object-cover rounded-[3rem]"
              style={{ filter: 'blur(4px)', opacity: 0.3 }} // Explicit filter for better control
            />
          </div>

          {/* Main Video */}
          <div 
            className="relative aspect-[9/16] max-w-sm mx-auto rounded-[3rem] overflow-hidden shadow-inner-2xl border-[1px] border-slate-100 group z-10"
            onClick={handlePlay}
          >
            <video
              ref={videoRef}
              src="/promo-video.mp4"
              loop
              playsInline
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-1000"
            />
            {!isPlaying && (
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent flex flex-col items-center justify-center cursor-pointer">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl hover:scale-110 active:scale-95 transition-all group-hover:bg-sky-500 group-hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-sky-500 group-hover:text-white ml-2 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className="mt-6 text-white font-bold text-lg tracking-widest uppercase opacity-100">Reproducir Video</span>
              </div>
            )}
          </div>

          {/* Blurred Reflection Right (visible only on large screens) */}
          <div className="absolute right-0 hidden lg:flex justify-start pl-8" style={{ width: 'calc(50% - 192px)' }}>
            <video
              ref={rightReflectionRef} // Assign ref
              src="/promo-video.mp4"
              loop
              playsInline
              muted
              className="w-full max-w-[150px] aspect-[9/16] object-cover rounded-[3rem]"
              style={{ filter: 'blur(4px)', opacity: 0.3 }} // Explicit filter for better control
            />
          </div>
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

export default VideoSection;
