
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import VideoSection from '../components/VideoSection';
import Features from '../components/Features';
import AppointmentForm from '../components/AppointmentForm';
import Footer from '../components/Footer';
import AIAssistant from '../components/AIAssistant';
import StickyCTA from '../components/StickyCTA';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-sky-100 selection:text-sky-900 overflow-x-hidden">
      <Header />
      <main className="pb-24 md:pb-0">
        <Hero />
        
        <VideoSection />
        
        {/* Pilar 1: Transporte Médico */}
        <section id="como-funciona" className="py-24 bg-slate-50 px-4">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">Lo llevamos a su cita, <span className="text-sky-500">tú mantén la calma</span></h2>
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100">
                  <p className="text-lg text-slate-600 font-medium leading-relaxed">
                    Sabemos que el trabajo y las responsabilidades a veces impiden estar físicamente. Por eso, nuestro servicio de acompañamiento médico incluye:
                  </p>
                  <ul className="mt-6 space-y-4">
                    {['Recogida puntual en el hogar', 'Acompañamiento dentro de la clínica/hospital', 'Reporte detallado de lo que dijo el médico', 'Regreso seguro a casa'].map((item, i) => (
                      <li key={i} className="flex items-center gap-4 font-bold text-slate-800">
                        <span className="w-6 h-6 bg-sky-500 text-white rounded-full flex items-center justify-center text-xs">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex-1 relative">
              <img 
                src="https://images.unsplash.com/photo-1542884748-2b87b36c6b90?auto=format&fit=crop&q=80&w=800" 
                alt="Personal de Ángeles a tu lado acompañando a un adulto mayor" 
                className="rounded-[3rem] shadow-3xl border-8 border-white"
              />
              <div className="absolute -bottom-6 -right-6 bg-sky-500 text-white p-6 rounded-3xl shadow-2xl font-black italic">
                "Cuidamos los detalles que <br /> otros olvidan"
              </div>
            </div>
          </div>
        </section>

        <Features />
        
        {/* Pilar 2: Cuidado en Casa con Enfermería */}
        <section className="py-24 bg-white px-4">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-16">
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">Cuidado profesional <br /> <span className="text-sky-500">en la comodidad de casa</span></h2>
              <p className="text-lg text-slate-600 mb-8 font-medium leading-relaxed italic">
                Nuestras empleadas no son solo cuidadoras; son ángeles con formación en enfermería que entienden de medicación, signos vitales y, sobre todo, de trato humano.
              </p>
              <div className="grid grid-cols-2 gap-4">
                 <div className="bg-indigo-50 p-6 rounded-3xl text-center">
                    <p className="text-2xl mb-2">💊</p>
                    <p className="font-black text-slate-800 text-sm">Control de Medicinas</p>
                 </div>
                 <div className="bg-teal-50 p-6 rounded-3xl text-center">
                    <p className="text-2xl mb-2">🥗</p>
                    <p className="font-black text-slate-800 text-sm">Nutrición Adaptada</p>
                 </div>
              </div>
            </div>
            <div className="flex-1">
               <img 
                src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=800" 
                alt="Enfermera cuidando paciente en RD" 
                className="rounded-[3rem] shadow-3xl border-8 border-slate-50 transform -rotate-2"
               />
            </div>
          </div>
        </section>
        
        {/* Pilar 3: Próximamente Resort (Basado en la foto de pintura) */}
        <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
           <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/20 rounded-full blur-[120px]"></div>
           <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-16">
              <div className="flex-1">
                 <span className="bg-sky-500 text-xs font-black px-4 py-2 rounded-full uppercase tracking-widest mb-6 inline-block">Próximamente</span>
                 <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight">El primer <span className="text-sky-400 font-medium italic">Senior Resort</span> de Santo Domingo</h2>
                 <p className="text-xl text-slate-300 mb-10 leading-relaxed font-medium">
                   Estamos soñando y construyendo un lugar donde envejecer sea sinónimo de vacaciones eternas. Una Casa Hogar de lujo con actividades de pintura, yoga, piscina adaptada y atención médica 24/7.
                 </p>
                 <div className="flex gap-4">
                   <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-3xl mb-3">🎨</div>
                      <p className="text-xs font-bold text-slate-400">Arte</p>
                   </div>
                   <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-3xl mb-3">🌳</div>
                      <p className="text-xs font-bold text-slate-400">Jardines</p>
                   </div>
                   <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-3xl mb-3">🍱</div>
                      <p className="text-xs font-bold text-slate-400">Gourmet</p>
                   </div>
                 </div>
              </div>
              <div className="flex-1">
                 <div className="relative p-4 bg-white/5 rounded-[4rem] backdrop-blur-sm">
                    <img 
                      src="https://images.unsplash.com/photo-1541535650810-10d26f5d2ebb?auto=format&fit=crop&q=80&w=800" 
                      alt="Futuro Senior Resort Ángeles a tu Lado" 
                      className="rounded-[3rem] shadow-4xl opacity-90 grayscale hover:grayscale-0 transition-all duration-700"
                    />
                 </div>
              </div>
           </div>
        </section>

        <AppointmentForm />
        
        {/* Testimonial */}
        <section className="py-24 bg-white px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-sky-500 rounded-[3rem] p-12 md:p-16 text-center text-white shadow-2xl shadow-sky-100">
               <p className="text-2xl md:text-3xl font-black italic mb-8 leading-relaxed">
                 "No tenía cómo llevar a mi padre a sus chequeos de cardiología y Ángeles a tu Lado me salvó. Puntuales, profesionales y sobre todo con una paciencia increíble."
               </p>
               <p className="font-black text-xl mb-1 tracking-tight">Juan Carlos Peguero</p>
               <p className="text-sky-100 text-xs font-bold uppercase tracking-widest">Naco, Santo Domingo</p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <AIAssistant />
      <StickyCTA />
    </div>
  );
};

export default HomePage;
