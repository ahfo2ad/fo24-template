$(function () {

    $(window).scroll(function () {

        if ($(window).scrollTop() >= $(".articles").offset().top) {

            $(".arrow").fadeIn();
        }
        else {

            $(".arrow").fadeOut();
        }
    });

    $(".arrow").click(function() {

        $(window).scrollTop(0);
    });

});