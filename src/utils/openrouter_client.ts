// Wrapper OpenRouter client
export async function callOpenRouter(imageUrl: string, model?: string): Promise<string> {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) return '';
  const endpoint = process.env.OPENROUTER_ENDPOINT || 'https://openrouter.ai/api/v1/chat/completions';
  const body = {
    model: model ?? 'best',
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
