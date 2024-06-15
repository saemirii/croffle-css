/**
 * Create a cute modal or popup.
 * @param {string} title - Title of the modal.
 * @param {string} content - Content of the modal.
 */
export function createCuteModal(title, content) {
    // Create modal elements
    const modalWrapper = document.createElement('div');
    modalWrapper.classList.add('cute-modal-wrapper');

    const modal = document.createElement('div');
    modal.classList.add('cute-modal');

    const modalTitle = document.createElement('h2');
    modalTitle.textContent = title;
    modalTitle.classList.add('cute-modal-title');

    const modalContent = document.createElement('p');
    modalContent.textContent = content;
    modalContent.classList.add('cute-modal-content');

    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.classList.add('cute-modal-close-btn');
    closeButton.addEventListener('click', () => {
        modalWrapper.remove();
    });

    // Append elements to modal
    modal.appendChild(modalTitle);
    modal.appendChild(modalContent);
    modal.appendChild(closeButton);

    modalWrapper.appendChild(modal);
    document.body.appendChild(modalWrapper);
}
