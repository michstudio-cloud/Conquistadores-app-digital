import React from 'react';

const Sidebar: React.FC = () => {
    return (
        <div className="w-64 bg-white shadow-md">
            <div className="p-6">
                <h1 className="text-2xl font-bold text-indigo-600">Pathfinders</h1>
            </div>
            <nav className="mt-6">
                <a href="#" className="flex items-center mt-4 py-2 px-6 bg-gray-200 text-gray-700">
                    <span className="mx-3">Dashboard</span>
                </a>
                <a href="#" className="flex items-center mt-4 py-2 px-6 text-gray-600 hover:bg-gray-200">
                    <span className="mx-3">Especialidades</span>
                </a>
                <a href="#" className="flex items-center mt-4 py-2 px-6 text-gray-600 hover:bg-gray-200">
                    <span className="mx-3">Mi Club</span>
                </a>
                 <a href="#" className="flex items-center mt-4 py-2 px-6 text-gray-600 hover:bg-gray-200">
                    <span className="mx-3">Eventos</span>
                </a>
                 <a href="#" className="flex items-center mt-4 py-2 px-6 text-gray-600 hover:bg-gray-200">
                    <span className="mx-3">Perfil</span>
                </a>
            </nav>
        </div>
    );
};

export default Sidebar;
