$(function(){

    $('.mainSlide').on('init afterChange', function(e, s, c){
        const current = $('.mainSlide .slick-current');

        console.log(c, s.slideCount);

        $('.num span').text(s.slideCount);
        $('.num strong').text(c ? (c + 1) : 1);

        current
         .addClass('on')
         .siblings()
         .removeClass('on')

        $('.mainVisual .menu li')
         .eq(0)
         .addClass('on');

        $('.mainVisual .menu li')
         .eq(c)
         .addClass('on')
         .siblings()
         .removeClass('on');
    });
    

    $('.mainSlide').slick({
        autoplay: true,
        arrows: false,
        // dots: true,
        pauseOnHover: false,
    });

    $('.mainVisual .arrows .left').on('click', function(){
        //슬라이드가 뒤로 가 : slick 홈페이지 참조.
        $('.mainSlide').slick('slickPrev')
    });

    $('.mainVisual .arrows .right').on('click', function(){
        //슬라이드가 뒤로 가 : slick 홈페이지 참조.
        $('.mainSlide').slick('slickNext')
    });

    $('.mainVisual .menu li').on('click', function(e){
        e.preventDefault();
        //번호가져오기 : 번호를 가져오는 것은 javascript에서 아주 중요한 일이다.
        const idx = $(this).index();
        $('.num').text(idx + 1);
        $('.mainSlide').slick('slickGoTo', idx)
        $(this).addClass('on').siblings().removeClass('on');
    });

    // $('.mainEvent .productSlide').slick({
    //     slidesToShow: 3,
    // });

    $('.productSlide').slick({
        slidesToShow: 3,
        arrows: false
    });

    $('.mainEvent .arrows .left').on('click', function(){
        //슬라이드가 뒤로 가 : slick 홈페이지 참조.
        $('.productSlide').slick('slickPrev')
    });

    $('.mainEvent .arrows .right').on('click', function(){
        //슬라이드가 뒤로 가 : slick 홈페이지 참조.
        $('.productSlide').slick('slickNext')
    });


    $('.toTop').on('click', function(){
        $('html, body').animate({scrollTop:0}, 1000)
    });

    $(window).on('scroll', function(){
        const sct = $(window).scrollTop();
        if(sct > 200) {
            $('.toTop').addClass('on');
        } else {
            $('.toTop').removeClass('on');
        }
    });

})