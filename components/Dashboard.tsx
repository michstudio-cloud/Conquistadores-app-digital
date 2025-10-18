import React from 'react';
// FIX: Added .ts extension to the import path.
import { User, Specialty } from '../types.ts';
// FIX: Added .tsx extension to the import path.
import SpecialtyProgressCard from './SpecialtyProgressCard.tsx';
// FIX: Added .tsx extension to the import path.
import EventCard from './EventCard.tsx';
// FIX: Added .tsx extension to the import path.
import SpecialtyCategories from './SpecialtyCategories.tsx';
// FIX: Added .ts extension to the import path.
import { MOCK_CATEGORIES } from '../services/mockData.ts';
// FIX: Added .tsx extension to the import path.
import CategoryDetail from './CategoryDetail.tsx';

interface DashboardProps {
    user: User;
    onSelectSpecialty: (specialty: Specialty) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ user, onSelectSpecialty }) => {
    return (
        <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Bienvenido, {user.username.split(' ')[0]}!</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-6">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-4">Mi Progreso</h3>
                        <div className="space-y-4">
                            {user.specialties.slice(0, 2).map(spec => (
                                <SpecialtyProgressCard key={spec.id} specialty={spec} />
                            ))}
                        </div>
                    </div>
                     <div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-4">Categorías de Especialidades</h3>
                        <SpecialtyCategories categories={MOCK_CATEGORIES} />
                    </div>
                </div>
                
                <div className="space-y-6">
                     <div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-4">Próximos Eventos</h3>
                        <EventCard />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-4">Recomendado para ti</h3>
                        {/* A simple category detail view for demonstration */}
                        <CategoryDetail 
                            category={{id: 'cat1', name: 'Artes Manuales', icon: '🎨'}}
                            specialties={user.specialties.filter(s => s.category === 'Artes Manuales')}
                            onSelectSpecialty={onSelectSpecialty}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
