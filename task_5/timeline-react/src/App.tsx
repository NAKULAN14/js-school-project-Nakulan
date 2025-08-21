import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import FilterPanel from './components/FilterPanel';
import Timeline from './components/Timeline';
import EventModal from './components/EventModal';
import './App.css';

function App() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [darkTheme, setDarkTheme] = useState(false);

  
  useEffect(() => {
    if (darkTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkTheme]);

  return (
    <>
      <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <FilterPanel />
      <Timeline onSelect={setSelectedEvent} />
      {selectedEvent && (
        <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </>
  );
}

export default App;
