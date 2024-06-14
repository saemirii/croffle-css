const fs = require('fs');
const path = require('path');

const cssFilePath = path.join(__dirname, 'cupcake.css');

const cssContent = fs.readFileSync(cssFilePath, 'utf8');

module.exports = cssContent;

// Import the cupcake-css styles
function convertToPastel(boxId, color) {
    // Convert the color to its pastel shade
    let pastelColor = tinycolor(color).lighten(30).saturate(10).toString();

    // Apply the pastel color to the specified element
    document.getElementById(boxId).style.backgroundColor = pastelColor;
}