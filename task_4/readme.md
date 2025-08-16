# Timeline of Computer Development - TypeScript Modular Project

This project is a timeline web app showcasing key milestones in computer development, built using TypeScript with modular code and native ES modules. The app fetches event data from a JSON file and renders a clickable timeline with modals for details.

---

## Project Structure

/your-project-root
/src # TypeScript source files
fetcher.ts
index.ts
modal.ts
renderer.ts
types.ts
/data # JSON data
events.json
/dist # Compiled JavaScript output (auto-generated)
index.html # Main HTML file
styles.css # Styling
tsconfig.json # TypeScript config
package.json # npm scripts and dependencies
images/ # Timeline images (e.g., eniac.jpg, ibm701.jpg)


## Setup & Build Instructions

1. **Install dependencies**  
   Ensure you have Node.js installed, then run:
npm install



2. **Compile TypeScript**  
Compile `.ts` files into JavaScript inside the `dist` folder:
npm run build



3. **Serve the Project**  
Because the app uses `fetch()` for `events.json`, you must serve it via HTTP:  
- Using VS Code Live Server extension (recommended)  
- Or run a local server in terminal:
npx serve
or
python -m http.server


Open the served URL (e.g., `http://localhost:5000`) in your browser.

---

## Important Notes

- Imports in TypeScript files include `.js` extensions for proper ES module loading in the browser.  
Example:  
import { fetchEvents } from './fetcher.js';


- The JSON data file must be located at `data/events.json`.  
- Image file names must exactly match those referenced in the JSON.
- The script tag in `index.html` must reference the compiled JavaScript with `type="module"`:  
<script type="module" src="dist/index.js"></script>
text

---

## Development Tips

- Use VS Code for syntax highlighting, error checking, and IntelliSense.
- Run `npm run build` after changes in `.ts` files to update the compiled `.js`.
- Always test your app through a local server to avoid CORS issues with `fetch()`.

---
