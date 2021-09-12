$(function() { 
    $('.header__burger').click(function() {
        $("span").each(function(index) {
            if(index < 3){
                $(this).toggleClass('active')
            }
                
        })
        $('.header__menu').slideToggle(0500)
    })
});