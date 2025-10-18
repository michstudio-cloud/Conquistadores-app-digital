import React from 'react';
// FIX: Added .ts extension to the import path.
import { SpecialtyCategory } from '../types.ts';

interface SpecialtyCategoriesProps {
    categories: SpecialtyCategory[];
}

const SpecialtyCategories: React.FC<SpecialtyCategoriesProps> = ({ categories }) => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {categories.map(category => (
                <div key={category.id} className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow cursor-pointer hover:bg-gray-50 transition">
                    <span className="text-3xl mb-2">{category.icon}</span>
                    <span className="text-sm font-medium text-gray-700 text-center">{category.name}</span>
                </div>
            ))}
        </div>
    );
};

export default SpecialtyCategories;
