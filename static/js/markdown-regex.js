/**
 * @file markdown-regex.js
 * @description short timout
 * @author Tom Artaud
 * @copyright 
 */


document.getElementById('markdown').addEventListener('input', function() {
    const content = document.getElementById('markdown').value;

    // Simple conversion de Markdown vers HTML
    const markdownToHtml = (text) => {
        return text
            .replace(/^###### (.*$)/gim, '<h6>$1</h6>')
            .replace(/^##### (.*$)/gim, '<h5>$1</h5>')
            .replace(/^#### (.*$)/gim, '<h4>$1</h4>')
            .replace(/^### (.*$)/gim, '<h3>$1</h3>')
            .replace(/^## (.*$)/gim, '<h2>$1</h2>')
            .replace(/^# (.*$)/gim, '<h1>$1</h1>')
            .replace(/\*\*(.*)\*\*/gim, '<b>$1</b>')
            .replace(/\*(.*)\*/gim, '<i>$1</i>')
            .replace(/!\[(.*?)\]\((.*?)\)/gim, "<img alt='$1' src='$2' />")
            .replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2'>$1</a>")
            .replace(/\n$/gim, '<br>');
    };

    // Convertit le texte et l'affiche dans la section preview
    document.getElementById('content-preview').innerHTML = markdownToHtml(content);
});