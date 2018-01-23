$(document).ready(function () {

    $(".nav li").on("click", function () {
        console.log("clicked on item");
        $(".nav li").removeClass("active");
        $(this).addClass("active");
    });

});

window.onscroll = function() {scrollFunction()};


// When the user clicks on the button, scroll to the top of the document
/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});
 /*Scroll to top when arrow up clicked END*/
