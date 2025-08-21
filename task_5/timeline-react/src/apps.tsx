import React, { useState, useEffect } from 'react';
import header from './components/Header';
import Timeline from './components/Timeline';
import EventModal from './components/EventModal';
import FilterPanel from './components/FilterPanel'; // Optional
import { EventData } from './types';

function App() {
  const [events, setEvents] = useState<EventData[]>([]);
  const [selected, setSelected] = useState<EventData | null>(null);

  useEffect(() => {
    fetch('data/events.json')
      .then(res => res.json())
      .then(data => setEvents(data));
  }, []);

  return (
    <div>
      <Header />
      <FilterPanel />
      <Timeline
        events={events}
        onSelect={setSelected}
      />
      {selected && (
        <EventModal
          event={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
}

export default App;
