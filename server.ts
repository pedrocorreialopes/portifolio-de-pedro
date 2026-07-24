import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Pedro's system context for AI assistant
const PEDRO_CONTEXT = `
Você é o Assistente Virtual IA de Pedro Correia Lopes Filho.
Nome: Pedro Correia Lopes Filho
Título: Full Stack Software Developer
Especialidades: Desenvolvimento Web, Inteligência Artificial, Ciência de Dados, Sistemas Corporativos, Plataformas Educacionais, Automações e Experiências Digitais.
Formação Acadêmica:
1. FATENE (Faculdade de Tecnologia do Nordeste): Graduação Tecnológica em Análise de Sistemas Web (Concluído, Média 6.93, 128 Créditos).
2. UNINTER (Centro Universitário Internacional): Graduação Tecnológica em Ciência de Dados (Concluído em 2026, CR Excelente com notas 10.0 em Pré-Cálculo, Formação EAD, Banco de Dados, etc.).
Redes e Contatos:
- WhatsApp: +55 85 98900-2536 (https://wa.me/5585989002536)
- Email: pedro.correialopesfilho@gmail.com
- GitHub: https://github.com/pedrocorreialopes
- LinkedIn: https://www.linkedin.com/in/pedro-correia-lopes-filho-0654ba33/
- Instagram: https://instagram.com/correialopesfilho
- Facebook: https://facebook.com/pedro.correialopesfilho

Responda sempre em Português do Brasil com tom altamente profissional, simpático, focado em tecnologia de ponta e ajudando potenciais clientes, recrutadores e parceiros a entenderem a experiência, projetos e orçamentos do Pedro.
`;

// AI Assistant endpoint
app.post("/api/ai-assistant", async (req, res) => {
  try {
    const { prompt, history } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: "Prompt é obrigatório." });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      // Fallback response if GEMINI_API_KEY is not provided yet
      return res.json({
        response: "Olá! Sou o assistente virtual de Pedro Correia Lopes Filho. Pedro é um desenvolvedor Full Stack com sólida formação em Análise de Sistemas Web (FATENE) e Ciência de Dados (UNINTER). Como posso ajudar com orçamentos, projetos ou dúvidas sobre a carreira dele? (Nota: Chave Gemini em configuração)."
      });
    }

    const ai = new GoogleGenAI({ apiKey });

    const result = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        ...(history || []).map((msg: any) => ({
          role: msg.role === 'user' ? 'user' : 'model',
          parts: [{ text: msg.content }]
        })),
        { role: 'user', parts: [{ text: prompt }] }
      ],
      config: {
        systemInstruction: PEDRO_CONTEXT
      }
    });

    res.json({ response: result.text });
  } catch (error: any) {
    console.error("AI Assistant error:", error);
    res.status(500).json({
      response: "Olá! Pedro está disponível para projetos de Desenvolvimento Full Stack, IA e Ciência de Dados. Você pode entrar em contato diretamente pelo WhatsApp: +55 (85) 98900-2536."
    });
  }
});

async function startServer() {
  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
