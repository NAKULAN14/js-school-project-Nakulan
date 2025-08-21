import React from 'react';

interface EventMarkerProps {
  year: string;
  title: string;
  imageURL: string;
  imageAlt: string;
  description: string;
  onClick: () => void;
}

const EventMarker: React.FC<EventMarkerProps> = ({ year, title, imageURL, imageAlt, description, onClick }) => (
  <article onClick={onClick} style={{ cursor: 'pointer' }}>
    <h2>{year}: {title}</h2>
    <figure>
      <img src={imageURL} alt={imageAlt} />
      <figcaption>{description}</figcaption>
    </figure>
  </article>
);

export default EventMarker;
