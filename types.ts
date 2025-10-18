export enum Role {
  ADMIN = 'Administrador Asociación',
  ZONE_COORDINATOR = 'Coordinador de Zona',
  CLUB_DIRECTOR = 'Director de Club',
  INSTRUCTOR = 'Consejero/Instructor',
  MEMBER = 'Miembro',
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  clubId: string;
  avatarUrl: string;
  // New fields from registration
  username?: string;
  phone?: string;
  birthDate?: string;
  gender?: string;
  country?: string;
  postalCode?: string;
  city?: string;
  interests?: string[];
}

export interface Club {
  id:string;
  name: string;
  logo: string; // Emoji or initial
  zone: string;
  location: {
    city: string;
    state: string;
    country: string;
  };
}


export enum EvidenceStatus {
  PENDING = 'Pendiente',
  SUBMITTED = 'Enviado para Revisión',
  INCOMPLETE = 'Incompleto',
  COMPLETE = 'Completo',
}

export interface Evidence {
  id: string;
  description: string;
  file?: {
    name: string;
    base64: string;
    type: string;
  };
  submittedAt?: Date;
  status: EvidenceStatus;
  feedback?: string;
  aiFeedback?: string;
}

export interface Requirement {
  id: string;
  title: string;
  description: string;
  evidence?: Evidence;
}

export interface Specialty {
  id: string;
  title: string;
  icon: string; // emoji
  description: string;
  requirements: Requirement[];
}

export interface Interest {
    id: string;
    name: string;
    icon: string;
}