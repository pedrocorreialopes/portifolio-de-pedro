import React from 'react';
import { ArrowUp, Code2, Heart, ShieldCheck, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#020617] border-t border-slate-800/80 pt-16 pb-12 relative z-10 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Col 1 Brand */}
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 to-sky-400 flex items-center justify-center font-bold text-white">
                PL
              </div>
              <span className="font-bold text-white text-base">Pedro Correia Lopes Filho</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              Full Stack Software Developer • Especialista em Desenvolvimento Web, Inteligência Artificial, Ciência de Dados, Sistemas Corporativos e Automações.
            </p>
            <div className="flex items-center gap-2 pt-1 text-[11px] text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Plataforma PWA Ready • Performance Grade A+ • 2026</span>
            </div>
          </div>

          {/* Col 2 Quick Links */}
          <div className="space-y-3">
            <h4 className="font-mono text-slate-200 uppercase tracking-wider text-[11px]">Navegação Rápida</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-sky-400 transition-colors">Início</a></li>
              <li><a href="#marketplace" className="hover:text-sky-400 transition-colors">Marketplace de Projetos</a></li>
              <li><a href="#sobre" className="hover:text-sky-400 transition-colors">Sobre & Formação (FATENE & UNINTER)</a></li>
              <li><a href="#stack" className="hover:text-sky-400 transition-colors">Stack Tecnológica</a></li>
              <li><a href="#estatisticas" className="hover:text-sky-400 transition-colors">Métricas & Resultados</a></li>
            </ul>
          </div>

          {/* Col 3 Categories */}
          <div className="space-y-3">
            <h4 className="font-mono text-slate-200 uppercase tracking-wider text-[11px]">Categorias Frequentes</h4>
            <ul className="space-y-2">
              <li><a href="#marketplace" className="hover:text-sky-400 transition-colors">Plataformas Educacionais</a></li>
              <li><a href="#marketplace" className="hover:text-sky-400 transition-colors">Sistemas Financeiros</a></li>
              <li><a href="#marketplace" className="hover:text-sky-400 transition-colors">Inteligência Artificial</a></li>
              <li><a href="#marketplace" className="hover:text-sky-400 transition-colors">Dashboards de Dados</a></li>
              <li><a href="#contato" className="hover:text-sky-400 transition-colors">Solicitar Orçamento</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-center sm:text-left">
            Criado e Desenvolvido por <strong className="text-slate-200 font-semibold">Pedro Correia Lopes Filho</strong> © 2026. Todos os direitos reservados.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-sky-500/50 text-slate-300 hover:text-white transition-all group"
          >
            <span>Voltar ao Topo</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
};
