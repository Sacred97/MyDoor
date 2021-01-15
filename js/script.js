$(document).ready(function(){

    $('.header__burger').click(function(){
        $('.header__burger').toggleClass('active');   
    });

    window.addEventListener("resize", function() {
        if ( $(window).width() > 1000 ) {
            $('.header__menu')[0].style.display = 'block';
        } else {
            $('.header__menu')[0].style.display = 'none';
        }
    });

    // Параметры для Слик Слайдера

    $('.us-working__slider').slick({
        slidesToShow: 2,
        rows: 2,
        variableWidth: true
    });

})

// Функция для развертывания бургера

function menu() {

    if($('.header__menu')[0].style.display == "block") {
        $('.header__menu').slideUp(500);
    } else {
        $('.header__menu').slideDown(500); 
    }

    $('.header__burger').attr('disabled','disabled');
    setTimeout( () => {$('.header__burger').removeAttr('disabled')}, 500);

}

$('.header__item').on('click', function(){

    if( $(window).width()<=1000){
        menu();
        $('.header__burger').removeClass('active')
    }

});

// Анимация при скролле 

document.addEventListener('DOMContentLoaded', function(){

    $('.main-page__window-main').addClass('animate__animated animate__bounceInLeft animate__delay-1s');
    $(".services__block").css('opacity', 0);
    $(".us-working__title").css('opacity', 0);
    $(".us-working__slider").css('opacity', 0);
    $(".price__title").css('opacity', 0);
    $(".price__table").css('opacity', 0);

});

$(document).ready(function(){
    
    $(".header__menu").on("click","a", function (event) {
    
        event.preventDefault();
        let id  = $(this).attr('href'),
        top = $(id).offset().top - 112;  
        $('body,html').animate({scrollTop: top}, 500);
               
    });

    $(".main-page__container").on("click","a", function (event) {
    
        event.preventDefault();
        let id  = $(this).attr('href'),
        top = $(id).offset().top - 112; 
        $('body,html').animate({scrollTop: top}, 500);
               
    });

    /*$('.header__item').click(function( e ){
        e.preventDefault();
        $('.header__menu').find('.header__item_active').removeClass('header__item_active');
        $(this).addClass('header__item_active');
    });*/

    $(window).scroll(function() {

        let height = $(window).scrollTop();   

        if( height === 0 && height < $('.services').offset().top - $('.header').height() ){
            $('.header__list').children('li').eq(0).addClass('header__item_active');
        } else {
            $('.header__menu').find('.header__item_active').removeClass('header__item_active');
        }

        if( height >= $('.services').offset().top - $('.header').height() - 1 && height < $('.us-working').offset().top - $('.header').height() - 1 ) {
            $('.header__list').children('li').eq(1).addClass('header__item_active');
        } else {
            //$('.header__menu').find('.header__item_active').removeClass('header__item_active');
        }

        if( height >= $('.us-working').offset().top - $('.header').height() - 1 && height < $('.price').offset().top - $('.header').height() - 1 ) {
            $('.header__list').children('li').eq(2).addClass('header__item_active');
        } else {
            //$('.header__menu').find('.header__item_active').removeClass('header__item_active');
        }

        if( height >= $('.price').offset().top - $('.header').height() - 1 && height < $('.contacts').offset().top + $('.header').height() - 1 ) {
            $('.header__list').children('li').eq(3).addClass('header__item_active');
        } else {
            //$('.header__menu').find('.header__item_active').removeClass('header__item_active');
        }

    }); 
});

$(document).ready(function(){

    $(window).scroll(function(){
        let topHeight = $(window).scrollTop();
        console.log(topHeight)

        if ( topHeight >= $(".services__block").eq(0).offset().top / 2 ){
            $(".services__block").slice(0, 2).addClass('animate__animated animate__fadeInUp').css('opacity', 1);
        }
        if ( topHeight >= $(".services__block").eq(3).offset().top / 1.5 ){
            $(".services__block").slice(2, 4).addClass('animate__animated animate__fadeInUp').css('opacity', 1);
        }
        if ( topHeight >= $(".us-working__container").children('.us-working__title').offset().top / 1.4 ){
            $(".us-working__title").addClass('animate__animated animate__fadeInLeft').css('opacity', 1);
        }
        if ( topHeight >= $(".us-working__container").children('.us-working__slider').offset().top / 1.4 ){
            $(".us-working__slider").addClass('animate__animated animate__fadeInRight').css('opacity', 1);
        }
        if ( topHeight >= $(".price__container").children('.price__title').offset().top / 1.3 ){
            $(".price__title").addClass('animate__animated animate__fadeInLeft').css('opacity', 1);
        }
        if ( topHeight >= $(".price__container").children('.price__table').offset().top / 1.3 ){
            $(".price__table").addClass('animate__animated animate__fadeInRight').css('opacity', 1);
        }
    });

    if (window.pageYOffset >= $(".services__block").eq(0).offset().top / 2 && !$(".services__block").hasClass('animate__animated') ){
        $(".services__block").slice(0, 2).addClass('animate__animated animate__fadeInUp').css('opacity', 1);
    }
    if (window.pageYOffset >= $(".services__block").eq(3).offset().top / 1.5 && !$(".services__block").hasClass('animate__animated') ){
        $(".services__block").slice(0, 2).addClass('animate__animated animate__fadeInUp').css('opacity', 1);
        $(".services__block").slice(2, 4).addClass('animate__animated animate__fadeInUp').css('opacity', 1);
    }
    if (window.pageYOffset >= $(".us-working__container").children('.us-working__slider').offset().top / 1.4 && !$(".us-working__slider").hasClass('animate__animated') ){
        $(".services__block").slice(2, 4).addClass('animate__animated animate__fadeInUp').css('opacity', 1);
        $(".us-working__title").addClass('animate__animated animate__fadeInLeft').css('opacity', 1);
        $(".us-working__slider").addClass('animate__animated animate__fadeInRight').css('opacity', 1);
        $(".price__title").addClass('animate__animated animate__fadeInLeft').css('opacity', 1);
        $(".price__table").addClass('animate__animated animate__fadeInRight').css('opacity', 1);
    }

});

let myMap;

// Дождёмся загрузки API и готовности DOM.

function init () {
    myMap = new ymaps.Map("mapYand", {
        center: [59.897880, 30.513956],
        zoom: 17
    }, {
        searchControlProvider: 'yandex#search'
    }),
    myPlacemark = new ymaps.Placemark([59.898181, 30.514031], {
    });
    
    myMap.geoObjects.add(myPlacemark);
    
}


function PopUpShow(){
    $('#popup').css("opacity", 1);
    $('#popup').css("z-index", 100);
    ymaps.ready(init);

}

function PopUpHide(){
    $('#popup').css("opacity", 0);
    $("#popup").css("z-index", -100);
    myMap.destroy()
}

const textUnderImg = [
    {title: "Замена зеркала на двери Гранит"},
    {title: "Восстановление двери и Замена замка Cisa"},
    {title: "Замена замков и сварочные работы по восстановлению полотна двери"},
    {title: "Замена зеркала на двери Эльбор"},
    {title: "Восстановление двери после МЧС"},
    {title: "Выправление двери после лома"},
    {title: "Замена замка (без названия) на замок Гардиан"},
    {title: "Восстановление и усиление двери после криминального вскрытия"},
    {title: "Установка электромеханического замка на дверь Гранит"},
    {title: "Установка замка барьер на общую межквартирную дверь"}
]

$('.us-working__slide-item').click(
    function(){
        let img = $(this).find('img');
        let src = img.attr('src');
        const pattern1 = /\d/;
        let urlSrc = src.search(pattern1);
        let number = src.slice(urlSrc);
        let text = textUnderImg[parseInt(number,10)-1].title;
        console.log(number);
        $("body").append(
            `
            <div class="popup-img">
                <div class="popup-img__background"></div>
                <img src="${src}" class="popup-img__img" />
                <p>${text}</p>
            </div>
            `
        );
        $('.popup-img').fadeIn(800).css('display','flex');
        $('.popup-img__background').click(
            function(){
                $('.popup-img').fadeOut(800);
                setTimeout(
                    function(){
                        $('.popup-img').remove()
                    },800);
            });
    }
);

let header = $('.header');
let scrollPrev = 0;

function scrollHideHeader(){
    $(window).scroll(function() {
        let scrolled = $(window).scrollTop();
     
        if ( scrolled > 100 && scrolled > scrollPrev) {
           header.css("margin-top", "-70px");

        } else {
            header.css("margin-top", 0);
        }
        scrollPrev = scrolled;
        shag = 100;
    });
}

if($(window).width()<1000){
    scrollHideHeader();
}


header.click(function(){
    header.css("margin-top",0);
});

function slickSlide (){

    let widthList = parseInt($('.slick-list').css('width'));
    $('.slick-slide').css('width', widthList/2);

}

window.addEventListener("resize", function() {
    slickSlide();
});

$(document).ready(function(){
    slickSlide();
})