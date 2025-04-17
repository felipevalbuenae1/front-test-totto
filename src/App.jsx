import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard.jsx';
import Template from './pages/template/Template.jsx';
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar Bootstrap CSS

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/template" element={<Template />} />
      </Routes>
    </Router>
  );
}

export default App;