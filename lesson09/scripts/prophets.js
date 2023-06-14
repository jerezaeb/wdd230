const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';


// async function getProphetData(url) {
//    const response = await fetch(url);
//     const data = await response.json();
//     console.table(data.prophets);
//     //displayProphets(data.prophets);
//   }

fetch (url)
    .then (function(response) {
        return response.json();
        })
    .then (function (jsonObject){
      const prophets = jsonObject ['prophets'];
      const cards = document.querySelector ('div.cards');
   
    prophets.forEach((prophet) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let portrait = document.createElement('img');
  
      // Build the h2 content out to show the prophet's full name - finish the template string
      h2.textContent = `${prophet.name} ${prophet.lastname}`;
  
      // Build the image portrait by setting all the relevant attribute
      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');
  
      // Append the section(card) with the created elements
      card.append(h2);
      card.append(portrait);
      cards.append(card);
    }); // end of forEach loop
  // end of function expression
})

  
  
  