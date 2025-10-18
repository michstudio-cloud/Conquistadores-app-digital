
import { User, Role, Club, Specialty, EvidenceStatus } from '../types';

export const MOCK_USER: User = {
  id: 'user-001',
  name: 'Juan Conquistador',
  email: 'juan@example.com',
  role: Role.MEMBER,
  clubId: 'club-123',
  avatarUrl: 'https://picsum.photos/100/100',
};

export const MOCK_CLUB: Club = {
  id: 'club-123',
  name: 'Club Fénix',
  location: {
    city: 'Mexico City',
    state: 'CDMX',
    country: 'Mexico',
  },
};

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
