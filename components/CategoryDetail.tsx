import React from 'react';
// FIX: Added .ts extension to the import path.
import { Specialty, SpecialtyCategory } from '../types.ts';
// FIX: Added .tsx extension to the import path.
import SpecialtyCard from './SpecialtyCard.tsx';

interface CategoryDetailProps {
    category: SpecialtyCategory;
    specialties: Specialty[];
    onSelectSpecialty: (specialty: Specialty) => void;
}

const CategoryDetail: React.FC<CategoryDetailProps> = ({ category, specialties, onSelectSpecialty }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">{category.name}</h3>
            <div className="grid grid-cols-2 gap-4">
                {specialties.map(spec => (
                    <SpecialtyCard key={spec.id} specialty={spec} onSelect={onSelectSpecialty} />
                ))}
            </div>
        </div>
    );
};

export default CategoryDetail;
