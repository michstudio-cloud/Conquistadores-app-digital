import React, { useState } from 'react';
// FIX: Added .ts extension to the import path.
import { Specialty, Requirement, EvidenceStatus } from '../types.ts';
// FIX: Added .tsx extension to the import path.
import LessonAccordion from './LessonAccordion.tsx';
// FIX: Added .tsx extension to the import path.
import { ArrowLeftIcon } from './Icons.tsx';

interface SpecialtyDetailProps {
  specialty: Specialty;
  onBack: () => void;
}

const SpecialtyDetail: React.FC<SpecialtyDetailProps> = ({ specialty, onBack }) => {
    // This state would normally come from props or a global state manager
    const [requirements, setRequirements] = useState<Requirement[]>(specialty.requirements);

    const handleUpdateRequirement = (updatedRequirement: Partial<Requirement>) => {
        setRequirements(prevRequirements => 
            prevRequirements.map(req => 
                req.id === updatedRequirement.id ? { ...req, ...updatedRequirement } : req
            )
        );
    };

    const completedCount = requirements.filter(r => r.evidence?.status === EvidenceStatus.COMPLETE).length;
    const totalCount = requirements.length;
    const progress = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <button onClick={onBack} className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-4">
                <ArrowLeftIcon className="h-5 w-5" />
                <span>Volver al Dashboard</span>
            </button>
            <div className="flex items-start space-x-6 mb-6">
                <div className="text-6xl">{specialty.icon}</div>
                <div>
                    <h1 className="text-4xl font-bold text-gray-800">{specialty.title}</h1>
                    <p className="text-lg text-gray-500">{specialty.category}</p>
                </div>
            </div>
            
            <div className="mb-6">
                <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-700">Progreso</span>
                    <span className="text-sm font-medium text-gray-700">{completedCount} de {totalCount} completados</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
                </div>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">Requisitos</h2>
                {requirements.map(req => (
                    <LessonAccordion 
                        key={req.id} 
                        requirement={req} 
                        onUpdate={(updatedReq) => handleUpdateRequirement({ ...updatedReq, id: req.id })}
                    />
                ))}
            </div>
        </div>
    );
};

export default SpecialtyDetail;
