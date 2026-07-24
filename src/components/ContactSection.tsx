import React, { useState } from 'react';
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  Send, 
  Linkedin, 
  Github, 
  Facebook, 
  Instagram, 
  MessageSquareCode,
  CheckCircle2
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const ContactSection: React.FC = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [assunto, setAssunto] = useState('Desenvolvimento de Software');
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({ particleCount: 90, spread: 70, origin: { y: 0.6 } });
    
    // Construct mailto link or format WhatsApp message
    const text = `*NOVA MENSAGEM DO PORTFÓLIO*\n\n` +
      `*Nome:* ${nome}\n` +
      `*Email:* ${email}\n` +
      `*Assunto:* ${assunto}\n` +
      `*Mensagem:* ${mensagem}`;

    window.open(`https://wa.me/5585989002536?text=${encodeURIComponent(text)}`, '_blank');
    setEnviado(true);
  };

  return (
    <section id="contato" className="py-20 relative z-10 bg-[#020617] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase tracking-widest">
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Fale com o Desenvolvedor</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Iniciar um Novo <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-sky-400 to-indigo-400">Projeto</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Entre em contato para solicitar orçamentos, esclarecer dúvidas técnicas ou agendar uma reunião de alinhamento.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Contact Details & Social Links */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-2xl bg-[#0F172A] border border-slate-800 space-y-6 shadow-xl">
              <h3 className="text-xl font-bold text-white">Canais de Atendimento Direto</h3>

              {/* WhatsApp */}
              <a
                href="https://wa.me/5585989002536"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 transition-all group"
              >
                <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 group-hover:scale-110 transition-transform">
                  <MessageSquareCode className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-slate-400 block">WhatsApp Direto</span>
                  <span className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                    +55 (85) 98900-2536
                  </span>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:pedro.correialopesfilho@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-sky-500/50 transition-all group"
              >
                <div className="p-3 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/30 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-slate-400 block">E-mail Profissional</span>
                  <span className="text-xs font-bold text-white group-hover:text-sky-300 transition-colors break-all">
                    pedro.correialopesfilho@gmail.com
                  </span>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800">
                <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/30">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-slate-400 block">Localização</span>
                  <span className="text-xs font-bold text-white">Fortaleza - Ceará • Brasil (Atendimento Global Remote)</span>
                </div>
              </div>

              {/* Social Networks List */}
              <div className="pt-4 border-t border-slate-800 space-y-3">
                <span className="text-xs font-mono uppercase text-slate-400 block">Redes Sociais Oficiais</span>
                <div className="flex flex-wrap gap-2">
                  <a
                    href="https://www.linkedin.com/in/pedro-correia-lopes-filho-0654ba33/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-blue-400 transition-all"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://github.com/pedrocorreialopes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 transition-all"
                    title="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://facebook.com/pedro.correialopesfilho"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-blue-500 transition-all"
                    title="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://instagram.com/correialopesfilho"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-pink-400 transition-all"
                    title="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Google Maps Preview */}
            <div className="rounded-2xl bg-[#0F172A] border border-slate-800 overflow-hidden shadow-xl aspect-video relative">
              <iframe
                title="Mapa Fortaleza Ceará"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254825.8677021115!2d-38.6122602755259!3d-3.790089858762744!2m3!1f0d393.7!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74c3f20d6f43f%3A0x868b446a804e8400!2sFortaleza%20-%20CE!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                className="w-full h-full border-0 filter grayscale opacity-70 hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-[#0F172A] border border-slate-800 shadow-2xl space-y-6">
              <h3 className="text-xl font-bold text-white">Formulário de Mensagem Direta</h3>

              {enviado && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Mensagem enviada com sucesso! Pedro retornará seu contato em breve.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono text-slate-300">Seu Nome *</label>
                    <input
                      type="text"
                      required
                      placeholder="Nome completo"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono text-slate-300">Seu E-mail *</label>
                    <input
                      type="email"
                      required
                      placeholder="seuemail@exemplo.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-500"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-slate-300">Assunto</label>
                  <select
                    value={assunto}
                    onChange={(e) => setAssunto(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-500"
                  >
                    <option value="Desenvolvimento de Software">Desenvolvimento de Software Customizado</option>
                    <option value="Consultoria em Inteligência Artificial">Consultoria em Inteligência Artificial & LLMs</option>
                    <option value="Ciência de Dados & Dashboards">Ciência de Dados & Dashboards</option>
                    <option value="Proposta Comercial / Parceria">Proposta Comercial / Parceria</option>
                    <option value="Outros Assuntos">Outros Assuntos</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-slate-300">Sua Mensagem *</label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Descreva suas necessidades ou dúvidas..."
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 text-white font-bold text-xs shadow-xl shadow-blue-500/25 flex items-center justify-center gap-2 transition-all active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Mensagem Instantânea</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
