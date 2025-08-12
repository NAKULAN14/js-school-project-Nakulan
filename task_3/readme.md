##  Project Overview
This is a responsive and interactive Timeline Web App showcasing key milestones in the history of computer development. Built with HTML, CSS, and Vanilla JavaScript, the project renders events dynamically from a JSON data file and displays details in a modal popup.

##  Project Structure
.
├── timeline.html # Main HTML file (Stage-1 static skeleton + JS hook)
├── styles.css # Styles for responsive layout, theme, and modal
├── script.js # JavaScript for fetching and displaying events
├── data/
│ └── events.json # Event data in JSON format
└── README.md # Project documentation

## Features
Responsive layout using CSS Grid and Flexbox.

Theme toggle (Light/Dark modes) without JS, using CSS variables.

Dynamic event rendering from data/events.json.

Clickable events that open a modal with:

Title and year

Image

Description

Category

Modal close support:

Close button (×)

Click outside the modal

## Responsive Design
Mobile: Single column layout.

Tablet: Two-column grid for the timeline.

Desktop: Wider gaps and improved spacing.

## Data Model (events.json)
Each event is an object containing:
{
"year": 1976,
"title": "Apple I",
"description": "The Apple I, hand-built by Steve Wozniak and sold by Steve Jobs, sparked the personal computing wave.",
"imageURL": "apple1.jpg",
"category": "Personal Computer"
}

## Usage
Open timeline.html in a browser.

Use the theme toggle to switch between Light/Dark modes.

Click on an event to see more details in the modal.

Close the modal by clicking × or outside the content area.

## Technologies Used
HTML5 — Semantic elements (<header>, <main>, <section>, <article>, <figure>)

CSS3 — Flexbox, Grid, responsive breakpoints, custom properties (CSS variables)

JavaScript (Vanilla) — Fetch API, DOM manipulation, event handling

JSON — External data source for events

## Current Stage: 1️⃣
The project is at Stage‑1 of development:

Static skeleton built with semantic HTML.

Responsive styling complete with CSS breakpoints.

Sample data file with 8 events created.

Vanilla JS interactivity implemented for loading events and modal.

Script loaded at the end of body for best performance.


## Author
Nakulan JS — Timeline of Computer Development


