
import React, { useState } from 'react';
// FIX: Added .ts extension to the import path.
import { Requirement, EvidenceStatus } from '../types.ts';
// FIX: Added .tsx extension to the import path.
import { ChevronDownIcon, CheckCircleIcon, XCircleIcon, ClockIcon } from './Icons.tsx';
import EvidenceUploader from './EvidenceUploader';

interface LessonAccordionProps {
  requirement: Requirement;
  onUpdate: (updatedRequirement: Partial<Requirement>) => void;
}

const LessonAccordion: React.FC<LessonAccordionProps> = ({ requirement, onUpdate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const getStatusIcon = (status: EvidenceStatus) => {
    switch(status) {
        case EvidenceStatus.COMPLETE:
            return <CheckCircleIcon className="h-6 w-6 text-green-500" />;
        case EvidenceStatus.INCOMPLETE:
            return <XCircleIcon className="h-6 w-6 text-red-500" />;
        case EvidenceStatus.SUBMITTED:
            return <ClockIcon className="h-6 w-6 text-yellow-500" />;
        default:
            return <div className="h-6 w-6 border-2 border-gray-300 rounded-full"></div>;
    }
  };

  return (
    <div className="border border-gray-200 rounded-lg">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full flex justify-between items-center p-4 text-left"
      >
        <div className="flex items-center space-x-4">
            {getStatusIcon(requirement.evidence?.status ?? EvidenceStatus.PENDING)}
            <span className="font-medium text-gray-800">{requirement.title}</span>
        </div>
        <ChevronDownIcon className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="px-4 pb-4 border-t border-gray-200">
            <div className="py-4 text-gray-600">
                <p>{requirement.description}</p>
            </div>
            {requirement.evidence && (
                 <EvidenceUploader 
                    requirement={requirement} 
                    evidence={requirement.evidence}
                    onEvidenceUpdate={(updatedEvidence) => onUpdate({ evidence: updatedEvidence })}
                 />
            )}
        </div>
      )}
    </div>
  );
};

export default LessonAccordion;