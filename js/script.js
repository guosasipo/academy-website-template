$(function () {
  $("a").click(function () {
      var url = $(this).attr("href");
      $("body div").animate({
          "opacity": "0",
      },500, function () {
          document.location.href = url;
      });
      
      return false;
  });
});
$(document).ready(function(){
    $(".dropdown").hover(function(){
        var dropdownMenu = $(this).children(".dropdown-menu");
        if(dropdownMenu.is(":visible")){
            dropdownMenu.parent().toggleClass("open");
        }
    });
});
particlesJS.load('particles-js', 'plugins/particles/particles.json', function() {
    console.log('Welcome to SUMMIT E-Sports academy');
    });
    var html_body = $('html, body');
    $('.page-scroll').on('click', function () { //use page-scroll class in any HTML tag for scrolling
      if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          html_body.animate({
            scrollTop: target.offset().top - 50
          }, 1500, 'easeInOutExpo');
          return false;
        }
      }
    });