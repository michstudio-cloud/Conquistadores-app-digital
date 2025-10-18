import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar.tsx';
import Header from './components/Header.tsx';
import Dashboard from './components/Dashboard.tsx';
import SpecialtyDetail from './components/SpecialtyDetail.tsx';
import CategoryDetail from './components/CategoryDetail.tsx';
import Login from './components/Login.tsx';
import Register from './components/Register.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/specialty/:id" element={<SpecialtyDetail />} />
              <Route path="/category/:id" element={<CategoryDetail />} />
              <Route path="/events" element={<div>Events Page</div>} />
              <Route path="/profile" element={<div>Profile Page</div>} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;