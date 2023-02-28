 $(function() {
     $(window).on('scroll', function() {
         if ($(window).scrollTop() > 10) {
             $('.navbar').addClass('active');
         } else {
             $('.navbar').removeClass('active');
         }
     });
 });
 $(window).scroll(function() {
     $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
 });