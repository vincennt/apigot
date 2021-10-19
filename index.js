var dataAll = []
$(function() {
    $.ajax({




        url: 'https://thronesapi.com/api/v2/Characters',
        success: function(data) {

            data.forEach(function(character, index) {
                dataAll.push(character.fullName)
                $(".here").append(`<div class= "style-div col-4"><img class="size" src=${character.imageUrl} <p> ${character.fullName }</p><p>${character.title}</p></div>`)

            });


            $("form").submit(function(e) {
                e.preventDefault()
                    //fonction a exe.


            })

        }


    });


});