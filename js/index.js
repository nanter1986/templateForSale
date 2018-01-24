$(document).ready(function () {

    $(".nav li").on("click", function () {
        console.log("clicked on item");
        $(".nav li").removeClass("active");
        $(this).addClass("active");
    });

    $(window).scroll(function() {
        var height = $(window).scrollTop();
        if (height > 100) {
            $('#back2Top').fadeIn();
        } else {
            $('#back2Top').fadeOut();
        }
    });

    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});

//window.onscroll = function() {scrollFunction()};


// When the user clicks on the button, scroll to the top of the document
/*Scroll to top when arrow up clicked BEGIN*/

// $(document).ready(function() {
//
//
// });
 /*Scroll to top when arrow up clicked END*/
