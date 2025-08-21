import { EventData } from './types.js';
import { openModal } from './modal.js';

export function renderEvents(events: EventData[], timeline: HTMLElement, modal: HTMLElement): void {
  timeline.innerHTML = '';
  events.forEach(event => {
    const article = document.createElement('article');
    article.innerHTML = `
      <h2>${event.year}: ${event.title}</h2>
      <figure>
        <img src="${event.imageURL}" alt="${event.title}">
        <figcaption>${event.description}</figcaption>
      </figure>
    `;
    article.addEventListener('click', () => openModal(event, modal));
    timeline.appendChild(article);
  });
}
