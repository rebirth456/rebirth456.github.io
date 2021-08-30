$(document).ready(function () {
    $('#icon').click(function () {
        $('ul').toggleClass('show')
    });
});
$(".owl-carousel").owlCarousel({
    items: 2,
    margin: 20,
    loop: true,
    center: true,
    dots: false
});