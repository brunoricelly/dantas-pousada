import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { v4 as uuidv4 } from 'uuid';
import { getEnv } from './env';

const MEDIA_PREFIX = 'dantas-pousada';

function cleanBaseUrl(url: string) {
  return url.replace(/\/$/, '');
}

function cleanPath(path: string) {
  return path.replace(/^\/+/, '');
}

function getExtension(originalName: string, mimetype: string) {
  const byName = originalName.split('.').pop()?.replace(/[^a-z0-9]/gi, '').toLowerCase();
  if (byName) return byName;

  const byMime = mimetype.split('/').pop()?.replace(/[^a-z0-9]/gi, '').toLowerCase();
  return byMime || 'bin';
}

function requireEnv(key: Parameters<typeof getEnv>[0]) {
  const value = getEnv(key);
  if (!value) {
    throw new Error(`${key} não configurado.`);
  }
  return value;
}

function createR2Client() {
  const accessKeyId = requireEnv('R2_ACCESS_KEY_ID');
  const secretAccessKey = requireEnv('R2_SECRET_ACCESS_KEY');

  return new S3Client({
    region: getEnv('R2_REGION', 'auto'),
    endpoint: requireEnv('R2_ENDPOINT'),
    credentials: {
      accessKeyId,
      secretAccessKey,
    },
    forcePathStyle: true,
    // Cloudflare R2 is S3-compatible, but AWS SDK checksum headers can vary
    // between versions. Keeping them opt-in avoids deploy/upload regressions.
    requestChecksumCalculation: 'WHEN_REQUIRED',
    responseChecksumValidation: 'WHEN_REQUIRED',
  });
}

export function hasR2PublicUrl() {
  return Boolean(getEnv('R2_PUBLIC_URL'));
}

export function getR2PublicUrl(key: string) {
  const publicBaseUrl = getEnv('R2_PUBLIC_URL');
  if (!publicBaseUrl) return '';
  return `${cleanBaseUrl(publicBaseUrl)}/${cleanPath(key)}`;
}

export function getMediaUrl(localPath: string, r2Key?: string) {
  if (r2Key) {
    const r2Url = getR2PublicUrl(r2Key);
    if (r2Url) return r2Url;
  }
  return localPath;
}

export async function uploadImage(buffer: Buffer, mimetype: string, originalName: string) {
  const bucket = getEnv('R2_BUCKET');
  if (!bucket) throw new Error('R2_BUCKET não configurado.');

  const extension = getExtension(originalName, mimetype);
  const fileName = `${MEDIA_PREFIX}/uploads/${uuidv4()}.${extension}`;

  await createR2Client().send(new PutObjectCommand({
    Bucket: bucket,
    Key: fileName,
    Body: buffer,
    ContentType: mimetype || 'application/octet-stream',
  }));

  const publicUrl = getR2PublicUrl(fileName);
  if (!publicUrl) throw new Error('R2_PUBLIC_URL não configurado.');

  return publicUrl;
}
