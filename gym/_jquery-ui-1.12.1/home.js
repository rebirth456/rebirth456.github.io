$(document).ready(function(){
    $('#icon').click(function(){
        $('ul').toggleClass('show')
    });

});
    $(".slider").owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:1500,
        autoplayHoverPause:true,
    });