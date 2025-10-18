import React, { useState } from 'react';
import { User, Interest, Club } from '../types';
import { MOCK_INTERESTS, MOCK_CLUBS_LIST } from '../services/mockData';
import { ArrowLeftIcon, CalendarIcon, ChevronDownIcon, SearchIcon, UserCircleIcon, PencilIcon, ArrowRightIcon, XIcon } from './Icons';

// Helper components defined inside the main component file for co-location
const RegistrationLayout: React.FC<{ title: string; onBack?: () => void; children: React.ReactNode; showNext: boolean; onNext: () => void; }> = ({ title, onBack, children, showNext, onNext }) => (
    <div className="relative min-h-screen w-full max-w-md mx-auto bg-white flex flex-col p-6 font-sans">
        <header className="flex items-center">
            {onBack && <button onClick={onBack} className="text-gray-600"><ArrowLeftIcon className="h-6 w-6" /></button>}
            <h1 className="text-2xl font-bold text-gray-800 mx-auto" style={{ color: '#0A2533' }}>{title}</h1>
        </header>
        <main className="flex-grow mt-8">
            {children}
        </main>
        {showNext && (
            <div className="absolute bottom-8 right-8">
                <button onClick={onNext} className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg">
                    <ArrowRightIcon className="h-8 w-8 transform -rotate-45" />
                </button>
            </div>
        )}
    </div>
);

const InputField: React.FC<{ label: string; type: string; placeholder: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; icon?: React.ReactNode }> = ({ label, type, placeholder, value, onChange, icon }) => (
    <div>
        <label className="block text-sm font-semibold mb-1" style={{ color: '#0A2533' }}>{label}</label>
        <div className="relative">
            <input type={type} placeholder={placeholder} value={value} onChange={onChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            {icon && <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">{icon}</div>}
        </div>
    </div>
);

// Main Registration Flow Component
interface RegisterProps {
  onRegisterComplete: (formData: Partial<User>) => void;
}

const Register: React.FC<RegisterProps> = ({ onRegisterComplete }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<Partial<User>>({
        email: '',
        username: '',
        phone: '',
        interests: []
    });
    const [showLocationModal, setShowLocationModal] = useState(true);

    const handleUpdate = (field: keyof User, value: any) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const nextStep = () => setStep(s => Math.min(s + 1, 4));
    const prevStep = () => setStep(s => Math.max(s - 1, 1));
    
    const handleFinish = () => {
        onRegisterComplete(formData);
    }

    const Step1 = () => (
        <RegistrationLayout title="Registrarse" onBack={() => { /* Can navigate to a welcome screen */ }} showNext={false} onNext={()=>{}}>
            <div className="space-y-6">
                <InputField label="Correo electrónico" type="email" placeholder="Email address" value={formData.email || ''} onChange={e => handleUpdate('email', e.target.value)} />
                <InputField label="Usuario" type="text" placeholder="Enter username" value={formData.username || ''} onChange={e => handleUpdate('username', e.target.value)} />
                <InputField label="Contraseña" type="password" placeholder="Enter password" value="" onChange={() => {}} />
                <div>
                     <label className="block text-sm font-semibold mb-1" style={{ color: '#0A2533' }}>Telefono</label>
                     <div className="flex">
                        <div className="relative">
                            <select className="appearance-none bg-gray-100 border border-gray-300 rounded-l-lg py-3 pl-4 pr-8 focus:outline-none">
                                <option>52+</option>
                            </select>
                            <ChevronDownIcon className="h-4 w-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"/>
                        </div>
                        <input type="tel" placeholder="Enter phone number" value={formData.phone || ''} onChange={e => handleUpdate('phone', e.target.value)} className="w-full px-4 py-3 border-t border-r border-b border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                     </div>
                </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6 text-center">
                 <p className="text-xs text-gray-500 mb-4">
                    Al hacer clic en Registrarse, indicas que has leído y aceptado los <a href="#" className="underline">Terminos y Condiciones</a> y <a href="#" className="underline">Politica de Privacidad</a>
                </p>
                <button onClick={nextStep} className="w-full py-3 bg-gray-800 text-white font-bold rounded-full" style={{ backgroundColor: '#0A2533' }}>
                    REGISTER
                </button>
            </div>
        </RegistrationLayout>
    );

    const Step2 = () => (
        <RegistrationLayout title="" onBack={prevStep} showNext={true} onNext={nextStep}>
            <div className="flex flex-col items-center space-y-6">
                 <div className="relative">
                    <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center">
                         <UserCircleIcon className="w-24 h-24 text-gray-400" />
                    </div>
                    <button className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                        <PencilIcon className="w-5 h-5 text-gray-700" />
                    </button>
                 </div>
                 <div className="w-full space-y-4">
                     <InputField label="Fecha de nacimiento" type="text" placeholder="Enter birthday" value={formData.birthDate || ''} onChange={e => handleUpdate('birthDate', e.target.value)} icon={<CalendarIcon className="h-5 w-5"/>}/>
                     <InputField label="Genero" type="text" placeholder="Enter gender" value={formData.gender || ''} onChange={e => handleUpdate('gender', e.target.value)} icon={<ChevronDownIcon className="h-5 w-5"/>} />
                     <InputField label="País" type="text" placeholder="Enter country" value={formData.country || ''} onChange={e => handleUpdate('country', e.target.value)} icon={<ChevronDownIcon className="h-5 w-5"/>} />
                     <InputField label="Codigo Postal" type="text" placeholder="Enter postal code" value={formData.postalCode || ''} onChange={e => handleUpdate('postalCode', e.target.value)} icon={<SearchIcon className="h-5 w-5"/>} />
                     <InputField label="Ciudad" type="text" placeholder="Enter city" value={formData.city || ''} onChange={e => handleUpdate('city', e.target.value)} icon={<ChevronDownIcon className="h-5 w-5"/>} />
                 </div>
            </div>
        </RegistrationLayout>
    );
    
    const Step3 = () => {
        const toggleInterest = (interestId: string) => {
            const currentInterests = formData.interests || [];
            const newInterests = currentInterests.includes(interestId)
                ? currentInterests.filter(id => id !== interestId)
                : [...currentInterests, interestId];
            handleUpdate('interests', newInterests);
        };
        return (
            <RegistrationLayout title="¿Qué te gusta?" onBack={prevStep} showNext={true} onNext={nextStep}>
                <div className="text-center">
                    <p className="text-gray-600">JA te dara sugerencias de especialidades y amigos de todo el mundo. Al seleccionar las cosas que te gustan abajo podemos ayudarte a conectar con gente con tus mismos gustos y mostrarte videos que te encantarán</p>
                </div>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                    {MOCK_INTERESTS.map((interest: Interest) => {
                        const isSelected = formData.interests?.includes(interest.id);
                        return (
                             <button 
                                key={interest.id} 
                                onClick={() => toggleInterest(interest.id)}
                                className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${isSelected ? 'bg-blue-100 border-blue-500 text-blue-700' : 'bg-white border-gray-300 text-gray-700'}`}
                            >
                                {interest.icon} {interest.name}
                            </button>
                        )
                    })}
                </div>
            </RegistrationLayout>
        )
    };
    
    const Step4 = () => {
        const zones = [...new Set(MOCK_CLUBS_LIST.map(c => c.zone))];
        return (
             <div className="relative min-h-screen w-full max-w-md mx-auto bg-gray-50 flex flex-col font-sans">
                 {showLocationModal && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end z-20">
                        <div className="bg-white rounded-t-3xl p-8 text-center w-full">
                             <div className="w-20 h-20 rounded-full bg-gray-100 mx-auto -mt-16 mb-4 border-4 border-white flex items-center justify-center text-2xl">
                                🗺️
                             </div>
                            <h2 className="text-2xl font-bold mb-2">Clubes & Amigos</h2>
                            <p className="text-gray-600 mb-6">Encuentra un club, amigos, y más cerca de ti.</p>
                            <button onClick={() => setShowLocationModal(false)} className="w-full py-3 bg-gray-800 text-white font-bold rounded-full" style={{ backgroundColor: '#0A2533' }}>
                                PERMITIR LOCALIZACIÓN
                            </button>
                             <button onClick={() => setShowLocationModal(false)} className="w-full py-3 mt-2 text-gray-600 font-medium">
                                No, Gracias
                            </button>
                        </div>
                    </div>
                 )}
                <header className="flex items-center p-6 bg-gray-50 z-10">
                    <button onClick={prevStep} className="text-gray-600"><ArrowLeftIcon className="h-6 w-6" /></button>
                    <h1 className="text-2xl font-bold text-gray-800 mx-auto" style={{ color: '#0A2533' }}>Selecciona un Club</h1>
                     <button onClick={handleFinish} className="text-gray-600"><XIcon className="h-6 w-6" /></button>
                </header>
                <div className="flex-grow flex overflow-hidden">
                    <nav className="flex flex-col items-center justify-around p-2 bg-white rounded-full my-4 ml-2 shadow-inner">
                        <span className="text-gray-500 font-bold" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)'}}>Zona</span>
                         {zones.map(zone => (
                            <button key={zone} className="flex flex-col items-center space-y-1 p-2 rounded-lg hover:bg-gray-100">
                                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm">
                                    {MOCK_CLUBS_LIST.find(c => c.zone === zone)?.logo}
                                </div>
                                <span className="text-xs font-semibold">{zone}</span>
                            </button>
                        ))}
                    </nav>
                    <main className="flex-grow p-4 overflow-y-auto">
                        <div className="grid grid-cols-2 gap-6">
                            {MOCK_CLUBS_LIST.map((club: Club) => (
                                 <button key={club.id} onClick={() => handleUpdate('clubId', club.id)} className="flex flex-col items-center space-y-2">
                                     <div className={`w-24 h-24 rounded-full flex items-center justify-center text-4xl shadow-md border-4 ${formData.clubId === club.id ? 'border-blue-500' : 'border-transparent'}`}>
                                         {club.logo}
                                     </div>
                                 </button>
                            ))}
                        </div>
                    </main>
                </div>
                 <div className="absolute bottom-8 right-8 z-10">
                    <button onClick={handleFinish} className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg">
                        <ArrowRightIcon className="h-8 w-8 transform -rotate-45" />
                    </button>
                </div>
            </div>
        )
    };

    switch (step) {
        case 1: return <Step1 />;
        case 2: return <Step2 />;
        case 3: return <Step3 />;
        case 4: return <Step4 />;
        default: return <Step1 />;
    }
};

export default Register;