import React from 'react';
import { Specialty } from '../types.ts';
import SpecialtyCard from './SpecialtyCard.tsx';
import SpecialtyProgressCard from './SpecialtyProgressCard.tsx';
import EventCard from './EventCard.tsx';

interface DashboardProps {
  specialties: Specialty[];
  onSelectSpecialty: (specialty: Specialty) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ specialties, onSelectSpecialty }) => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Hola, Juan!</h1>
        <p className="mt-1 text-lg text-gray-600">¡Sigamos aprendiendo y creciendo juntos!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Especialidades en Progreso</h2>
            <div className="space-y-4">
              {specialties.slice(0, 2).map(spec => (
                <SpecialtyProgressCard key={spec.id} specialty={spec} />
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Próximos Eventos</h2>
             <EventCard />
          </div>
      </div>
      
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Explorar Especialidades</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {specialties.map(specialty => (
            <SpecialtyCard 
              key={specialty.id} 
              specialty={specialty} 
              onSelect={() => onSelectSpecialty(specialty)} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
