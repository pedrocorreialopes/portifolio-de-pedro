import React, { useState } from 'react';
import { Project } from '../types';
import { 
  X, 
  ExternalLink, 
  Github, 
  Clock, 
  CheckCircle2, 
  Layers, 
  Code2, 
  Server, 
  HelpCircle, 
  Zap,
  Sparkles,
  Share2,
  Maximize2
} from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenBudgetModalWithProject: (projectTitle: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onOpenBudgetModalWithProject,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'tech' | 'architecture'>('overview');
  const [showIframePreview, setShowIframePreview] = useState(false);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl my-8 bg-[#0F172A] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#020617]/80 backdrop-blur-md shrink-0">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 border border-sky-500/30 text-sky-300">
              {project.categoria}
            </span>
            <span className="text-xs font-mono text-slate-400">
              Status: <span className="text-emerald-400 font-semibold">{project.status}</span>
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Cover Banner / Interactive Preview Header */}
          <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-900 aspect-video max-h-80 group">
            {!showIframePreview ? (
              <>
                <img
                  src={project.imagem}
                  alt={project.titulo}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-black/40 to-transparent flex flex-col justify-end p-6">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white">{project.titulo}</h2>
                  <p className="text-sm text-slate-300 mt-1 max-w-2xl">{project.descricao}</p>
                </div>
                {/* Live Preview Overlay Trigger */}
                <button
                  onClick={() => setShowIframePreview(true)}
                  className="absolute top-4 right-4 px-3 py-1.5 rounded-lg bg-black/70 border border-slate-700 hover:border-sky-400 text-slate-200 text-xs font-medium backdrop-blur-md flex items-center gap-1.5 transition-all"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-sky-400" />
                  <span>Testar Iframe Modo Interativo</span>
                </button>
              </>
            ) : (
              <div className="w-full h-full relative">
                <iframe
                  src={project.demo}
                  title={project.titulo}
                  className="w-full h-full border-0"
                />
                <button
                  onClick={() => setShowIframePreview(false)}
                  className="absolute top-2 right-2 px-3 py-1 rounded-md bg-black/80 text-white text-xs font-medium border border-slate-700"
                >
                  Fechar Iframe
                </button>
              </div>
            )}
          </div>

          {/* Quick Action Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-slate-900/90 border border-slate-800">
            <div className="flex flex-wrap items-center gap-2">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 text-white font-semibold text-xs shadow-lg transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Demo Online Ao Vivo</span>
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition-all"
              >
                <Github className="w-4 h-4" />
                <span>Código Fonte / GitHub</span>
              </a>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenBudgetModalWithProject(project.titulo);
              }}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600 border border-emerald-500/40 text-emerald-400 hover:text-white font-semibold text-xs transition-all"
            >
              <Sparkles className="w-4 h-4" />
              <span>Solicitar Software Similar</span>
            </button>
          </div>

          {/* Tabs Navigation */}
          <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'overview'
                  ? 'bg-sky-500/20 text-sky-400 border border-sky-500/40'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Visão Geral do Produto
            </button>
            <button
              onClick={() => setActiveTab('tech')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'tech'
                  ? 'bg-sky-500/20 text-sky-400 border border-sky-500/40'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Tecnologias Utilizadas
            </button>
            <button
              onClick={() => setActiveTab('architecture')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'architecture'
                  ? 'bg-sky-500/20 text-sky-400 border border-sky-500/40'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Arquitetura & Engenharia
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === 'overview' && (
            <div className="space-y-4 text-sm text-slate-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <h4 className="font-semibold text-rose-400 mb-2 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4" />
                    <span>O Problema do Cliente</span>
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{project.problema}</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <h4 className="font-semibold text-emerald-400 mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>A Solução Desenvolvida</span>
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{project.solucao}</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
                <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-sky-400" />
                  <span>Tempo Médio de Desenvolvimento</span>
                </h4>
                <p className="text-xs text-slate-400">
                  Este software foi desenhado, codificado e homologado em aproximadamente{' '}
                  <strong className="text-sky-300">{project.tempo}</strong>.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'tech' && (
            <div className="space-y-4">
              <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                Stack de Desenvolvimento
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tecnologias.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-sky-300 text-xs font-medium flex items-center gap-1.5"
                  >
                    <Code2 className="w-3.5 h-3.5 text-sky-400" />
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'architecture' && (
            <div className="space-y-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800 font-mono text-xs text-slate-300">
              <div className="flex items-center gap-2 text-sky-400 font-bold mb-2">
                <Server className="w-4 h-4" />
                <span>Padrão de Arquitetura de Software</span>
              </div>
              <p className="leading-relaxed bg-black/40 p-3 rounded-lg border border-slate-800 text-slate-200">
                {project.arquitetura}
              </p>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#020617] border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 shrink-0">
          <span>Software criado por Pedro Correia Lopes Filho</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium transition-all"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
