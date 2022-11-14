$(document).ready(function () {/* 문서시작 */
  
    AOS.init();



  $('.ham').click(function () {
    $('.mgnb').animate({ "left": "50%" })
    $('body').css({ 'overflow': 'hidden' });
  });

  $('.mgnb_close').click(function () {
    $('.mgnb').animate({ "left": "100%" })
    $('body').css({ 'overflow': 'auto' });
  });

  $(".mdepth2").hide();
  $(".mgnb > li").click(function () {
    $(this).children(".mdepth2").slideDown();
    $(this).siblings().children(".mdepth2").slideUp();
  });

  //헤더
  $(".gnb").mouseenter(function () {
    $("#header").addClass('bg');
    $("#header .gnb li>a").css({ "color": "#ddd" });
  })
  $(".gnb").mouseleave(function () {
    $("#header").removeClass('bg');
    $("#header .gnb li>a").css({ "color": "#fff" });
  });

  $(".gnb li a").mouseenter(function () {
    $(this).css({ "color": "#fff" });
  });

  $(".gnb li a").mouseleave(function () {
    $(this).css({ "color": "#ddd" });
  });


  $('.depth2').hide();
  $('.gnb>li').hover(function () {
    $(this).find('.depth2').stop().slideToggle();
  });



  //special  
  const special_list = new Swiper('.special_list', {
    autoplay: {
      delay: 3000,  // 슬라이드가 머무르는 시간, 5000=5초
      disableOnInteraction: false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
    },

    loop: true,  // 슬라이드 반복 여부
    speed: 1000,  // 슬라이드 동작 속도

    navigation: {
      nextEl: '.swiper-button-next',  // 다음 버튼
      prevEl: '.swiper-button-prev',  // 이전 버튼
    },
  });

  //테크
  const tech_swiper_top = new Swiper('.tech_swiper_top', {
    autoplay: {
      delay: 0,  // 슬라이드가 머무르는 시간, 5000=5초
      disableOnInteraction: false,
      reverseDirection: 'true'  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    slidesPerView: '6',  // 한 슬라이드에 보여줄 갯수
    spaceBetween: 30,  // 슬라이드 사이 여백
    loop: 'true',
    speed: 5000,

    // 옵션
  });

  const tech_swiper_bottom = new Swiper('.tech_swiper_bottom', {
    autoplay: {
      delay: 0,  // 슬라이드가 머무르는 시간, 5000=5초
      disableOnInteraction: false,
      // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    slidesPerView: '6',  // 한 슬라이드에 보여줄 갯수
    spaceBetween: 30,  // 슬라이드 사이 여백
    loop: 'true',
    speed: 5000,

    // 옵션
  });

  const mspecial_list = new Swiper('.mspecial_list', {
    // 옵션
    autoplay: {
      delay: 3000,  // 슬라이드가 머무르는 시간, 5000=5초
      disableOnInteraction: false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    speed: 1000,
    loop: true,
    slidesPerView: '2',
    spaceBetween: 10,  // 슬라이드 사이 여백
    centeredSlides: true,  // 첫번째 슬라이드 가운데 배치

  });


});/* 문서종료 */