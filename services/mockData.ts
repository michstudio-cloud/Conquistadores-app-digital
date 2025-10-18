import { Specialty, Requirement, Evidence, EvidenceStatus, Interest, Club, User } from '../types.ts';

export const MOCK_INTERESTS: Interest[] = [
  { id: '1', name: 'Camping', icon: '🏕️' },
  { id: '2', name: 'Hiking', icon: '🚶' },
  { id: '3', name: 'First Aid', icon: '⚕️' },
  { id: '4', name: 'Knots', icon: '🪢' },
  { id: '5', name: 'Cooking', icon: '🍳' },
  { id: '6', name: 'Stars', icon: '✨' },
];

export const MOCK_CLUBS_LIST: Club[] = [
    { id: 'c1', name: 'Maranatha', logo: '🦅', zone: 'Norte' },
    { id: 'c2', name: 'Emanuel', logo: '🦁', zone: 'Norte' },
    { id: 'c3', name: 'Gedeón', logo: '🛡️', zone: 'Centro' },
    { id: 'c4', name: 'Sión', logo: '🏔️', zone: 'Centro' },
    { id: 'c5', name: 'Betel', logo: '⛪', zone: 'Sur' },
    { id: 'c6', name: 'Orión', logo: '🔭', zone: 'Sur' },
];

const createPendingRequirement = (id: string, title: string, description: string): Requirement => ({
  id,
  title,
  description,
  evidence: {
    id: `e-${id}`,
    description: '',
    status: EvidenceStatus.PENDING,
  }
});

export const MOCK_SPECIALTIES: Specialty[] = [
  {
    id: 's1',
    title: 'Nudos',
    description: 'Aprende los nudos esenciales para acampar y situaciones de supervivencia.',
    icon: '🪢',
    requirements: [
        createPendingRequirement('r1-1', 'Nudo As de Guía', 'Aprende y demuestra cómo hacer el nudo As de Guía correctamente. Debe ser firme y no deslizarse.'),
        createPendingRequirement('r1-2', 'Nudo de Ballestrinque', 'Demuestra el uso correcto del nudo de ballestrinque para amarrar una cuerda a un poste.'),
        createPendingRequirement('r1-3', 'Nudo de Pescador', 'Utiliza el nudo de pescador para unir dos cuerdas de grosor similar.'),
    ],
  },
  {
    id: 's2',
    title: 'Supervivencia en el Bosque',
    description: 'Desarrolla habilidades para sobrevivir en un entorno boscoso con recursos limitados.',
    icon: '🌲',
    requirements: [
      {
        id: 'r2-1',
        title: 'Construir un Refugio',
        description: 'Usando materiales naturales, construye un refugio de emergencia que pueda protegerte de la lluvia y el viento.',
        evidence: {
          id: 'e2-1',
          description: 'He construido un refugio con materiales naturales.',
          file: { name: 'refugio.jpg', base64: '', type: 'image/jpeg' },
          status: EvidenceStatus.SUBMITTED,
          submittedAt: new Date('2023-10-26T10:00:00Z'),
          aiFeedback: '¡Buen trabajo en el refugio! Se ve bastante sólido. Para la próxima, intenta hacerlo un poco más impermeable. ¡Sigue así!'
        },
      },
      {
        id: 'r2-2',
        title: 'Identificar 5 plantas comestibles',
        description: 'Encuentra, identifica y fotografía 5 plantas silvestres comestibles en tu área.',
        evidence: {
          id: 'e2-2',
          description: 'Encontré diente de león y trébol.',
          status: EvidenceStatus.INCOMPLETE,
          aiFeedback: '¡Buen comienzo! Has identificado 2 plantas. Recuerda que el requisito pide 5. ¡Ya casi lo logras!'
        },
      },
    ],
  },
  {
    id: 's3',
    title: 'Primeros Auxilios Básicos',
    description: 'Aprende técnicas vitales de primeros auxilios para emergencias comunes.',
    icon: '⚕️',
    requirements: [
      {
        id: 'r3-1',
        title: 'Primeros Auxilios para Cortaduras',
        description: 'Describe y demuestra el procedimiento correcto para tratar una cortadura menor.',
        evidence: {
            id: 'e3-1',
            description: 'Limpié la herida, apliqué un antiséptico y la cubrí con una bandita.',
            status: EvidenceStatus.COMPLETE
        }
      },
      createPendingRequirement('r3-2', 'Tratamiento de Quemaduras', 'Explica los pasos a seguir para tratar una quemadura de primer grado.'),
      createPendingRequirement('r3-3', 'Posición de Recuperación', 'Demuestra cómo colocar a una persona inconsciente en la posición de recuperación.'),
    ],
  },
];

export const MOCK_USER: User = {
    id: 'u1',
    username: 'Juan Pérez',
    email: 'juan@example.com',
    phone: '5512345678',
    interests: ['1', '2']
};
