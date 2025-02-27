import React from 'react';
import EmployeeCard from '../components/EmployeeCard';
import './Dashboard.css';

const Dashboard = () => {
  // Sample employee data with an avatar for illustration
  const employees = [
    { id: 1, name: 'John Doe', position: 'Developer', avatar: 'https://as2.ftcdn.net/jpg/02/44/43/91/1000_F_244439183_Wn6zbxmjuJTCaRodCGH9MFDUL1r3yCuK.jpg' },
    { id: 2, name: 'Jane Smith', position: 'Designer', avatar: 'https://cdn-icons-png.flaticon.com/512/4128/4128253.png' },
    { id: 3, name: 'Alice Johnson', position: 'Project Manager', avatar: 'https://cdn-icons-png.flaticon.com/512/6833/6833591.png' }
  ];

  return (
    <div className="dashboard">
      <h2 className="dashboard-title">Employee Dashboard</h2>
      <div className="employee-grid">
        {employees.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
