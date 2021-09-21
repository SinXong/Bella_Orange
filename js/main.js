$(function() { 
    $('.header__burger').click(function() {
        $(this).toggleClass('header__menubtn_active');    
        $('.header__menu').slideToggle(500);
    });
    
    if($(document).width() > 1440){
        var $x = $('.foodApp__img').height();
        var $y = $('.download__img').height();
        $('.foodApp__container').css("height",$x);
        $('.download__container').css("height",$y);
        $('.download').css("height",$y);
        $('.foodApp__telephone').css("margin-top",($x - 150));
    }

});