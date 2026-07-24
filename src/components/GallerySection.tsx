import React, { useState } from 'react';
import projectsData from '../data/projects.json';
import { Project } from '../types';
import { Image as ImageIcon, ExternalLink, Eye, Sparkles } from 'lucide-react';

interface GallerySectionProps {
  onSelectProject: (proj: Project) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onSelectProject }) => {
  const projects = projectsData as Project[];

  return (
    <section id="galeria" className="py-20 relative z-10 bg-[#020617] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono uppercase tracking-widest">
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Showcase Visual Pinterest Style</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Galeria de <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-sky-400 to-indigo-400">Interfaces</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Uma imersão estética nos layouts, dashboards e experiências visuais desenvolvidos para cada aplicação.
          </p>
        </div>

        {/* Pinterest Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {projects.slice(0, 12).map((p) => (
            <div
              key={p.id}
              onClick={() => onSelectProject(p)}
              className="relative group rounded-2xl overflow-hidden border border-slate-800 bg-[#0F172A] shadow-xl hover:border-sky-500/60 transition-all duration-300 cursor-pointer break-inside-avoid"
            >
              <img
                src={p.imagem}
                alt={p.titulo}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                <span className="px-2.5 py-1 rounded-full bg-sky-500/20 text-sky-300 text-[10px] font-mono font-bold w-fit mb-2">
                  {p.categoria}
                </span>
                <h3 className="text-lg font-bold text-white mb-1">{p.titulo}</h3>
                <p className="text-xs text-slate-300 line-clamp-2">{p.descricao}</p>
                <div className="pt-3 flex items-center gap-2 text-xs font-semibold text-sky-400">
                  <Eye className="w-4 h-4" />
                  <span>Inspecionar Interface</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
