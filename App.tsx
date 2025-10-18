import React, { useState } from 'react';
import { MOCK_USER, MOCK_SPECIALTIES } from './services/mockData.ts';
import { User, Specialty, Requirement } from './types.ts';
import Register from './components/Register.tsx';
import Dashboard from './components/Dashboard.tsx';
import SpecialtyDetail from './components/SpecialtyDetail.tsx';
import Header from './components/Header.tsx';
import Sidebar from './components/Sidebar.tsx';

const App: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);
    const [specialties, setSpecialties] = useState<Specialty[]>(MOCK_SPECIALTIES);
    const [selectedSpecialty, setSelectedSpecialty] = useState<Specialty | null>(null);

    const handleRegister = (formData: Partial<User>) => {
        const newUser: User = {
            id: 'u2',
            ...MOCK_USER,
            ...formData,
        };
        setUser(newUser);
    };

    const handleRequirementUpdate = (specialtyId: string, requirementId: string, updatedRequirement: Partial<Requirement>) => {
        setSpecialties(prevSpecialties => 
            prevSpecialties.map(spec => {
                if (spec.id === specialtyId) {
                    return {
                        ...spec,
                        requirements: spec.requirements.map(req => 
                            req.id === requirementId ? { ...req, ...updatedRequirement } : req
                        ),
                    };
                }
                return spec;
            })
        );
    };

    if (!user) {
        return <Register onRegisterComplete={handleRegister} />;
    }

    return (
        <div className="flex h-screen bg-gray-100 font-sans">
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header user={user} />
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
                    {selectedSpecialty ? (
                        <SpecialtyDetail 
                            specialty={selectedSpecialty} 
                            onBack={() => setSelectedSpecialty(null)} 
                            onRequirementUpdate={handleRequirementUpdate}
                        />
                    ) : (
                        <Dashboard 
                            specialties={specialties}
                            onSelectSpecialty={(specialty) => setSelectedSpecialty(specialty)}
                        />
                    )}
                </main>
            </div>
        </div>
    );
};

export default App;
