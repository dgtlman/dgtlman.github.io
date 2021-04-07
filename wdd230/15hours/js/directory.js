const requestURL = 'json/directory.json';

fetch(requestURL)
  .then(function(response){
    return response.json();
  })
  .then(function (jsonObject) {
  
      //   console.table(jsonObject);
      const directory = jsonObject['directory'];

    // For loop for cycling through each profile
    for (let i = 0; i < directory.length; i++ ) {

          //  define variables
        let link = document.createElement('a');
        link.setAttribute("href", directory[i].link);
        let card = document.createElement('div');
        card.setAttribute("class","item");
        let h2 = document.createElement('h2');
        let phone = document.createElement('p');
        let address= document.createElement('p');
        let image = document.createElement('img');

        // output 
        h2.textContent = directory[i].name;
        phone.textContent = directory[i].phone;
        address.textContent = directory[i].address;
        image.setAttribute('src', directory[i].imageurl);
        image.setAttribute('alt', directory[i].name + ' Logo');

        link.appendChild(card);
        card.appendChild(image);
        card.appendChild(h2);
        card.appendChild(address);
        card.appendChild(phone);
        
        // send to html         
        document.querySelector('div.cards').appendChild(link);
  }
});