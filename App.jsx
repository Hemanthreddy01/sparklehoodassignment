import React, { useState } from 'react';
import IncidentList from './components/IncidentList';
import IncidentFilter from './components/IncidentFilter';
import IncidentSort from './components/IncidentSort';
import AddIncidentForm from './components/AddIncidentForm';
import './app.css';

const App = () => {
  const [incidents, setIncidents] = useState([
    { id: 1, title: 'Biased Recommendation Algorithm', description: 'Algorithm consistently favored certain demographics...', severity: 'Medium', reported_at: '2025-03-15T10:00:00Z' },
    { id: 2, title: 'LLM Hallucination in Critical Info', description: 'LLM provided incorrect safety procedure information...', severity: 'High', reported_at: '2025-04-01T14:30:00Z' },
    { id: 3, title: 'Minor Data Leak via Chatbot', description: 'Chatbot inadvertently exposed non-sensitive user metadata...', severity: 'Low', reported_at: '2025-03-20T09:15:00Z' },
  ]);

  const [filteredIncidents, setFilteredIncidents] = useState(incidents);

  const filterIncidents = (severity) => {
    if (severity === 'All') {
      setFilteredIncidents(incidents);
    } else {
      setFilteredIncidents(incidents.filter(incident => incident.severity === severity));
    }
  };
<html><br></br><br></br></html>
  const sortIncidents = (order) => {
    const sorted = [...filteredIncidents].sort((a, b) => {
      if (order === 'Newest First') {
        return new Date(b.reported_at) - new Date(a.reported_at);
      } else {
        return new Date(a.reported_at) - new Date(b.reported_at);
      }
    });
    setFilteredIncidents(sorted);
  };

  const addIncident = (newIncident) => {
    setIncidents([...incidents, newIncident]);
    setFilteredIncidents([...incidents, newIncident]);
  };

  return (
    <div>
      <h1>AI Safety Incident Dashboard</h1>
      <IncidentFilter filterIncidents={filterIncidents} />
      <IncidentSort sortIncidents={sortIncidents} />
      <AddIncidentForm addIncident={addIncident} />
      <IncidentList incidents={filteredIncidents} />
    </div>
  );
};

export default App;
