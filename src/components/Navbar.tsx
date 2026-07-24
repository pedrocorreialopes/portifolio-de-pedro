import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  User, 
  Cpu, 
  Sparkles, 
  BarChart2, 
  MessageSquare, 
  Menu, 
  X, 
  Volume2, 
  VolumeX, 
  Bot, 
  Calculator,
  ExternalLink,
  PhoneCall
} from 'lucide-react';

interface NavbarProps {
  onOpenBudgetModal: () => void;
  onOpenAiDrawer: () => void;
  soundEnabled: boolean;
  setSoundEnabled: (val: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBudgetModal,
  onOpenAiDrawer,
  soundEnabled,
  setSoundEnabled,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home', icon: Sparkles },
    { name: 'Marketplace', href: '#marketplace', icon: ShoppingBag },
    { name: 'Sobre', href: '#sobre', icon: User },
    { name: 'Stack', href: '#stack', icon: Cpu },
    { name: 'Métricas', href: '#estatisticas', icon: BarChart2 },
    { name: 'Depoimentos', href: '#depoimentos', icon: MessageSquare },
    { name: 'Contato', href: '#contato', icon: PhoneCall },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#020617]/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-3 group cursor-pointer">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-sky-500 to-indigo-600 p-[1px] shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-[#0F172A] rounded-[11px] flex items-center justify-center font-bold text-sky-400 text-lg">
              PL
            </div>
            <span className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-[#020617]"></span>
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-slate-100 text-base leading-tight tracking-tight group-hover:text-sky-400 transition-colors">
              Pedro Correia
            </span>
            <span className="text-[10px] font-mono text-sky-400 tracking-wider uppercase">
              Full Stack • AI • Data
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#0F172A]/80 backdrop-blur-md border border-slate-800/80 rounded-full px-4 py-1.5 shadow-inner">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 transition-all duration-200"
              >
                <Icon className="w-3.5 h-3.5 text-sky-400" />
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-2.5">
          {/* Sound Toggle */}
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            title={soundEnabled ? 'Efeitos sonoros ativos' : 'Ativar efeitos sonoros'}
            className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-sky-400 hover:border-sky-500/50 transition-all"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-sky-400" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* AI Assistant Button */}
          <button
            onClick={onOpenAiDrawer}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-sky-500/30 text-sky-300 text-xs font-medium shadow-md transition-all group"
          >
            <Bot className="w-4 h-4 text-sky-400 group-hover:rotate-12 transition-transform" />
            <span className="hidden xl:inline">Pergunte à IA</span>
          </button>

          {/* Budget Estimator Modal Button */}
          <button
            onClick={onOpenBudgetModal}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 text-white text-xs font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all active:scale-95"
          >
            <Calculator className="w-4 h-4" />
            <span>Solicitar Orçamento</span>
          </button>

          {/* WhatsApp Direct */}
          <a
            href="https://wa.me/5585989002536"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-600 hover:text-white transition-all"
            title="WhatsApp Direto: +55 85 98900-2536"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onOpenAiDrawer}
            className="p-2 rounded-xl bg-slate-900 border border-sky-500/30 text-sky-400"
          >
            <Bot className="w-5 h-5" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-200"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0F172A]/95 backdrop-blur-xl border-b border-slate-800 px-6 py-6 transition-all">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-slate-800 hover:text-sky-400"
                >
                  <Icon className="w-4 h-4 text-sky-400" />
                  {link.name}
                </a>
              );
            })}
            <div className="pt-4 border-t border-slate-800 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBudgetModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 text-white font-semibold text-sm shadow-lg shadow-blue-500/30"
              >
                <Calculator className="w-4 h-4" />
                <span>Solicitar Orçamento</span>
              </button>
              <a
                href="https://wa.me/5585989002536"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 font-semibold text-sm"
              >
                <span>Falar no WhatsApp (+55 85 98900-2536)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
