// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import EmployeeForm from './pages/EmployeeForm';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Search from './pages/Search';

const App = () => (
  <Router>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/employee-form" element={<EmployeeForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </main>
  </Router>
);

export default App;
