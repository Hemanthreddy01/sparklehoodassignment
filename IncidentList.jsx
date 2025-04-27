
import React from 'react';

function IncidentList({ incidents }) {
  return (
    <div>
      {incidents.map((incident) => (
        <div key={incident.id} className="border p-4 mb-4 rounded-lg bg-gray-50">
          <h3>{incident.title}</h3>
          <p>Severity: {incident.severity}</p>
          <p>Reported on: {incident.reported_at}</p>
          <button className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600">
            View Details
          </button>
        </div>
      ))}
    </div>
  );
}

export default IncidentList;


