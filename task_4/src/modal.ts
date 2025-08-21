import { EventData } from './types.js';

export function openModal(event: EventData, modal: HTMLElement): void {
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-btn">&times;</span>
      <h2>${event.year}: ${event.title}</h2>
      <img src="${event.imageURL}" alt="${event.title}" style="max-width:100%; border-radius:6px;">
      <p>${event.description}</p>
      <p><strong>Category:</strong> ${event.category}</p>
    </div>
  `;
  modal.style.display = 'block';
  modal.querySelector('.close-btn')?.addEventListener('click', () => closeModal(modal));
  window.addEventListener('click', (e) => outsideClick(e, modal));
}

function closeModal(modal: HTMLElement): void {
  modal.style.display = 'none';
  modal.innerHTML = '';
  window.removeEventListener('click', (e) => outsideClick(e, modal));
}

function outsideClick(e: MouseEvent, modal: HTMLElement): void {
  if (e.target === modal) {
    closeModal(modal);
  }
}
