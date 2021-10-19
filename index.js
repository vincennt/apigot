$(function() {
    $.ajax({
        url: 'https://thronesapi.com/api/v2/Characters',
        success: function(data, ) {
            // var allData = data
            data.forEach(function(character, index) {
                $(".here").append(`<div class= "style-div col-4"><img class="size" src=${character.imageUrl} <p> ${character.fullName }</p><p>${character.title}</p></div>`)


                // function filter(fullName) {
                //     const filteredNames = character.filter(function(data) {
                //         console.log(filteredNames, fullName);
                //     })

                // }

            });




        }

    });


});

function filter() {
    console.log("hi");
}