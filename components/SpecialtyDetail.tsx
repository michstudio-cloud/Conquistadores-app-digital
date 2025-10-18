
import React from 'react';
import { Specialty, Requirement } from '../types';
import { ArrowLeftIcon, BookOpenIcon } from './Icons';
import LessonAccordion from './LessonAccordion';

interface SpecialtyDetailProps {
  specialty: Specialty;
  onBack: () => void;
  onRequirementUpdate: (specialtyId: string, requirementId: string, updatedRequirement: Partial<Requirement>) => void;
}

const SpecialtyDetail: React.FC<SpecialtyDetailProps> = ({ specialty, onBack, onRequirementUpdate }) => {
  return (
    <div className="space-y-6">
      <div>
        <button onClick={onBack} className="flex items-center space-x-2 text-sm font-medium text-gray-600 hover:text-gray-900 mb-4">
          <ArrowLeftIcon className="h-4 w-4" />
          <span>Volver al Panel</span>
        </button>
        <div className="flex items-center space-x-4">
          <div className="text-5xl">{specialty.icon}</div>
          <div>
            <h1 className="text-4xl font-bold text-gray-900">{specialty.title}</h1>
            <p className="mt-1 text-lg text-gray-500">{specialty.description}</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center space-x-2">
            <BookOpenIcon className="h-6 w-6 text-indigo-500" />
            <span>Requisitos de la Especialidad</span>
        </h2>
        <div className="mt-4 space-y-3">
            {specialty.requirements.map(req => (
                <LessonAccordion 
                    key={req.id} 
                    requirement={req} 
                    onUpdate={(updatedRequirement) => onRequirementUpdate(specialty.id, req.id, updatedRequirement)}
                />
            ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialtyDetail;
