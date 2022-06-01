$(function(){

  $(document).ready(function() {
    $('a[href="#"]').click(function(ignore) {
       ignore.preventDefault();
    });
  });

  window.onload = function() {
    setTimeout (function () {
    scrollTo(0,0);
    }, 100);
  }

  var $win = $(window),
      $count = $('.counter');

  var win_w = $win.width();

  // swiper
  
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 25,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      1350: {
        slidesPerView: 2,
        spaceBetween: 25,
        slidesPerGroup: 2
      }
    }
  });

  var swiper = new Swiper('#visual .swiper', {
    autoplay: {
      delay: 5000,
    },
    effect: 'fade',
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '#visual .swiper-button-next',
      prevEl: '#visual .swiper-button-prev',
    },
  });

  var swiper = new Swiper("#review .swiper", {
    effect: 'fade',
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiper = new Swiper("#popular .swiper", {
    slidesPerView: 1,
    spaceBetween: 25,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      490: {
        slidesPerView: 2,
        spaceBetween: 25,
        slidesPerGroup: 2,
      },

      640: {
        slidesPerView: 3,
        spaceBetween: 25,
        slidesPerGroup: 3,
      },

      980: {
        slidesPerView: 4,
        spaceBetween: 25,
        slidesPerGroup: 4
      }
    }
  });

  var swiper = new Swiper("#partners .swiper", {
    slidesPerView: 1,
    spaceBetween: 25,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      490: {
        slidesPerView: 2,
        spaceBetween: 25,
        slidesPerGroup: 2,
      },

      640: {
        slidesPerView: 3,
        spaceBetween: 25,
        slidesPerGroup: 3,
      },

      980: {
        slidesPerView: 4,
        spaceBetween: 25,
        slidesPerGroup: 4
      }
    }
  });

  $win.on('resize', function(){
    win_w = $(this).width();
    if(win_w>1180){
      $('.sub_wrap').removeAttr('style');
    }
  });

 // go to top btn

  $win.scroll(function(){
    if ($(this).scrollTop() > 350){
      $('.btn_gotop').fadeIn(); 
      $('#header .search').removeClass('active')
    } else{
      $('.btn_gotop').fadeOut();
    }
  });

  $('.btn_gotop').click(function(){
    $('html, body').animate({scrollTop:0},400);
    return false;
  });

  // cart count

  $(document).ready(function() {
    $('.arrow.down').click(function () {
      var $input = $(this).parent().find('input');
      var count = parseInt($input.val()) - 1;
      count = count < 1 ? 1 : count;
      $input.val(count);
      $input.change();
      return false;
    });

    $('.arrow.up').click(function () {
      var $input = $(this).parent().find('input');
      $input.val(parseInt($input.val()) + 1);
      $input.change();
      return false;
    });
  });

  // search

  $('#header .search .search_btn').on('click', function(e){
    e.preventDefault();
    var is_search = $(this).parent('.search').hasClass('active');
    if(is_search){
      $('#header .search').removeClass('active');
      $('#search').val('');
    } else {
      $('#header .search').addClass('active')
    }
  });

  // label

  $('#search').focus(function(e){
    $('#header .search label').addClass('focus');
  });
  $('#search').blur(function(e){
    if($(this).val() == ''){
      $('#header .search label').removeClass('focus');
    }
  });

  // mail

  $('#mail').focus(function(e){
    $('#footer .mail_wrap label').addClass('focus');
  });
  $('#mail').blur(function(e){
    if($(this).val() == ''){
      $('#footer .mail_wrap label').removeClass('focus');
    }
  });

  // more

  $('.more a').on('click', function(){
    $('.more').addClass('on');
    $('.exit').addClass('active');
  });
  $('.exit').on('click', function(){
    $('.more').removeClass('on');
    $('.exit').removeClass('active');
  });

  $('#header .more').ready(function(){
    var is_more = $(this).hasClass('on');
    if(is_more){
      $('html, body').addClass('hidden'); 
      $('section').on('scroll touchmove mousewheel', function(e) {
        e.preventDefault();
      });
    }else{
      $('html, body').removeClass('hidden');
      $('section').off('scroll touchmove mousewheel');
    }
  });

  // gnb

  $('#gnb>li').on('mouseenter', function(){
    if(win_w>960){
      $(this).addClass('on');
    }else{
      $('#gnb>li>span').off('click');
      $('#gnb>li>span').on('click', function(){
        $('.sub_wrap').stop().slideUp();
        $(this).next('.sub_wrap').stop().slideToggle();
      });
    }
  });

  $('#gnb>li').on('mouseleave', function(){
    if(win_w>960){
      $(this).removeClass('on');
    }
  });

  $('.toggle').on('click', function(){
    $('.gnb_wrap').toggleClass('on');
  });

  $('.etc .cart .btn').on('click', function(e){
    e.preventDefault();
    var is_search = $(this).parent('.cart').hasClass('on');
    if(is_search){
      $('.etc .cart').removeClass('on');
    } else {
      $('.etc .cart').addClass('on')
    }
  });

  // Scroll

  $(function(){
    $(window).scroll(function(){
      var num = $(this).scrollTop();
      if(win_w > 1350 && num > 50){
        $('#header').addClass('scroll')
      }else{
        $('#header').removeClass('scroll');
      }
    });
  });
  
  // counter

  $(function(){
    var scrollTop = $win.scrollTop(),
        fin = calcWhenDivInWindow(),
        off = 20;

    $(window).scroll(function(){
        scrollTop = $(this).scrollTop();
        if (scrollTop > fin && scrollTop < fin + off){
          counter();
        }
    });

    function counter(){
      $count.each(function() {
        var $this = $(this);
        $({Counter: 0}).animate({Counter: $this.attr('data-stop')},{
          duration: 1500,
          easing: 'swing',
          step: function(now){
            $this.text(Math.ceil(now));
          }
        });  
      });
    }
    function calcWhenDivInWindow(){
      var offsetTop = $count.offset().top,
          outerHeight = $count.outerHeight(),
          winHeight = $win.height();
      return offsetTop + outerHeight - winHeight;
    }
  });

  // scroll

  $(document).ready(function($){
    var delayPosition = 150,
        winHeight = $win.height(); 
    $win.on('resize', function(){
      insertTargetPosition();
    });
    $win.on('scroll', function(){
      var position = $win.scrollTop() + winHeight - delayPosition;
      $('.moving_scroll').each(function() {
        if(!$(this).hasClass('on') && $(this).data('offsetTop') < position) {
          $(this).addClass('on');
        }
      });
    });

    function insertTargetPosition(){
      $('.moving_scroll').each(function(){
        $(this).data('offsetTop', ($(this).offset().top));
      });
    }
    (function init(){insertTargetPosition();})();
  });
});