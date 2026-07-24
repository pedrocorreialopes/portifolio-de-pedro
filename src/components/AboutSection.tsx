import React from 'react';
import timelineData from '../data/timeline.json';
import { TimelineItem } from '../types';
import { 
  GraduationCap, 
  Briefcase, 
  Award, 
  Sparkles, 
  BookOpen, 
  CheckCircle2, 
  BrainCircuit, 
  Code2, 
  Database,
  Calendar
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const timeline = timelineData as TimelineItem[];

  return (
    <section id="sobre" className="py-20 relative z-10 bg-[#0F172A]/80 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono uppercase tracking-widest">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Trajetória & Especializações</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Engenharia de Software & <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-indigo-400">Ciência de Dados</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Com dupla formação acadêmica em Análise de Sistemas Web e Ciência de Dados, Pedro Correia Lopes Filho combina rigidez matemática, inteligência artificial e arquitetura limpa para criar softwares de impacto global.
          </p>
        </div>

        {/* Profile Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Bio Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl bg-[#020617] border border-slate-800 p-8 shadow-2xl space-y-6">
              
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 via-sky-400 to-indigo-600 p-[2px] shadow-lg">
                  <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center font-black text-2xl text-sky-400">
                    PL
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Pedro Correia Lopes Filho</h3>
                  <p className="text-xs text-sky-400 font-semibold">Full Stack & AI Engineer</p>
                  <p className="text-[11px] text-slate-400">Fortaleza, Ceará • Brasil</p>
                </div>
              </div>

              <div className="space-y-3 text-xs text-slate-300 leading-relaxed border-t border-slate-800/80 pt-4">
                <p>
                  Atuando na linha de frente do desenvolvimento de sistemas, Pedro combina anos de prática em código limpo com pós-graduação acadêmica e inteligência artificial aplicada.
                </p>
                <p>
                  Especializado em criar ecossistemas completos — desde a concepção de banco de dados relacional e NoSQL até o frontend responsivo em React e integração de agentes LLM avançados.
                </p>
              </div>

              {/* Degrees Badge Box */}
              <div className="space-y-2 pt-2 border-t border-slate-800/80">
                <h4 className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                  Diplomas & Instituições
                </h4>
                
                {/* UNINTER */}
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-3">
                  <GraduationCap className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-white">Ciência de Dados (Concluído)</h5>
                    <p className="text-[11px] text-slate-400">UNINTER • Média 10.0 em Algoritmos, Pré-Cálculo e Bancos</p>
                  </div>
                </div>

                {/* FATENE */}
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-white">Análise de Sistemas Web (Concluído)</h5>
                    <p className="text-[11px] text-slate-400">FATENE • 128 Créditos • Foco em Arquitetura Web</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Highlights Cards */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="p-6 rounded-2xl bg-[#020617]/90 border border-slate-800 hover:border-sky-500/40 transition-all space-y-3">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                  <BrainCircuit className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">Inteligência Artificial</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Implementação de agentes inteligentes usando Gemini API 2.5, OpenAI, Claude, RAG e orquestração de LLMs para automação corporativa.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#020617]/90 border border-slate-800 hover:border-sky-500/40 transition-all space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Database className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">Ciência de Dados & BI</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Modelagem preditiva em Python, análise exploratória com Pandas/NumPy, estatística aplicada e dashboards em Power BI.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#020617]/90 border border-slate-800 hover:border-sky-500/40 transition-all space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <Code2 className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">Desenvolvimento Full Stack</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Frontends reativos em React/Next.js com TailwindCSS e Framer Motion, aliados a APIs RESTful robustas em Node.js e Python.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#020617]/90 border border-slate-800 hover:border-sky-500/40 transition-all space-y-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">Sistemas & E-Commerce</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  LMS de cursos EAD, sistemas de finanças, e-commerces com reserva de estoque e ferramentas de produtividade empresarial.
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Timeline Section */}
        <div className="mt-20 pt-12 border-t border-slate-800">
          <h3 className="text-2xl font-bold text-white text-center mb-12 flex items-center justify-center gap-2">
            <Calendar className="w-6 h-6 text-sky-400" />
            <span>Linha do Tempo Profissional & Acadêmica</span>
          </h3>

          <div className="relative max-w-4xl mx-auto space-y-8 before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-600 before:via-sky-400 before:to-indigo-600">
            {timeline.map((item, idx) => (
              <div
                key={idx}
                className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group`}
              >
                {/* Node Icon */}
                <div className="flex items-center justify-center w-9 h-9 rounded-full bg-[#0F172A] border-2 border-sky-400 text-sky-400 shadow-lg shadow-sky-500/20 shrink-0 z-10 left-0 sm:left-1/2 -translate-x-1/2 absolute">
                  {item.tipo === 'academico' ? (
                    <GraduationCap className="w-4 h-4" />
                  ) : (
                    <Briefcase className="w-4 h-4" />
                  )}
                </div>

                {/* Timeline Card Content */}
                <div className="w-[calc(100%-3rem)] sm:w-[calc(50%-2.5rem)] ml-12 sm:ml-0 p-6 rounded-2xl bg-[#020617] border border-slate-800/90 hover:border-sky-500/40 shadow-xl transition-all">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-sky-500/10 text-sky-300 border border-sky-500/30 inline-block mb-2">
                    {item.ano}
                  </span>
                  <h4 className="text-base font-bold text-white mb-1">{item.titulo}</h4>
                  <p className="text-xs font-semibold text-sky-400 mb-3">{item.instituicao}</p>
                  <p className="text-xs text-slate-300 leading-relaxed mb-3">{item.descricao}</p>

                  <div className="space-y-1">
                    {item.destaques.map((dest, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-[11px] text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{dest}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
