"use client";

import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([
    { role: 'ai', text: '¡Hola! Soy tu asistente de Ángeles a tu Lado. ¿Necesitas ayuda para llevar a tu familiar a una cita médica en Santo Domingo o buscas a alguien de enfermería para cuidarlo en casa?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMsg = input;
    setInput('');
    const updatedMessages = [...messages, { role: 'user' as const, text: userMsg }];
    setMessages(updatedMessages);
    setIsLoading(true);

    try {
      /* Initialize Gemini API client correctly using named parameter */
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      /* Format history for generateContent as per latest guidelines */
      const contents = updatedMessages.map(msg => ({
        role: msg.role === 'ai' ? 'model' : 'user',
        parts: [{ text: msg.text }]
      }));

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: contents,
        config: {
          systemInstruction: `Eres el asistente de "Ángeles a tu Lado" en Santo Domingo, RD. 
          Solo ofrecemos estos 3 servicios: 
          1. Acompañamiento a Citas Médicas: Buscamos al envejeciente y lo acompañamos al hospital si la familia no puede.
          2. Cuidado en Casa: Empleadas con background en enfermería para cuidado doméstico.
          3. Senior Resort (Próximamente): Una casa hogar de lujo para retiro.
          
          Tu tono debe ser muy empático, educado y dominicano ("un placer", "de una vez"). 
          Si preguntan precios o detalles, dile que dejen sus datos en el formulario o escriban al 829-619-3919.`
        }
      });
      
      /* Directly access .text property from GenerateContentResponse */
      const aiText = response.text || 'Escríbenos por WhatsApp al 829-619-3919 y te atenderemos de una vez.';
      setMessages(prev => [...prev, { role: 'ai', text: aiText }]);
    } catch (error) {
      console.error('Gemini API Error:', error);
      setMessages(prev => [...prev, { role: 'ai', text: 'Lo siento, hubo un inconveniente. Escríbenos por WhatsApp al 829-619-3919 y te atenderemos de una vez.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-28 right-6 md:bottom-10 md:right-10 z-[60] w-16 h-16 bg-sky-500 text-white rounded-[1.5rem] shadow-3xl flex items-center justify-center hover:bg-sky-600 transition-all active:scale-90"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {isOpen && (
        <div className="fixed bottom-28 right-6 md:bottom-28 md:right-10 z-[60] w-[calc(100vw-3rem)] md:w-[400px] h-[550px] bg-white rounded-[2.5rem] shadow-4xl border border-slate-100 flex flex-col overflow-hidden animate-in slide-in-from-bottom-10">
          <div className="bg-sky-500 p-6 text-white">
            <h3 className="font-black text-xl leading-tight">Ángeles RD</h3>
            <p className="text-xs text-sky-100 font-bold opacity-80 uppercase tracking-widest">Orientación Médica</p>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/30">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-3xl text-sm font-medium ${
                  m.role === 'user' ? 'bg-sky-500 text-white rounded-tr-none' : 'bg-white text-slate-800 shadow-sm border border-slate-50 rounded-tl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-3xl shadow-sm border border-slate-50 animate-pulse text-xs text-slate-400">Escribiendo...</div>
              </div>
            )}
          </div>

          <div className="p-6 bg-white border-t border-slate-50 flex gap-3">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="¿Cómo ayudamos a tu familiar?"
              className="flex-1 px-5 py-3 bg-slate-100 rounded-2xl text-sm font-bold outline-none focus:ring-4 focus:ring-sky-100"
            />
            <button 
              onClick={handleSend}
              className="w-12 h-12 bg-sky-500 text-white rounded-2xl flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistant;