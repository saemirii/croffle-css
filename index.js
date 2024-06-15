import fs from 'fs';
import path from 'path';
import { applyPastelColor } from './utils/applyPastelColor.js';
import { applyBlobAnimation } from './utils/applyBlobAnimation.js';

const cssFilePath = path.join(__dirname, 'croffle-css.css');

const cssContent = fs.readFileSync(cssFilePath, 'utf8');

module.exports = cssContent;


document.addEventListener('DOMContentLoaded', () => {
    applyPastelColor('.card', '#4287f5'); // Apply pastel color to elements with class "card"
    applyBlobAnimation('.blob-btn'); // Apply blob animation to buttons with the class "blob-btn"
});

// index.js

// Import the createCuteModal function
import { createCuteModal } from './cuteModal.js';

// Function to open modal
function openModal() {
    const title = 'Welcome!';
    const content = 'This is a cute modal example. Click close to dismiss it.';
    createCuteModal(title, content);
}

