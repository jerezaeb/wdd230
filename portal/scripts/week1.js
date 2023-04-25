let currentYear = new Date().getFullYear ();
document.querySelector ("#year").textContent = currentYear;

let lastModif = new Date(document.lastModified);
document.querySelector ("#date").textContent = `Last Updated: ${lastModif}`