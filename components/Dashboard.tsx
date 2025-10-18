
import React from 'react';
import { User, Specialty } from '../types';
import SpecialtyCard from './SpecialtyCard';

interface DashboardProps {
  user: User;
  specialties: Specialty[];
  onSelectSpecialty: (specialty: Specialty) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ user, specialties, onSelectSpecialty }) => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Hola, {user.name.split(' ')[0]}</h1>
        <p className="mt-1 text-lg text-gray-600">Aquí están tus especialidades. ¡Sigue adelante!</p>
      </div>

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
  );
};

export default Dashboard;
