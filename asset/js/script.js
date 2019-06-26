$(document).ready(function () {
    $("#menu-phone").click(function (e) {
        $("#menu").toggleClass("widths")
    });

    $(window).scroll(function () {
        $("#menu").removeClass("widths");
        if ($(this).scrollTop() > 70) {
            $("nav").addClass("fix");
        }
        else {
            $("nav").removeClass("fix");
        }
    });
});