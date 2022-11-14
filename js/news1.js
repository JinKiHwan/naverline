$(document).ready(function () {/* 문서시작 */

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


  $('.depth2').hide();
  $('.gnb>li').hover(function () {
    $(this).find('.depth2').stop().slideToggle();
  });


  //news_box
  $('.menu_02').hide();
  $('.menu_show').click(function () {
    $(this).siblings('.menu_02').fadeIn();
    $(this).hide();
  });

  $('.menu_close').click(function () {
    $(this).parent('.menu_02').fadeOut();
    $(this).parent().siblings('.menu_show').fadeIn();
  });


  //archive 

  $('.archive_category>button').click(function(){
    $(this).addClass('on');
    $(this).siblings('button').removeClass('on');
  });


  $('.archive_category .all').click(function(){
    $(this).parent().siblings('.grid').find('.happy').fadeIn(500);
    $(this).parent().siblings('.grid').find('.line').fadeIn(500);
    $(this).parent().siblings('.grid').find('.media').fadeIn(500);
    $(this).parent().siblings('.paging').css({"display":"block"});
  });


  $('.archive_category .mediabtn').click(function(){
    $(this).parent().siblings('.grid').find('.happy').fadeOut(500);
    $(this).parent().siblings('.grid').find('.line').fadeOut(500);
    $(this).parent().siblings('.grid').find('.media').fadeIn(500);
    $(this).parent().siblings('.paging').css({"display":"none"});
  });

  $('.archive_category .happybtn').click(function(){
    $(this).parent().siblings('.grid').find('.happy').fadeIn(500);
    $(this).parent().siblings('.grid').find('.line').fadeOut(500);
    $(this).parent().siblings('.grid').find('.media').fadeOut(500);
    $(this).parent().siblings('.paging').css({"display":"none"});
  });

  $('.archive_category .linebtn').click(function(){
    $(this).parent().siblings('.grid').find('.happy').fadeOut(500);
    $(this).parent().siblings('.grid').find('.line').fadeIn(500);
    $(this).parent().siblings('.grid').find('.media').fadeOut(500);
    $(this).parent().siblings('.paging').css({"display":"none"});
  });



});/* 문서종료 */