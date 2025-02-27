import React from 'react';
import './EmployeeCard.css';

const EmployeeCard = ({ employee }) => {
  return (
    <div className="employee-card">
      <div className="employee-header">
        <img
          src={employee.image || 'https://via.placeholder.com/100'}
          alt={`${employee.name}'s profile`}
          className="employee-avatar"
        />
        <div className="employee-info">
          <h3>{employee.name}</h3>
          <p>Employee ID: {employee.employeeId}</p>
          <p>Department: {employee.department}</p>
          <p>Position: {employee.position}</p>
        </div>
      </div>
      <div className="employee-details">
        <p><strong>Father Name:</strong> {employee.fatherName}</p>
        <p><strong>Specialized In:</strong> {employee.specializedIn}</p>
        <p><strong>Salary:</strong> {employee.salary}</p>
        <p><strong>Phone:</strong> {employee.phone}</p>
        <p><strong>DOB:</strong> {employee.dob}</p>
        <p><strong>Address:</strong> {employee.address}</p>
        <p><strong>Nationality:</strong> {employee.nationality}</p>
        <p><strong>Date of Joining:</strong> {employee.dateOfJoining}</p>
      </div>
      <div className="employee-leaves">
        <h4>Leaves Summary</h4>
        <p>Total Leaves: {employee.leaves.total}</p>
        <p>Approved: {employee.leaves.approved}</p>
        <p>Pending: {employee.leaves.pending}</p>
        <p>Rejected: {employee.leaves.rejected}</p>
      </div>
    </div>
  );
};

export default EmployeeCard;
