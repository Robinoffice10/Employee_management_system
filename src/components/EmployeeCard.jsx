import React from 'react';
import './EmployeeCard.css';

const EmployeeCard = ({ employee }) => (
  <div className="employee-card">
    <img src={employee.avatar} alt={`${employee.name} avatar`} className="employee-avatar" />
    <div className="employee-info">
      <h3 className="employee-name">{employee.name}</h3>
      <p className="employee-position">{employee.position}</p>
    </div>
    <div className="employee-actions">
      <button className="btn-edit">Edit</button>
      <button className="btn-delete">Delete</button>
    </div>
  </div>
);

export default EmployeeCard;
