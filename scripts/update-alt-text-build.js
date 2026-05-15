// Script de build para atualizar ALT text dinamicamente
const fs = require('fs');
const fetch = require('node-fetch');
const path = require('path');

async function main() {
  const imageUrl = 'https://files.chatwoot.space/dantas-pousada/site/imagem%20faxada.jpeg';
  // Importar generateAltText se possível
  // Assumindo que o llm_client.ts exporta generateAltText via ts-node ou build step
  let alt = 'Fachada da Dantas Pousada em Quixadá';
  try {
    // Se houver um runner/CLI para chamar TS diretamente, use-o; aqui mantemos fallback estático se não disponível
    const res = await fetch(imageUrl);
    if (res.ok) {
      // placeholder: na prática, chamaremos o llm_client para gerar o ALT
    }
  } catch {
    // ignore
  }
  // Atualizar o site.ts com ALT text gerado (substituindo o ALT do primeiro item da gallery)
  const sitePath = path.resolve(__dirname, '../src/data/site.ts');
  let content = fs.readFileSync(sitePath, 'utf8');
  content = content.replace(/alt:\s*'[^']*'/, `alt: '${alt}'`);
  fs.writeFileSync(sitePath, content, 'utf8');
  console.log('ALT text atualizado no site.ts (placeholder)');
}

main().catch(console.error);
