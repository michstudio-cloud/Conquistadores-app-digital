import React from 'react';

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
  description: string;
  icon: string; // emoji
  requirements: Requirement[];
}

export interface User {
  id: string;
  email: string;
  username: string;
  phone: string;
  birthDate?: string;
  gender?: string;
  country?: string;
  postalCode?: string;
  city?: string;
  interests: string[];
  clubId?: string;
}

export interface Interest {
  id: string;
  name: string;
  icon: string; // emoji
}

export interface Club {
    id: string;
    name: string;
    logo: React.ReactNode;
    zone: string;
}
