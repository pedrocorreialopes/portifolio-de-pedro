import React, { useState, useMemo } from 'react';
import { Project, Category } from '../types';
import projectsData from '../data/projects.json';
import categoriesData from '../data/categories.json';
import { 
  Search, 
  LayoutGrid, 
  List, 
  ExternalLink, 
  Github, 
  Eye, 
  Sparkles, 
  Clock, 
  Filter, 
  CheckCircle2, 
  Tag, 
  SlidersHorizontal,
  FolderGit2
} from 'lucide-react';

interface MarketplaceSectionProps {
  onSelectProject: (proj: Project) => void;
  onOpenBudgetModalWithProject: (projectTitle: string) => void;
}

export const MarketplaceSection: React.FC<MarketplaceSectionProps> = ({
  onSelectProject,
  onOpenBudgetModalWithProject,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [layoutMode, setLayoutMode] = useState<'grid' | 'masonry' | 'list'>('grid');
  const [onlyFeatured, setOnlyFeatured] = useState<boolean>(false);

  const projects = projectsData as Project[];
  const categories = categoriesData as Category[];

  // Filter projects dynamically
  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      // Category match
      const matchesCategory =
        selectedCategory === 'todos' ||
        p.categoria.toLowerCase() === selectedCategory.toLowerCase();

      // Search match (title, description, tech stack, category)
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        !q ||
        p.titulo.toLowerCase().includes(q) ||
        p.descricao.toLowerCase().includes(q) ||
        p.categoria.toLowerCase().includes(q) ||
        p.tecnologias.some((t) => t.toLowerCase().includes(q));

      // Featured match
      const matchesFeatured = !onlyFeatured || p.destaque;

      return matchesCategory && matchesSearch && matchesFeatured;
    });
  }, [projects, selectedCategory, searchQuery, onlyFeatured]);

  return (
    <section id="marketplace" className="py-20 relative z-10 border-t border-slate-800/80 bg-[#020617]/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Software Marketplace • Produtos Prontos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Catálogo de <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-sky-400">Soluções Digitais</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Navegue por dezenas de softwares desenvolvidos com alto padrão estético e técnico. 
            Cada projeto está disponível para demonstração online, auditoria de código e licenciamento customizado.
          </p>
        </div>

        {/* Search & Filter Controls Bar */}
        <div className="p-4 rounded-2xl bg-[#0F172A] border border-slate-800 shadow-xl space-y-4 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Buscar por nome, tecnologia ou palavra-chave..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                >
                  Limpar
                </button>
              )}
            </div>

            {/* Middle Toggle & Counter */}
            <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
              <button
                onClick={() => setOnlyFeatured(!onlyFeatured)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all flex items-center gap-1.5 ${
                  onlyFeatured
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                    : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Somente Destaques</span>
              </button>

              <span className="text-xs font-mono text-slate-400">
                <strong className="text-sky-400 font-bold">{filteredProjects.length}</strong> softwares encontrados
              </span>

              {/* View Layout Switcher */}
              <div className="hidden sm:flex items-center gap-1 p-1 rounded-xl bg-slate-900 border border-slate-800">
                <button
                  onClick={() => setLayoutMode('grid')}
                  title="Modo Grade 3D"
                  className={`p-2 rounded-lg text-xs transition-all ${
                    layoutMode === 'grid' ? 'bg-sky-500/20 text-sky-400' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setLayoutMode('list')}
                  title="Modo Tabela Resumida"
                  className={`p-2 rounded-lg text-xs transition-all ${
                    layoutMode === 'list' ? 'bg-sky-500/20 text-sky-400' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

          {/* Category Filter Pills (Scrollable) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 scrollbar-thin scrollbar-thumb-slate-800">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 shrink-0 ${
                  selectedCategory.toLowerCase() === cat.id.toLowerCase()
                    ? 'bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-md shadow-blue-500/20 font-semibold'
                    : 'bg-slate-900/80 text-slate-300 border border-slate-800/80 hover:border-slate-700 hover:text-white'
                }`}
              >
                <span>{cat.nome}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Empty Search Result Fallback */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 p-8 rounded-2xl bg-[#0F172A]/50 border border-slate-800/80 space-y-3">
            <FolderGit2 className="w-12 h-12 text-slate-500 mx-auto" />
            <h3 className="text-lg font-bold text-white">Nenhum projeto encontrado</h3>
            <p className="text-xs text-slate-400 max-w-md mx-auto">
              Não encontramos projetos para os filtros selecionados. Tente limpar a busca ou navegar por outras categorias.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('todos');
                setSearchQuery('');
                setOnlyFeatured(false);
              }}
              className="px-4 py-2 rounded-xl bg-sky-500/20 border border-sky-500/40 text-sky-300 text-xs font-semibold hover:bg-sky-500/30 transition-all"
            >
              Resetar Filtros
            </button>
          </div>
        )}

        {/* Grid Mode View */}
        {layoutMode === 'grid' && filteredProjects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((p) => (
              <div
                key={p.id}
                className="group relative rounded-2xl bg-[#0F172A] border border-slate-800/90 hover:border-sky-500/50 shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden"
              >
                {/* Image Cover */}
                <div className="relative aspect-video overflow-hidden bg-slate-900">
                  <img
                    src={p.imagem}
                    alt={p.titulo}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-black/20 to-transparent" />
                  
                  {/* Category & Status Badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-slate-700/80 text-[10px] font-mono text-sky-300 font-medium">
                      {p.categoria}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded-full bg-emerald-950/80 backdrop-blur-md border border-emerald-500/50 text-[10px] font-mono text-emerald-400 font-semibold">
                      {p.status}
                    </span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-sky-400 transition-colors line-clamp-1">
                      {p.titulo}
                    </h3>
                    <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                      {p.descricao}
                    </p>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {p.tecnologias.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {p.tecnologias.length > 4 && (
                      <span className="px-1.5 py-0.5 rounded-md bg-slate-900 text-[10px] font-mono text-slate-400">
                        +{p.tecnologias.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Dev Time Footer */}
                  <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1 font-mono">
                      <Clock className="w-3.5 h-3.5 text-sky-400" />
                      {p.tempo}
                    </span>
                    <span className="text-slate-500 text-[10px]">JSON Configurado</span>
                  </div>
                </div>

                {/* Card Action Buttons Bar */}
                <div className="px-5 py-3.5 bg-[#020617]/80 border-t border-slate-800/80 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectProject(p)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-sky-300 font-medium text-xs transition-all"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Detalhes</span>
                  </button>

                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 text-white font-semibold text-xs transition-all shadow-md shadow-blue-500/20"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Demo</span>
                  </a>

                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-all"
                    title="Repositório GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* List Table View */}
        {layoutMode === 'list' && filteredProjects.length > 0 && (
          <div className="rounded-2xl bg-[#0F172A] border border-slate-800 overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#020617] text-slate-400 uppercase font-mono border-b border-slate-800">
                  <tr>
                    <th className="p-4">Software</th>
                    <th className="p-4">Categoria</th>
                    <th className="p-4">Tecnologias</th>
                    <th className="p-4">Tempo</th>
                    <th className="p-4">Status</th>
                    <th className="p-4 text-right">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80 text-slate-300">
                  {filteredProjects.map((p) => (
                    <tr key={p.id} className="hover:bg-slate-900/80 transition-colors">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={p.imagem}
                            alt={p.titulo}
                            className="w-10 h-10 rounded-lg object-cover shrink-0"
                          />
                          <div>
                            <span className="font-bold text-white block line-clamp-1">{p.titulo}</span>
                            <span className="text-[11px] text-slate-400 line-clamp-1">{p.descricao}</span>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 whitespace-nowrap text-sky-400 font-medium">{p.categoria}</td>
                      <td className="p-4">
                        <div className="flex flex-wrap gap-1">
                          {p.tecnologias.map((t) => (
                            <span key={t} className="px-1.5 py-0.5 rounded bg-slate-900 text-[10px] text-slate-300 border border-slate-800">
                              {t}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="p-4 whitespace-nowrap font-mono">{p.tempo}</td>
                      <td className="p-4 whitespace-nowrap">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-950 text-emerald-400 border border-emerald-500/30">
                          {p.status}
                        </span>
                      </td>
                      <td className="p-4 whitespace-nowrap text-right space-x-2">
                        <button
                          onClick={() => onSelectProject(p)}
                          className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-sky-300 text-xs font-semibold"
                        >
                          Detalhes
                        </button>
                        <a
                          href={p.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold inline-flex items-center gap-1"
                        >
                          <span>Demo</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
