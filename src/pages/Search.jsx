import React, { useState } from 'react';
import './Search.css';
import EmployeeCard from '../components/EmployeeCard';

const Search = () => {
  const [query, setQuery] = useState('');
  // Sample employee data
  const employees = [
    { id: 1, name: 'John Doe', position: 'Developer', avatar: 'https://via.placeholder.com/100' },
    { id: 2, name: 'Jane Smith', position: 'Designer', avatar: 'https://via.placeholder.com/100' },
    { id: 3, name: 'Alice Johnson', position: 'Project Manager', avatar: 'https://via.placeholder.com/100' },
    { id: 4, name: 'Bob Brown', position: 'QA Engineer', avatar: 'https://via.placeholder.com/100' }
  ];

  const filteredEmployees = employees.filter(emp =>
    emp.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-page">
      <h2 className="search-title">Search Employees</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="search-results">
        {filteredEmployees.length > 0 ? (
          filteredEmployees.map(employee => (
            <EmployeeCard key={employee.id} employee={employee} />
          ))
        ) : (
          <p>No employees found.</p>
        )}
      </div>
    </div>
  );
};

export default Search;
