let currentYear = new Date().getFullYear ();
document.querySelector ("#year").textContent = currentYear;

let lastModif = new Date(document.lastModified);
document.querySelector ("#date").textContent = `Last Updated: ${lastModif}`

const hamButton = document.querySelector('#hamButton');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('responsive');
});