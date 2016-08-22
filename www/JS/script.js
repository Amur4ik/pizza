$(window).scroll(function(e){
  parallax();
});
function parallax(){
  var scrolled = $(window).scrollTop();
  $('.bg_3').css('top',-(scrolled*0.1)+'px');
  $('.abg_2').css('top',-(scrolled*0.3)+'px');
}
