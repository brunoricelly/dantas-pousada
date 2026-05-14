# Dantas Pousada Quixadá

Site moderno da Dantas Pousada, hospedagem prática e acolhedora no Centro de Quixadá-CE.

## Stack

- Astro + Node adapter
- Tailwind CSS
- Deploy via Docker/Coolify
- Cloudflare R2 para assets públicos e futuras mídias

## Scripts

```bash
npm install
npm run build
npm run dev
```

## Deploy

- Domínio previsto: https://dantaspousada.chatwoot.space
- Branch: `main`
- Plataforma: Coolify

## Cloudflare R2

O projeto mantém compatibilidade com o padrão S3/R2 usado nos outros sites.

Variáveis esperadas no Coolify:

- `R2_REGION=auto`
- `R2_ENDPOINT`
- `R2_BUCKET`
- `R2_PUBLIC_URL`
- `R2_ACCESS_KEY_ID`
- `R2_SECRET_ACCESS_KEY`

As imagens principais usam `getMediaUrl(localPath, r2Key)`:

- se `R2_PUBLIC_URL` estiver configurado, o site renderiza URLs públicas do R2 usando o prefixo `dantas-pousada/site/`;
- se não estiver configurado, usa o fallback versionado em `public/media/dantas-pousada/`.

Isso permite publicar agora com imagens locais e migrar/subir mídia para o R2 sem quebrar a página.

Nunca commitar credenciais reais. Use `.env.example` apenas como modelo.
