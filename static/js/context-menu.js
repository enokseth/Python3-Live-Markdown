/**
 * @file context-menu.js
 * @description short timout
 * @author Tom Artaud
 * @copyright 
 */

document.addEventListener('DOMContentLoaded', function () {
    const textarea = document.getElementById('markdown');
    const contextMenu = document.getElementById('context-menu');

    // Activer le menu contextuel personnalisé
    textarea.addEventListener('contextmenu', function (e) {
        e.preventDefault();
        const { clientX: mouseX, clientY: mouseY } = e;
        contextMenu.style.top = `${mouseY}px`;
        contextMenu.style.left = `${mouseX}px`;
        contextMenu.classList.remove('hidden');
    });

    // Masquer le menu contextuel lorsqu'on clique en dehors
    document.addEventListener('click', function () {
        contextMenu.classList.add('hidden');
    });

    // Appliquer l'action de formatage lors du clic sur le menu
    contextMenu.addEventListener('click', function (e) {
        if (e.target.tagName === 'LI') {
            const action = e.target.getAttribute('data-action');
            applyMarkdownAction(action);
        }
    });

    function applyMarkdownAction(action) {
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const selectedText = textarea.value.substring(start, end);
        let replacement = '';

        if (action === 'bold') {
            replacement = `**${selectedText}**`;
        } else if (action === 'italic') {
            replacement = `*${selectedText}*`;
        } else if (action === 'underline') {
            replacement = `<u>${selectedText}</u>`;
        }

        textarea.setRangeText(replacement);
    }
});
