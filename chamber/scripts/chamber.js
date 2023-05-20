let currentYear = new Date().getFullYear ();
document.querySelector ("#year").textContent = currentYear;

let lastModif = new Date(document.lastModified);
document.querySelector ("#date").textContent = `Last Updated: ${lastModif}`

const hamButton = document.querySelector('#hamButton');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('responsive');
});


  function updateDate() {
    var now = new Date();
    var options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    var formattedDate = now.toLocaleDateString('en-US', options);
    
    document.getElementById("day").textContent = formattedDate;
  }
  
  updateDate();