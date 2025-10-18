import { User, Role, Club, Specialty, EvidenceStatus, Interest } from '../types';

export const MOCK_USER: User = {
  id: 'user-001',
  name: 'Juan Conquistador',
  email: 'juan@example.com',
  role: Role.MEMBER,
  clubId: 'club-123',
  avatarUrl: 'https://i.pravatar.cc/100?u=juan-conquistador',
};

export const MOCK_CLUBS_LIST: Club[] = [
    { id: 'club-01', name: 'Georgia Gold', zone: 'Cumbres', logo: '🇬🇬', location: { city: 'Monterrey', state: 'NL', country: 'MX' } },
    { id: 'club-02', name: 'Green Thunder', zone: 'Cumbres', logo: '⚡️', location: { city: 'Monterrey', state: 'NL', country: 'MX' } },
    { id: 'club-03', name: 'Oakland Roots', zone: 'Centro', logo: '🌳', location: { city: 'San Nicolás', state: 'NL', country: 'MX' } },
    { id: 'club-04', name: 'Blue Sky', zone: 'Centro', logo: '☀️', location: { city: 'San Nicolás', state: 'NL', country: 'MX' } },
    { id: 'club-05', name: 'Washington', zone: 'Rodrigo', logo: '🦅', location: { city: 'Guadalupe', state: 'NL', country: 'MX' } },
    { id: 'club-06', name: 'Aspen Campers', zone: 'Rodrigo', logo: '🏔️', location: { city: 'Guadalupe', state: 'NL', country: 'MX' } },
    { id: 'club-07', name: 'Jahdai', zone: 'Zona', logo: '🙏', location: { city: 'Apodaca', state: 'NL', country: 'MX' } },
    { id: 'club-08', name: 'Tiny Forest', zone: 'Zona', logo: '🌲', location: { city: 'Apodaca', state: 'NL', country: 'MX' } },
];

export const MOCK_INTERESTS: Interest[] = [
  { id: 'travel', name: 'Viajes', icon: '✈️' },
  { id: 'food', name: 'Comida', icon: '🍲' },
  { id: 'adventures', name: 'Aventuras', icon: '🏞️' },
  { id: 'helping', name: 'Ayudar', icon: '🙏' },
  { id: 'nature', name: 'Naturaleza', icon: '🌿' },
  { id: 'animals', name: 'Animales', icon: '🐾' },
  { id: 'music', name: 'Música', icon: '🎵' },
  { id: 'arts', name: 'Artes', icon: '🎨' },
  { id: 'medicine', name: 'Medicina', icon: '🧠' },
  { id: 'fun', name: 'Diversión', icon: '🎮' },
  { id: 'sports', name: 'Deportes', icon: '🏀' },
  { id: 'drawing', name: 'Dibujar', icon: '✏️' },
];


export const MOCK_SPECIALTIES: Specialty[] = [
  {
    id: 'spec-01',
    title: 'Primeros Auxilios - Básico',
    icon: '⛑️',
    description: 'Aprende las habilidades fundamentales para responder a emergencias médicas comunes.',
    requirements: [
      {
        id: 'req-01-01',
        title: 'Entender el ABC de la reanimación',
        description: 'Explica qué significa cada letra en el ABC de la reanimación y demuestra la posición de recuperación. Sube un documento PDF con tu explicación y una foto tuya demostrando la posición.',
        evidence: { id: 'ev-01', description: '', status: EvidenceStatus.PENDING },
      },
      {
        id: 'req-01-02',
        title: 'Tratamiento de quemaduras',
        description: 'Describe los diferentes tipos de quemaduras y cómo tratar una quemadura de primer grado. Sube una foto de un botiquín de primeros auxilios que contenga elementos para tratar quemaduras.',
        evidence: { id: 'ev-02', description: '', status: EvidenceStatus.PENDING },
      },
      {
        id: 'req-01-03',
        title: 'Vendajes',
        description: 'Demuestra cómo aplicar un vendaje de cabestrillo para un brazo lesionado. Sube una foto de ti aplicando el vendaje a un compañero.',
        evidence: { id: 'ev-03', description: '', status: EvidenceStatus.PENDING },
      },
    ],
  },
  {
    id: 'spec-02',
    title: 'Nudos',
    icon: '🪢',
    description: 'Domina los nudos esenciales para acampar, escalar y situaciones de supervivencia.',
    requirements: [
      {
        id: 'req-02-01',
        title: 'As de Guía',
        description: 'Explica para qué se utiliza el nudo As de Guía y demuestra cómo hacerlo. Sube una foto clara del nudo que hiciste.',
        evidence: { id: 'ev-04', description: '', status: EvidenceStatus.PENDING },
      },
      {
        id: 'req-02-02',
        title: 'Nudo de Ballestrinque',
        description: 'Muestra dos formas de hacer el nudo de Ballestrinque. Sube una foto de cada método.',
        evidence: { id: 'ev-05', description: '', status: EvidenceStatus.PENDING },
      },
    ],
  },
   {
    id: 'spec-03',
    title: 'Arte de Acampar',
    icon: '🏕️',
    description: 'Aprende las técnicas y habilidades para disfrutar de la naturaleza de forma segura y cómoda.',
    requirements: [
      {
        id: 'req-03-01',
        title: 'Montar una carpa',
        description: 'Describe los pasos para montar una carpa de forma segura y eficiente. Sube una foto de una carpa que hayas montado.',
        evidence: { id: 'ev-06', description: '', status: EvidenceStatus.PENDING },
      },
       {
        id: 'req-03-02',
        title: 'Encender una fogata',
        description: 'Explica los principios de seguridad para encender una fogata y los diferentes tipos de fogatas. Sube una foto de una fogata que hayas construido (con supervisión de un adulto).',
        evidence: { id: 'ev-07', description: '', status: EvidenceStatus.PENDING },
      }
    ],
  },
];