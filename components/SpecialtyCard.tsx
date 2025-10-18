import React from 'react';
// FIX: Added .ts extension to the import path.
import { Specialty } from '../types.ts';

interface SpecialtyCardProps {
    specialty: Specialty;
    onSelect: (specialty: Specialty) => void;
}

const SpecialtyCard: React.FC<SpecialtyCardProps> = ({ specialty, onSelect }) => {
    return (
        <button 
            onClick={() => onSelect(specialty)}
            className="w-full bg-white p-4 rounded-lg shadow text-center hover:shadow-md transition-shadow"
        >
            <div className="text-4xl mb-2">{specialty.icon}</div>
            <h4 className="font-semibold text-gray-800">{specialty.title}</h4>
        </button>
    );
};

export default SpecialtyCard;
