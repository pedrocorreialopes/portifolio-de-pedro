import React from 'react';
import { 
  ShoppingBag, 
  Calculator, 
  FileText, 
  Github, 
  Linkedin, 
  MessageSquareCode, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Code2,
  Database,
  BrainCircuit
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface HeroProps {
  onOpenBudgetModal: () => void;
  onOpenAiDrawer: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBudgetModal, onOpenAiDrawer }) => {
  const triggerCvDownload = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
    // Create an alert or mock download trigger
    const link = document.createElement('a');
    link.href = '#';
    link.setAttribute('download', 'Curriculo_Pedro_Correia_Lopes_Filho.pdf');
    alert('Currículo em processamento para download. Você também pode solicitar a versão completa em PDF pelo WhatsApp!');
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-slate-800 shadow-xl backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono font-medium text-slate-200">
                Disponível para Projetos & Consultoria 2026
              </span>
              <span className="text-[10px] bg-sky-500/20 text-sky-300 font-semibold px-2 py-0.5 rounded-full border border-sky-500/30">
                Software Marketplace
              </span>
            </div>

            {/* Name & Title */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none">
                Pedro Correia <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400">
                  Lopes Filho
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-sky-400 flex items-center gap-2">
                <Code2 className="w-6 h-6 text-sky-400 inline" />
                Full Stack Software Developer
              </p>
            </div>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              Especialista em Desenvolvimento Web, Inteligência Artificial, Ciência de Dados, Sistemas Corporativos, Plataformas Educacionais, Automações e Experiências Digitais.
            </p>

            {/* Highlight Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 max-w-xl">
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs text-slate-300">
                <BrainCircuit className="w-4 h-4 text-sky-400 shrink-0" />
                <span>IA & Machine Learning</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs text-slate-300">
                <Database className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Ciência de Dados</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs text-slate-300">
                <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Sistemas Corporativos</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              {/* Ver Projetos */}
              <a
                href="#marketplace"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 hover:from-blue-500 hover:to-sky-400 text-white font-semibold text-sm shadow-xl shadow-blue-500/25 transition-all hover:scale-[1.02] active:scale-95"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Ver Marketplace de Projetos</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Solicitar Orçamento */}
              <button
                onClick={onOpenBudgetModal}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-sky-500/50 text-slate-200 font-semibold text-sm transition-all hover:scale-[1.02] active:scale-95 shadow-lg"
              >
                <Calculator className="w-4 h-4 text-sky-400" />
                <span>Solicitar Orçamento</span>
              </button>

              {/* Download CV */}
              <button
                onClick={triggerCvDownload}
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white font-medium text-xs transition-all"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Social Links Row */}
            <div className="pt-2 flex items-center gap-4 text-xs text-slate-400">
              <span className="font-mono uppercase text-[11px] text-slate-500">Conectar:</span>
              <a
                href="https://wa.me/5585989002536"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
              >
                <MessageSquareCode className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp (+55 85 98900-2536)</span>
              </a>
              <a
                href="https://www.linkedin.com/in/pedro-correia-lopes-filho-0654ba33/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/pedrocorreialopes"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4 text-slate-300" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Right Product Showcase / Interactive Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Glow backdrop */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600 to-sky-500 opacity-30 blur-2xl animate-pulse" />

              {/* Main Card */}
              <div className="relative rounded-2xl bg-[#0F172A]/90 border border-slate-800 p-6 shadow-2xl backdrop-blur-xl">
                {/* Header bar */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">pedro-software-hub.v2026</span>
                </div>

                {/* Developer Profile Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 via-sky-400 to-indigo-600 p-[2px] shadow-lg">
                    <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center font-bold text-2xl text-sky-400">
                      P
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">Pedro C. Lopes Filho</h3>
                    <p className="text-xs text-sky-400 font-medium">Análise Web & Ciência de Dados</p>
                    <div className="flex items-center gap-1 text-[11px] text-slate-400 mt-0.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Formado pela FATENE & UNINTER</span>
                    </div>
                  </div>
                </div>

                {/* Quick Interactive Mini Stats */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <span className="block text-2xl font-black text-white">120+</span>
                    <span className="text-[11px] text-slate-400">Softwares Prontos</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <span className="block text-2xl font-black text-sky-400">100%</span>
                    <span className="text-[11px] text-slate-400">Garantia & Suporte</span>
                  </div>
                </div>

                {/* Feature checklist */}
                <div className="space-y-2.5 mb-6 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Aplicações com design Glassmorphism e Dark Mode</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>IA integrada (Gemini 2.5, OpenAI, Claude)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Código testado, modular e pronto para produção</span>
                  </div>
                </div>

                {/* Interactive AI Chat Callout */}
                <button
                  onClick={onOpenAiDrawer}
                  className="w-full py-3 px-4 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 text-sky-300 font-semibold text-xs flex items-center justify-between transition-all group"
                >
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-sky-400 group-hover:rotate-12 transition-transform" />
                    <span>Dúvidas? Converse com a IA do Pedro</span>
                  </span>
                  <ArrowRight className="w-4 h-4 text-sky-400" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
