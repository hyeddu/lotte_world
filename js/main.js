$(document).ready(function(){

    let lang = $('#util .lang a'),
        langList = lang.next('.list');
    
    ////언어선택
    
    lang.click(function(){
        if($(this).hasClass('on')){
            $(this).removeClass('on');
            langList.stop().fadeOut(300);
        }else{
            $(this).addClass('on');
            langList.stop().fadeIn(300);
        }
    });

    /////gnb
    let gnbUL = $('#header #gnb'),
        gnbLI = gnbUL.children();
    
    gnbLI.mouseenter(function(){
        $(this).children('.openDiv').show();
    });
    gnbLI.mouseleave(function(){
        $(this).children('.openDiv').hide();
    });

    /// tab
    let tabMenu = $('.mainCon3 .mainCon3Tab ul li'),
        tabCon = $('.mainCon3 .mainCon3List');

    tabMenu.click(function(e){
        e.preventDefault();
        let attrTabCon = $(this).children('a').attr('href');
        
        tabCon.hide();
        $(attrTabCon).show();

        $(this).children('a').addClass('on');
        $(this).sblings('li').children('a').removeClass('on');
    });
    //검색영역
    let btnSch = $('#header .right .btn-sch'),
        schArea = $('#header .sch-area'),
        btnClose = schArea.find('.btn-close');

    btnSch.click(function(){
        schArea.stop().toggle(400);
    });

    btnClose.click(function(){
        schArea.stop().slideUp(400);
    });
    //swiper메인비주얼
    var swiper = new Swiper(".mainSlide", {
        loop : 'true',
        clickable : 'true',

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
          },
      });

    //swiper 슬라이드 퍼레이드
    var swiper = new Swiper(".paradeSlide", {

        slidesPerView : 'auto',
        spaceBetween : 30,
        centeredSlides : true,
        loop : true,

        scrollbar: {
          el: ".swiper-scrollbar",
          hide: true,
          dragSize : 46,
        },
      });

});