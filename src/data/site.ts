import { getMediaUrl } from '@/utils/r2';

export const site = {
  name: 'Dantas Pousada',
  shortName: 'Dantas Pousada',
  slogan: 'Conforto no centro de Quixadá',
  domain: 'https://dantaspousada.chatwoot.space',
  description:
    'Dantas Pousada em Quixadá-CE: hospedagem prática e acolhedora no centro da cidade, com conforto, localização estratégica e atendimento rápido.',
  phone: '+55 88 3412-0119',
  whatsapp: '+55 88 99841-0033',
  whatsappLink: 'https://wa.me/5588998410033',
  email: 'contato@dantaspousada.com.br',
  address: 'Rua Francisco Enéas de Lima, 1891A - Centro, Quixadá - CE, 63900-231',
  mapUrl:
    'https://www.google.com/maps/search/?api=1&query=Dantas+Pousada+Rua+Francisco+Eneas+de+Lima+1891A+Centro+Quixada+CE',
  instagram: 'https://www.instagram.com/dantaspousada/',
  googleTravel: 'https://www.google.com.br/travel/hotels/entity/CgsIq4y-s9uw5drnARAB',
  rating: '5.0',
  reviews: '5 avaliações',
};

export const navigation = [
  { label: 'Início', href: '/' },
  { label: 'A pousada', href: '/sobre' },
  { label: 'Acomodações', href: '/acomodacoes' },
  { label: 'Galeria', href: '/galeria' },
  { label: 'Tour 360°', href: '/#tour-360' },
  { label: 'Contato', href: '/contato' },
];

const localMediaPath = '/media/dantas-pousada';
const r2MediaPrefix = 'dantas-pousada/site';
const catalogoMediaPrefix = 'catalogo';


export const featuredVideo = {
  src: getMediaUrl(
    `${localMediaPath}/dantas-pousada-video-alta-resolucao.mp4`,
    `${catalogoMediaPrefix}/Adobe Express - video completo alta resolucao.mp4`
  ),
  poster: getMediaUrl(`${localMediaPath}/dantas-pousada-capa.jpg`, `${r2MediaPrefix}/dantas-pousada-capa.jpg`),
  label: 'Vídeo em alta resolução',
  title: 'Dantas Pousada em movimento',
  description: 'Um destaque visual em alta resolução para apresentar a experiência, os ambientes e a energia da pousada antes da reserva.',
} as const;

export const gallery = [
  {
    type: 'image',
    src: getMediaUrl(`${localMediaPath}/dantas-pousada-capa.jpg`, `${r2MediaPrefix}/dantas-pousada-capa.jpg`),
    alt: 'Entrada e ambientes da Dantas Pousada em Quixadá',
    label: 'Capa atual',
  },
  {
    type: 'image',
    src: getMediaUrl(`${localMediaPath}/dantas-pousada-galeria-01.jpg`, `${r2MediaPrefix}/dantas-pousada-galeria-01.jpg`),
    alt: 'Foto real dos ambientes da Dantas Pousada',
    label: 'Ambientes reais',
  },
  {
    type: 'image',
    src: getMediaUrl(`${localMediaPath}/dantas-pousada-galeria-02.jpg`, `${r2MediaPrefix}/dantas-pousada-galeria-02.jpg`),
    alt: 'Estrutura interna da Dantas Pousada',
    label: 'Estrutura da pousada',
  },
  {
    type: 'image',
    src: getMediaUrl(`${localMediaPath}/dantas-pousada-galeria-03.jpg`, `${r2MediaPrefix}/dantas-pousada-galeria-03.jpg`),
    alt: 'Acomodação da Dantas Pousada em Quixadá',
    label: 'Acomodações',
  },
  {
    type: 'image',
    src: getMediaUrl(`${localMediaPath}/dantas-pousada-galeria-04.jpg`, `${r2MediaPrefix}/dantas-pousada-galeria-04.jpg`),
    alt: 'Quarto funcional para hospedagem na Dantas Pousada',
    label: 'Quartos funcionais',
  },
  {
    type: 'image',
    src: getMediaUrl(`${localMediaPath}/dantas-pousada-galeria-05.jpg`, `${r2MediaPrefix}/dantas-pousada-galeria-05.jpg`),
    alt: 'Área de hospedagem da Dantas Pousada',
    label: 'Hospedagem prática',
  },
] as const;

export const panoramas360 = [
  {
    type: 'panorama',
    src: getMediaUrl(`${localMediaPath}/dantas-pousada-360-01.jpg`, `${r2MediaPrefix}/dantas-pousada-360-01.jpg`),
    alt: 'Vista 360° dos quartos da Dantas Pousada',
    label: 'Vista 360° dos quartos',
  },
  {
    type: 'panorama',
    src: getMediaUrl(`${localMediaPath}/dantas-pousada-360-02.jpg`, `${r2MediaPrefix}/dantas-pousada-360-02.jpg`),
    alt: 'Panorâmica interna da Dantas Pousada',
    label: 'Panorâmica interna',
  },
  {
    type: 'panorama',
    src: getMediaUrl(`${localMediaPath}/dantas-pousada-360-03.jpg`, `${r2MediaPrefix}/dantas-pousada-360-03.jpg`),
    alt: 'Panorâmica da acomodação da Dantas Pousada',
    label: 'Panorâmica da acomodação',
  }
] as const;

export const instagramPosts = [
  'https://www.instagram.com/p/DGVVUpfu54x/',
  'https://www.instagram.com/reel/DIB6tkQOxJZ/',
  'https://www.instagram.com/p/DC1EUH3OwSb/',
  'https://www.instagram.com/reel/DDHzxpSOfmV/',
] as const;

export const highlights = [
  'Localização no Centro de Quixadá',
  'Atendimento direto pelo WhatsApp',
  'Hospedagem prática para descanso, trabalho e turismo',
  'Próxima a comércios, serviços e pontos de apoio da cidade',
] as const;
