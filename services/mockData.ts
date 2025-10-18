import { User, Specialty, Requirement, EvidenceStatus, Interest, Club, SpecialtyCategory } from '../types.ts';

export const MOCK_INTERESTS: Interest[] = [
    { id: '1', name: 'Naturaleza', icon: '🌳' },
    { id: '2', name: 'Arte', icon: '🎨' },
    { id: '3', name: 'Música', icon: '🎵' },
    { id: '4', name: 'Deportes', icon: '⚽' },
    { id: '5', name: 'Ciencia', icon: '🔬' },
    { id: '6', name: 'Cocina', icon: '🍳' },
    { id: '7', name: 'Aventura', icon: '🧭' },
    { id: '8', name: 'Fotografía', icon: '📷' },
];

export const MOCK_CLUBS_LIST: Club[] = [
    { id: 'c1', name: 'Club A', zone: 'Norte', logo: '🦁' },
    { id: 'c2', name: 'Club B', zone: 'Norte', logo: '🦅' },
    { id: 'c3', name: 'Club C', zone: 'Sur', logo: '🐺' },
    { id: 'c4', name: 'Club D', zone: 'Sur', logo: '🐻' },
    { id: 'c5', name: 'Club E', zone: 'Centro', logo: '🦈' },
    { id: 'c6', name: 'Club F', zone: 'Centro', logo: '🐅' },
];

const mockRequirements: Requirement[] = [
  {
    id: 'r1',
    title: 'Nudo As de Guía',
    description: 'Aprender y demostrar cómo hacer el nudo As de Guía correctamente. Debe ser firme y no deslizarse.',
    evidence: {
      id: 'e1',
      description: '',
      status: EvidenceStatus.PENDING,
    },
  },
  {
    id: 'r2',
    title: 'Primeros Auxilios: ABC',
    description: 'Explicar qué significa el ABC de la reanimación y demostrar la posición de recuperación.',
    evidence: {
      id: 'e2',
      description: 'He practicado la posición con mi hermano y adjunto una foto.',
      status: EvidenceStatus.SUBMITTED,
      file: { name: 'posicion.jpg', base64: '', type: 'image/jpeg' },
      submittedAt: new Date('2023-10-26T10:00:00Z'),
    },
  },
  {
    id: 'r3',
    title: 'Identificar 5 árboles',
    description: 'Salir a la naturaleza e identificar 5 tipos de árboles nativos de tu región. Tomar fotos y describirlos.',
    evidence: {
      id: 'e3',
      description: 'Identifiqué un roble, un pino, un arce, un sauce y un abeto. Adjunto las fotos y una breve descripción de cada uno.',
      status: EvidenceStatus.COMPLETE,
      file: { name: 'arboles.zip', base64: '', type: 'application/zip' },
      submittedAt: new Date('2023-10-25T15:30:00Z'),
    },
  },
];


export const MOCK_SPECIALTIES: Specialty[] = [
  {
    id: 's1',
    title: 'Nudos',
    category: 'Artes Manuales',
    icon: '🪢',
    requirements: mockRequirements,
  },
  {
    id: 's2',
    title: 'Primeros Auxilios',
    category: 'Salud',
    icon: '🩹',
    requirements: [
      {
        id: 'r2-1',
        title: 'Tratamiento de quemaduras',
        description: 'Describir los diferentes grados de quemaduras y el tratamiento de primeros auxilios para cada uno.',
        evidence: { id: 'e2-1', description: '', status: EvidenceStatus.PENDING },
      },
      {
        id: 'r2-2',
        title: 'Vendajes',
        description: 'Demostrar 3 tipos de vendajes: circular, en espiral y en ocho.',
        evidence: { id: 'e2-2', description: '', status: EvidenceStatus.PENDING },
      },
    ],
  },
  {
    id: 's3',
    title: 'Cocina',
    category: 'Hogar',
    icon: '🍳',
    requirements: [],
  },
  {
    id: 's4',
    title: 'Fotografía',
    category: 'Artes Manuales',
    icon: '📷',
    requirements: [],
  },
];


export const MOCK_USER: User = {
    id: 'u1',
    username: 'Juan Pérez',
    email: 'juan.perez@example.com',
    specialties: MOCK_SPECIALTIES,
};

export const MOCK_CATEGORIES: SpecialtyCategory[] = [
    { id: 'cat1', name: 'Artes Manuales', icon: '🎨' },
    { id: 'cat2', name: 'Naturaleza', icon: '🌳' },
    { id: 'cat3', name: 'Salud', icon: '❤️' },
    { id: 'cat4', name: 'Hogar', icon: '🏠' },
    { id: 'cat5', name: 'Misioneras', icon: '🕊️' },
];
