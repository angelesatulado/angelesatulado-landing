
import React from 'react';
import { FaLocationDot, FaPhone, FaEnvelope } from 'react-icons/fa6';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-sky-500 rounded-xl flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </div>
              <span className="text-2xl font-black">Ángeles <span className="text-sky-500 font-medium">a tu Lado</span></span>
            </div>
            <p className="text-slate-400 text-lg max-w-sm mb-8 leading-relaxed font-medium">
              Dedicados a transformar la salud en RD. Llevamos atención médica de alto nivel a la calidez de su hogar en Santo Domingo.
            </p>
            <div className="flex gap-4">
              {['FB', 'IG', 'LI'].map(social => (
                <a key={social} href="#" className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center hover:bg-sky-500 transition-all font-bold text-sm tracking-widest">{social}</a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-black text-lg mb-8 tracking-wider uppercase">Servicios</h4>
            <ul className="space-y-4 text-slate-400 font-medium text-lg">
              <li><a href="#" className="hover:text-sky-400 transition-colors">Chequeo General</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors">Enfermería</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors">Fisioterapia</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors">Laboratorio</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-black text-lg mb-8 tracking-wider uppercase">República Dominicana</h4>
            <ul className="space-y-6 text-slate-400 font-medium">
              <li className="flex items-start gap-4">
                <span className="text-sky-400 text-xl"><FaLocationDot /></span>
                <span>Distrito Nacional, Santo Domingo, Rep. Dominicana.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-sky-400 text-xl"><FaPhone /></span>
                <span className="text-white font-black text-xl tracking-tight">829 619 3919</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-sky-400 text-xl"><FaEnvelope /></span>
                <span>citas@angelesatulado.do</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm font-bold">&copy; {new Date().getFullYear()} Ángeles a tu Lado RD. Todos los derechos reservados.</p>
          <div className="flex gap-8 text-slate-500 text-xs font-black uppercase tracking-widest">
            <a href="#" className="hover:text-white">Privacidad</a>
            <a href="#" className="hover:text-white">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
