let first = ''
let last = ''
let user = $.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function (data) {
        first = user.responseJSON.results[0].name.first
        last = user.responseJSON.results[0].name.last

        const api =
            `<div class="card">
    <div class="card-img-container">
        <img class="card-img" src="https://placehold.it/90x90" alt="profile picture">
                    </div>
        <div class="card-info-container">
            <h3 id="name" class="card-name cap">` + first + " " + last + `</h3>
            <p class="card-text">email</p>
            <p class="card-text cap">city, state</p>
        </div>`


        $("#gallery").append(api);
    }
});








// const api2 =
//     `<form action="#" method="get">
//     <input type="search" id="search-input" class="search-input" placeholder="Search...">
//         <input type="submit" value="&#x1F50D;" id="serach-submit" class="search-submit">
//                         </form>`
// $(".seach-container").append(api2);

// const api3 =
//     `<div class="modal-container">
//     <div class="modal">
//         <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
//         <div class="modal-info-container">
//             <img class="modal-img" src="https://placehold.it/125x125" alt="profile picture">
//                 <h3 id="name" class="modal-name cap">name</h3>
//                 <p class="modal-text">email</p>
//                 <p class="modal-text cap">city</p>
//                 <hr>
//                     <p class="modal-text">(555) 555-5555</p>
//                     <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
//                     <p class="modal-text">Birthday: 10/21/2015</p>
//                     </div>`
// $("body").append(api3);


// function getJSON("https://randomuser.me/api/", "callback") {
//  const xhr = new XMLHttpRequest();
//  xhr.open('GET', url);
//  xhr.onload = () => {
//    if(xhr.status === 200) {
//      let data = JSON.parse(xhr.responseText);
//      return callback(data);
//    }
//  };
//  xhr.send();
// }