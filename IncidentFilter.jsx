import React from 'react';

const IncidentFilter = ({ filterIncidents }) => {
  const handleFilterChange = (e) => {
    filterIncidents(e.target.value);
  };

  return (
    <div className="incident-filter">
      <label>Filter by Severity:</label>
      <select onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
    </div>
  );
};

export default IncidentFilter;
