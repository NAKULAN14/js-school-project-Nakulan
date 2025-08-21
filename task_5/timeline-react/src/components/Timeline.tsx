import React, { useState, useEffect } from 'react';
import EventMarker from './EventMarker';

interface EventData {
  year: string;
  title: string;
  imageURL: string;
  imageAlt: string;
  description: string;
}

interface TimelineProps {
  onSelect: (event: EventData) => void;
}

const Timeline: React.FC<TimelineProps> = ({ onSelect }) => {
  const [events, setEvents] = useState<EventData[]>([]);

  useEffect(() => {
    fetch('/data/events.json')
      .then(res => res.json())
      .then(setEvents)
      .catch(console.error);
  }, []);

  return (
    <section id="timeline">
      {events.map((event, index) => (
        <EventMarker
          key={index}
          year={event.year}
          title={event.title}
          imageURL={event.imageURL}
          imageAlt={event.imageAlt}
          description={event.description}
          onClick={() => onSelect(event)}
        />
      ))}
    </section>
  );
};

export default Timeline;
