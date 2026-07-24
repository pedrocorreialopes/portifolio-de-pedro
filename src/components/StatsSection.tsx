import React from 'react';
import statsData from '../data/stats.json';
import { StatItem } from '../types';
import { Briefcase, Users, Code2, Clock, Cpu, GitCommit, Award, BarChart3 } from 'lucide-react';

export const StatsSection: React.FC = () => {
  const stats = statsData as StatItem[];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-sky-400" />;
      case 'Users': return <Users className="w-6 h-6 text-blue-400" />;
      case 'Code2': return <Code2 className="w-6 h-6 text-emerald-400" />;
      case 'Clock': return <Clock className="w-6 h-6 text-amber-400" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-purple-400" />;
      case 'GitCommit': return <GitCommit className="w-6 h-6 text-rose-400" />;
      case 'Award': return <Award className="w-6 h-6 text-sky-400" />;
      default: return <BarChart3 className="w-6 h-6 text-sky-400" />;
    }
  };

  return (
    <section id="estatisticas" className="py-20 relative z-10 bg-[#0F172A] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase tracking-widest">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Métricas de Performance & Impacto</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Resultados Comprovados em <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-sky-400">Números</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Indicadores reais de dedicação, entregas contínuas e excelência técnica ao longo da trajetória profissional.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-[#020617] border border-slate-800 hover:border-sky-500/50 shadow-xl transition-all duration-300 hover:-translate-y-1 space-y-4 group"
            >
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:scale-110 transition-transform">
                  {getIcon(item.icone)}
                </div>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest bg-slate-900 px-2 py-1 rounded-md border border-slate-800">
                  Auditado 2026
                </span>
              </div>

              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-white tracking-tight group-hover:text-sky-300 transition-colors">
                    {item.valor.toLocaleString('pt-BR')}
                  </span>
                  <span className="text-2xl font-bold text-sky-400">{item.sufixo}</span>
                </div>
                <h3 className="text-sm font-bold text-slate-200 mt-1">{item.rotulo}</h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">{item.descricao}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
