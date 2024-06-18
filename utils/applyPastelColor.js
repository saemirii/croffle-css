import { toPastelColor } from './convertToPastel';

/**
 * Apply pastel color to elements with a given selector
 * @param {string} selector - The CSS selector of elements to apply the pastel color
 * @param {string} color - The original color in hex format (e.g., #FF6347)
 */
export function applyPastelColor(selector, color) {
    const pastelColor = toPastelColor(color);
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        element.style.backgroundColor = pastelColor;
        element.style.borderColor = pastelColor;
    });
}
