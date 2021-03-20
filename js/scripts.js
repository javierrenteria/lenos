$(function() {
    $(".carousel").carousel( { interval: 2000, pause: "false" } );
    $("#carouselButton").click(function(){                                      //This describes the function to be performed when the button is clicked
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {          //This describes the function for children of the carousel button that has the class "fa-pause"
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");         //This removes the class "fa-pause" 
            $("#carouselButton").children("i").addClass("fa-play");             //This adds the class "fa-play"
        } else{
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    });
});