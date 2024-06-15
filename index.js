const fs = require('fs');
const path = require('path');
const { applyPastelColor } = require('./utils/applyPastelColor');
const { applyBlobAnimation } = require('./utils/applyBlobAnimation');

const cssFilePath = path.join(__dirname, 'cupcake.css');

const cssContent = fs.readFileSync(cssFilePath, 'utf8');

module.exports = cssContent;

// Example usage
document.addEventListener('DOMContentLoaded', () => {
    applyPastelColor('.card', '#FF6347'); // Apply pastel color to elements with class "card"
    applyBlobAnimation('.blob-btn'); // Apply blob animation to buttons with the class "blob-btn"
});
