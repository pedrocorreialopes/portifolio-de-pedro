import React, { useState } from 'react';
import blogData from '../data/blog.json';
import { BlogPost } from '../types';
import { BookOpen, Search, Clock, ArrowRight, Tag, X } from 'lucide-react';

export const BlogSection: React.FC = () => {
  const posts = blogData as BlogPost[];
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = posts.filter(
    (p) =>
      p.titulo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.resumo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.categoria.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="blog" className="py-20 relative z-10 bg-[#020617] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono uppercase tracking-widest">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Artigos & Conhecimento Técnico</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Blog de <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-sky-400">Engenharia & IA</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Publicações sobre arquitetura de software, tendências de IA generativa, boas práticas em Full Stack e engenharia de dados.
          </p>
        </div>

        {/* Search Input */}
        <div className="max-w-md mx-auto mb-10 relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Pesquisar artigos do blog..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0F172A] border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-sky-500"
          />
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="group rounded-2xl bg-[#0F172A] border border-slate-800 hover:border-sky-500/50 shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between"
            >
              <div className="aspect-video overflow-hidden bg-slate-900 relative">
                <img
                  src={post.imagem}
                  alt={post.titulo}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md text-[10px] font-mono text-sky-300 border border-slate-700">
                  {post.categoria}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-[11px] text-slate-400 font-mono">
                    <span>{post.data}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-sky-400" />
                      {post.tempoLeitura}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors line-clamp-2">
                    {post.titulo}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {post.resumo}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-800 text-xs font-semibold text-sky-400">
                  <span>Ler Artigo Completo</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Full Article Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-[#0F172A] border border-slate-800 rounded-2xl p-6 space-y-6 max-h-[85vh] overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-mono text-sky-400">{selectedPost.categoria}</span>
              <button
                onClick={() => setSelectedPost(null)}
                className="p-1 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-white">{selectedPost.titulo}</h2>
              <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                <span>{selectedPost.data}</span>
                <span>•</span>
                <span>Tempo de leitura: {selectedPost.tempoLeitura}</span>
              </div>
            </div>

            <img
              src={selectedPost.imagem}
              alt={selectedPost.titulo}
              className="w-full h-56 object-cover rounded-xl border border-slate-800"
            />

            <div className="text-sm text-slate-300 leading-relaxed space-y-4">
              <p>{selectedPost.conteudo}</p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800">
              {selectedPost.tags.map((tag) => (
                <span key={tag} className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs text-sky-300 font-mono">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
