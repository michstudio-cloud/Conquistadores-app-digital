export enum EvidenceStatus {
  PENDING = 'PENDING',
  SUBMITTED = 'SUBMITTED',
  INCOMPLETE = 'INCOMPLETE',
  COMPLETE = 'COMPLETE',
}

export interface EvidenceFile {
  name: string;
  base64: string;
  type: string;
}

export interface Evidence {
  id: string;
  description: string;
  file?: EvidenceFile;
  status: EvidenceStatus;
  aiFeedback?: string;
  submittedAt?: Date;
  instructorFeedback?: string;
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
  category: string;
  icon: string; // emoji
  requirements: Requirement[];
}

export interface User {
  id: string;
  username: string;
  email: string;
  phone?: string;
  birthDate?: string;
  gender?: string;
  country?: string;
  postalCode?: string;
  city?: string;
  clubId?: string;
  interests?: string[];
  specialties: Specialty[];
}

export interface Interest {
  id: string;
  name: string;
  icon: string; // emoji
}

export interface Club {
  id: string;
  name: string;
  zone: string;
  logo: string; // emoji
}

export interface SpecialtyCategory {
    id: string;
    name: string;
    icon: string;
}
