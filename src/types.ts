export interface Project {
  id: string;
  titulo: string;
  categoria: string;
  descricao: string;
  imagem: string;
  demo: string;
  github: string;
  case: string;
  tecnologias: string[];
  tempo: string;
  status: string;
  problema: string;
  solucao: string;
  arquitetura: string;
  destaque: boolean;
}

export interface Category {
  id: string;
  nome: string;
  icone: string;
}

export interface SkillTech {
  nome: string;
  nivel: number;
  icone: string;
  experiencia: string;
  destaque: boolean;
}

export interface SkillGroup {
  categoria: string;
  descricao: string;
  tecnologias: SkillTech[];
}

export interface TimelineItem {
  ano: string;
  titulo: string;
  instituicao: string;
  descricao: string;
  destaques: string[];
  tipo: 'academico' | 'profissional';
}

export interface Testimonial {
  id: string;
  nome: string;
  cargo: string;
  empresa: string;
  foto: string;
  avaliacao: number;
  depoimento: string;
}

export interface BlogPost {
  id: string;
  titulo: string;
  resumo: string;
  categoria: string;
  data: string;
  tempoLeitura: string;
  imagem: string;
  tags: string[];
  conteudo: string;
}

export interface StatItem {
  id: string;
  rotulo: string;
  valor: number;
  sufixo: string;
  icone: string;
  descricao: string;
}

export interface FAQItem {
  pergunta: string;
  resposta: string;
}

export interface FilterOptions {
  categoria: string;
  busca: string;
  status: string;
  somenteDestaques: boolean;
}
