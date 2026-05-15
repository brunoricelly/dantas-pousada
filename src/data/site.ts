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
  { label: 'Contato', href: '/contato' },
];

const localMediaPath = '/media/dantas-pousada';
const r2MediaPrefix = 'dantas-pousada/site';

export const gallery = [
  {
    type: 'image',
    src: getMediaUrl(`${localMediaPath}/dantas-pousada-capa.jpg`, `${r2MediaPrefix}/dantas-pousada-capa.jpg`),
    alt: 'Foto atualizada dos ambientes da Dantas Pousada em Quixadá',
    label: 'Ambiente atualizado',
  },
  {
    type: 'image',
    src: getMediaUrl(`${localMediaPath}/dantas-pousada-galeria-01.jpg`, `${r2MediaPrefix}/dantas-pousada-galeria-01.jpg`),
    alt: 'Quarto e acomodação da Dantas Pousada',
    label: 'Acomodações reais',
  },
  {
    type: 'image',
    src: getMediaUrl(`${localMediaPath}/dantas-pousada-galeria-02.jpg`, `${r2MediaPrefix}/dantas-pousada-galeria-02.jpg`),
    alt: 'Estrutura interna da Dantas Pousada para hóspedes',
    label: 'Estrutura da pousada',
  },
  {
    type: 'image',
    src: getMediaUrl(`${localMediaPath}/dantas-pousada-galeria-03.jpg`, `${r2MediaPrefix}/dantas-pousada-galeria-03.jpg`),
    alt: 'Ambiente de hospedagem da Dantas Pousada',
    label: 'Hospedagem prática',
  },
  {
    type: 'image',
    src: getMediaUrl(`${localMediaPath}/dantas-pousada-galeria-04.jpg`, `${r2MediaPrefix}/dantas-pousada-galeria-04.jpg`),
    alt: 'Detalhes da acomodação da Dantas Pousada',
    label: 'Detalhes da estadia',
  },
  {
    type: 'image',
    src: getMediaUrl(`${localMediaPath}/dantas-pousada-galeria-05.jpg`, `${r2MediaPrefix}/dantas-pousada-galeria-05.jpg`),
    alt: 'Área interna da Dantas Pousada',
    label: 'Conforto e simplicidade',
  },
  {
    type: 'image',
    src: getMediaUrl(`${localMediaPath}/dantas-pousada-galeria-06.jpg`, `${r2MediaPrefix}/dantas-pousada-galeria-06.jpg`),
    alt: 'Foto real da Dantas Pousada em Quixadá',
    label: 'Fotos recentes',
  },
  {
    type: 'image',
    src: getMediaUrl(`${localMediaPath}/dantas-pousada-galeria-07.jpg`, `${r2MediaPrefix}/dantas-pousada-galeria-07.jpg`),
    alt: 'Ambiente funcional da Dantas Pousada',
    label: 'Para descansar bem',
  },
  {
    type: 'image',
    src: getMediaUrl(`${localMediaPath}/dantas-pousada-quarto-1.jpg`, `${r2MediaPrefix}/dantas-pousada-quarto-1.jpg`),
    alt: 'Quarto da Dantas Pousada com cama e estrutura funcional',
    label: 'Quartos funcionais',
  },
  {
    type: 'image',
    src: getMediaUrl(`${localMediaPath}/dantas-pousada-fachada.jpg`, `${r2MediaPrefix}/dantas-pousada-fachada.jpg`),
    alt: 'Fachada e entrada da Dantas Pousada em Quixadá',
    label: 'Chegada no centro',
  },
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
