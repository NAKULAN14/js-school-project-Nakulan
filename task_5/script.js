document.addEventListener("DOMContentLoaded", () => {
  const timeline = document.getElementById("timeline");
  const modal = document.getElementById("modal");

  // FETCH EVENTS FROM JSON
  fetch("data/events.json")
    .then(res => res.json())
    .then(events => {
      renderEvents(events);
    })
    .catch(err => console.error("Error loading events:", err));

  // RENDER EVENTS
  function renderEvents(events) {
    timeline.innerHTML = ""; // Clear before render
    events.forEach(event => {
      const article = document.createElement("article");
      article.innerHTML = `
        <h2>${event.year}: ${event.title}</h2>
        <figure>
          <img src="${event.imageURL}" alt="${event.title}">
          <figcaption>${event.description}</figcaption>
        </figure>
      `;

      // Click opens modal
      article.addEventListener("click", () => openModal(event));

      timeline.appendChild(article);
    });
  }

  // OPEN MODAL
  function openModal(event) {
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close-btn">&times;</span>
        <h2>${event.year}: ${event.title}</h2>
        <img src="${event.imageURL}" alt="${event.title}" style="max-width:100%; border-radius:6px;">
        <p>${event.description}</p>
        <p><strong>Category:</strong> ${event.category}</p>
      </div>
    `;
    modal.style.display = "block";

    // Attach close handler
    modal.querySelector(".close-btn").addEventListener("click", closeModal);
    window.addEventListener("click", outsideClick);
  }

  // CLOSE MODAL
  function closeModal() {
    modal.style.display = "none";
    modal.innerHTML = "";
    window.removeEventListener("click", outsideClick);
  }

  function outsideClick(e) {
    if (e.target === modal) {
      closeModal();
    }
  }
});
