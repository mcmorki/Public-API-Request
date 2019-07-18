// let first = ''
// let last = ''

$.ajax({
    url: 'https://randomuser.me/api/?results=12',
    dataType: 'json',

    success: function (data) {
        // console.log(data)
        // data.results.forEach(employee => {
        //     console.log(employee.name.first);
        // console.log(user.responseJSON.results);

        let json = data.results

        for (let i = 0; i < 12; i++) {

            let first = json[i].name.first
            let last = json[i].name.last
            let email = json[i].email
            let city = json[i].location.city
            let state = json[i].location.state
            let picture = json[i].picture.thumbnail
            // let name = first + last
            // let phone = json.phone
            // let location = json.location
            // let birthday = json.dob.date


            $("#gallery").append(
                `<div class="card">
                    <div class="card-img-container">
                        <img class="card-img" src=${picture} alt="profile picture">
                                </div>
                        <div class="card-info-container">
                            <h3 id="name" class="card-name cap">${first} ${last}</h3>
                            <p class="card-text">${email}</p>
                            <p class="card-text cap">${city}, ${state}</p>
                         </div>
                     </div>`
            );


        }






        // $("body").append(`<div class="modal-container">
        //         <div class="modal">
        //             <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
        //             <div class="modal-info-container">
        //                 <img class="modal-img" src=${first} alt="profile picture">
        //                 <h3 id="name" class="modal-name cap">${first} ${last}</h3>
        //                 <p class="modal-text">${email}</p>
        //                 <p class="modal-text cap">${city}</p>
        //                 <hr>

        //             </div>
        //         </div>`)



    }

})


$('.search-container').append(
    `<form action="#" method="get">
    <input type="search" id="search-input" class="search-input" placeholder="Search...">
    <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
</form>`);


$("#gallery").on('click', '.card', function (e) {
    console.log("steve")
})














