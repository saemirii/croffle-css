/**
 * Apply blob animation to buttons with a given selector
 * @param {string} buttonSelector - The CSS selector of buttons to apply the animation
 */
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

module.exports = { applyBlobAnimation };
