import React, { useState } from 'react';
import skillsData from '../data/skills.json';
import { SkillGroup } from '../types';
import { Cpu, Code2, Sparkles, Terminal, Layers, Database, ShieldCheck, Check } from 'lucide-react';

export const StackSection: React.FC = () => {
  const skillGroups = skillsData as SkillGroup[];
  const [activeCategory, setActiveCategory] = useState<string>('todas');

  const filteredGroups = activeCategory === 'todas'
    ? skillGroups
    : skillGroups.filter((g) => g.categoria.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="stack" className="py-20 relative z-10 bg-[#020617] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono uppercase tracking-widest">
            <Cpu className="w-3.5 h-3.5" />
            <span>Ecossistema de Tecnologias</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Stack Tecnológica <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-sky-400">2026</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Domínio completo das ferramentas mais modernas de engenharia web, inteligência artificial generativa, ciência de dados e infraestrutura em nuvem.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory('todas')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeCategory === 'todas'
                ? 'bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-lg shadow-blue-500/25'
                : 'bg-slate-900 text-slate-300 border border-slate-800 hover:text-white'
            }`}
          >
            Todas as Ferramentas
          </button>
          {skillGroups.map((g) => (
            <button
              key={g.categoria}
              onClick={() => setActiveCategory(g.categoria)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === g.categoria
                  ? 'bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-slate-900 text-slate-300 border border-slate-800 hover:text-white'
              }`}
            >
              {g.categoria}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="space-y-12">
          {filteredGroups.map((group) => (
            <div key={group.categoria} className="space-y-6">
              <div className="border-b border-slate-800/80 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Code2 className="w-5 h-5 text-sky-400" />
                    <span>{group.categoria}</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">{group.descricao}</p>
                </div>
                <span className="text-xs font-mono text-sky-400 font-semibold bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20 self-start sm:self-auto">
                  {group.tecnologias.length} Tecnologias
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {group.tecnologias.map((tech) => (
                  <div
                    key={tech.nome}
                    className="p-4 rounded-xl bg-[#0F172A] border border-slate-800/90 hover:border-sky-500/50 transition-all duration-300 hover:-translate-y-1 group relative flex flex-col justify-between space-y-3 shadow-lg"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-sky-400 font-bold text-xs group-hover:scale-110 transition-transform">
                          {tech.nome.substring(0, 2)}
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors">
                            {tech.nome}
                          </h4>
                          <span className="text-[10px] text-slate-400 font-mono">{tech.experiencia}</span>
                        </div>
                      </div>

                      {tech.destaque && (
                        <span className="p-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400" title="Tecnologia em Destaque">
                          <Sparkles className="w-3.5 h-3.5" />
                        </span>
                      )}
                    </div>

                    {/* Progress Bar */}
                    <div className="space-y-1 pt-1">
                      <div className="flex justify-between text-[10px] font-mono text-slate-400">
                        <span>Proficiência</span>
                        <span className="text-sky-400 font-bold">{tech.nivel}%</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-slate-900 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-600 via-sky-400 to-emerald-400 rounded-full transition-all duration-1000"
                          style={{ width: `${tech.nivel}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
