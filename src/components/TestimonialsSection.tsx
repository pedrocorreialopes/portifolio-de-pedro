import React from 'react';
import testimonialsData from '../data/testimonials.json';
import { Testimonial } from '../types';
import { MessageSquare, Star, Quote, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = testimonialsData as Testimonial[];

  return (
    <section id="depoimentos" className="py-20 relative z-10 bg-[#0F172A] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono uppercase tracking-widest">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Avaliações & Reconhecimento</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Depoimentos de <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-sky-400 to-indigo-400">Clientes</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Veja o que executivos, diretores de tecnologia e empreendedores dizem sobre os softwares entregues por Pedro Correia Lopes Filho.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-2xl bg-[#020617] border border-slate-800 hover:border-sky-500/40 shadow-2xl transition-all duration-300 flex flex-col justify-between space-y-6 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-slate-800 pointer-events-none" />

              <div className="space-y-4">
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(item.avaliacao)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-mono text-slate-400 ml-2">5.0 Verificado</span>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed italic">
                  "{item.depoimento}"
                </p>
              </div>

              {/* Author Card Footer */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80">
                <img
                  src={item.foto}
                  alt={item.nome}
                  className="w-12 h-12 rounded-full object-cover border-2 border-sky-500/40"
                />
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    <span>{item.nome}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" title="Cliente Verificado" />
                  </h4>
                  <p className="text-xs text-sky-400 font-medium">{item.cargo}</p>
                  <p className="text-[11px] text-slate-400">{item.empresa}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
