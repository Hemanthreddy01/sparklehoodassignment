import React from 'react';

const IncidentDetail = ({ incident }) => {
  return (
    <div className="incident-detail">
      <h2>{incident.title}</h2>
      <p><strong>Severity:</strong> {incident.severity}</p>
      <p><strong>Reported on:</strong> {new Date(incident.reported_at).toLocaleDateString()}</p>
      <p><strong>Description:</strong> {incident.description}</p>
    </div>
  );
};

export default IncidentDetail;
