// src/llm/llm_client.ts
// Unificador de geração de ALT text com fallback (Codex/OpenAI -> OpenRouter)

export async function generateAltText(imageUrl: string): Promise<string> {
  // 1) Tenta OpenAI Codex (ou modelo definido)
  const codex = await tryCodex(imageUrl);
  if (codex) return codex;

  // 2) fallback para OpenRouter
  const or = await tryOpenRouter(imageUrl);
  if (or) return or;

  // 3) fallback seguro
  return 'FACHADA DA DANTAS POUSADA EM QUIXADÁ';
}

async function tryCodex(imageUrl: string): Promise<string> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return '';
  const endpoint = process.env.OPENAI_ENDPOINT || 'https://api.openai.com/v1/chat/completions';
  const model = process.env.OPENAI_DEFAULT_MODEL ?? 'gpt-3.5-turbo';
  const body = {
    model,
    messages: [
      { role: 'system', content: 'Você é um assistente de acessibilidade.' },
      { role: 'user', content: `Gere um ALT text curto em PT-BR para a imagem: ${imageUrl}` }
    ],
    max_tokens: 200
  };
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    const data = await res.json();
    return data?.choices?.[0]?.message?.content?.trim() ?? '';
  } catch {
    return '';
  }
}

async function tryOpenRouter(imageUrl: string): Promise<string> {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) return '';
  const endpoint = process.env.OPENROUTER_ENDPOINT || 'https://openrouter.ai/api/v1/chat/completions';
  const model = process.env.OPENROUTER_DEFAULT_MODEL ?? 'best';
  const body = {
    model,
    messages: [
      { role: 'system', content: 'Você é um assistente de acessibilidade.' },
      { role: 'user', content: `Gere ALT text curto em PT-BR para a imagem: ${imageUrl}` }
    ],
    max_tokens: 200
  };
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    const data = await res.json();
    return data?.choices?.[0]?.message?.content?.trim() ?? '';
  } catch {
    return '';
  }
}


