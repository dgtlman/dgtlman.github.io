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
        let h3 = document.createElement('h3');
        let phone = document.createElement('p');
        let address= document.createElement('p');
        let image = document.createElement('img');

        // output 
        h3.textContent = directory[i].name;
        phone.textContent = /*'Phone: '+ */ directory[i].phone;
        address.textContent = /*'Address: ' + */ directory[i].address;
        image.setAttribute('src', directory[i].imageurl);
        image.setAttribute('alt', directory[i].name + 'Logo');

        link.appendChild(card);
        card.appendChild(h3);
        card.appendChild(phone);
        card.appendChild(address);
        card.appendChild(image);
        
        // send to html         
        document.querySelector('div.cards').appendChild(link);
  }
});