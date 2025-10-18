
import React, { useState, useEffect } from 'react';
import { User, Specialty } from './types';
import { MOCK_USER, MOCK_SPECIALTIES } from './services/mockData';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import SpecialtyDetail from './components/SpecialtyDetail';
import Header from './components/Header';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [specialties, setSpecialties] = useState<Specialty[]>(MOCK_SPECIALTIES);
  const [selectedSpecialty, setSelectedSpecialty] = useState<Specialty | null>(null);

  useEffect(() => {
    // Attempt to get user's location on initial load for the "club discovery" feature
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log('User location:', position.coords.latitude, position.coords.longitude);
          // In a real app, this would be used to fetch nearby clubs.
        },
        (error) => {
          console.error('Error getting location:', error.message);
        }
      );
    }
  }, []);
  
  const handleLogin = () => {
    setUser(MOCK_USER);
  };

  const handleLogout = () => {
    setUser(null);
    setSelectedSpecialty(null);
  };

  const handleSelectSpecialty = (specialty: Specialty) => {
    setSelectedSpecialty(specialty);
  };

  const handleBackToDashboard = () => {
    setSelectedSpecialty(null);
  };

  const updateSpecialtyRequirement = (specialtyId: string, requirementId: string, updatedRequirement: any) => {
     setSpecialties(prevSpecialties => 
        prevSpecialties.map(spec => {
            if (spec.id === specialtyId) {
                return {
                    ...spec,
                    requirements: spec.requirements.map(req => 
                        req.id === requirementId ? { ...req, ...updatedRequirement } : req
                    )
                };
            }
            return spec;
        })
    );
    // Also update the selected specialty if it's the one being changed
    if (selectedSpecialty && selectedSpecialty.id === specialtyId) {
        setSelectedSpecialty(prevSpec => {
            if (!prevSpec) return null;
            return {
                ...prevSpec,
                requirements: prevSpec.requirements.map(req =>
                    req.id === requirementId ? { ...req, ...updatedRequirement } : req
                )
            };
        });
    }
  };


  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header user={user} onLogout={handleLogout} />
      <main className="p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          {selectedSpecialty ? (
            <SpecialtyDetail 
              specialty={selectedSpecialty} 
              onBack={handleBackToDashboard} 
              onRequirementUpdate={updateSpecialtyRequirement}
            />
          ) : (
            <Dashboard 
              user={user} 
              specialties={specialties} 
              onSelectSpecialty={handleSelectSpecialty} 
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
