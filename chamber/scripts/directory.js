const url = 'https://github.com/jerezaeb/wdd230/blob/main/chamber/data.json';


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
      const business = jsonObject ['busines'];
      const cards = document.querySelector ('div.cards');
   
    prophets.forEach((prophet) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let logo = document.createElement('img');
      let address = document.createElement ('p');
      let phone = document.createElement ('p');
      let description = document.createElement ('p');

  
      // Build the h2 content out to show the prophet's full name - finish the template string
      h2.textContent = `${business.businessname}`;
  
      // Build the image portrait by setting all the relevant attribute
      logo.setAttribute('src', business.imagepath);
      logo.setAttribute('alt', `Logo of ${business.businessname}`);
      logo.setAttribute('loading', 'lazy');
      logo.setAttribute('width', '340');
      logo.setAttribute('height', '440');


      address.innerHTML = `Address: ${business.address}`;
      phone.innerHTML = `Phone: ${business.phone}`;
      description.innerHTML = `About: ${business.description}`;
    



  
      // Append the section(card) with the created elements
      card.append(h2);
      card.append(logo);
      cards.append(card);
      card.append(address);
      card.append(phone);
      card.append(description)
   


    }); // end of forEach loop
  // end of function expression
})

  
  
  