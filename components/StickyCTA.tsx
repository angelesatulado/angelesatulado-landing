"use client"; // Add this line

import React, { useEffect } from 'react';

const StickyCTA: React.FC = () => {
useEffect(() => {
  const trackLeadEvent = (source: string) => {
    if (window.fbq) {
      window.fbq("track", "Lead", {
        source,
        page: "landing",
      });
    }
  };

  const agendaButtons = document.querySelectorAll('a[href="#agenda"]');
  agendaButtons.forEach(btn =>
    btn.addEventListener("click", () => trackLeadEvent("agenda_cta"))
  );

  const phoneButtons = document.querySelectorAll('a[href^="tel:"]');
  phoneButtons.forEach(btn =>
    btn.addEventListener("click", () => trackLeadEvent("phone_cta"))
  );

  return () => {
    agendaButtons.forEach(btn =>
      btn.replaceWith(btn.cloneNode(true))
    );
    phoneButtons.forEach(btn =>
      btn.replaceWith(btn.cloneNode(true))
    );
  };
}, []);
 return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-xl border-t border-slate-100 z-[50] flex gap-3 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
      <a 
        href="tel:+18296193919" 
        className="w-16 h-16 bg-slate-100 text-slate-800 rounded-2xl flex items-center justify-center border border-slate-200 active:bg-slate-200"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </a>
      <a 
        href="#agenda" 
        className="flex-1 bg-sky-500 text-white rounded-2xl font-black text-lg flex items-center justify-center shadow-2xl shadow-sky-200 active:scale-95 transition-all uppercase tracking-widest"
      >
        Agendar Cita
      </a>
    </div>
  );
};

export default StickyCTA;
