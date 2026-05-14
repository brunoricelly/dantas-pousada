type EnvKey =
  | 'PUBLIC_SITE_URL'
  | 'SITE_URL'
  | 'R2_REGION'
  | 'R2_ENDPOINT'
  | 'R2_PUBLIC_URL'
  | 'R2_ACCESS_KEY_ID'
  | 'R2_SECRET_ACCESS_KEY'
  | 'R2_BUCKET';

function runtimeEnv(): Record<string, string | undefined> {
  // Eval keeps Vite/Astro from statically replacing process.env.KEY with an
  // empty build-time value. We need Docker runtime envs in production.
  try {
    return (globalThis as any).process?.env || (0, eval)('process.env') || {};
  } catch {
    return {};
  }
}

export function getEnv(key: EnvKey, fallback = '') {
  const runtimeValue = runtimeEnv()[key];
  const buildValue = (import.meta as any).env?.[key];
  const value = runtimeValue || buildValue || fallback;
  return typeof value === 'string' ? value.trim() : value;
}

export function isProduction() {
  const nodeEnv = runtimeEnv().NODE_ENV;
  return nodeEnv === 'production' || Boolean((import.meta as any).env?.PROD);
}
