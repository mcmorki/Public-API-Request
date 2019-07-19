let myJson
let container
let modal
let emptyArray = []




fetch("https://randomuser.me/api/?results=12&eng=")
    .then(function (response) {
        return response.json()
    }).then(function (myJson) {
        for (let i = 0; i < 12; i++) {
            picture = myJson.results[i].picture.large;
            email = myJson.results[i].email;
            city = myJson.results[i].location.city;
            state = myJson.results[i].location.state;

            first = myJson.results[i].name.first;
            last = myJson.results[i].name.last;


            //         let gallery = document.querySelector("#gallery");
            //         container = document.createElement('div');
            //         gallery.appendChild(container);
            //         container.innerHTML = `<div class="card">
            //       <div class="card-img-container">
            //           <img class="card-img" src= "${picture}" alt="profile picture">
            //       </div>
            //       <div class="card-info-container">
            //           <h3 id="name" class="card-name cap">${first} ${last}</h3>
            //           <p class="card-text">${email}</p>
            //           <p class="card-text cap">${city}, ${state}</p>
            //       </div>
            //   </div>`
            // emptyArray.push(container)



            $("#gallery").append(`<div class="card">
          <div class="card-img-container">
              <img class="card-img" src= "${picture}" alt="profile picture">
          </div>
          <div class="card-info-container">
              <h3 id="name" class="card-name cap">${first} ${last}</h3>
              <p class="card-text">${email}</p>
              <p class="card-text cap">${city}, ${state}</p>
          </div>
      </div>`);
        }
    })


document.getElementsByClassName("card").addEventListener("click", (e) => {
    alert("hi")
})
// emptyArray.push(container)

