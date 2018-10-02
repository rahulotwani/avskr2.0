$('.contact').click(function(){
    $('.contact').css({opacity: 0});
    $(this).css({position: 'absolute', left: 10, opacity: 1});
    $(this).next().css({display: 'inline'});
    $('.back').css({opacity: 1});
});

$('.back').click(function(){
    $(this).css({opacity: 0});
    $('.contact').css({opacity: 1, position: ''});
    $('.contact-val').css({display: 'none'});
});