$(function(){
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var elemPos = $(this).offset().top,
                scroll = $(window).scrollTop(),
                windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 100){
                $(this).addClass('scrollin');
            }
        });
    });
    $(".warp1").on('click', function(){
        $("html,body").animate({scrollTop:$(".details1").offset().top}, 700);
    });
    $(".warp2").on('click', function(){
        $("html,body").animate({scrollTop:$(".details2").offset().top}, 700);
    });
    $(".warp3").on('click', function(){
        $("html,body").animate({scrollTop:$(".details3").offset().top}, 700);
    });
    $(".warp4").on('click', function(){
        $("html,body").animate({scrollTop:$(".details4").offset().top}, 700);
    });
    $(".top-btn").click(function (){
        $("html,body").animate({
            scrollTop: 0
        }, 700);
    });
});
