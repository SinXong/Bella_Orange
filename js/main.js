$(function() { 
    $('.header__burger').click(function() {
        $("span").each(function(index) {
            if(index < 3){
                $(this).toggleClass('active')
            }
                
        })
        $('.header__menu').slideToggle(0500)
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