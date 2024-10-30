/**
 * @file live-motor.js
 * @description short timout
 * @author Tom Artaud
 * @copyright
 */

let timeout;

document.getElementById("markdown").addEventListener("input", function () {
  clearTimeout(timeout);
  const markdownContent = this.value;

  timeout = setTimeout(() => {
    fetch("/preview", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `content=${encodeURIComponent(markdownContent)}`,
    })
      .then((response) => response.text())
      .then((html) => {
        document.getElementById("content-preview").innerHTML = html;
      });
  }, 0.9); // délai de 300ms
});

// Gérer la sauvegarde
document.getElementById("save-btn").addEventListener("click", function () {
  const content = document.getElementById("markdown").value;

  fetch("/save", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ content }),
  })
    .then((response) => response.json())
    .then((data) => alert(data.message))
    .catch((error) => console.error("Erreur:", error));
});
