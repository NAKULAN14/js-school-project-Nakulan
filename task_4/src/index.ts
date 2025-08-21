
import { fetchEvents } from './fetcher.js';
import { renderEvents } from './renderer.js';
import { openModal } from './modal.js';
import { EventData } from './types.js';
document.addEventListener('DOMContentLoaded', async () => {
  const timeline = document.getElementById('timeline') as HTMLElement;
  const modal = document.getElementById('modal') as HTMLElement;

  try {
    const events: EventData[] = await fetchEvents();
    renderEvents(events, timeline, modal);
  } catch (error) {
    console.error('Error loading events:', error);
  }
});
