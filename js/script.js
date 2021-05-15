$(function(){
$('#hamburger').click(function() {
    $(this).toggleClass('active');
  });

$('#hamburger').click(function() {
  $('#hamburger_menu').toggleClass('is-active');
});

$('.menu_item').on('click', function(){
  $('#hamburger').removeClass('active');
  $('#hamburger_menu').removeClass('is-active');
});


  var appear = false;
  var pagetop = $('#page_top');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      if (appear == false) {
        appear = true;
        pagetop.stop().animate({
          'bottom': '50px'
        }, 300);
      }
    } else {
      if (appear) {
        appear = false;
        pagetop.stop().animate({
          'bottom': '-50px'
        }, 300);
      }
    }
  });
  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500);
    return false;
  });

});
