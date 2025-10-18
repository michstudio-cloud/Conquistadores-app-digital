import React from 'react';
import { User } from '../types.ts';
import { SearchIcon } from './Icons.tsx';

interface HeaderProps {
    user: User;
}

const Header: React.FC<HeaderProps> = ({ user }) => {
    return (
        <header className="bg-white shadow-sm p-4 flex justify-between items-center">
            <div className="relative">
                <input
                    type="text"
                    placeholder="Buscar especialidad..."
                    className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <SearchIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            </div>
            <div className="flex items-center space-x-4">
                <span className="font-medium text-gray-700">{user.username}</span>
                <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold">
                    {user.username.charAt(0).toUpperCase()}
                </div>
            </div>
        </header>
    );
};

export default Header;
