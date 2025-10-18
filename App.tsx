import React, { useState } from 'react';
// FIX: Added .tsx extension to the import path.
import Login from './components/Login.tsx';
// FIX: Added .tsx extension to the import path.
import Register from './components/Register.tsx';
// FIX: Added .tsx extension to the import path.
import Dashboard from './components/Dashboard.tsx';
// FIX: Added .tsx extension to the import path.
import SpecialtyDetail from './components/SpecialtyDetail.tsx';
// FIX: Added .tsx extension to the import path.
import Sidebar from './components/Sidebar.tsx';
// FIX: Added .tsx extension to the import path.
import Header from './components/Header.tsx';
// FIX: Added .ts extension to the import path.
import { MOCK_USER, MOCK_SPECIALTIES } from './services/mockData.ts';
// FIX: Added .ts extension to the import path.
import { User, Specialty } from './types.ts';

type View = 'login' | 'register' | 'dashboard' | 'specialty';

const App: React.FC = () => {
    const [view, setView] = useState<View>('dashboard'); // Default to dashboard for now
    const [currentUser, setCurrentUser] = useState<User | null>(MOCK_USER);
    const [selectedSpecialty, setSelectedSpecialty] = useState<Specialty | null>(MOCK_SPECIALTIES[0]);

    const handleRegisterComplete = (formData: Partial<User>) => {
        const newUser: User = {
            ...MOCK_USER, // Start with mock data
            ...formData,
            id: 'u2', // assign new id
            specialties: [] // start with no specialties
        };
        setCurrentUser(newUser);
        setView('dashboard');
    }

    const handleSelectSpecialty = (specialty: Specialty) => {
        setSelectedSpecialty(specialty);
        setView('specialty');
    }

    const renderView = () => {
        if (!currentUser) {
             // For simplicity, we'll just show the register view. 
             // A real app would have login/register switching.
            return <Register onRegisterComplete={handleRegisterComplete} />;
        }

        switch (view) {
            case 'dashboard':
                return <Dashboard user={currentUser} onSelectSpecialty={handleSelectSpecialty} />;
            case 'specialty':
                if (selectedSpecialty) {
                    return <SpecialtyDetail specialty={selectedSpecialty} onBack={() => setView('dashboard')} />;
                }
                // Fallback to dashboard if no specialty is selected
                return <Dashboard user={currentUser} onSelectSpecialty={handleSelectSpecialty} />;
            default:
                return <Register onRegisterComplete={handleRegisterComplete} />;
        }
    };

    if (!currentUser) {
        return <div className="bg-gray-100">{renderView()}</div>;
    }

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header user={currentUser} />
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
                    <div className="container mx-auto px-6 py-8">
                        {renderView()}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default App;
