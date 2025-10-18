import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// FIX: Import all necessary components for routing and layout.
import Sidebar from './components/Sidebar.tsx';
import Header from './components/Header.tsx';
import Dashboard from './components/Dashboard.tsx';
import SpecialtyDetail from './components/SpecialtyDetail.tsx';
import CategoryDetail from './components/CategoryDetail.tsx';
import Login from './components/Login.tsx';
import Register from './components/Register.tsx';

// FIX: Create placeholder components for routes that do not have dedicated component files.
const Events: React.FC = () => <div className="p-6"><h1 className="text-2xl font-bold">Events</h1><p>Upcoming events will be listed here.</p></div>;
const Profile: React.FC = () => <div className="p-6"><h1 className="text-2xl font-bold">Profile</h1><p>User profile information will be displayed here.</p></div>;

// FIX: Define a main layout component to wrap routes that share common UI elements like Sidebar and Header.
const MainLayout: React.FC = () => (
    <>
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
            <Header />
            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/specialty/:id" element={<SpecialtyDetail />} />
                    <Route path="/category/:id" element={<CategoryDetail />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </main>
        </div>
    </>
);

// FIX: Implement the main App component to set up the application's routing structure. This resolves errors related to the App component not being defined.
const App: React.FC = () => {
    return (
        <Router>
            <div className="flex h-screen bg-gray-100 font-sans">
                {/* Routes for login and register which don't have the main layout */}
                <Routes>
                     <Route path="/login" element={<Login />} />
                     <Route path="/register" element={<Register />} />
                     {/* All other routes will use the MainLayout */}
                     <Route path="/*" element={<MainLayout />} />
                </Routes>
            </div>
        </Router>
    );
};

// FIX: Add a default export to make this file a module and allow it to be imported in index.tsx.
export default App;