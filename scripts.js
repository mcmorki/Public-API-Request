// declared global variables 
let myJson
let container
let modal
let modalArray = []
fetch("https://randomuser.me/api/?results=12&eng=")
  .then(function (response) {
    return response.json()
  }).then(function (myJson) {
    for (let i = 0; i < 12; i++) {//declaring Json data to return all information for declared values 
      picture = myJson.results[i].picture.large;
      email = myJson.results[i].email;
      street = myJson.results[i].location.street;
      city = myJson.results[i].location.city;
      state = myJson.results[i].location.state;
      zip = myJson.results[i].location.postcode;
      first = myJson.results[i].name.first;
      last = myJson.results[i].name.last;
      number = myJson.results[i].cell;
      date = myJson.results[i].dob.date // regex to have the date appear as example: MM/DD/YYYY
      dob = date.match(/[0-9]{2}/g)[2] + "/" + date.match(/[0-9]{2}/g)[3] + "/" + date.match(/[0-9]{4}/);
      // dynamically creating a div container to html
      let gallery = document.querySelector("#gallery");
      container = document.createElement('div');
      container.innerHTML = `<div class="card">
          <div class="card-img-container">
              <img class="card-img" src= "${picture}" alt="profile picture">
          </div>
          <div class="card-info-container">
              <h3 id="name" class="card-name cap">${first} ${last}</h3>
              <p class="card-text">${email}</p>
              <p class="card-text cap">${city}, ${state}</p>
          </div>
      </div>`
      gallery.appendChild(container);
      //--------------------------------------------------------------------------------------------------------//
      modal = document.createElement('div')
      modal.innerHTML = `<div class="modal-container">
          <div class="modal">
              <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
              <div class="modal-info-container">
                  <img class="modal-img" src="${picture}" alt="profile picture">
                  <h3 id="name" class="modal-name cap">${first} ${last}</h3>
                  <p class="modal-text">${email}</p>
                  <p class="modal-text cap">${city}</p>
                  <hr>
                  <p class="modal-text">${number}</p>
                  <p class="modal-text">${street}, ${city}, OR ${zip}</p>
                  <p class="modal-text">Birthday: ${dob}</p>
              </div>
          </div>`
      modalArray.push(modal)// places the modal in an array to be called for later use
      //--------------------------------------------------------------------------------------------------------//
      // when the employee cards are selected displays the emplyoees personal modal
      container.addEventListener("click", (e) => {
        container.parentElement.appendChild(modalArray[i])
        modalArray[i].style.display = "block";
        // allows the user to exit modal by clicking anywhere outside the modal card
        modalArray[i].addEventListener("click", () => {
          modalArray[i].style.display = "none"
        })
      })
    }
  })
$('.search-container').append(
  `<form action="#" method="get">
    <input type="search" id="search-input" class="search-input" placeholder="Search...">
    <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
</form>`);