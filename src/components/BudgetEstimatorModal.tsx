import React, { useState } from 'react';
import { X, Calculator, Send, CheckCircle2, Sparkles, MessageSquareCode, DollarSign } from 'lucide-react';
import confetti from 'canvas-confetti';

interface BudgetEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProjectTitle?: string;
}

export const BudgetEstimatorModal: React.FC<BudgetEstimatorModalProps> = ({
  isOpen,
  onClose,
  preselectedProjectTitle,
}) => {
  const [projectType, setProjectType] = useState<string>(preselectedProjectTitle || 'Plataforma Web Customizada');
  const [timeline, setTimeline] = useState<string>('Normal (2-4 semanas)');
  const [features, setFeatures] = useState<string[]>([
    'Design Responsive Glassmorphism',
    'Painel Administrativo'
  ]);
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [additionalNotes, setAdditionalNotes] = useState<string>('');

  if (!isOpen) return null;

  const toggleFeature = (feat: string) => {
    if (features.includes(feat)) {
      setFeatures(features.filter((f) => f !== feat));
    } else {
      setFeatures([...features, feat]);
    }
  };

  const handleSendProposal = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });

    const text = `*SOLICITAÇÃO DE ORÇAMENTO DE SOFTWARE (PORTFÓLIO 2026)*\n\n` +
      `*Nome do Cliente:* ${clientName || 'Não informado'}\n` +
      `*Contato:* ${clientPhone || 'Não informado'}\n` +
      `*Tipo de Software:* ${projectType}\n` +
      `*Urgência / Prazo:* ${timeline}\n` +
      `*Recursos Selecionados:*\n${features.map(f => ` • ${f}`).join('\n')}\n\n` +
      `*Observações:* ${additionalNotes || 'Nenhuma'}\n\n` +
      `Enviado via Portfólio Pedro Correia Lopes Filho.`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/5585989002536?text=${encodedText}`, '_blank');
    onClose();
  };

  const availableFeatures = [
    'Design Responsive Glassmorphism',
    'Painel Administrativo CMS',
    'Agente de Inteligência Artificial (Gemini/OpenAI)',
    'Integração de Pagamentos / E-Commerce',
    'Modelagem de Banco de Dados Relacional/NoSQL',
    'Autenticação Segura & Permissões',
    'Relatórios & Dashboards Estatísticos',
    'Envio de Notificações WhatsApp / Email'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#0F172A] border border-slate-800 rounded-2xl shadow-2xl p-6 space-y-6 my-8 max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Calculadora de Orçamento de Software</h3>
              <p className="text-xs text-slate-400">Monte a especificação técnica do seu projeto</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSendProposal} className="space-y-6">
          
          {/* Project Type */}
          <div className="space-y-2">
            <label className="text-xs font-mono uppercase text-slate-300">Tipo de Projeto / Solução</label>
            <select
              value={projectType}
              onChange={(e) => setProjectType(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-500"
            >
              <option value="Plataforma Web Customizada">Plataforma Web Customizada / SaaS</option>
              <option value="Plataforma Educacional EAD">Plataforma Educacional EAD / LMS</option>
              <option value="E-Commerce / Loja Virtual">E-Commerce / Loja Virtual Pegue e Monte</option>
              <option value="Sistema de Finanças / Simulador">Sistema de Finanças / Simulador Imobiliário</option>
              <option value="Dashboard de Dados & IA">Dashboard de Ciência de Dados & IA</option>
              <option value="Automações / Script Corporativo">Automações & Scripts Corporativos</option>
              <option value="Website Institucional / Landing Page">Website Institucional / Landing Page Premium</option>
            </select>
          </div>

          {/* Features Checklist */}
          <div className="space-y-2">
            <label className="text-xs font-mono uppercase text-slate-300">Recursos Módulos Desejados</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {availableFeatures.map((feat) => {
                const isSelected = features.includes(feat);
                return (
                  <button
                    type="button"
                    key={feat}
                    onClick={() => toggleFeature(feat)}
                    className={`p-3 rounded-xl border text-left text-xs font-medium transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-sky-500/10 border-sky-500/50 text-sky-300'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <span className="line-clamp-1">{feat}</span>
                    {isSelected && <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 ml-2" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Contact Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[11px] font-mono text-slate-300">Seu Nome / Empresa</label>
              <input
                type="text"
                placeholder="Ex: Carlos Silva"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-500"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[11px] font-mono text-slate-300">WhatsApp para Resposta</label>
              <input
                type="text"
                placeholder="Ex: (85) 99999-9999"
                value={clientPhone}
                onChange={(e) => setClientPhone(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-500"
              />
            </div>
          </div>

          {/* Notes */}
          <div className="space-y-1">
            <label className="text-[11px] font-mono text-slate-300">Detalhes Adicionais do Escopo</label>
            <textarea
              rows={3}
              placeholder="Descreva resumidamente o objetivo do software..."
              value={additionalNotes}
              onChange={(e) => setAdditionalNotes(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-sm shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-2 transition-all active:scale-98"
          >
            <MessageSquareCode className="w-5 h-5" />
            <span>Enviar Especificação via WhatsApp (+55 85 98900-2536)</span>
          </button>
        </form>

      </div>
    </div>
  );
};
