import React from 'react';

const EventCard: React.FC = () => {
    return (
        <div className="bg-white rounded-lg shadow p-4">
            <div className="bg-cover bg-center h-32 rounded-lg" style={{backgroundImage: "url('https://images.unsplash.com/photo-1526495124232-a04e1849168c?q=80&w=2070&auto=format&fit=crop')"}}>
            </div>
            <h3 className="font-semibold text-gray-800 mt-3">Campamento de Zona</h3>
            <p className="text-sm text-gray-500">Viernes, 15 de Noviembre</p>
            <button className="mt-3 w-full px-4 py-2 border border-gray-300 text-gray-700 text-sm font-semibold rounded-md hover:bg-gray-50">
                Ver Detalles
            </button>
        </div>
    );
};

export default EventCard;
