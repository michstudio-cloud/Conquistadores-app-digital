
import React from 'react';
// FIX: Added .ts extension to the import path.
import { Specialty, EvidenceStatus } from '../types.ts';

interface SpecialtyCardProps {
  specialty: Specialty;
  onSelect: () => void;
}

const SpecialtyCard: React.FC<SpecialtyCardProps> = ({ specialty, onSelect }) => {
  const completedRequirements = specialty.requirements.filter(
    req => req.evidence?.status === EvidenceStatus.COMPLETE
  ).length;
  const totalRequirements = specialty.requirements.length;
  const progress = totalRequirements > 0 ? (completedRequirements / totalRequirements) * 100 : 0;

  return (
    <button 
      onClick={onSelect} 
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-left w-full group"
    >
      <div className="p-6">
        <div className="flex items-start justify-between">
            <div className="text-4xl">{specialty.icon}</div>
             <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-indigo-600 bg-indigo-200">
                {completedRequirements}/{totalRequirements}
            </span>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">{specialty.title}</h3>
          <p className="mt-2 text-sm text-gray-600 line-clamp-2">{specialty.description}</p>
        </div>
         <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                    className="bg-indigo-500 h-2.5 rounded-full" 
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
        </div>
      </div>
    </button>
  );
};

export default SpecialtyCard;