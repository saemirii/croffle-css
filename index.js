import fs from 'fs';
import path from 'path';
import { applyPastelColor } from './utils/applyPastelColor.js';
import { applyBlobAnimation } from './utils/applyBlobAnimation.js';

export { applyPastelColor } from './utils/applyPastelColor.js';
export { convertToPastel } from './utils/convertToPastel.js';
export { cutemodal } from './utils/cutemodal.js';

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

const btn = document.getElementById("popup-modal");

btn.addEventListener("click", triggerModal);

function triggerModal(e) {
  const modal = document.querySelector(
    `[data-modal='${e.target.dataset.modal}-modal']`
  );

  const modalCloseBtn = modal.querySelector("button.close");

  modal.style.display = "flex";

  modalCloseBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
}
