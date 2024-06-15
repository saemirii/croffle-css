const fs = require('fs');
const path = require('path');

const cssFilePath = path.join(__dirname, 'cupcake.css');

const cssContent = fs.readFileSync(cssFilePath, 'utf8');

module.exports = cssContent;

/**
 * Convert a color to its pastel shade
 * @param {string} color - The original color in hex format (e.g., #FF6347)
 * @return {string} - The pastel shade of the color in hex format
 */
function toPastelColor(color) {
    // Convert hex color to RGB
    const rgb = hexToRgb(color);
    if (!rgb) return color;

    // Calculate pastel color by mixing with white
    const pastelRgb = {
        r: Math.round((rgb.r + 255) / 2),
        g: Math.round((rgb.g + 255) / 2),
        b: Math.round((rgb.b + 255) / 2)
    };

    // Convert RGB back to hex
    return rgbToHex(pastelRgb.r, pastelRgb.g, pastelRgb.b);
}

/**
 * Convert hex color to RGB
 * @param {string} hex - The hex color
 * @return {object} - The RGB representation
 */
function hexToRgb(hex) {
    // Remove the hash if present
    hex = hex.replace(/^#/, '');
    if (hex.length === 3) {
        hex = hex.split('').map(c => c + c).join('');
    }

    const bigint = parseInt(hex, 16);
    if (isNaN(bigint)) return null;

    return {
        r: (bigint >> 16) & 255,
        g: (bigint >> 8) & 255,
        b: bigint & 255
    };
}

/**
 * Convert RGB to hex
 * @param {number} r - Red value
 * @param {number} g - Green value
 * @param {number} b - Blue value
 * @return {string} - The hex color
 */
function rgbToHex(r, g, b) {
    return '#' + [r, g, b].map(x => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    }).join('');
}

/**
 * Apply pastel color to elements with a given selector
 * @param {string} selector - The CSS selector of elements to apply the pastel color
 * @param {string} color - The original color in hex format (e.g., #FF6347)
 */
function applyPastelColor(selector, color) {
    const pastelColor = toPastelColor(color);
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        element.style.backgroundColor = pastelColor;
        element.style.borderColor = pastelColor;
    });
}

// Example usage
document.addEventListener('DOMContentLoaded', () => {
    applyPastelColor('.card', '#FF6347'); // Apply pastel color to elements with class "card"
});

function applyBlobAnimation(buttonSelector) {
    const buttons = document.querySelectorAll(buttonSelector);

    buttons.forEach(button => {
        // Add the necessary classes
        button.classList.add('blob-btn');

        // Create the inner HTML structure
        button.innerHTML += `
            <span class="blob-btn__inner">
                <span class="blob-btn__blobs">
                    <span class="blob-btn__blob"></span>
                    <span class="blob-btn__blob"></span>
                    <span class="blob-btn__blob"></span>
                    <span class="blob-btn__blob"></span>
                </span>
            </span>
        `;

        // Add the SVG filter definition
        if (!document.getElementById('goo')) {
            const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            svg.setAttribute("version", "1.1");
            svg.innerHTML = `
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
                        <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
                    </filter>
                </defs>
            `;
            document.body.appendChild(svg);
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    applyBlobAnimation('.blob-btn'); // Apply blob animation to buttons with the class "blob-btn"
});
