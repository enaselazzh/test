$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll < 300){
        $('.fixed-top').css('background', 'transparent');
    } else{
        $('.fixed-top').css('background', 'rgba(0, 0, 0, 0.4)');
    }
});
var owlCarousel = function(){
$('#slider2').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
};
var goToTop = function() {

    $('.js-gotop').on('click', function(event){
        
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $('html').offset().top
        }, 500, 'swing');
        
        return false;
    });

    $(window).scroll(function(){

        var $win = $(window);
        if ($win.scrollTop() > 200) {
            $('.js-top').addClass('active');
        } else {
            $('.js-top').removeClass('active');
        }

    });

};
$(function(){
    owlCarousel();
    goToTop();
});