import React from 'react';

const IncidentSort = ({ sortIncidents }) => {
  const handleSortChange = (e) => {
    sortIncidents(e.target.value);
  };

  return (
    <div className="incident-sort">
      <label>Sort by Reported Date:</label>
      <select onChange={handleSortChange}>
        <option value="Newest First">Newest First</option>
        <option value="Oldest First">Oldest First</option>
      </select>
    </div>
  );
};

export default IncidentSort;
