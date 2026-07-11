/*PAGE LOADER*/

$(window).on("load", function () {
    $(".page_loader").fadeOut(600);
});

/*HEADER*/

const $window = $(window);
const $document = $(document);
const $header = $(".header_section");
const $toggle = $(".header_section_toggle");
const $nav = $(".header_section_nav");

/*MOBILE MENU*/

$toggle.on("click", function () {
    $toggle.toggleClass("active");
    $nav.toggleClass("active");
});

/*CLOSE MENU ON LINK CLICK*/

$nav.find("a").on("click", function () {
    if ($window.width() < 992) {
        $toggle.removeClass("active");
        $nav.removeClass("active");
    }
});

/*CLOSE MENU ON OUTSIDE CLICK*/

$document.on("click", function (e) {
    if (!$(e.target).closest(".header_section_wrapper").length) {
        $toggle.removeClass("active");
        $nav.removeClass("active");
    }
});

/*STICKY HEADER*/

$window.on("scroll", function () {
    $header.toggleClass("header_sticky", $window.scrollTop() > 50);
});