import React from 'react';
import { Specialty, EvidenceStatus } from '../types.ts';

interface SpecialtyProgressCardProps {
  specialty: Specialty;
}

const SpecialtyProgressCard: React.FC<SpecialtyProgressCardProps> = ({ specialty }) => {
  const completedRequirements = specialty.requirements.filter(
    req => req.evidence?.status === EvidenceStatus.COMPLETE
  ).length;
  const totalRequirements = specialty.requirements.length;
  const progress = totalRequirements > 0 ? (completedRequirements / totalRequirements) * 100 : 0;

  return (
    <div className="bg-white rounded-lg shadow p-4 flex items-center space-x-4">
      <div className="text-4xl">{specialty.icon}</div>
      <div className="flex-1">
        <h3 className="font-semibold text-gray-800">{specialty.title}</h3>
        <div className="flex items-center mt-1">
          <div className="w-full bg-gray-200 rounded-full h-2 mr-3">
            <div className="bg-green-500 h-2 rounded-full" style={{ width: `${progress}%` }}></div>
          </div>
          <span className="text-sm font-medium text-gray-600">{completedRequirements}/{totalRequirements}</span>
        </div>
      </div>
       <button className="px-4 py-2 bg-indigo-500 text-white text-sm font-semibold rounded-md hover:bg-indigo-600">
          Continuar
      </button>
    </div>
  );
};

export default SpecialtyProgressCard;
