import React from 'react';

interface EventModalProps {
  event: {
    year: string;
    title: string;
    imageURL: string;
    imageAlt: string;
    description: string;
  };
  onClose: () => void;
}

const EventModal: React.FC<EventModalProps> = ({ event, onClose }) => (
  <div className="modal" onClick={onClose}>
    <div className="modal-content" onClick={e => e.stopPropagation()}>
      <button className="close-btn" aria-label="Close modal" onClick={onClose}>×</button>
      <h2>{event.year}: {event.title}</h2>
      <img src={event.imageURL} alt={event.imageAlt} style={{ maxWidth: '100%', borderRadius: 6 }} />
      <p>{event.description}</p>
    </div>
  </div>
);

export default EventModal;
