
import { Specialty, SpecialtyCategory, Event, Requirement, EvidenceStatus } from '../types.ts';

export const mockRequirements: Requirement[] = [
    {
        id: 'req-1',
        title: 'Requirement 1: Knot Tying',
        description: 'Demonstrate how to tie a bowline, a sheet bend, and a clove hitch.',
        evidence: {
            id: 'ev-1',
            description: '',
            status: EvidenceStatus.PENDING,
        }
    },
    {
        id: 'req-2',
        title: 'Requirement 2: First Aid',
        description: 'Explain the ABCs of CPR and demonstrate the recovery position.',
        evidence: {
            id: 'ev-2',
            description: 'I have described the ABCs in the text and attached a photo of the recovery position.',
            status: EvidenceStatus.SUBMITTED,
            submittedAt: new Date('2023-10-26T10:00:00Z'),
            file: {
                name: 'recovery-position.jpg',
                base64: '', // placeholder
                type: 'image/jpeg'
            }
        }
    },
    {
        id: 'req-3',
        title: 'Requirement 3: Camp Cooking',
        description: 'Plan a menu for a weekend campout and cook one meal over a fire.',
        evidence: {
            id: 'ev-3',
            description: 'Here is my menu plan and a picture of the chili I cooked.',
            status: EvidenceStatus.COMPLETE,
            aiFeedback: "¡Excelente trabajo! El menú se ve delicioso y bien balanceado, y la foto del chili se ve increíble. ¡Parece que dominas la cocina de campamento!",
            submittedAt: new Date('2023-10-25T15:30:00Z'),
            instructorFeedback: 'Great job, approved!',
        }
    }
];

export const mockSpecialties: Specialty[] = [
    {
        id: 'spec-1',
        title: 'Camping Skills I',
        category: 'Outdoor Activities',
        imageUrl: 'https://placehold.co/600x400/5E5CE6/white?text=Camping',
        requirements: mockRequirements,
    },
    {
        id: 'spec-2',
        title: 'First Aid',
        category: 'Health & Science',
        imageUrl: 'https://placehold.co/600x400/5E5CE6/white?text=First+Aid',
        requirements: [],
    },
     {
        id: 'spec-3',
        title: 'Knots',
        category: 'Outdoor Activities',
        imageUrl: 'https://placehold.co/600x400/5E5CE6/white?text=Knots',
        requirements: [],
    }
];

export const mockCategories: SpecialtyCategory[] = [
    {
        id: 'cat-1',
        name: 'Outdoor Activities',
        specialties: mockSpecialties.filter(s => s.category === 'Outdoor Activities'),
    },
    {
        id: 'cat-2',
        name: 'Health & Science',
        specialties: mockSpecialties.filter(s => s.category === 'Health & Science'),
    }
];

export const mockEvents: Event[] = [
    {
        id: 'event-1',
        title: 'Pathfinder Camporee',
        date: 'Oct 28-30, 2024',
        location: 'Camp Wilderness',
        imageUrl: 'https://placehold.co/600x400/34D399/white?text=Camporee',
    },
    {
        id: 'event-2',
        title: 'Community Service Day',
        date: 'Nov 12, 2024',
        location: 'City Park',
        imageUrl: 'https://placehold.co/600x400/34D399/white?text=Service',
    }
];
