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
  poster: getMediaUrl(`${localMediaPath}/dantas-pousada-capa.jpg`, `${catalogoMediaPrefix}/e783280c-06d0-41fb-9727-113710a46bbd.jpg`),
  label: 'Vídeo em alta resolução',
  title: 'Dantas Pousada em movimento',
  description: 'Um destaque visual em alta resolução para apresentar a experiência, os ambientes e a energia da pousada antes da reserva.',
} as const;

export const gallery = [
  {
    type: 'image',
    src: getMediaUrl(`${localMediaPath}/dantas-pousada-capa.jpg`, `${catalogoMediaPrefix}/e783280c-06d0-41fb-9727-113710a46bbd.jpg`),
    alt: 'Entrada e ambientes da Dantas Pousada em Quixadá',
    label: 'Capa atual',
  },
  {
    type: 'image',
    src: getMediaUrl(`${localMediaPath}/dantas-pousada-galeria-01.jpg`, `${catalogoMediaPrefix}/0d877cea-301b-4ea4-903e-0f592db37acd.jpg`),
    alt: 'Foto real dos ambientes da Dantas Pousada',
    label: 'Ambientes reais',
  },
  {
    type: 'image',
    src: getMediaUrl(`${localMediaPath}/dantas-pousada-galeria-02.jpg`, `${catalogoMediaPrefix}/d074f714-12cd-4b47-a7ec-ba1ac99e08bc.jpg`),
    alt: 'Estrutura interna da Dantas Pousada',
    label: 'Estrutura da pousada',
  },
  {
    type: 'image',
    src: getMediaUrl(`${localMediaPath}/dantas-pousada-galeria-03.jpg`, `${catalogoMediaPrefix}/50b21eac-25ab-4855-9121-4723a3fcac53.jpg`),
    alt: 'Acomodação da Dantas Pousada em Quixadá',
    label: 'Acomodações',
  },
  {
    type: 'image',
    src: getMediaUrl(`${localMediaPath}/dantas-pousada-galeria-04.jpg`, `${catalogoMediaPrefix}/59b7c486-e6e1-4d26-ad08-a2a247f343fc.jpeg`),
    alt: 'Quarto funcional para hospedagem na Dantas Pousada',
    label: 'Quartos funcionais',
  },
  {
    type: 'image',
    src: getMediaUrl(`${localMediaPath}/dantas-pousada-galeria-05.jpg`, `${catalogoMediaPrefix}/ac8737ca-d848-49e4-adcc-a132bcf6593e.jpeg`),
    alt: 'Área de hospedagem da Dantas Pousada',
    label: 'Hospedagem prática',
  },
  {
    type: 'image',
    src: getMediaUrl(`${localMediaPath}/dantas-pousada-galeria-06.jpg`, `${catalogoMediaPrefix}/c30f01bc-44d1-409c-9b81-b48e1bc8533f.jpeg`),
    alt: 'Detalhe dos ambientes da Dantas Pousada',
    label: 'Detalhes da estadia',
  },
  {
    type: 'image',
    src: getMediaUrl(`${localMediaPath}/dantas-pousada-galeria-07.jpg`, `${catalogoMediaPrefix}/90ce36de-6626-4c7f-804b-43d3f24129d2.jpeg`),
    alt: 'Foto atual da Dantas Pousada em Quixadá',
    label: 'Fotos atuais',
  },
  {
    type: 'image',
    src: getMediaUrl(`${localMediaPath}/dantas-pousada-galeria-08.jpg`, `${catalogoMediaPrefix}/ff9a63fe-0726-474a-b44b-947ea1b3bc34.jpeg`),
    alt: 'Quarto da Dantas Pousada com estrutura funcional',
    label: 'Quarto',
  },
  {
    type: 'image',
    src: getMediaUrl(`${localMediaPath}/dantas-pousada-galeria-09.jpg`, `${catalogoMediaPrefix}/e5de9272-3f3e-4352-8c99-07e2c9f61c15.jpeg`),
    alt: 'Área interna da Dantas Pousada',
    label: 'Interior',
  },
  {
    type: 'image',
    src: getMediaUrl(`${localMediaPath}/dantas-pousada-galeria-10.jpg`, `${catalogoMediaPrefix}/be85d34f-506f-4792-9752-029c0227c2ad.jpeg`),
    alt: 'Fachada e área externa da Dantas Pousada',
    label: 'Área externa',
  },
  {
    type: 'image',
    src: getMediaUrl(`${localMediaPath}/dantas-pousada-galeria-11.jpg`, `${catalogoMediaPrefix}/cd221fb4-eca7-4b3d-91ce-2d680405f701.jpeg`),
    alt: 'Banheiro da Dantas Pousada',
    label: 'Banheiro',
  },
  {
    type: 'image',
    src: getMediaUrl(`${localMediaPath}/dantas-pousada-galeria-12.jpg`, `${catalogoMediaPrefix}/e1975cb1-efc3-4412-b524-fd667c8c10ac.jpeg`),
    alt: 'Banheiro e estrutura de apoio da Dantas Pousada',
    label: 'Estrutura de apoio',
  },
  {
    type: 'image',
    src: getMediaUrl(`${localMediaPath}/dantas-pousada-galeria-13.jpg`, `${catalogoMediaPrefix}/b1eec6e1-1151-44ec-a1e0-edabd2394c3c.jpeg`),
    alt: 'Ambiente de convivência da Dantas Pousada',
    label: 'Convivência',
  },
  {
    type: 'image',
    src: getMediaUrl(`${localMediaPath}/dantas-pousada-galeria-14.jpg`, `${catalogoMediaPrefix}/d1b2dec4-6b6f-481c-ac05-169bed3277c0.jpeg`),
    alt: 'Exterior da Dantas Pousada em Quixadá',
    label: 'Exterior',
  },
  {
    type: 'image',
    src: getMediaUrl(`${localMediaPath}/dantas-pousada-galeria-15.jpg`, `${catalogoMediaPrefix}/43dcfd16-6f08-4805-bc5f-72241f265ffb.jpeg`),
    alt: 'Detalhe externo da Dantas Pousada',
    label: 'Chegada',
  },
  {
    type: 'image',
    src: getMediaUrl(`${localMediaPath}/dantas-pousada-galeria-16.jpg`, `${catalogoMediaPrefix}/29c8a9ce-c0d1-4181-83b1-542f1c74f107.jpeg`),
    alt: 'Vista da área da Dantas Pousada',
    label: 'Vista da pousada',
  }
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
